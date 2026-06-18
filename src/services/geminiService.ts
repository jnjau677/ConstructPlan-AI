/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Interface with the secure backend proxy to prevent API key exposure.
export async function askAiArchitect(prompt: string, context?: string) {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, context }),
    });

    if (!response.ok) throw new Error('AI Assistant currently unavailable');

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("AI Error:", error);
    throw error;
  }
}
