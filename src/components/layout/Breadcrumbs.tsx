import { ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { guides } from '../../data/guides'
import { handbookTopics } from '../../data/handbook'
import { pathways } from '../../data/pathways'
import { projects } from '../../data/projects'

const labelByPath = new Map<string, string>([
  ['/', 'Home'],
  ['/getting-started', 'Getting Started'],
  ['/pathways', 'Learning Pathways'],
  ['/projects', 'Project Catalogue'],
  ['/guides', 'Technical Guides'],
  ['/handbook', 'Squad Handbook'],
  ['/templates/proposal', 'Proposal Template'],
  ['/templates/documentation', 'Documentation Template'],
])

for (const pathway of pathways) {
  labelByPath.set(`/pathways/${pathway.id}`, pathway.name)
}

for (const project of projects) {
  labelByPath.set(`/projects/${project.id}`, project.name)
}

for (const guide of guides) {
  labelByPath.set(`/guides/${guide.id}`, guide.title)
}

for (const topic of handbookTopics) {
  labelByPath.set(`/handbook/${topic.id}`, topic.title)
}

export const Breadcrumbs = () => {
  const location = useLocation()
  const parts = location.pathname.split('/').filter(Boolean)

  const crumbs = parts.reduce<{ label: string; path: string }[]>((acc, part) => {
    const path = `${acc.at(-1)?.path ?? ''}/${part}` || '/'
    acc.push({ label: labelByPath.get(path) ?? part, path })
    return acc
  }, [])

  const allCrumbs = [{ label: 'Home', path: '/' }, ...crumbs.filter((crumb) => crumb.path !== '/')]

  return (
    <nav aria-label="Breadcrumb" className="overflow-x-auto">
      <ol className="flex items-center gap-1 text-sm text-slate-400">
        {allCrumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center gap-1">
            {index > 0 ? <ChevronRight size={14} className="text-slate-600" /> : null}
            {index === allCrumbs.length - 1 ? (
              <span className="text-slate-200">{crumb.label}</span>
            ) : (
              <Link to={crumb.path} className="hover:text-indigo-300 focus-visible:outline-none focus-visible:text-indigo-200">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
