import {
  BookOpen,
  Bot,
  Gamepad2,
  GraduationCap,
  Home,
  Lightbulb,
  Rocket,
  Shield,
  Wrench,
} from 'lucide-react'
import type { NavItem } from '../types/content'

export const navItems: NavItem[] = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Getting Started', path: '/getting-started', icon: Rocket },
  {
    label: 'Learning Pathways',
    path: '/pathways',
    icon: GraduationCap,
    children: [
      { label: 'AI & Machine Learning', path: '/pathways/ai-ml', icon: Bot },
      { label: 'Web Development', path: '/pathways/web-development', icon: BookOpen },
      { label: 'Robotics & Embedded Systems', path: '/pathways/robotics-embedded', icon: Wrench },
      { label: 'Game Development & Simulation', path: '/pathways/game-simulation', icon: Gamepad2 },
    ],
  },
  { label: 'Project Catalogue', path: '/projects', icon: Lightbulb },
  { label: 'Technical Guides', path: '/guides', icon: BookOpen },
  { label: 'Squad Handbook', path: '/handbook', icon: Shield },
]
