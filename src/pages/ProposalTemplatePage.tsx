import { CopyTemplateCard } from '../components/content/CopyTemplateCard'
import { PageHeader } from '../components/content/PageHeader'
import { proposalTemplate } from '../data/templates'

export const ProposalTemplatePage = () => (
  <div className="space-y-8">
    <PageHeader
      eyebrow="Template"
      title="Project Proposal Template"
      description="Define title, contributors, MVP, milestones, testing strategy, and demonstration plan before implementation starts."
    />
    <CopyTemplateCard
      title="Copy and adapt this proposal"
      description="This template is intentionally reusable. Customize it to match your project scope and learning goals."
      template={proposalTemplate}
    />
  </div>
)
