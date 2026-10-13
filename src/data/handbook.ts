import type { HandbookTopic } from '../types/content'

export const handbookTopics: HandbookTopic[] = [
  {
    id: 'project-ideas',
    title: 'How project ideas are proposed',
    description: 'Recommendations for turning rough ideas into clear proposals.',
    recommendations: [
      'Describe the problem first, then the technical approach.',
      'Identify intended users and why the project matters.',
      'Capture constraints early (time, hardware, skill level).',
    ],
    checks: ['Problem statement is specific', 'User impact is visible', 'Proposal includes a realistic MVP concept'],
    relatedIds: ['templates/proposal', '/projects'],
  },
  {
    id: 'achievable-mvp',
    title: 'Defining an achievable MVP',
    description: 'Set a minimum viable product that can actually be delivered and demonstrated.',
    recommendations: [
      'Focus on one complete use case instead of many partial features.',
      'Prioritize testability over feature volume.',
      'Treat stretch goals as optional and separate from MVP success.',
    ],
    checks: ['Single demo scenario exists', 'MVP can be tested in current environment', 'Scope fits available timeline'],
    relatedIds: ['/projects', 'templates/proposal'],
  },
  {
    id: 'milestones-success',
    title: 'Milestones and success criteria',
    description: 'Use milestones to reduce risk and measure progress objectively.',
    recommendations: [
      'Define milestones around outcomes, not only tasks.',
      'Attach clear success criteria to each milestone.',
      'Review milestone status during short team check-ins.',
    ],
    checks: ['Milestones are ordered', 'Each has measurable criteria', 'Blockers are documented with next actions'],
    relatedIds: ['/guides/debugging-testing', '/guides/software-engineering-practices'],
  },
  {
    id: 'git-collaboration',
    title: 'Collaborating with Git',
    description: 'Branch and review practices that keep teamwork smooth.',
    recommendations: [
      'Use feature branches for every change.',
      'Keep pull requests focused and easy to review.',
      'Sync with the base branch regularly to reduce merge conflicts.',
    ],
    checks: ['Branch naming is descriptive', 'Commits are logical', 'PR includes test notes'],
    relatedIds: ['/guides/git-github', '/guides/collaboration-code-reviews'],
  },
  {
    id: 'review-test-work',
    title: 'Reviewing and testing work',
    description: 'Validate correctness before merge or demo.',
    recommendations: [
      'Review behavior changes locally when possible.',
      'Use bug reports with reproducible steps.',
      'Track unresolved risks in project notes.',
    ],
    checks: ['Core flows tested', 'Regression checks performed', 'Open risks acknowledged'],
    relatedIds: ['/guides/debugging-testing', '/guides/collaboration-code-reviews'],
  },
  {
    id: 'project-presentations',
    title: 'Presenting projects',
    description: 'Structure demos around problem, MVP, evidence, and next steps.',
    recommendations: [
      'Show the original problem and user need first.',
      'Demo the MVP path live or with a reliable recording.',
      'Discuss tradeoffs and future iterations honestly.',
    ],
    checks: ['Demo script exists', 'Test evidence prepared', 'Future improvements listed'],
    relatedIds: ['/projects', 'templates/documentation'],
  },
  {
    id: 'knowledge-documentation',
    title: 'Documenting technical knowledge',
    description: 'Keep project knowledge reusable for future members.',
    recommendations: [
      'Document setup, architecture decisions, and known limitations.',
      'Keep docs close to code and update them with key changes.',
      'Prefer concise structured sections over large unstructured notes.',
    ],
    checks: ['Setup steps are reproducible', 'Architecture decisions captured', 'Known issues section maintained'],
    relatedIds: ['/guides/software-engineering-practices', 'templates/documentation'],
  },
  {
    id: 'project-handover',
    title: 'Handing projects over to future members',
    description: 'Prepare projects so others can continue without losing context.',
    recommendations: [
      'Leave a clear status summary and next milestone suggestion.',
      'Mark incomplete features and technical debt explicitly.',
      'Record operational tips and troubleshooting notes.',
    ],
    checks: ['Handover note included', 'Backlog prioritized', 'Environment setup verified by another member'],
    relatedIds: ['/guides/getting-started', 'templates/documentation'],
  },
]

export const handbookById = Object.fromEntries(handbookTopics.map((topic) => [topic.id, topic]))
