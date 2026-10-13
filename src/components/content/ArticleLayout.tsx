import type { ReactNode } from 'react'

interface ArticleSection {
  id: string
  title: string
  content: ReactNode
}

interface ArticleLayoutProps {
  sections: ArticleSection[]
}

export const ArticleLayout = ({ sections }: ArticleLayoutProps) => (
  <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_240px]">
    <div className="space-y-8">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24 space-y-3">
          <h2 className="text-xl font-semibold text-slate-100">{section.title}</h2>
          <div className="space-y-3 text-sm text-slate-300 md:text-base">{section.content}</div>
        </section>
      ))}
    </div>
    {sections.length > 2 ? (
      <aside className="sticky top-20 hidden h-fit rounded-lg border border-slate-800 bg-slate-900/60 p-4 xl:block">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">On this page</p>
        <ul className="space-y-2 text-sm">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="text-slate-300 transition hover:text-indigo-300 focus-visible:outline-none focus-visible:text-indigo-200">
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    ) : null}
  </div>
)
