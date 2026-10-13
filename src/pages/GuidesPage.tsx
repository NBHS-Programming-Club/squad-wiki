import { Link } from 'react-router-dom'
import { PageHeader } from '../components/content/PageHeader'
import { guides } from '../data/guides'

export const GuidesPage = () => (
  <div className="space-y-8">
    <PageHeader
      eyebrow="Technical Guides"
      title="Practical guidance for building reliable projects"
      description="Reference pages for setup, Git workflows, debugging, software engineering practices, and collaboration."
    />

    <div className="grid gap-4 md:grid-cols-2">
      {guides.map((guide) => (
        <Link key={guide.id} to={`/guides/${guide.id}`} className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 hover:border-indigo-500/40">
          <h2 className="text-lg font-semibold text-slate-100">{guide.title}</h2>
          <p className="mt-2 text-sm text-slate-300">{guide.description}</p>
          <p className="mt-3 text-sm text-slate-400">{guide.summary}</p>
        </Link>
      ))}
    </div>
  </div>
)
