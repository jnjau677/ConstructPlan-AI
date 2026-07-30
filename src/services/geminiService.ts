import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

// Safe wrapper to check process on browser environments to avoid ReferenceErrors
let clientApiKey: string | undefined;
try {
  clientApiKey = (process as any)?.env?.GEMINI_API_KEY;
} catch (e) {
  // process is not defined in browser environment, which is expected
}

export function getGeminiAI(): GoogleGenAI {
  if (clientApiKey) {
    if (!aiInstance) {
      aiInstance = new GoogleGenAI({ apiKey: clientApiKey });
    }
    return aiInstance;
  }
  throw new Error("getGeminiAI is deprecated. Gemini API logic has been moved to the secure server side.");
}

export async function askAiArchitect(prompt: string, context?: string): Promise<string> {
  // Service level enforcement of 4000-character limit
  if (prompt.length > 4000) {
    throw new Error("Input exceeds the maximum allowed length of 4000 characters.");
  }

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, context }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.text || '';
  } catch (error) {
    // Sanitize error logging to prevent leaking stack traces or internal config
    console.error("Gemini API Client Error: Request failed securely");
    throw new Error("Apologies, I encountered a technical latency in the BIM cluster. Please re-initialize.");
  }
}
