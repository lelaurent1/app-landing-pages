function captureInitialEmail(): string | null {
    if (typeof window === 'undefined') return null
    const params = new URLSearchParams(window.location.search)
    const email = params.get('email')
    return email && email.trim() ? email.trim() : null
}

export const initialEmail = captureInitialEmail()

const APP_BASE_URL = 'https://new.stackcreators.com/'

export function buildCampaignUrl(): string {
    return initialEmail
        ? `${APP_BASE_URL}?email=${encodeURIComponent(initialEmail)}`
        : APP_BASE_URL
}
