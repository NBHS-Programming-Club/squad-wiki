import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export const Button = ({ className, variant = 'primary', ...props }: ButtonProps) => (
  <button
    className={clsx(
      'inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 disabled:cursor-not-allowed disabled:opacity-50',
      {
        'border-indigo-500/60 bg-indigo-500/20 text-indigo-100 hover:bg-indigo-500/30': variant === 'primary',
        'border-slate-700 bg-slate-900/70 text-slate-200 hover:border-slate-500 hover:bg-slate-800/70 dark:border-slate-700 dark:bg-slate-900/70': variant === 'secondary',
        'border-transparent bg-transparent text-slate-300 hover:bg-slate-800/70': variant === 'ghost',
      },
      className,
    )}
    {...props}
  />
)
