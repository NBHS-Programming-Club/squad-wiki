import clsx from 'clsx'

interface CalloutProps {
  type: 'info' | 'warning' | 'success'
  title: string
  text: string
}

export const Callout = ({ type, title, text }: CalloutProps) => (
  <aside
    className={clsx('rounded-lg border px-4 py-3', {
      'border-indigo-500/40 bg-indigo-500/10': type === 'info',
      'border-amber-500/40 bg-amber-500/10': type === 'warning',
      'border-emerald-500/40 bg-emerald-500/10': type === 'success',
    })}
  >
    <p className="text-sm font-semibold text-slate-100">{title}</p>
    <p className="mt-1 text-sm text-slate-300">{text}</p>
  </aside>
)
