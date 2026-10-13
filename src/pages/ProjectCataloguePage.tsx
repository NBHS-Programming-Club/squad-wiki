import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/content/PageHeader'
import { ProjectCard } from '../components/projects/ProjectCard'
import { ProjectFilters } from '../components/projects/ProjectFilters'
import { pathwayById } from '../data/pathways'
import { projects } from '../data/projects'
import type { Difficulty } from '../types/content'

const difficultyOrder: Record<Difficulty, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
}

export const ProjectCataloguePage = () => {
  const [search, setSearch] = useState('')
  const [pathway, setPathway] = useState('all')
  const [difficulty, setDifficulty] = useState('all')
  const [technology, setTechnology] = useState('all')
  const [sortBy, setSortBy] = useState<'name' | 'difficulty'>('name')

  const technologies = useMemo(
    () => Array.from(new Set(projects.flatMap((project) => project.technologies))).sort((a, b) => a.localeCompare(b)),
    [],
  )

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()

    const result = projects.filter((project) => {
      const searchable = [project.name, project.shortDescription, project.fullBrief, ...project.technologies].join(' ').toLowerCase()
      const matchesSearch = query ? searchable.includes(query) : true
      const matchesPathway = pathway === 'all' ? true : project.pathwayId === pathway
      const matchesDifficulty = difficulty === 'all' ? true : project.difficulty === difficulty
      const matchesTechnology = technology === 'all' ? true : project.technologies.includes(technology)

      return matchesSearch && matchesPathway && matchesDifficulty && matchesTechnology
    })

    return [...result].sort((a, b) => {
      if (sortBy === 'difficulty') {
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty] || a.name.localeCompare(b.name)
      }
      return a.name.localeCompare(b.name)
    })
  }, [difficulty, pathway, search, sortBy, technology])

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Interactive Catalogue"
        title="Project Catalogue"
        description="Search, filter, and compare projects by pathway, difficulty, and technology. Each card links to a full project brief with MVP scope and testing criteria."
      />

      <ProjectFilters
        search={search}
        pathway={pathway}
        difficulty={difficulty}
        technology={technology}
        sortBy={sortBy}
        technologies={technologies}
        onChange={(updates) => {
          if (updates.search !== undefined) setSearch(updates.search)
          if (updates.pathway !== undefined) setPathway(updates.pathway)
          if (updates.difficulty !== undefined) setDifficulty(updates.difficulty)
          if (updates.technology !== undefined) setTechnology(updates.technology)
          if (updates.sortBy !== undefined) setSortBy(updates.sortBy)
        }}
        onClear={() => {
          setSearch('')
          setPathway('all')
          setDifficulty('all')
          setTechnology('all')
          setSortBy('name')
        }}
      />

      {filtered.length === 0 ? (
        <section className="rounded-xl border border-dashed border-slate-700 bg-slate-900/50 px-6 py-10 text-center">
          <h2 className="text-lg font-semibold text-slate-100">No matching projects found</h2>
          <p className="mt-2 text-sm text-slate-400">Try clearing filters or searching with broader keywords.</p>
        </section>
      ) : (
        <>
          <p className="text-sm text-slate-400">Showing {filtered.length} project{filtered.length === 1 ? '' : 's'}.</p>
          <div className="grid gap-4 md:grid-cols-2">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} pathwayName={pathwayById[project.pathwayId].name} />
            ))}
          </div>
        </>
      )}

      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <h2 className="text-lg font-semibold text-slate-100">Project templates</h2>
        <p className="mt-2 text-sm text-slate-300">Use these reusable pages when proposing new projects or documenting completed work.</p>
        <div className="mt-3 flex flex-wrap gap-4 text-sm">
          <Link className="text-indigo-300 hover:text-indigo-200" to="/templates/proposal">
            Proposal Template
          </Link>
          <Link className="text-indigo-300 hover:text-indigo-200" to="/templates/documentation">
            Documentation Template
          </Link>
        </div>
      </section>
    </div>
  )
}
