# Programming Squad Wiki

A custom-built React + TypeScript knowledge platform for the NBHS Programming Squad.

## Stack

- React + TypeScript + Vite
- React Router
- Tailwind CSS
- Lucide React icons
- Local typed content/data files for pathways, projects, guides, and handbook pages

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Deployment

GitHub Actions workflow: `.github/workflows/deploy.yml`

- Builds with `npm run build`
- Uploads `dist/` to GitHub Pages
- Deploys from `main`
