import { GoogleGenAI } from "@google/genai";
import { buildPortfolioKnowledge } from "./knowledge";

export interface ChatMessage {
  role: "user" | "model";
  content: string;
}

export async function generateChatResponse(messages: ChatMessage[]): Promise<string> {
  const apiKey = (
    process.env.GEMINI_API_KEY ||
    process.env.NEXT_PUBLIC_GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    process.env.GEMINI_KEY ||
    process.env.API_KEY ||
    ""
  ).trim();

  if (!apiKey) {
    return "I am currently running in **Demo Mode** (No \`GEMINI_API_KEY\` set in \`.env\` or Vercel environment).\n\nTo enable live Gemini AI responses, add \`GEMINI_API_KEY=your_key\` to your \`.env\` file or Vercel Environment Variables!\n\nIn the meantime, feel free to explore Warish's portfolio sections:\n- [Explore Projects](#projects)\n- [View Tech Stack](#skills)\n- [Check Certifications](#certifications)\n- [Contact Email](mailto:warishansari.official@gmail.com)";
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

    // List of candidate Gemini models in priority order
    const candidateModels = [
      "gemini-3.8-flash",
      "gemini-3.5-flash-lite",
      "gemini-2.5-flash",
      "gemini-1.5-flash",
    ];

    let lastError: any = null;

    for (const model of candidateModels) {
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
      } catch (err: any) {
        console.warn(`Gemini Model ${model} failed, trying fallback...`, err?.message || err);
        lastError = err;
      }
    }

    throw lastError || new Error("No Gemini models returned output.");
  } catch (error: any) {
    console.error("Gemini API Exec Error:", error);
    return `An error occurred while connecting to Google Gemini AI service: ${
      error?.message || "Unknown error"
    }. Please verify your \`GEMINI_API_KEY\` key configuration.`;
  }
}
