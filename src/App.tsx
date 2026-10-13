import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { DocumentationTemplatePage } from './pages/DocumentationTemplatePage'
import { GettingStartedPage } from './pages/GettingStartedPage'
import { GuideDetailPage } from './pages/GuideDetailPage'
import { GuidesPage } from './pages/GuidesPage'
import { HandbookDetailPage } from './pages/HandbookDetailPage'
import { HandbookPage } from './pages/HandbookPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PathwayDetailPage } from './pages/PathwayDetailPage'
import { PathwaysPage } from './pages/PathwaysPage'
import { ProjectCataloguePage } from './pages/ProjectCataloguePage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProposalTemplatePage } from './pages/ProposalTemplatePage'
import { TemplatesPage } from './pages/TemplatesPage'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/getting-started" element={<GettingStartedPage />} />
          <Route path="/pathways" element={<PathwaysPage />} />
          <Route path="/pathways/:pathwayId" element={<PathwayDetailPage />} />
          <Route path="/projects" element={<ProjectCataloguePage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/guides/:guideId" element={<GuideDetailPage />} />
          <Route path="/handbook" element={<HandbookPage />} />
          <Route path="/handbook/:topicId" element={<HandbookDetailPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/templates/proposal" element={<ProposalTemplatePage />} />
          <Route path="/templates/documentation" element={<DocumentationTemplatePage />} />
          <Route path="/technical-guides" element={<Navigate to="/guides" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}

export default App
