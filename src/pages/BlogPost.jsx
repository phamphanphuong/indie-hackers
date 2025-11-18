import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching', slug);
    setLoading(true);
    setError(null);
    fetch('/blog/' + slug + '.md')
      .then((r) => {
        console.log('Fetch response', r);
        if (!r.ok) throw new Error('Không tìm thấy bài viết');
        return r.text();
      })
      .then((t) => {
        console.log('Fetched content', t);
        setContent(t);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error', err);
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="text-center py-8">Đang tải...</div>;
  if (error)
    return <div className="text-center py-8 text-red-400">{error}</div>;

  return (
    <article className="prose prose-lg max-w-none mt-6 text-black dark:text-white bg-white dark:bg-slate-950 min-h-screen p-6 rounded-lg">
      <ReactMarkdown remarkPlugins={[remarkRehype]} rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
