import clsx from 'clsx'
import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  tone?: 'neutral' | 'accent' | 'success' | 'warning'
}

export const Badge = ({ children, tone = 'neutral' }: BadgeProps) => (
  <span
    className={clsx('inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium', {
      'border-slate-700 bg-slate-900/70 text-slate-300': tone === 'neutral',
      'border-indigo-500/50 bg-indigo-500/15 text-indigo-200': tone === 'accent',
      'border-emerald-500/50 bg-emerald-500/10 text-emerald-200': tone === 'success',
      'border-amber-500/50 bg-amber-500/10 text-amber-200': tone === 'warning',
    })}
  >
    {children}
  </span>
)
