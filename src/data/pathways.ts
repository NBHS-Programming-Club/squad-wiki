import type { Pathway } from '../types/content'

export const pathways: Pathway[] = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    shortDescription: 'Build systems that learn from data and make useful predictions.',
    intro:
      'This pathway is for members who want to solve problems with datasets, machine learning models, computer vision, and AI-assisted experiences. It is a flexible route, not a fixed curriculum.',
    canBuild: [
      'Image classifiers and object detectors',
      'Study assistants and Q&A helpers',
      'Recommendation prototypes',
      'Model-powered dashboards',
      'Game-playing AI agents',
    ],
    tools: ['Python', 'pandas', 'scikit-learn', 'PyTorch or TensorFlow', 'OpenCV', 'Jupyter'],
    progression: {
      beginner: ['Prepare clean datasets', 'Train baseline classifiers', 'Measure accuracy and confusion matrices'],
      intermediate: ['Compare models and tune features', 'Build inference APIs', 'Add explainability and evaluation reports'],
      advanced: ['Design computer-vision pipelines', 'Optimize model latency', 'Deploy and monitor model behavior'],
    },
    recommendedFirstProjectId: 'ai-image-classifier',
    learningObjectives: [
      'Understand the full ML lifecycle from dataset to demo',
      'Choose evaluation metrics based on the problem',
      'Communicate model limitations and tradeoffs responsibly',
    ],
    testingGuidance: [
      'Use explicit train/validation/test splits',
      'Track precision, recall, and failure cases',
      'Demo predictions on unseen examples and discuss limits',
    ],
    relatedGuideIds: ['programming-fundamentals', 'debugging-testing', 'software-engineering-practices'],
    relatedProjectIds: ['ai-image-classifier', 'ai-object-detector', 'ai-study-assistant', 'ai-game-agent', 'ai-dataset-dashboard'],
    keywords: ['machine learning', 'artificial intelligence', 'data', 'computer vision', 'model training'],
  },
  {
    id: 'web-development',
    name: 'Web Development',
    shortDescription: 'Create robust web apps with modern frontend and backend foundations.',
    intro:
      'This pathway supports members building websites, web apps, and API-powered products. Start with a useful user flow, then learn only the technologies required to deliver it.',
    canBuild: [
      'Interactive portals and dashboards',
      'Learning platforms',
      'Task management applications',
      'Live collaborative apps',
      'Integrations and bots',
    ],
    tools: ['HTML', 'CSS', 'JavaScript or TypeScript', 'React', 'REST APIs', 'Node.js or Python backends', 'SQL'],
    progression: {
      beginner: ['Build semantic responsive pages', 'Handle forms and client-side state', 'Use browser storage'],
      intermediate: ['Integrate APIs', 'Implement routing and reusable components', 'Design testable UI flows'],
      advanced: ['Design full-stack architecture', 'Implement auth-ready patterns', 'Tune reliability and performance'],
    },
    recommendedFirstProjectId: 'web-squad-portal',
    learningObjectives: [
      'Model user journeys from problem to solution',
      'Build maintainable component-based interfaces',
      'Use version control and review workflows effectively',
    ],
    testingGuidance: [
      'Test key flows on mobile and desktop breakpoints',
      'Cover critical logic with unit or integration tests',
      'Document known limitations before demo day',
    ],
    relatedGuideIds: ['setup-development-environment', 'git-github', 'collaboration-code-reviews'],
    relatedProjectIds: ['web-squad-portal', 'web-learning-platform', 'web-task-manager', 'web-collab-app', 'web-teams-bot'],
    keywords: ['frontend', 'backend', 'react', 'api', 'database'],
  },
  {
    id: 'robotics-embedded',
    name: 'Robotics & Embedded Systems',
    shortDescription: 'Combine software with hardware to build responsive, autonomous systems.',
    intro:
      'This pathway focuses on programming physical systems with sensors, actuators, and control logic. Teams can start small and scale into autonomous robotics projects over time.',
    canBuild: [
      'Line-following and obstacle-avoidance robots',
      'Sensor monitoring systems',
      'Robotic controllers',
      'IoT telemetry dashboards',
      'Vision-assisted robotics prototypes',
    ],
    tools: ['C++ or Python', 'Arduino', 'Raspberry Pi', 'Sensor libraries', 'Serial tools', 'Basic CAD/electronics kits'],
    progression: {
      beginner: ['Read sensors and trigger outputs', 'Build repeatable control loops', 'Practice safe hardware testing'],
      intermediate: ['Fuse sensor signals', 'Implement PID basics', 'Design resilient wiring and recovery behavior'],
      advanced: ['Coordinate multi-sensor autonomy', 'Integrate computer vision', 'Measure reliability over repeated runs'],
    },
    recommendedFirstProjectId: 'robot-line-follower',
    learningObjectives: [
      'Translate real-world constraints into software decisions',
      'Test hardware and firmware incrementally',
      'Present measured evidence of reliability and safety checks',
    ],
    testingGuidance: [
      'Validate each sensor and actuator independently first',
      'Run scripted scenario tests with expected outcomes',
      'Collect repeated-run data to show consistency',
    ],
    relatedGuideIds: ['setup-development-environment', 'debugging-testing', 'software-engineering-practices'],
    relatedProjectIds: ['robot-line-follower', 'robot-sensor-monitor', 'robot-arm-controller', 'robot-obstacle-avoider', 'robot-vision-assist'],
    keywords: ['robotics', 'embedded', 'microcontroller', 'sensor', 'control systems'],
  },
  {
    id: 'game-simulation',
    name: 'Game Development & Simulation',
    shortDescription: 'Design playable experiences, AI behavior, and simulation systems.',
    intro:
      'This pathway is for members interested in game loops, mechanics, simulation logic, and interactive storytelling. Projects can be artistic, technical, or both.',
    canBuild: [
      '2D platformers and puzzle games',
      'Strategy or systems simulations',
      'AI-driven game agents',
      'Multiplayer prototypes',
      'Physics-based experiments',
    ],
    tools: ['Godot', 'Unity', 'GDScript or C#', 'Version control', 'Profilers and debuggers'],
    progression: {
      beginner: ['Build movement and collision loops', 'Create simple UI and level flow', 'Tune game feel through iteration'],
      intermediate: ['Implement state machines and enemy AI', 'Manage save/progression systems', 'Balance challenge with feedback'],
      advanced: ['Design multiplayer fundamentals', 'Optimize rendering/performance', 'Build reusable simulation frameworks'],
    },
    recommendedFirstProjectId: 'game-2d-platformer',
    learningObjectives: [
      'Build complete gameplay loops from input to win conditions',
      'Use playtesting evidence to improve mechanics',
      'Document architecture and content pipeline decisions',
    ],
    testingGuidance: [
      'Run playtests with structured feedback prompts',
      'Track bugs by severity and reproducibility',
      'Demo performance and controls on target hardware',
    ],
    relatedGuideIds: ['programming-fundamentals', 'debugging-testing', 'collaboration-code-reviews'],
    relatedProjectIds: ['game-2d-platformer', 'game-strategy', 'game-ai-sim', 'game-multiplayer', 'game-physics-puzzle'],
    keywords: ['game development', 'simulation', 'mechanics', 'physics', 'multiplayer'],
  },
]

export const pathwayById = Object.fromEntries(pathways.map((pathway) => [pathway.id, pathway]))
