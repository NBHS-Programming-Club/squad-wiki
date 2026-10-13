import { useEffect, useState, type ReactNode } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { SearchDialog } from '../search/SearchDialog'
import { Sidebar } from './Sidebar'
import { TopNav } from './TopNav'

interface AppShellProps {
  children: ReactNode
}

export const AppShell = ({ children }: AppShellProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setSearchOpen(true)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 dark:bg-slate-950 dark:text-slate-100">
      <div className="flex">
        <Sidebar collapsed={collapsed} onToggleCollapsed={() => setCollapsed((state) => !state)} />
        <div className="min-w-0 flex-1">
          <TopNav onOpenSearch={() => setSearchOpen(true)} theme={theme} onToggleTheme={toggleTheme} />
          <main className="mx-auto max-w-7xl px-4 py-8 md:px-8">{children}</main>
        </div>
      </div>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}
