# Programming Squad Documentation

A completely static, single-page documentation guide for the NBHS Programming Squad. It takes a new student from workspace setup and shared programming foundations through one of four pathways and a documented final project:

- **ML & AI** — Python, data, mathematics, and machine learning
- **Game Development** — Godot, GDScript, game systems, and design
- **Informatics** — C++, algorithms, data structures, and contests
- **Web Development** — HTML/CSS, JavaScript, React, SQL, and backends

The site is intentionally documentation-like rather than promotional: it has a fixed reading order, a table of contents, setup checks, learning checkpoints, project deliverables, troubleshooting guidance, and a glossary. The site has no build step, framework, or dependency: open `index.html` directly or serve the repository with any static web server.

## Contents

- Start-here and first-week guidance
- Shared workspace and Git setup
- Programming foundations and learning workflow
- Detailed ML, game development, informatics, and web development roadmaps
- Capstone planning, implementation, review, and submission checklists
- Troubleshooting and terminology reference

## Local preview

Open `index.html` directly, or serve the repository so browser navigation behaves like a normal website:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

The root `index.html` can be deployed directly to GitHub Pages or any static hosting provider.
