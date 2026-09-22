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

const MAX_PROMPT_LENGTH = 4000;

export async function askAiArchitect(prompt: string, context?: string) {
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

  // Protect against payload size issues and DoS by enforcing character limit
  const sanitizedPrompt = prompt.slice(0, MAX_PROMPT_LENGTH);
  const sanitizedContext = context ? context.slice(0, MAX_PROMPT_LENGTH) : undefined;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: sanitizedContext ? `${sanitizedContext}\n\nUser Question: ${sanitizedPrompt}` : sanitizedPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    // Sanitize error log to avoid leaking sensitive config or stack details in console output
    const safeMsg = error instanceof Error ? error.message : "Gemini API request failed";
    console.error("Gemini API Error:", safeMsg);
    throw error;
  }
}
