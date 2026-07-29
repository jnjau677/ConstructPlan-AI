import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

export function getGeminiAI() {
  if (!aiInstance) {
    let apiKey: string | undefined = undefined;
    try {
      apiKey = process.env.GEMINI_API_KEY;
    } catch (e) {
      // safe fallback if process is not defined in browser
    }
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined in environment variables.");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

export async function askAiArchitect(prompt: string, context?: string) {
  if (prompt.length > 4000) {
    throw new Error("Prompt exceeds the maximum character limit of 4000.");
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
    // Sanitize error logging to prevent API key leakage
    let apiKey: string | undefined = undefined;
    try {
      apiKey = process.env.GEMINI_API_KEY;
    } catch (e) {
      // safe fallback if process is not defined in browser
    }
    let errorMessage = error instanceof Error ? error.stack || error.message : String(error);
    if (apiKey) {
      // Escape special regex characters in apiKey just in case
      const escapedKey = apiKey.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(escapedKey, 'g');
      errorMessage = errorMessage.replace(regex, '[REDACTED_API_KEY]');
    }
    console.error("Gemini API Error:", errorMessage);
    throw new Error("An error occurred during AI processing. Stack traces and sensitive credentials have been securely redacted.");
  }
}
