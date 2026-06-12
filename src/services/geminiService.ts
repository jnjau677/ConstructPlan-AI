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
      throw new Error(errorData.error || 'Failed to fetch from proxy');
    }

    const data = await response.json();
    return data.text;
  } catch (error: any) {
    // Secure logging: only log the error message, not the full stack or internal details
    console.error("Gemini API Error:", error.message);
    throw error;
  }
}
