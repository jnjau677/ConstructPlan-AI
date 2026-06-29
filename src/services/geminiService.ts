export async function askAiArchitect(prompt: string, context?: string) {
  try {
    // ✅ GOOD: Call the secure backend proxy instead of exposing API keys on the frontend
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, context }),
    });

    if (!response.ok) {
      // ✅ GOOD: Handle proxy errors without exposing sensitive details
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to communicate with AI Architect');
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("AI Architect Service Error:", error);
    throw error;
  }
}
