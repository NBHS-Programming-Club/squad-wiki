import { guides } from '../data/guides'
import { handbookTopics } from '../data/handbook'
import { pathways } from '../data/pathways'
import { projects } from '../data/projects'
import type { SearchItem } from '../types/content'

export const searchItems: SearchItem[] = [
  {
    id: 'home',
    type: 'Page',
    title: 'Programming Squad Wiki',
    description: 'Home page and project-based learning overview.',
    keywords: ['home', 'lifecycle', 'pathways', 'projects'],
    path: '/',
  },
  {
    id: 'getting-started-page',
    type: 'Page',
    title: 'Getting Started',
    description: 'New member onboarding and first-week checklist.',
    keywords: ['onboarding', 'new member', 'checklist'],
    path: '/getting-started',
  },
  {
    id: 'project-catalogue-page',
    type: 'Page',
    title: 'Project Catalogue',
    description: 'Searchable project ideas with requirements and milestones.',
    keywords: ['projects', 'catalogue', 'mvp', 'ideas'],
    path: '/projects',
  },
  {
    id: 'technical-guides-page',
    type: 'Page',
    title: 'Technical Guides',
    description: 'Guides on setup, Git, testing, and engineering practice.',
    keywords: ['guides', 'setup', 'testing', 'collaboration'],
    path: '/guides',
  },
  {
    id: 'handbook-page',
    type: 'Page',
    title: 'Squad Handbook',
    description: 'Recommendations for workflow, collaboration, and handover.',
    keywords: ['handbook', 'workflow', 'mvp', 'handover'],
    path: '/handbook',
  },
  ...pathways.map((pathway) => ({
    id: pathway.id,
    type: 'Pathway' as const,
    title: pathway.name,
    description: pathway.shortDescription,
    keywords: pathway.keywords,
    path: `/pathways/${pathway.id}`,
  })),
  ...projects.map((project) => ({
    id: project.id,
    type: 'Project' as const,
    title: project.name,
    description: project.shortDescription,
    keywords: [...project.technologies, ...project.prerequisites, project.fullBrief],
    path: `/projects/${project.id}`,
  })),
  ...guides.map((guide) => ({
    id: guide.id,
    type: 'Guide' as const,
    title: guide.title,
    description: guide.description,
    keywords: [guide.summary, ...guide.keywords, ...guide.sections.flatMap((section) => [section.heading, ...section.body])],
    path: `/guides/${guide.id}`,
  })),
  ...handbookTopics.map((topic) => ({
    id: topic.id,
    type: 'Handbook' as const,
    title: topic.title,
    description: topic.description,
    keywords: [...topic.recommendations, ...topic.checks],
    path: `/handbook/${topic.id}`,
  })),
  {
    id: 'proposal-template',
    type: 'Template',
    title: 'Project Proposal Template',
    description: 'Reusable proposal structure for new project ideas.',
    keywords: ['template', 'proposal', 'mvp', 'milestones'],
    path: '/templates/proposal',
  },
  {
    id: 'documentation-template',
    type: 'Template',
    title: 'Project Documentation Template',
    description: 'Reusable documentation structure for project handover and demos.',
    keywords: ['template', 'documentation', 'handover', 'architecture'],
    path: '/templates/documentation',
  },
]

const normalize = (value: string) => value.toLowerCase()

export const scoreSearchItem = (item: SearchItem, query: string) => {
  const q = normalize(query)
  const title = normalize(item.title)
  const description = normalize(item.description)
  const keywords = item.keywords.map(normalize)

  if (!q) {
    return 0
  }

  let score = 0
  if (title.includes(q)) score += 6
  if (description.includes(q)) score += 3
  if (keywords.some((keyword) => keyword.includes(q))) score += 2
  if (title.startsWith(q)) score += 2
  return score
}
