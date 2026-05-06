import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Strip step query/hash on load *only* for the how-it-works page so the
// auto-advancing carousel always starts at "Define Your Goals & Product".
// The amazon-growth page preserves its URL (including step variants).
const path = window.location.pathname;
const isAmazonGrowth = path.startsWith('/amazon-growth/') || path.startsWith('/amazon-asin-launch-2');
if (!isAmazonGrowth && (window.location.search || window.location.hash)) {
    window.history.replaceState(null, '', path);
}

createRoot(document.querySelector('html')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
