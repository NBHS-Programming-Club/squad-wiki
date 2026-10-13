import { Link } from 'react-router-dom'
import { PageHeader } from '../components/content/PageHeader'
import { handbookTopics } from '../data/handbook'

export const HandbookPage = () => (
  <div className="space-y-8">
    <PageHeader
      eyebrow="Squad Handbook"
      title="Recommended conventions for project-based collaboration"
      description="These are practical recommendations, not strict policies. Teams can adapt them to project needs while preserving clear communication and quality checks."
    />

    <div className="grid gap-4 md:grid-cols-2">
      {handbookTopics.map((topic) => (
        <Link key={topic.id} to={`/handbook/${topic.id}`} className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 hover:border-indigo-500/40">
          <h2 className="text-lg font-semibold text-slate-100">{topic.title}</h2>
          <p className="mt-2 text-sm text-slate-300">{topic.description}</p>
        </Link>
      ))}
    </div>
  </div>
)
