import { Github, Moon, Search, Sun } from 'lucide-react'
import { Breadcrumbs } from './Breadcrumbs'

interface TopNavProps {
  onOpenSearch: () => void
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export const TopNav = ({ onOpenSearch, theme, onToggleTheme }: TopNavProps) => (
  <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/90 px-4 py-3 backdrop-blur md:px-6">
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <Breadcrumbs />
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenSearch}
            className="hidden items-center gap-2 rounded-md border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-300 transition hover:border-slate-500 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 sm:inline-flex"
          >
            <Search size={15} /> Search <kbd className="rounded border border-slate-600 px-1 text-[11px] text-slate-400">Ctrl K</kbd>
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-md border border-slate-700 bg-slate-900/70 p-2 text-slate-300 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="https://github.com/NBHS-Programming-Club/squad-wiki"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-700 bg-slate-900/70 p-2 text-slate-300 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            aria-label="Open GitHub repository"
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={onOpenSearch}
        className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-300 sm:hidden"
      >
        <Search size={15} /> Search wiki content
      </button>
    </div>
  </header>
)
