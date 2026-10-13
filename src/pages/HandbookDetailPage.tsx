import { Link, Navigate, useParams } from 'react-router-dom'
import { ArticleLayout } from '../components/content/ArticleLayout'
import { PageHeader } from '../components/content/PageHeader'
import { handbookById } from '../data/handbook'

const resolveRelatedPath = (value: string) => {
  if (value.startsWith('/')) return value
  return `/${value}`
}

const prettifyRelatedLabel = (value: string) =>
  value
    .replace(/^\//, '')
    .replace(/-/g, ' ')
    .replace(/\//g, ' / ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())

export const HandbookDetailPage = () => {
  const { topicId } = useParams()

  if (!topicId || !handbookById[topicId]) {
    return <Navigate to="/handbook" replace />
  }

  const topic = handbookById[topicId]

  const sections = [
    {
      id: 'recommendations',
      title: 'Recommended approach',
      content: (
        <ul className="list-disc space-y-2 pl-6">
          {topic.recommendations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      id: 'review-checks',
      title: 'Practical checks',
      content: (
        <ul className="list-disc space-y-2 pl-6">
          {topic.checks.map((check) => (
            <li key={check}>{check}</li>
          ))}
        </ul>
      ),
    },
  ]

  return (
    <div className="space-y-8">
      <PageHeader eyebrow="Handbook Topic" title={topic.title} description={topic.description} />
      <ArticleLayout sections={sections} />

      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <h2 className="text-lg font-semibold text-slate-100">Related references</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          {topic.relatedIds.map((related) => (
            <li key={related}>
              <Link className="text-indigo-300 hover:text-indigo-200" to={resolveRelatedPath(related)}>
                {prettifyRelatedLabel(related)}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
