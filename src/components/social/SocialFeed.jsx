import { useEffect, useState } from 'react';
import { InstagramIcon, TwitterIcon, YoutubeIcon } from '../icons/SocialIcons';

const platformIcons = {
  instagram: <InstagramIcon />,
  twitter: <TwitterIcon />,
  youtube: <YoutubeIcon />,
  // tiktok: <TiktokIcon />, etc.
};

function SocialFeed({ apiUrl = '/api/social-feed', limit = 6, platforms }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        // Si platforms est défini, filtre les réseaux
        const filtered = platforms ? data.filter(p => platforms.includes(p.platform)) : data;
        setPosts(filtered.slice(0, limit));
      });
  }, [apiUrl, limit, platforms]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {posts.map(post => (
        <a
          key={post.id}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-left flex flex-col shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300"
        >
          <div className="flex justify-between items-center mb-2 sm:mb-3">
            <span className="text-xs text-white/60">{new Date(post.date).toLocaleDateString()}</span>
            <span className="text-lg sm:text-xl text-white/80">{platformIcons[post.platform]}</span>
          </div>
          <img
            src={post.image}
            alt={post.caption}
            className="rounded-lg w-full h-36 sm:h-48 object-cover mb-3 sm:mb-4"
          />
          <p className="text-white/90 flex-grow text-sm sm:text-base">{post.caption}</p>
        </a>
      ))}
    </div>
  );
}

export default SocialFeed;