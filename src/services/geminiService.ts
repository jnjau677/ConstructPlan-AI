import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

export function getGeminiAI() {
  if (!aiInstance) {
    let apiKey: string | undefined;
    try {
      apiKey = process.env.GEMINI_API_KEY;
    } catch (e) {
      // In browser-based environments, process might not be defined.
    }
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined in environment variables.");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

export async function askAiArchitect(prompt: string, context?: string) {
  // Input Validation: Enforce 4000-character limit to prevent payload issues and DoS
  if (!prompt || prompt.trim().length > 4000) {
    throw new Error("Input validation failed: Prompt must not be empty or exceed 4000 characters.");
  }
  if (context && context.trim().length > 4000) {
    throw new Error("Input validation failed: Context must not exceed 4000 characters.");
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
    // Sanitize console logging to prevent potential secret/token leakage or stack trace exposure
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    console.error("Gemini API Error occurred in request processing:", errorMessage);
    // Fail securely: Throw generic message to client to hide backend/stack details
    throw new Error("An error occurred in the Gemini service. Details have been hidden for security.");
  }
}
