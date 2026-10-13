import type { ReactNode } from 'react'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description: string
  actions?: ReactNode
}

export const PageHeader = ({ eyebrow, title, description, actions }: PageHeaderProps) => (
  <header className="space-y-4 border-b border-slate-800/80 pb-6">
    {eyebrow ? <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">{eyebrow}</p> : null}
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">{title}</h1>
        <p className="max-w-3xl text-sm text-slate-300 md:text-base">{description}</p>
      </div>
      {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
    </div>
  </header>
)
