import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'

export const NotFoundPage = () => (
  <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">404</p>
    <h1 className="text-3xl font-semibold text-slate-100">Page not found</h1>
    <p className="max-w-md text-sm text-slate-300">The page you requested does not exist in the Programming Squad Wiki.</p>
    <Link to="/">
      <Button>Back to home</Button>
    </Link>
  </div>
)
