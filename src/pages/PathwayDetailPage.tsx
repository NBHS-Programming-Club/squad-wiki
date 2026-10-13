import { Link, Navigate, useParams } from 'react-router-dom'
import { ArticleLayout } from '../components/content/ArticleLayout'
import { Badge } from '../components/ui/Badge'
import { PageHeader } from '../components/content/PageHeader'
import { guideById } from '../data/guides'
import { pathwayById } from '../data/pathways'
import { projectById } from '../data/projects'

export const PathwayDetailPage = () => {
  const { pathwayId } = useParams()

  if (!pathwayId || !pathwayById[pathwayId]) {
    return <Navigate to="/pathways" replace />
  }

  const pathway = pathwayById[pathwayId]
  const recommendedProject = projectById[pathway.recommendedFirstProjectId]

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: <p>{pathway.intro}</p>,
    },
    {
      id: 'what-you-can-build',
      title: 'What members can build',
      content: (
        <ul className="list-disc space-y-2 pl-6">
          {pathway.canBuild.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      id: 'tools',
      title: 'Relevant tools and technologies',
      content: (
        <div className="flex flex-wrap gap-2">
          {pathway.tools.map((tool) => (
            <Badge key={tool}>{tool}</Badge>
          ))}
        </div>
      ),
    },
    {
      id: 'progression',
      title: 'Beginner → Intermediate → Advanced progression',
      content: (
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-indigo-200">Beginner</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
              {pathway.progression.beginner.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-indigo-200">Intermediate</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
              {pathway.progression.intermediate.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-indigo-200">Advanced</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
              {pathway.progression.advanced.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'project-ideas',
      title: 'Project ideas with difficulty levels',
      content: (
        <div className="space-y-2">
          {pathway.relatedProjectIds.map((id) => {
            const project = projectById[id]
            return (
              <div key={project.id} className="rounded-md border border-slate-800 bg-slate-900/60 p-3">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge tone="accent">{project.difficulty}</Badge>
                  <Link to={`/projects/${project.id}`} className="text-sm font-medium text-indigo-300 hover:text-indigo-200">
                    {project.name}
                  </Link>
                </div>
                <p className="text-sm text-slate-300">{project.shortDescription}</p>
              </div>
            )
          })}
        </div>
      ),
    },
    {
      id: 'first-project',
      title: 'Recommended first project',
      content: recommendedProject ? (
        <div className="rounded-lg border border-indigo-500/40 bg-indigo-500/10 p-4">
          <p className="text-sm text-slate-200">
            Start with{' '}
            <Link className="font-semibold text-indigo-200 hover:text-indigo-100" to={`/projects/${recommendedProject.id}`}>
              {recommendedProject.name}
            </Link>
            . {recommendedProject.shortDescription}
          </p>
        </div>
      ) : null,
    },
    {
      id: 'learning-objectives',
      title: 'Learning objectives',
      content: (
        <ul className="list-disc space-y-2 pl-6">
          {pathway.learningObjectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ul>
      ),
    },
    {
      id: 'testing-demo',
      title: 'Testing and demonstration guidance',
      content: (
        <ul className="list-disc space-y-2 pl-6">
          {pathway.testingGuidance.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      id: 'related-guides',
      title: 'Related projects and technical guides',
      content: (
        <ul className="list-disc space-y-2 pl-6">
          {pathway.relatedGuideIds.map((guideId) => {
            const guide = guideById[guideId]
            return guide ? (
              <li key={guide.id}>
                <Link className="text-indigo-300 hover:text-indigo-200" to={`/guides/${guide.id}`}>
                  {guide.title}
                </Link>
              </li>
            ) : null
          })}
          <li>
            <Link className="text-indigo-300 hover:text-indigo-200" to="/projects">
              Project Catalogue
            </Link>
          </li>
        </ul>
      ),
    },
  ]

  return (
    <div className="space-y-8">
      <PageHeader eyebrow="Learning Pathway" title={pathway.name} description={pathway.shortDescription} />
      <ArticleLayout sections={sections} />
    </div>
  )
}
