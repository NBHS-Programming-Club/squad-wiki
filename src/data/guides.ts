import type { Guide } from '../types/content'

export const guides: Guide[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'A first-week launch plan for joining projects confidently.',
    summary:
      'Start small, understand the workflow, and make your first useful contribution quickly. This guide helps new members move from setup to participation.',
    sections: [
      {
        heading: 'First week checklist',
        body: ['Install your core tools.', 'Clone and run one project locally.', 'Join or propose a project idea.', 'Ship one small contribution.'],
        steps: [
          'Introduce yourself and pick a pathway that matches your interests.',
          'Read the project catalogue and shortlist two ideas you can complete.',
          'Open a small pull request to practice branch and review workflow.',
        ],
      },
      {
        heading: 'How to choose your first project',
        body: [
          'Pick a project with a clear MVP that can be demonstrated quickly.',
          'Prefer projects that let you practice one new concept at a time.',
          'Treat pathways as flexible routes, not mandatory sequences.',
        ],
        callout: {
          type: 'info',
          title: 'Recommendation',
          text: 'If you are unsure, choose a beginner project with visible output and short feedback loops.',
        },
      },
    ],
    relatedIds: ['setup-development-environment', 'git-github'],
    keywords: ['onboarding', 'first project', 'checklist', 'beginner'],
  },
  {
    id: 'setup-development-environment',
    title: 'Setting Up a Development Environment',
    description: 'Install reliable tooling and verify your local workflow.',
    summary:
      'A stable development environment reduces friction and helps teams collaborate effectively. Keep setup steps documented so future members can onboard faster.',
    sections: [
      {
        heading: 'Core tools',
        body: ['Code editor with extensions', 'Git and GitHub access', 'Language runtime needed by your project', 'Terminal familiarity'],
      },
      {
        heading: 'Baseline verification',
        body: ['Confirm tools are available from terminal.', 'Run project install/build commands successfully.', 'Document any machine-specific fixes in the repository.'],
        codeExample: {
          title: 'Quick setup verification commands',
          language: 'bash',
          code: 'git --version\nnode --version\nnpm --version\npython --version',
        },
      },
      {
        heading: 'Troubleshooting approach',
        body: [
          'Capture exact error output before changing multiple variables.',
          'Fix one layer at a time: environment, dependencies, then project config.',
          'Write down confirmed fixes so teammates can repeat them.',
        ],
      },
    ],
    relatedIds: ['debugging-testing', 'software-engineering-practices'],
    keywords: ['setup', 'tools', 'local environment', 'installation'],
  },
  {
    id: 'git-github',
    title: 'Git and GitHub',
    description: 'Use branches, pull requests, and reviews to collaborate safely.',
    summary:
      'Small, focused commits and clear pull requests keep projects understandable. GitHub helps teams discuss changes before they land.',
    sections: [
      {
        heading: 'Essential flow',
        body: ['Create a branch.', 'Commit logical changes.', 'Open a pull request.', 'Respond to review comments.', 'Merge once checks pass.'],
        codeExample: {
          title: 'Typical branch workflow',
          language: 'bash',
          code: 'git checkout -b feature/project-idea\ngit add .\ngit commit -m "Draft project proposal"\ngit push -u origin feature/project-idea',
        },
      },
      {
        heading: 'Pull request quality checklist',
        body: ['State the problem and scope clearly.', 'List test evidence.', 'Link related issues or docs.', 'Keep changes small enough to review quickly.'],
        callout: {
          type: 'warning',
          title: 'Avoid giant pull requests',
          text: 'Large mixed changes are slow to review and hide bugs. Prefer short iterative pull requests.',
        },
      },
    ],
    relatedIds: ['collaboration-code-reviews', 'software-engineering-practices'],
    keywords: ['git', 'github', 'branch', 'pull request', 'version control'],
  },
  {
    id: 'programming-fundamentals',
    title: 'Programming Fundamentals',
    description: 'Core concepts that apply across every pathway.',
    summary:
      'Strong fundamentals make it easier to switch stacks and solve new problems. Focus on decomposition, data structures, and clear naming.',
    sections: [
      {
        heading: 'Problem decomposition',
        body: [
          'Break one feature into small independently testable steps.',
          'Represent data deliberately before writing UI or control flow.',
          'Name functions around behaviors, not implementation details.',
        ],
      },
      {
        heading: 'Practical habits',
        body: ['Write small functions with one purpose.', 'Add lightweight input validation.', 'Use clear logs while building and trim noisy logs before shipping.'],
      },
    ],
    relatedIds: ['debugging-testing', 'software-engineering-practices'],
    keywords: ['fundamentals', 'algorithms', 'data structures', 'clean code'],
  },
  {
    id: 'debugging-testing',
    title: 'Debugging and Testing',
    description: 'Find failures quickly and prove that fixes work.',
    summary:
      'Debugging is a process: reproduce, isolate, fix, and verify. Testing protects progress and gives confidence during collaboration.',
    sections: [
      {
        heading: 'Debugging loop',
        body: ['Reproduce the issue with a minimal case.', 'Add targeted logs or breakpoints.', 'Confirm root cause before implementing the fix.', 'Re-test with known edge cases.'],
      },
      {
        heading: 'Testing strategy',
        body: [
          'Use a mix of unit checks for logic and manual flow testing for user experience.',
          'Write a short test checklist for demos and release milestones.',
          'Keep evidence of what was tested and what remains risky.',
        ],
      },
      {
        heading: 'Bug report template',
        body: ['Use this structure in issues or team notes to keep triage actionable.'],
        codeExample: {
          title: 'Minimal bug report format',
          language: 'markdown',
          code: '## Summary\n## Steps to reproduce\n## Expected behavior\n## Actual behavior\n## Environment\n## Notes / screenshots',
        },
      },
    ],
    relatedIds: ['software-engineering-practices', 'collaboration-code-reviews'],
    keywords: ['debugging', 'testing', 'qa', 'reproducible bugs'],
  },
  {
    id: 'software-engineering-practices',
    title: 'Software Engineering Practices',
    description: 'Structure projects for maintainability, reliability, and growth.',
    summary:
      'Good engineering habits help teams ship faster over time. Use modular design, explicit interfaces, and clear documentation of decisions.',
    sections: [
      {
        heading: 'Planning and architecture',
        body: ['Define a clear MVP boundary.', 'Record major implementation decisions and tradeoffs.', 'Design module boundaries before scaling feature count.'],
      },
      {
        heading: 'Quality guardrails',
        body: ['Run linting and tests before merging.', 'Review security and secret handling for integrations.', 'Use consistent naming and folder conventions.'],
        callout: {
          type: 'success',
          title: 'High leverage habit',
          text: 'Document assumptions and known limitations while building, not only at the end.',
        },
      },
    ],
    relatedIds: ['collaboration-code-reviews', 'debugging-testing'],
    keywords: ['architecture', 'quality', 'maintainability', 'engineering'],
  },
  {
    id: 'collaboration-code-reviews',
    title: 'Collaboration and Code Reviews',
    description: 'Create a healthy feedback loop for team delivery.',
    summary:
      'Code review is a learning and quality process, not a gatekeeping step. Teams improve faster when feedback is specific, respectful, and test-focused.',
    sections: [
      {
        heading: 'Collaboration expectations',
        body: ['Share progress in small updates.', 'Raise blockers early.', 'Rotate ownership of demos and documentation.'],
      },
      {
        heading: 'Review checklist',
        body: [
          'Correctness: does the behavior match intent?',
          'Readability: will a teammate understand this in a month?',
          'Risk: what can break and how was it tested?',
        ],
      },
      {
        heading: 'Constructive feedback pattern',
        body: ['Use this sentence format for comments to keep reviews actionable.'],
        codeExample: {
          title: 'Review feedback format',
          language: 'markdown',
          code: 'Observation: ...\nRisk: ...\nSuggestion: ...\nHow to verify: ...',
        },
      },
    ],
    relatedIds: ['git-github', 'software-engineering-practices'],
    keywords: ['collaboration', 'code review', 'teamwork', 'feedback'],
  },
]

export const guideById = Object.fromEntries(guides.map((guide) => [guide.id, guide]))
