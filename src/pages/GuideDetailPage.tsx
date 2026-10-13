import { Link, Navigate, useParams } from 'react-router-dom'
import { ArticleLayout } from '../components/content/ArticleLayout'
import { Callout } from '../components/content/Callout'
import { CodeBlock } from '../components/content/CodeBlock'
import { PageHeader } from '../components/content/PageHeader'
import { guideById } from '../data/guides'

export const GuideDetailPage = () => {
  const { guideId } = useParams()

  if (!guideId || !guideById[guideId]) {
    return <Navigate to="/guides" replace />
  }

  const guide = guideById[guideId]

  const sections = guide.sections.map((section) => ({
    id: section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    title: section.heading,
    content: (
      <div className="space-y-3">
        {section.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {section.steps ? (
          <ol className="list-decimal space-y-2 pl-6">
            {section.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        ) : null}
        {section.callout ? <Callout {...section.callout} /> : null}
        {section.codeExample ? <CodeBlock language={section.codeExample.language} code={section.codeExample.code} title={section.codeExample.title} /> : null}
      </div>
    ),
  }))

  return (
    <div className="space-y-8">
      <PageHeader eyebrow="Guide" title={guide.title} description={guide.description} />
      <p className="max-w-4xl text-sm text-slate-300">{guide.summary}</p>
      <ArticleLayout sections={sections} />

      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <h2 className="text-lg font-semibold text-slate-100">Related guides</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          {guide.relatedIds.map((id) => {
            const related = guideById[id]
            return related ? (
              <li key={related.id}>
                <Link className="text-indigo-300 hover:text-indigo-200" to={`/guides/${related.id}`}>
                  {related.title}
                </Link>
              </li>
            ) : null
          })}
        </ul>
      </section>
    </div>
  )
}
