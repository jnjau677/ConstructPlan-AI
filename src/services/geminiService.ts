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
  if (!prompt || typeof prompt !== 'string') {
    throw new Error("Invalid prompt provided.");
  }

  // Enforce input length limit to prevent payload size issues (DoS)
  const sanitizedPrompt = prompt.slice(0, MAX_PROMPT_LENGTH);
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
    const contents = context
      ? `${context.slice(0, MAX_PROMPT_LENGTH)}\n\nUser Question: ${sanitizedPrompt}`
      : sanitizedPrompt;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    // Sanitize error logging to prevent leaking sensitive API information or stack traces
    const errorMessage = error instanceof Error ? error.message : "Unknown AI service error";
    console.error("Gemini API Error:", errorMessage);
    throw new Error("AI service temporary error. Please try again.");
  }
}
