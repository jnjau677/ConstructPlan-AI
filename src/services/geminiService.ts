export async function askAiArchitect(prompt: string, context?: string) {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, context }),
  });
  if (!response.ok) throw new Error('API Error');
  const data = await response.json();
  return data.text;
}
