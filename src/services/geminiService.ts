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
  } catch (error) {
    // Sanitize error logging to client
    console.error("AI Service Error:", error instanceof Error ? error.message : "Unknown error");
    throw error;
  }
}
