import { NavLink, Link } from 'react-router-dom';
import useDarkMode from './useDarkMode';
import { Rocket, SunMedium, MoonStar } from 'lucide-react';

const linkBase =
  'text-sm px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-slate-800';

export default function Navbar() {
  const [dark, setDark] = useDarkMode();

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-brand-500 to-cyan-400 flex items-center justify-center shadow-soft">
            <Rocket className="h-4 w-4 text-black dark:text-slate-950" />
          </div>
          <div>
            <div className="font-semibold text-sm text-black dark:text-white">
              Indie Hackers
            </div>
            <div className="text-[11px] text-gray-600 dark:text-slate-400">
              Build nhỏ • Kiếm tiền thật
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-1">
          <NavLink to="/blog" className={linkBase}>
            Blog
          </NavLink>
          <NavLink to="/videos" className={linkBase}>
            Videos
          </NavLink>
          {/* <NavLink to="/vn30-bot" className={linkBase}>
            VN30 Bot
          </NavLink>
          <NavLink to="/projects" className={linkBase}>
            Projects
          </NavLink> */}
          <NavLink to="/about" className={linkBase}>
            About
          </NavLink>

          <button
            onClick={() => setDark(!dark)}
            className="ml-2 h-8 w-8 rounded-full border border-gray-300 dark:border-slate-700 flex items-center justify-center text-xs"
          >
            {dark ? (
              <SunMedium className="h-4 w-4" />
            ) : (
              <MoonStar className="h-4 w-4" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
