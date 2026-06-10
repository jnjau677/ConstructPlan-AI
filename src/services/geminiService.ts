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
    // Sanitized logging to prevent leakage of internal details
    console.error("AI Assistant Error:", error.message);
    throw error;
  }
}
