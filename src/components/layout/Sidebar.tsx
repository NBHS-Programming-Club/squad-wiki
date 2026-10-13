import { ChevronLeft, ChevronRight, ExternalLink, Github, Menu, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../../data/navigation'

interface SidebarProps {
  collapsed: boolean
  onToggleCollapsed: () => void
}

const isPathActive = (currentPath: string, targetPath: string) => currentPath === targetPath || currentPath.startsWith(`${targetPath}/`)

export const Sidebar = ({ collapsed, onToggleCollapsed }: SidebarProps) => {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const sidebarWidth = collapsed ? 'w-[88px]' : 'w-[290px]'

  const navigationContent = useMemo(
    () => (
      <>
        <div className="flex items-center justify-between border-b border-slate-800 px-4 py-4">
          <Link to="/" className="flex items-center gap-3 focus-visible:outline-none">
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-indigo-500/60 bg-indigo-500/20 text-sm font-semibold text-indigo-100">
              PS
            </span>
            {!collapsed ? (
              <div>
                <p className="text-sm font-semibold text-slate-100">Programming Squad</p>
                <p className="text-xs text-slate-400">Knowledge Platform</p>
              </div>
            ) : null}
          </Link>
          {!collapsed ? (
            <button
              type="button"
              onClick={onToggleCollapsed}
              className="hidden rounded-md border border-slate-700 p-1 text-slate-400 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 lg:block"
              aria-label="Collapse sidebar"
            >
              <ChevronLeft size={16} />
            </button>
          ) : null}
        </div>

        <nav className="flex-1 overflow-y-auto p-3" aria-label="Sidebar">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const active = isPathActive(location.pathname, item.path)
              const Icon = item.icon
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 rounded-md border px-3 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 ${
                      active
                        ? 'border-indigo-500/50 bg-indigo-500/15 text-indigo-100'
                        : 'border-transparent text-slate-300 hover:border-slate-700 hover:bg-slate-800/80'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {Icon ? <Icon size={16} /> : null}
                    {!collapsed ? <span>{item.label}</span> : null}
                  </Link>
                  {!collapsed && item.children ? (
                    <ul className="mt-1 space-y-1 pl-7">
                      {item.children.map((child) => {
                        const childActive = isPathActive(location.pathname, child.path)
                        return (
                          <li key={child.path}>
                            <Link
                              to={child.path}
                              onClick={() => setMobileOpen(false)}
                              className={`block rounded-md px-2 py-1.5 text-xs transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 ${
                                childActive ? 'bg-indigo-500/10 text-indigo-200' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  ) : null}
                </li>
              )
            })}
          </ul>
        </nav>

        <footer className="border-t border-slate-800 px-4 py-3 text-xs text-slate-400">
          {!collapsed ? (
            <div className="space-y-2">
              <p>v1.0.0</p>
              <a
                href="https://github.com/NBHS-Programming-Club/squad-wiki"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-slate-300 hover:text-indigo-300"
              >
                <Github size={14} /> Repository <ExternalLink size={12} />
              </a>
            </div>
          ) : (
            <a
              href="https://github.com/NBHS-Programming-Club/squad-wiki"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center text-slate-300 hover:text-indigo-300"
            >
              <Github size={16} />
            </a>
          )}
        </footer>
      </>
    ),
    [collapsed, location.pathname, onToggleCollapsed],
  )

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-30 rounded-md border border-slate-700 bg-slate-900/90 p-2 text-slate-100 lg:hidden"
        aria-label="Open navigation"
      >
        <Menu size={18} />
      </button>

      <aside className={`hidden h-screen shrink-0 border-r border-slate-800 bg-slate-950/95 lg:flex lg:flex-col ${sidebarWidth}`}>
        {collapsed ? (
          <button
            type="button"
            onClick={onToggleCollapsed}
            className="mx-auto mt-3 rounded-md border border-slate-700 p-1 text-slate-400 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            aria-label="Expand sidebar"
          >
            <ChevronRight size={16} />
          </button>
        ) : null}
        {navigationContent}
      </aside>

      {mobileOpen ? (
        <div className="fixed inset-0 z-40 flex lg:hidden" role="dialog" aria-modal="true">
          <div className="w-[290px] border-r border-slate-800 bg-slate-950">{navigationContent}</div>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="flex-1 bg-slate-950/70"
            aria-label="Close navigation"
          >
            <span className="sr-only">Close</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="absolute right-4 top-4 rounded-md border border-slate-700 bg-slate-900 p-2 text-slate-100"
            aria-label="Close navigation drawer"
          >
            <X size={16} />
          </button>
        </div>
      ) : null}
    </>
  )
}
