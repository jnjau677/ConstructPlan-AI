/**
 * Security Note:
 * This service has been refactored to use a server-side proxy at /api/chat.
 * This prevents exposing the GEMINI_API_KEY in the client-side bundle.
 */

export async function askAiArchitect(prompt: string, context?: string) {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, context }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `API responded with status ${response.status}`);
    }

    const data = await response.json();
    return data.text;
  } catch (error: any) {
    // Sanitize error logging to avoid leaking details to the client console
    console.error("AI Assistant Error:", error.message);
    throw new Error("Unable to reach the AI Assistant. Please try again later.");
  }
}
