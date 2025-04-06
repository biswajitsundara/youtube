import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/Error/ErrorComponent.jsx'
import Wrapper from './components/scroll/Wrapper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
