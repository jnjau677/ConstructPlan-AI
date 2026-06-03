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
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to communicate with AI Architect');
    }

    const data = await response.json();
    return data.text;
  } catch (error: any) {
    // Sanitize error logging to avoid leaking details to the client console
    console.error("AI Assistant Error:", error.message || "Unknown error");
    throw error;
  }
}
