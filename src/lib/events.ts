// Event taxonomy for the landing pages.
//
// Convention: Title Case event names, snake_case property keys.
// Globals (app, page, environment, has_email_prefill) are merged in
// analytics.ts and excluded from per-event props here.

export type LandingPage = 'page-1' | 'page-2'

export type CtaPlacement = 'page-1-hero' | 'page-2-hero' | 'page-2-mobile-sticky'

export type EventProps = {
    'Page Viewed': {
        // page is set as a global, but include here too for top-of-funnel filtering.
        page: LandingPage
    }
    // Primary conversion event.
    'Build Campaign CTA Clicked': {
        placement: CtaPlacement
        target_url: string
    }
    'Story Card Clicked': {
        brand: string
        target_url: string
    }
    'View All Stories Clicked': {
        target_url: string
    }
    'App Badge Clicked': {
        store: 'ios' | 'android'
        target_url: string
    }
    'Footer Link Clicked': {
        link: 'creator-terms' | 'website-terms' | 'privacy'
        target_url: string
    }
    'Process Tab Clicked': {
        page: LandingPage
        step: number
    }
}

export type EventName = keyof EventProps
