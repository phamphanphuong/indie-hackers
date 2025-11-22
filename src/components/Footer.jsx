export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-slate-800 mt-10 text-center text-xs text-gray-500 dark:text-slate-500">
      <div className="mb-2 flex justify-center gap-4 text-base">
        <a
          href="https://www.facebook.com/profile.php?id=61583785059045"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-blue-600 transition"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="inline"
          >
            <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.733-.592-1.326-1.325-1.326z" />
          </svg>
          <span>Fanpage</span>
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PLJK9YNrTz_MIa6nuGky5147hI7fwlOBWA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-red-600 transition"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="inline"
          >
            <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.413 3.5 12 3.5 12 3.5s-7.413 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 8.159 0 12 0 12s0 3.841.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.587 20.5 12 20.5 12 20.5s7.413 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.841 24 12 24 12s0-3.841-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          <span>YouTube</span>
        </a>
      </div>
      <div>
        © 2025 Indie Hackers Vietnam <br />• Build small, learn fast, earn
        real.
      </div>
    </footer>
  );
}
