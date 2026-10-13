import { Link, Navigate, useParams } from 'react-router-dom'
import { ArticleLayout } from '../components/content/ArticleLayout'
import { Badge } from '../components/ui/Badge'
import { PageHeader } from '../components/content/PageHeader'
import { guideById } from '../data/guides'
import { pathwayById } from '../data/pathways'
import { projectById } from '../data/projects'

export const ProjectDetailPage = () => {
  const { projectId } = useParams()

  if (!projectId || !projectById[projectId]) {
    return <Navigate to="/projects" replace />
  }

  const project = projectById[projectId]
  const pathway = pathwayById[project.pathwayId]

  const sections = [
    {
      id: 'brief',
      title: 'Full project brief',
      content: <p>{project.fullBrief}</p>,
    },
    {
      id: 'scope',
      title: 'Scope and prerequisites',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-300">Estimated scope (rough guide): {project.estimatedScope}</p>
          <ul className="list-disc space-y-2 pl-6">
            {project.prerequisites.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'outcomes',
      title: 'Learning outcomes',
      content: (
        <ul className="list-disc space-y-2 pl-6">
          {project.learningOutcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      id: 'mvp',
      title: 'Core MVP requirements',
      content: (
        <ul className="list-disc space-y-2 pl-6">
          {project.mvpRequirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      id: 'stretch',
      title: 'Optional stretch goals',
      content: (
        <ul className="list-disc space-y-2 pl-6">
          {project.stretchGoals.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      id: 'milestones',
      title: 'Suggested milestones',
      content: (
        <ol className="list-decimal space-y-2 pl-6">
          {project.milestones.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      ),
    },
    {
      id: 'testing',
      title: 'Testing and success criteria',
      content: (
        <ul className="list-disc space-y-2 pl-6">
          {project.testingCriteria.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      id: 'related-guides',
      title: 'Related guides',
      content: (
        <ul className="list-disc space-y-2 pl-6">
          {project.relevantGuideIds.map((guideId) => {
            const guide = guideById[guideId]
            return guide ? (
              <li key={guide.id}>
                <Link className="text-indigo-300 hover:text-indigo-200" to={`/guides/${guide.id}`}>
                  {guide.title}
                </Link>
              </li>
            ) : null
          })}
        </ul>
      ),
    },
  ]

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Project Brief"
        title={project.name}
        description={project.shortDescription}
        actions={
          <>
            <Badge tone="accent">{project.difficulty}</Badge>
            <Link to={`/pathways/${project.pathwayId}`} className="text-sm text-indigo-300 hover:text-indigo-200">
              Pathway: {pathway.name}
            </Link>
          </>
        }
      />

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>

      <ArticleLayout sections={sections} />
    </div>
  )
}
