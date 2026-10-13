# Programming Squad Wiki

MkDocs Material scaffold for a project-based high-school programming squad knowledge base.

## Local setup

1. Create and activate a virtual environment (recommended).
2. Install dependencies:

```bash
pip install mkdocs-material
```

## Run locally

```bash
mkdocs serve
```

Then open `http://127.0.0.1:8000`.

## Build validation

```bash
mkdocs build --strict
```

## Deployment

GitHub Actions workflow: `.github/workflows/deploy.yml`

- Runs on pushes to `main`
- Builds the site with strict checks
- Deploys to GitHub Pages using official actions

## Repository URL placeholders

Update these values in `mkdocs.yml` for your real repository:

- `site_url: https://<your-org-or-username>.github.io/<repository-name>/`
- `repo_url: https://github.com/<your-org-or-username>/<repository-name>`
- `repo_name: <your-org-or-username>/<repository-name>`
