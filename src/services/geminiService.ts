/**
 * Frontend service that calls the internal '/api/chat' endpoint.
 * Secures the GEMINI_API_KEY on the server and avoids client bundle secret leakage.
 */
export async function askAiArchitect(prompt: string, context?: string): Promise<string> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, context }),
    });

    if (!response.ok) {
      // Log generic error message in frontend console for security
      throw new Error(`Failed to call AI Architect API. Server status: ${response.status}`);
    }

    const data = await response.json();
    return data.text || '';
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
