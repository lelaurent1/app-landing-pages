// Amplitude analytics wrapper for the landing pages.
//
// - Single source for SDK calls so we can swap providers later from one place.
// - Silent no-op when VITE_AMPLITUDE_API_KEY is unset (safe in dev / CI / preview).
// - Globals (app, page, environment, has_email_prefill) merged into every event.
// - Idempotent init (safe under HMR or accidental double-call).

import * as amplitude from '@amplitude/unified'
import type { EventName, EventProps, LandingPage } from './events'
import { initialEmail } from '../shared/email'

let initialized = false

export function initAnalytics(): void {
    if (initialized) return
    const key = import.meta.env.VITE_AMPLITUDE_API_KEY
    if (!key) return
    amplitude.initAll(key, {
        analytics: {
            // Sessions + attribution only. Click/form/page autocapture stays off
            // so the funnel only contains the typed events we explicitly fire.
            autocapture: {
                sessions: true,
                attribution: true,
                pageViews: false,
                elementInteractions: false,
                formInteractions: false,
                fileDownloads: false,
            },
        },
        sessionReplay: {
            sampleRate: 1,
        },
    })
    initialized = true
}

function getCurrentPage(): LandingPage | undefined {
    if (typeof window === 'undefined') return undefined
    const path = window.location.pathname
    if (path.startsWith('/amazon-asin-launch-2')) return 'page-2'
    if (path.startsWith('/amazon-asin-launch-1')) return 'page-1'
    // Catch-all route renders HomePage too — treat root as page-1.
    return 'page-1'
}

function getGlobals(): Record<string, unknown> {
    return {
        app: 'landing-pages',
        page: getCurrentPage(),
        environment: import.meta.env.MODE,
        has_email_prefill: Boolean(initialEmail),
    }
}

export function track<K extends EventName>(name: K, props: EventProps[K]): void {
    if (!initialized) return
    amplitude.track(name, { ...getGlobals(), ...(props as Record<string, unknown>) })
}

export function identifyVisitor(email: string): void {
    if (!initialized) return
    const normalized = email.toLowerCase().trim()
    amplitude.setUserId(normalized)
    const id = new amplitude.Identify()
    id.set('email', normalized)
    id.set('email_domain', normalized.split('@')[1] ?? '')
    amplitude.identify(id)
}
