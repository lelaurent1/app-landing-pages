
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./stylesheets/inline-style-0.css"
import "./stylesheets/stylesheet_1.css"
import "./stylesheets/stylesheet_0.css"
import "./stylesheets/inline-style-3.css"
import "./stylesheets/inline-style-4.css"
import "./stylesheets/inline-style-5.css"
import "./stylesheets/inline-style-6.css"
import "./stylesheets/inline-style-7.css"
import App from './App.tsx'

// On every page load/refresh, reset the URL to step 1 ("/") so the
// auto-advancing "How stack influence works" carousel always starts at
// "Define Your Goals & Product" regardless of the previously-active step.
if (
    window.location.pathname + window.location.search + window.location.hash !== '/'
) {
    window.history.replaceState(null, '', '/');
}

createRoot(document.querySelector('html')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
   