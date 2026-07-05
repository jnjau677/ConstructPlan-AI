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
      throw new Error('Failed to fetch from AI proxy');
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("AI Service Error:", error);
    throw error;
  }
}
