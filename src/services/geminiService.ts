import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

export function getGeminiAI() {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined in environment variables.");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

export async function askAiArchitect(prompt: string, context?: string) {
  // SECURITY: Validate input and enforce strict 4000-character limits to prevent payload size issues/DoS.
  if (typeof prompt !== "string" || prompt.length > 4000) {
    throw new Error("Security Violation: Prompt exceeds maximum character limit of 4000.");
  }

  const ai = getGeminiAI();
  const systemInstruction = `You are "ArcSystem PRO", a high-end professional Architect and Construction AI Consultant. 
  Your capabilities include:
  1. Chat-to-Build Engine: Natural language modeling for architectural iteration.
  2. Sketch-to-Scale: Understanding computer vision for CAD vectors.
  3. Smart Engineering: Stair, roof, and foundation logic.
  4. Generative Styling: Scandinavian, Modern, Industrial templates.
  5. One-Click Takeoff: Live BOQ and LEED LCA forecasting.
  6. Immersive Collaboration: AR on-site visualization.
  
  Format your responses professionally with architectural terminology. Use Markdown. Always focus on technical precision paired with creative flexibility.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: context ? `${context}\n\nUser Question: ${prompt}` : prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error: any) {
    // SECURITY: Sanitize the error log to prevent exposing system prompts, sensitive API keys, or full stack traces in the client-side console.
    const rawMessage = error instanceof Error ? error.message : String(error);
    const sanitizedMessage = rawMessage.replace(/AIza[0-9A-Za-z-_]{35}/g, "[REDACTED_API_KEY]");
    console.error("Gemini API Error:", sanitizedMessage);

    // SECURITY: Throw a generic user-safe error message rather than exposing library-specific internal details.
    throw new Error("Apologies, I encountered a technical latency in the BIM cluster. Please re-initialize.");
  }
}
