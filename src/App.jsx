import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Videos = lazy(() => import('./pages/Videos'));
const VN30Bot = lazy(() => import('./pages/VN30Bot'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter
        basename="/indie-hacker-vn"
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Layout>
          <Suspense
            fallback={<div className="text-center py-8">Đang tải...</div>}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/vn30-bot" element={<VN30Bot />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
