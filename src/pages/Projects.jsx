import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'VN30 Bot',
    desc: 'Bot tự động theo dõi chỉ số VN30 với API và alerts.',
    tech: ['Python', 'FastAPI', 'Telegram'],
    github: 'https://github.com/yourusername/vn30-bot',
    demo: 'https://vn30bot-demo.vercel.app',
  },
  {
    title: 'Portfolio Website',
    desc: 'Website portfolio cá nhân với React và Tailwind.',
    tech: ['React', 'Vite', 'Tailwind'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://yourportfolio.vercel.app',
  },
  {
    title: 'Task Manager App',
    desc: 'App quản lý task đơn giản với authentication.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/yourusername/task-manager',
    demo: 'https://taskmanager-demo.herokuapp.com',
  },
];

export default function Projects() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-6">Projects</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-slate-400 mb-4">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-brand-500 hover:underline"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-brand-500 hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
