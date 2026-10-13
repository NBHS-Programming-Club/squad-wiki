import { CopyTemplateCard } from '../components/content/CopyTemplateCard'
import { PageHeader } from '../components/content/PageHeader'
import { documentationTemplate } from '../data/templates'

export const DocumentationTemplatePage = () => (
  <div className="space-y-8">
    <PageHeader
      eyebrow="Template"
      title="Project Documentation Template"
      description="Capture setup instructions, architecture decisions, testing outcomes, limitations, and future improvements for handover."
    />
    <CopyTemplateCard
      title="Copy and adapt this documentation template"
      description="Use this as a starting structure for project reports and repository READMEs."
      template={documentationTemplate}
    />
  </div>
)
