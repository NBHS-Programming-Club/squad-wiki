import type { LucideIcon } from 'lucide-react'

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

export type PathwayId = 'ai-ml' | 'web-development' | 'robotics-embedded' | 'game-simulation'

export interface NavItem {
  label: string
  path: string
  icon?: LucideIcon
  children?: NavItem[]
}

export interface Pathway {
  id: PathwayId
  name: string
  shortDescription: string
  intro: string
  canBuild: string[]
  tools: string[]
  progression: {
    beginner: string[]
    intermediate: string[]
    advanced: string[]
  }
  recommendedFirstProjectId: string
  learningObjectives: string[]
  testingGuidance: string[]
  relatedGuideIds: string[]
  relatedProjectIds: string[]
  keywords: string[]
}

export interface Project {
  id: string
  name: string
  shortDescription: string
  fullBrief: string
  pathwayId: PathwayId
  difficulty: Difficulty
  technologies: string[]
  estimatedScope: string
  prerequisites: string[]
  learningOutcomes: string[]
  mvpRequirements: string[]
  stretchGoals: string[]
  milestones: string[]
  testingCriteria: string[]
  relevantGuideIds: string[]
}

export interface Guide {
  id: string
  title: string
  description: string
  summary: string
  sections: Array<{
    heading: string
    body: string[]
    steps?: string[]
    codeExample?: {
      language: string
      code: string
      title: string
    }
    callout?: {
      type: 'info' | 'warning' | 'success'
      title: string
      text: string
    }
  }>
  relatedIds: string[]
  keywords: string[]
}

export interface HandbookTopic {
  id: string
  title: string
  description: string
  recommendations: string[]
  checks: string[]
  relatedIds: string[]
}

export interface SearchItem {
  id: string
  type: 'Page' | 'Pathway' | 'Project' | 'Guide' | 'Handbook' | 'Template'
  title: string
  description: string
  keywords: string[]
  path: string
}
