import { TwitterApi } from 'twitter-api-v2';

const client = new TwitterApi('TON_TOKEN_TWITTER'); // Mets ici ton Bearer Token

export default async function fetchTwitterPosts() {
  // Mets ici l'ID du compte Twitter (pas le @username)
  const timeline = await client.v2.userTimeline('ID_COMPTE', {
    max_results: 5,
    expansions: ['attachments.media_keys'],
    'media.fields': ['url', 'preview_image_url'],
    'tweet.fields': ['created_at', 'text'],
  });

  // Récupère les médias associés
  const mediaMap = {};
  if (timeline.includes && timeline.includes.media) {
    for (const media of timeline.includes.media) {
      mediaMap[media.media_key] = media;
    }
  }

  return timeline.data.map(tweet => ({
    id: tweet.id,
    platform: 'twitter',
    date: tweet.created_at,
    image: tweet.attachments && tweet.attachments.media_keys
      ? mediaMap[tweet.attachments.media_keys[0]]?.url || mediaMap[tweet.attachments.media_keys[0]]?.preview_image_url
      : null,
    caption: tweet.text,
    url: `https://twitter.com/thenevernamed/status/${tweet.id}`,
  }));
}