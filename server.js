import express from 'express';
import dotenv from 'dotenv';
import chatHandler from './api/chat.ts';

dotenv.config();
const app = express();
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const response = await chatHandler(new Request('http://localhost/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body)
  }));
  const data = await response.json();
  res.status(response.status).json(data);
});

app.listen(3001, () => console.log('Local proxy running on port 3001'));
