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
      const errorText = await response.text();
      throw new Error(errorText || 'Failed to get response from AI Architect');
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    // Sanitize error logging to avoid leaking internal details
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Gemini API Error:", errorMessage);
    throw new Error("The AI Architect is currently unavailable. Please try again later.");
  }
}
