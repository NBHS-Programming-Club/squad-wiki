import { CopyTemplateCard } from '../components/content/CopyTemplateCard'
import { PageHeader } from '../components/content/PageHeader'
import { documentationTemplate, proposalTemplate } from '../data/templates'

export const TemplatesPage = () => (
  <div className="space-y-8">
    <PageHeader
      eyebrow="Project Workflow Templates"
      title="Proposal and Documentation Templates"
      description="Copy these templates directly into your project repositories. They are reusable starting points, not fixed submission forms."
    />

    <div className="space-y-6">
      <CopyTemplateCard
        title="Project Proposal Template"
        description="Use this when pitching a project idea and defining MVP scope, milestones, and test criteria."
        template={proposalTemplate}
      />
      <CopyTemplateCard
        title="Project Documentation Template"
        description="Use this for implementation notes, architecture rationale, testing evidence, and handover context."
        template={documentationTemplate}
      />
    </div>
  </div>
)
