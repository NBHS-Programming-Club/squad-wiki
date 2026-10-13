import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { CodeBlock } from './CodeBlock'

interface CopyTemplateCardProps {
  title: string
  description: string
  template: string
}

export const CopyTemplateCard = ({ title, description, template }: CopyTemplateCardProps) => {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    await navigator.clipboard.writeText(template)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1400)
  }

  return (
    <section className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/70 p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-slate-100">{title}</h2>
          <p className="text-sm text-slate-300">{description}</p>
        </div>
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-3 py-2 text-sm text-slate-100 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Copied' : 'Copy template'}
        </button>
      </div>
      <CodeBlock language="markdown" code={template} title="Template" />
    </section>
  )
}
