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
      throw new Error(errorData.error || 'Failed to fetch from AI proxy');
    }

    const data = await response.json();
    return data.text;
  } catch (error: any) {
    console.error("AI Assistant Error:", error.message);
    throw error;
  }
}
