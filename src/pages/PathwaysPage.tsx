import { Link } from 'react-router-dom'
import { PageHeader } from '../components/content/PageHeader'
import { pathways } from '../data/pathways'

export const PathwaysPage = () => (
  <div className="space-y-8">
    <PageHeader
      eyebrow="Learning Pathways"
      title="Choose the pathway that matches your project interest"
      description="These pathways are flexible guides. Start with a project you care about, then learn the required technologies as you build."
    />

    <div className="grid gap-4 md:grid-cols-2">
      {pathways.map((pathway) => (
        <Link
          key={pathway.id}
          to={`/pathways/${pathway.id}`}
          className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-indigo-500/40"
        >
          <h2 className="text-xl font-semibold text-slate-100">{pathway.name}</h2>
          <p className="mt-2 text-sm text-slate-300">{pathway.shortDescription}</p>
          <p className="mt-3 text-sm text-slate-400">{pathway.intro}</p>
        </Link>
      ))}
    </div>
  </div>
)
