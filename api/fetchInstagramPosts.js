import fetch from 'node-fetch';

// Remplace ces valeurs par les tiens
const ACCESS_TOKEN = 'TON_TOKEN_INSTAGRAM';
const USER_ID = 'TON_USER_ID_INSTAGRAM';

export default async function fetchInstagramPosts() {
  // Récupère les derniers médias du compte
  const url = `https://graph.instagram.com/${USER_ID}/media?fields=id,caption,media_url,permalink,timestamp,media_type,thumbnail_url&access_token=${ACCESS_TOKEN}&limit=6`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data.data) return [];

  return data.data
    .filter(post => post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' || post.media_type === 'VIDEO')
    .map(post => ({
      id: post.id,
      platform: 'instagram',
      date: post.timestamp,
      image: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
      caption: post.caption || '',
      url: post.permalink,
    }));
}