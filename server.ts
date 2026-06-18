import express from 'express';
import 'dotenv/config';
import handler from './api/chat';

const app = express();
app.use(express.json());

// Local development server to host the Vercel-style API handler.
app.post('/api/chat', async (req, res) => {
  const request = new Request('http://localhost', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body),
  });
  const response = await handler(request);
  res.status(response.status).send(response.headers.get('Content-Type')?.includes('json') ? await response.json() : await response.text());
});

app.listen(3001, () => console.log('Proxy on 3001'));
