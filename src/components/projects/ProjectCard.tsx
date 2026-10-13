import { Link } from 'react-router-dom'
import { Badge } from '../ui/Badge'
import type { Project } from '../../types/content'

interface ProjectCardProps {
  project: Project
  pathwayName: string
}

export const ProjectCard = ({ project, pathwayName }: ProjectCardProps) => (
  <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-indigo-500/40 hover:bg-slate-900">
    <div className="mb-3 flex flex-wrap items-center gap-2">
      <Badge tone="accent">{project.difficulty}</Badge>
      <Badge>{pathwayName}</Badge>
    </div>
    <h3 className="text-lg font-semibold text-slate-100">{project.name}</h3>
    <p className="mt-2 text-sm text-slate-300">{project.shortDescription}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {project.technologies.slice(0, 4).map((technology) => (
        <Badge key={technology}>{technology}</Badge>
      ))}
    </div>
    <Link
      to={`/projects/${project.id}`}
      className="mt-4 inline-flex text-sm font-medium text-indigo-300 hover:text-indigo-200 focus-visible:outline-none"
    >
      View full brief →
    </Link>
  </article>
)
