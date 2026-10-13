import { ArrowRight, BookMarked, Compass, FolderKanban, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/content/PageHeader'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { pathways } from '../data/pathways'
import { projects } from '../data/projects'

const lifecycleSteps = ['Choose', 'Plan', 'Learn', 'Build', 'Test', 'Present']

export const HomePage = () => {
  const featuredProjects = projects.slice(0, 6)

  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Programming Squad Wiki"
        title="Learn by building real projects"
        description="A modern knowledge platform for squad members to choose meaningful projects, learn just-in-time skills, and present polished technical work."
        actions={
          <>
            <Link to="/projects">
              <Button>
                Explore projects <ArrowRight size={15} className="ml-2" />
              </Button>
            </Link>
            <Link to="/pathways">
              <Button variant="secondary">Browse learning pathways</Button>
            </Link>
          </>
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {pathways.map((pathway) => (
          <Link
            key={pathway.id}
            to={`/pathways/${pathway.id}`}
            className="rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-900/40 p-4 transition hover:border-indigo-500/50 hover:from-slate-900 hover:to-indigo-900/20"
          >
            <h2 className="text-base font-semibold text-slate-100">{pathway.name}</h2>
            <p className="mt-2 text-sm text-slate-300">{pathway.shortDescription}</p>
          </Link>
        ))}
      </section>

      <section className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <h2 className="text-xl font-semibold text-slate-100">Project lifecycle</h2>
        <div className="flex flex-wrap gap-2">
          {lifecycleSteps.map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-md border border-indigo-500/50 bg-indigo-500/15 px-3 py-1 text-sm text-indigo-100">{step}</span>
              {index < lifecycleSteps.length - 1 ? <ArrowRight size={14} className="text-slate-500" /> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-100">Curated project ideas</h2>
          <Link to="/projects" className="text-sm text-indigo-300 hover:text-indigo-200">
            View full catalogue
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="rounded-lg border border-slate-800 bg-slate-900/70 p-4 hover:border-indigo-500/40">
              <div className="mb-2 flex items-center gap-2">
                <Badge tone="accent">{project.difficulty}</Badge>
                <Badge>{project.pathwayId.replace('-', ' ')}</Badge>
              </div>
              <h3 className="text-base font-semibold text-slate-100">{project.name}</h3>
              <p className="mt-1 text-sm text-slate-300">{project.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Link to="/getting-started" className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-indigo-500/40">
          <div className="mb-2 inline-flex rounded-md border border-slate-700 p-2 text-slate-200">
            <Compass size={16} />
          </div>
          <h3 className="text-lg font-semibold text-slate-100">Getting started</h3>
          <p className="mt-2 text-sm text-slate-300">Follow a first-week checklist to get your tools ready and ship your first contribution.</p>
        </Link>
        <Link to="/guides" className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-indigo-500/40">
          <div className="mb-2 inline-flex rounded-md border border-slate-700 p-2 text-slate-200">
            <BookMarked size={16} />
          </div>
          <h3 className="text-lg font-semibold text-slate-100">Technical guides</h3>
          <p className="mt-2 text-sm text-slate-300">Use reusable guidance for setup, debugging, software practices, and collaboration.</p>
        </Link>
        <Link to="/handbook" className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-indigo-500/40">
          <div className="mb-2 inline-flex rounded-md border border-slate-700 p-2 text-slate-200">
            <FolderKanban size={16} />
          </div>
          <h3 className="text-lg font-semibold text-slate-100">Squad handbook</h3>
          <p className="mt-2 text-sm text-slate-300">Recommended conventions for MVP planning, reviews, presentations, and handovers.</p>
        </Link>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
        <h2 className="mb-2 flex items-center gap-2 text-xl font-semibold text-slate-100">
          <GraduationCap size={20} /> Flexible learning pathways
        </h2>
        <p className="text-sm text-slate-300">
          Pathways are optional guides, not mandatory curricula. Members should pick projects they care about and learn required technologies as they build.
        </p>
      </section>
    </div>
  )
}
