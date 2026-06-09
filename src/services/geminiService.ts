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
    // Sanitize error message to prevent leaking details to the client console
    console.error("AI Service Error:", error.message);
    throw new Error('AI processing latency in the BIM cluster. Please re-initialize.');
  }
}
