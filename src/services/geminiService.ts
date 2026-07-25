/**
 * Ask the server-side AI Architect.
 * Calls the secure /api/chat endpoint to prevent exposing GEMINI_API_KEY on the client.
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
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.text || "";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
