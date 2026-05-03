import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Reset the URL to "/" on load *only* for the how-it-works page so the
// auto-advancing carousel always starts at "Define Your Goals & Product".
// The amazon-growth page preserves its URL (including step variants).
const path = window.location.pathname;
const isAmazonGrowth = path.startsWith('/amazon-growth/');
const fullUrl = window.location.pathname + window.location.search + window.location.hash;
if (!isAmazonGrowth && fullUrl !== '/') {
    window.history.replaceState(null, '', '/');
}

createRoot(document.querySelector('html')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
