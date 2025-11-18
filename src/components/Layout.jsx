import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-slate-950 dark:text-slate-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-brand-500 text-black px-4 py-2 rounded"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main" className="flex-1 max-w-5xl mx-auto px-4 py-8 relative">
        {children}
      </main>
      <Footer />
    </div>
  );
}
