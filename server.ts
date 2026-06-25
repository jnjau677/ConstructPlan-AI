import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

const systemInstruction = `You are "ArcSystem PRO", a professional Architect and AI Consultant.
Format responses professionally with architectural terminology. Use Markdown. Focus on technical precision and creative flexibility.`;

app.post('/api/chat', async (req, res) => {
  const { prompt, context } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Internal server error' });

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: context ? `${context}\n\nUser Question: ${prompt}` : prompt }] }],
        systemInstruction: { parts: [{ text: systemInstruction }] },
        generationConfig: { temperature: 0.7 }
      }),
    });

    if (!response.ok) {
      console.error('Gemini API Error:', await response.json());
      return res.status(response.status).json({ error: 'Failed to communicate with AI service' });
    }

    const data = await response.json();
    res.json({ text: data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.' });
  } catch (error) {
    console.error('Proxy Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => console.log(`Proxy listening at http://localhost:${port}`));
