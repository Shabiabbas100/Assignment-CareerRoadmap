import React, { useEffect, useState } from 'react';
import { getTechNews } from '../api';
import { ExternalLink } from 'lucide-react'; // Icon

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getTechNews().then(data => setNews(data));
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">🔥 Latest Tech News</h2>
      <div className="space-y-4">
        {news.map((item) => (
          <div key={item.id} className="flex justify-between items-start hover:bg-gray-50 p-2 rounded transition">
            <div>
              <a href={item.url} target="_blank" rel="noreferrer" className="text-indigo-600 font-medium hover:underline text-lg">
                {item.title}
              </a>
              <p className="text-gray-500 text-sm">
                By {item.by} • Score: {item.score}
              </p>
            </div>
            <ExternalLink size={16} className="text-gray-400 mt-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;