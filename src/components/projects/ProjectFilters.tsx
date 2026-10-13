import { RotateCcw } from 'lucide-react'
import { Button } from '../ui/Button'

interface ProjectFiltersProps {
  search: string
  pathway: string
  difficulty: string
  technology: string
  sortBy: 'name' | 'difficulty'
  technologies: string[]
  onChange: (updates: Partial<{ search: string; pathway: string; difficulty: string; technology: string; sortBy: 'name' | 'difficulty' }>) => void
  onClear: () => void
}

export const ProjectFilters = ({
  search,
  pathway,
  difficulty,
  technology,
  sortBy,
  technologies,
  onChange,
  onClear,
}: ProjectFiltersProps) => (
  <section className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
    <div className="grid gap-3 md:grid-cols-5">
      <label className="space-y-1 md:col-span-2">
        <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Search</span>
        <input
          value={search}
          onChange={(event) => onChange({ search: event.target.value })}
          placeholder="Name, description, technology"
          className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none"
        />
      </label>

      <label className="space-y-1">
        <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Pathway</span>
        <select
          value={pathway}
          onChange={(event) => onChange({ pathway: event.target.value })}
          className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-indigo-400 focus:outline-none"
        >
          <option value="all">All pathways</option>
          <option value="ai-ml">AI & Machine Learning</option>
          <option value="web-development">Web Development</option>
          <option value="robotics-embedded">Robotics & Embedded</option>
          <option value="game-simulation">Game Development & Simulation</option>
        </select>
      </label>

      <label className="space-y-1">
        <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Difficulty</span>
        <select
          value={difficulty}
          onChange={(event) => onChange({ difficulty: event.target.value })}
          className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-indigo-400 focus:outline-none"
        >
          <option value="all">All levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </label>

      <label className="space-y-1">
        <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Sort</span>
        <select
          value={sortBy}
          onChange={(event) => onChange({ sortBy: event.target.value as 'name' | 'difficulty' })}
          className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-indigo-400 focus:outline-none"
        >
          <option value="name">Name</option>
          <option value="difficulty">Difficulty</option>
        </select>
      </label>
    </div>

    <div className="flex flex-col gap-3 md:flex-row md:items-end">
      <label className="w-full space-y-1 md:max-w-xs">
        <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Technology</span>
        <select
          value={technology}
          onChange={(event) => onChange({ technology: event.target.value })}
          className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-indigo-400 focus:outline-none"
        >
          <option value="all">All technologies</option>
          {technologies.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>

      <Button variant="secondary" onClick={onClear} className="md:mb-0.5 md:w-auto">
        <RotateCcw size={14} className="mr-2" /> Clear all filters
      </Button>
    </div>
  </section>
)
