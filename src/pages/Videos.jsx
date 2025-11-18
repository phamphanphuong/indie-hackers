import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';

const videos = [
  { id: 'bQJOkQ2VyLc', title: 'Video 1' },
  { id: 'Ur87_TSyP-A', title: 'Video 2' },
  { id: '-WGqCmeu2E8', title: 'Video 3' },
];

export default function Videos() {
  const [searchTerm, setSearchTerm] = useState('');

  const fuse = useMemo(
    () =>
      new Fuse(videos, {
        keys: ['title'],
        threshold: 0.3,
      }),
    []
  );

  const filteredVideos = useMemo(() => {
    if (!searchTerm) return videos;
    return fuse.search(searchTerm).map((result) => result.item);
  }, [searchTerm, fuse]);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-4">Videos</h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Tìm kiếm video..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-50"
          />
        </div>

        <VideoGrid videos={filteredVideos} />

        {filteredVideos.length === 0 && searchTerm && (
          <p className="text-gray-600 dark:text-slate-400 mt-4">
            Không tìm thấy video nào.
          </p>
        )}
      </div>
    </>
  );
}

function VideoGrid({ videos }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {videos.map((v) => (
        <a
          key={v.id}
          href={'https://youtube.com/watch?v=' + v.id}
          target="_blank"
          rel="noreferrer"
          className="group"
        >
          <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-soft relative">
            <img
              src={'https://img.youtube.com/vi/' + v.id + '/hqdefault.jpg'}
              loading="lazy"
              className="w-full h-40 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/20 dark:bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  className="h-4 w-4 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-900 dark:text-slate-100">
            {v.title}
          </div>
        </a>
      ))}
    </div>
  );
}
