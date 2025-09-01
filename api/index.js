import express from 'express';
import fetchInstagramPosts from './fetchInstagramPosts.js';

const app = express();

app.get('/api/social-feed', async (req, res) => {
  const instagram = await fetchInstagramPosts();
  const all = [...instagram].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
  res.json(all);
});

app.listen(3001, () => console.log('API running on http://localhost:3001'));
