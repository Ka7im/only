import { ErrorBoundary } from './app/providers/ErrorBoundary'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root') as HTMLElement).render(
    <ErrorBoundary>
      <div>app</div>
    </ErrorBoundary>
)
