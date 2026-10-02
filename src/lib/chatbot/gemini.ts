import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_KNOWLEDGE } from "./knowledge/portfolioData";

export interface ChatMessage {
  role: "user" | "model";
  content: string;
}

const SYSTEM_INSTRUCTION = `
You are Warish's Portfolio AI Assistant, an interactive representation of Mohammad Warish Ansari (Full-Stack & AI Engineer).
Your primary job is to answer visitors' questions about Warish's background, technical skills, work experience, projects, certifications, and job availability.

Instructions & Formatting Guidelines:
1. Always maintain a polite, professional, and enthusiastic tone.
2. Base your answers on the PORTFOLIO KNOWLEDGE BASE provided below.
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
${PORTFOLIO_KNOWLEDGE}
`;

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
    return "I am currently running in **Demo Mode** (No \`GEMINI_API_KEY\` set on Vercel/Server environment).\n\nYou can set \`GEMINI_API_KEY\` in your Vercel Environment Variables to activate live Gemini AI responses!\n\nIn the meantime, feel free to explore Warish's portfolio sections:\n- [Explore Projects](#projects)\n- [View Skills](#skills)\n- [Check Certifications](#certifications)\n- [Contact Warish](mailto:warishansari.official@gmail.com)";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Trim context: keep last 10 messages max to stay within optimal token limits
    const trimmedMessages = messages.slice(-10);

    const contents = trimmedMessages.map((msg) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 900,
      },
    });

    return response.text || "I couldn't generate a response at this time. Please try asking again or reach out to Warish directly at warishansari.official@gmail.com!";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return "An error occurred while connecting to the Gemini AI service. Please check your \`GEMINI_API_KEY\` configuration on Vercel or contact Warish via [Email](mailto:warishansari.official@gmail.com).";
  }
}
