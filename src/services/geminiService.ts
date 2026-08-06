import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

export function getGeminiAI() {
  if (!aiInstance) {
    let apiKey: string | undefined;
    try {
      apiKey = process.env.GEMINI_API_KEY;
    } catch (e) {
      // Safe fallback if process is not defined at runtime in browser
    }
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined in environment variables.");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

export async function askAiArchitect(prompt: string, context?: string) {
  // Input validation - enforce a strict 4000-character limit to prevent DoS/payload size issues
  if (prompt.length > 4000) {
    throw new Error("Payload size limit exceeded: Input must not exceed 4000 characters.");
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
    // Sanitize any potential credential leak in console error logging.
    let errorMessage = error instanceof Error ? error.message : String(error);

    let apiKey: string | undefined;
    try {
      apiKey = process.env.GEMINI_API_KEY;
    } catch (e) {}

    if (apiKey && apiKey.length > 0) {
      errorMessage = errorMessage.split(apiKey).join("[REDACTED_API_KEY]");
    }

    console.error("Gemini API Error: [Sanitized]", errorMessage);

    // Fail securely by providing a generic error message, avoiding exposure of stack traces
    throw new Error("Apologies, I encountered a technical latency in the BIM cluster. Please re-initialize.");
  }
}
