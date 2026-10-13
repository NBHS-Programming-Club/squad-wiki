import { Link } from 'react-router-dom'
import { ArticleLayout } from '../components/content/ArticleLayout'
import { PageHeader } from '../components/content/PageHeader'
import { guides } from '../data/guides'

export const GettingStartedPage = () => {
  const sections = [
    {
      id: 'first-week',
      title: 'Recommended first-week plan',
      content: (
        <ol className="list-decimal space-y-2 pl-6">
          <li>Set up your development environment.</li>
          <li>Learn the team Git workflow and pull request process.</li>
          <li>Pick a beginner-friendly project idea with a clear MVP.</li>
          <li>Ship one small improvement to practice collaboration.</li>
        </ol>
      ),
    },
    {
      id: 'launch-checklist',
      title: 'Launch checklist',
      content: (
        <ul className="list-disc space-y-2 pl-6">
          <li>Your editor, runtime, and Git tooling run successfully.</li>
          <li>You can clone, run, and build at least one squad repository.</li>
          <li>You can create a branch and open a pull request with test notes.</li>
          <li>You have a shortlist of project ideas aligned with your interests.</li>
        </ul>
      ),
    },
    {
      id: 'next-steps',
      title: 'Next steps',
      content: (
        <div className="space-y-2">
          <p>After onboarding, use these pages to move quickly:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link className="text-indigo-300 hover:text-indigo-200" to="/projects">
                Project Catalogue
              </Link>
            </li>
            {guides.slice(1, 4).map((guide) => (
              <li key={guide.id}>
                <Link className="text-indigo-300 hover:text-indigo-200" to={`/guides/${guide.id}`}>
                  {guide.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Onboarding"
        title="Getting Started"
        description="Everything new members need to begin contributing confidently in their first week."
      />
      <ArticleLayout sections={sections} />
    </div>
  )
}
