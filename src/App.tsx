import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/how-it-works/HomePage.tsx'))
const AmazonGrowthPage = lazy(() => import('./pages/amazon-growth/AmazonGrowthPage.tsx'))

function pushPath(path: string) {
  window.history.pushState(null, '', '' + path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

function nextInCycle(curr: string, arr: readonly string[]): string {
  if (arr.length === 0) return curr
  const i = arr.findIndex((it) => it === curr)
  return i === -1 ? arr[0] : arr[(i + 1) % arr.length]
}

export function navigateToNext(snapshots: readonly string[]) {
  const curr = window.location.hash.startsWith('#/')
    ? window.location.hash.slice(1)
    : window.location.pathname + window.location.search + window.location.hash
  const next = nextInCycle(curr, snapshots)
  pushPath(next)
}

const NAV_ATTR = 'data-navigate-routes'

function getFirstRoutableElement(e: Event): Element | null {
    const path = (e as any).composedPath?.() as EventTarget[] | undefined
    if (path) {
        for (const n of path) {
            if (n instanceof Element && n.hasAttribute(NAV_ATTR)) return n
        }
        return null
    }
    const t = e.target
    return t instanceof Element ? t.closest(`[${NAV_ATTR}]`) : null
}

document.addEventListener(
    'click',
    (e) => {
        if (!(e instanceof MouseEvent)) return
        if (e.defaultPrevented) return
        if (e.button !== 0) return
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return

        const el = getFirstRoutableElement(e)
        if (!el) return

        const raw = el.getAttribute(NAV_ATTR)
        if (!raw) return

        let routes: unknown
        try {
            routes = JSON.parse(raw)
        } catch {
            console.error('Failed to parse JSON from attribute', NAV_ATTR)
            return
        }

        if (Array.isArray(routes) && routes.every((x) => typeof x === 'string')) {
            navigateToNext(routes as string[])
            e.preventDefault()
            return
        } else {
            console.error('Invalid value for attribute', NAV_ATTR)
        }
    },
    true
)

function App() {
    return (
        <Router>
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/amazon-growth/g-find-amazon-influencers-test" element={<AmazonGrowthPage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default App
