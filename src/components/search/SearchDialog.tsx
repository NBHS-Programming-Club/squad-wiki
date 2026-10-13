import { Search, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchItems, scoreSearchItem } from '../../lib/content'
import type { SearchItem } from '../../types/content'

interface SearchDialogProps {
  open: boolean
  onClose: () => void
}

const groups: SearchItem['type'][] = ['Page', 'Pathway', 'Project', 'Guide', 'Handbook', 'Template']

const highlightText = (text: string, query: string) => {
  if (!query) return text
  const lower = text.toLowerCase()
  const idx = lower.indexOf(query.toLowerCase())
  if (idx === -1) return text
  const before = text.slice(0, idx)
  const match = text.slice(idx, idx + query.length)
  const after = text.slice(idx + query.length)
  return (
    <>
      {before}
      <mark className="rounded bg-indigo-500/30 px-0.5 text-indigo-100">{match}</mark>
      {after}
    </>
  )
}

export const SearchDialog = ({ open, onClose }: SearchDialogProps) => {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const navigate = useNavigate()

  const results = useMemo(() => {
    if (!query.trim()) return searchItems.slice(0, 12)
    return searchItems
      .map((item) => ({ item, score: scoreSearchItem(item, query) }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
      .slice(0, 24)
      .map((entry) => entry.item)
  }, [query])

  useEffect(() => {
    if (!open) {
      setQuery('')
      setSelectedIndex(0)
    }
  }, [open])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setSelectedIndex((current) => (results.length ? (current + 1) % results.length : 0))
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault()
        setSelectedIndex((current) => (results.length ? (current - 1 + results.length) % results.length : 0))
      }

      if (event.key === 'Enter' && results[selectedIndex]) {
        event.preventDefault()
        navigate(results[selectedIndex].path)
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [navigate, onClose, open, results, selectedIndex])

  if (!open) return null

  const grouped = groups
    .map((type) => ({ type, entries: results.filter((result) => result.type === type) }))
    .filter((group) => group.entries.length)

  let flatIndex = -1

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/80 px-4 py-16 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Global search">
      <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-slate-800 bg-slate-900/95 shadow-2xl">
        <div className="flex items-center gap-3 border-b border-slate-800 px-4 py-3">
          <Search size={18} className="text-slate-400" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pages, projects, guides, and technologies..."
            className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-slate-700 p-1 text-slate-300 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            aria-label="Close search"
          >
            <X size={16} />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-3">
          {results.length === 0 ? (
            <p className="rounded-lg border border-dashed border-slate-700 px-4 py-6 text-center text-sm text-slate-400">
              No results matched your search. Try a different keyword or technology.
            </p>
          ) : (
            grouped.map((group) => (
              <section key={group.type} className="mb-4">
                <h3 className="mb-2 px-2 text-xs uppercase tracking-[0.2em] text-slate-500">{group.type}</h3>
                <ul className="space-y-1">
                  {group.entries.map((entry) => {
                    flatIndex += 1
                    const active = selectedIndex === flatIndex
                    return (
                      <li key={entry.id}>
                        <button
                          type="button"
                          onMouseEnter={() => setSelectedIndex(flatIndex)}
                          onClick={() => {
                            navigate(entry.path)
                            onClose()
                          }}
                          className={`w-full rounded-md border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 ${
                            active
                              ? 'border-indigo-500/50 bg-indigo-500/15 text-indigo-100'
                              : 'border-transparent bg-slate-900 text-slate-200 hover:border-slate-700 hover:bg-slate-800/80'
                          }`}
                        >
                          <p className="text-sm font-medium">{highlightText(entry.title, query)}</p>
                          <p className="text-xs text-slate-400">{highlightText(entry.description, query)}</p>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </section>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
