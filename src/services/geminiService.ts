/**
 * Frontend Service for AI communication.
 * To secure the GEMINI_API_KEY and protect AI system instructions/persona,
 * we proxy the requests through our backend serverless function (/api/chat).
 */

export async function askAiArchitect(prompt: string, context?: string): Promise<string> {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt, context }),
    });

    if (!response.ok) {
      // Fail securely: do not propagate stack traces, but provide clean error statuses
      throw new Error(`Server returned status: ${response.status}`);
    }

    const data = await response.json();
    return data.text || "";
  } catch (error) {
    console.error("Gemini Proxy API Error:", error);
    throw error;
  }
}
