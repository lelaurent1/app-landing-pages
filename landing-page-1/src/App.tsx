import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import HomePage from './components/HomePage.tsx'

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

function pushPath(path: string) {
  window.history.pushState(null, '', '' + path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

function nextInCycle(curr: string, arr: readonly string[]): string {
  if (arr.length === 0) return curr;
  const i = arr.findIndex((it) => it === curr);
  return i === -1 ? arr[0] : arr[(i + 1) % arr.length];
}

export function navigateToNext(snapshots: readonly string[]) {
  // For HashRouter, route is in hash; for BrowserRouter, it's in pathname+search
  const curr = window.location.hash.startsWith('#/')
    ? window.location.hash.slice(1)
    : window.location.pathname + window.location.search + window.location.hash;
  const next = nextInCycle(curr, snapshots);
  pushPath(next);
}

const NAV_ATTR = "data-navigate-routes";

function getFirstRoutableElement(e: Event): Element | null {
    // composedPath handles Shadow DOM; fallback to closest for normal DOM.
    const path = (e as any).composedPath?.() as EventTarget[] | undefined;
    if (path) {
        for (const n of path) {
            if (n instanceof Element && n.hasAttribute(NAV_ATTR)) return n;
        }
        return null;
    }

    const t = e.target;
    return t instanceof Element ? t.closest(`[${NAV_ATTR}]`) : null;
}

document.addEventListener(
    "click",
    (e) => {
        // Mimic typical "client-side nav" behavior:
        if (!(e instanceof MouseEvent)) return;
        if (e.defaultPrevented) return;
        if (e.button !== 0) return; // left-click only
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // allow new-tab etc.

        const el = getFirstRoutableElement(e);
        if (!el) return;

        const raw = el.getAttribute(NAV_ATTR);
        if (!raw) return;

        let routes: unknown;
        try {
            routes = JSON.parse(raw);
        } catch {
            console.error("Failed to parse JSON from attribute", NAV_ATTR);
            return;
        }

        if (Array.isArray(routes) && routes.every((x) => typeof x === "string")) {
            navigateToNext(routes as string[]);
            e.preventDefault();
            return;
        } else {
            console.error("Invalid value for attribute", NAV_ATTR);
        }
    },
    true // capture phase == onClickCapture-ish
);

function AppContent() {
    const location = useLocation();

    return (
        
                <HomePage />
            
    );
}

function App() {
    const validRoutes = ["/","/?step=2","/?step=3","/?step=4","/?step=5","/?step=7"]
    const defaultRoute = "/";

    return (
        <Router>
            <Routes>
                {defaultRoute !== '/' && <Route path="/" element={<Navigate to={defaultRoute} replace />} />}
                <Route path="*" element={<AppContent />} />
            </Routes>
        </Router>
    );
}

export default App
