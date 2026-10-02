import { GoogleGenAI } from "@google/genai";
import { buildPortfolioKnowledge } from "./knowledge";

export interface ChatMessage {
  role: "user" | "model";
  content: string;
}

/** Strip surrounding quotes that .env editors sometimes add */
function stripQuotes(value: string): string {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

/**
 * Resolve the Gemini API key from environment variables.
 * Checks multiple common env-var names for flexibility.
 */
function resolveApiKey(): string {
  const raw =
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    process.env.GEMINI_KEY ||
    process.env.API_KEY ||
    "";
  return stripQuotes(raw);
}

/**
 * Resolve the Gemini model identifier.
 * Reads GEMINI_MODEL env var; falls back to "gemini-2.5-flash" (stable, GA).
 */
function resolveModel(): string {
  const raw = process.env.GEMINI_MODEL || "";
  const model = stripQuotes(raw);
  return model || "gemini-2.5-flash";
}

export async function generateChatResponse(
  messages: ChatMessage[]
): Promise<string> {
  const apiKey = resolveApiKey();

  if (!apiKey) {
    return (
      "I am currently running in **Demo Mode** (No `GEMINI_API_KEY` configured).\n\n" +
      "To enable live AI responses, add `GEMINI_API_KEY=your_key` to your `.env` file or Vercel Environment Variables.\n\n" +
      "In the meantime, explore the portfolio:\n" +
      "- [Explore Projects](#projects)\n" +
      "- [View Tech Stack](#skills)\n" +
      "- [Check Certifications](#certifications)\n" +
      "- [Contact Email](mailto:warishansari.official@gmail.com)"
    );
  }

  const portfolioKnowledge = buildPortfolioKnowledge();

  const systemInstruction = `
You are Warish's Portfolio AI Assistant, an interactive representation of Mohammad Warish Ansari (Full-Stack & Applied AI Engineer).
Your primary job is to answer visitors' questions about Warish's background, technical skills, work experience, projects, certifications, and availability.

Instructions & Formatting Guidelines:
1. Always maintain a polite, professional, and enthusiastic tone.
2. Base your answers strictly on the PORTFOLIO KNOWLEDGE BASE provided below.
3. Make extensive use of rich markdown formatting:
   - Use **bold** text to highlight key technical terms, project titles, and metrics.
   - Use *italics* for subtle emphasis.
   - Use bullet lists for lists of skills, features, or experience points.
   - When suggesting next steps or sections, include interactive link buttons using markdown links:
     - To guide visitors to sections: [View Projects](#projects), [Check Skills](#skills), [Experience](#experience), [Certifications](#certifications), [Contact Info](#contact).
     - For email & socials: [Email Warish](mailto:warishansari.official@gmail.com), [LinkedIn](https://linkedin.com/in/mdwarishansari), [GitHub](https://github.com/mdwarishansari).
4. Keep answers clear, structured, and visually appealing. Avoid huge walls of plain text.
5. If a question is completely unrelated to Warish or software development, politely bring the focus back to Warish's portfolio.

PORTFOLIO KNOWLEDGE BASE:
${portfolioKnowledge}
`;

  try {
    const ai = new GoogleGenAI({ apiKey });

    // Trim context: keep last 10 messages max to stay within optimal token limits
    const trimmedMessages = messages.slice(-10);

    const contents = trimmedMessages.map((msg) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    // Primary model from env var, with stable fallbacks (verified available)
    const primaryModel = resolveModel();
    const fallbackModels = [
      "gemini-2.5-flash",
      "gemini-3.5-flash-lite",
      "gemini-3.5-flash",
    ];

    // Build unique ordered list: primary first, then fallbacks (skip duplicates)
    const modelChain = [primaryModel];
    for (const fb of fallbackModels) {
      if (!modelChain.includes(fb)) modelChain.push(fb);
    }

    let lastError: unknown = null;

    for (const model of modelChain) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents,
          config: {
            systemInstruction,
            temperature: 0.7,
            maxOutputTokens: 900,
          },
        });

        if (response?.text) {
          return response.text;
        }
      } catch (err: unknown) {
        const errMsg =
          err instanceof Error ? err.message : String(err);
        console.warn(
          `[Chatbot] Model "${model}" failed, trying fallback… (${errMsg})`
        );
        lastError = err;
      }
    }

    throw lastError || new Error("No Gemini models returned output.");
  } catch (error: unknown) {
    const errMsg =
      error instanceof Error ? error.message : "Unknown error";
    console.error("[Chatbot] Gemini API Error:", errMsg);
    return (
      `An error occurred while connecting to Google Gemini AI: ${errMsg}.\n\n` +
      "Please verify your `GEMINI_API_KEY` is valid and not expired."
    );
  }
}
