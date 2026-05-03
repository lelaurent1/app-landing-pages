import React from 'react'
import type { JSX } from 'react/jsx-runtime'
import { ArrowRight } from 'lucide-react'

import LogoStackSection from './LogoStackSection.tsx'


// Component

        function HomePage() {
            // The logo carousel now auto-scrolls horizontally (continuous marquee)
            // independent of the active step, so we no longer pick a per-step transform.
            const logoSection = <LogoStackSection />;

            return (
                <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                    <div className={"notification--wrapper w-dyn-list"}>
                        <div role={"list"} className={"w-dyn-items"}>
                        </div>
                    </div>
                    {logoSection}
                    <div className={"cta-build-campaign-wrap"}>
                        <button className={"cta-build-campaign"} type={"button"}>
                            <span>Define Your Goals & Product</span>
                            <ArrowRight aria-hidden={"true"} size={22} strokeWidth={2.25} />
                        </button>
                    </div>
                    <style>{`
.cta-build-campaign-wrap {
    display: flex;
    justify-content: center;
    padding: 16px 20px;
    background-color: transparent;
    margin-top: auto;
    margin-bottom: auto;
}
.cta-build-campaign {
    width: 40vw;
    min-height: 64px;
    padding: 18px 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-family: inherit;
    font-size: 1.21rem;
    font-weight: 700;
    letter-spacing: 0.01em;
    line-height: 1.1;
    color: var(--background-paper, #ffffff);
    background-color: var(--p-main);
    border: none;
    border-radius: var(--button-radius, 999px);
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.05s ease;
    box-shadow: 0 4px 16px rgba(133, 81, 245, 0.25);
}
.cta-build-campaign > svg {
    flex-shrink: 0;
    transition: transform 0.2s ease;
}
.cta-build-campaign:hover > svg {
    transform: translateX(3px);
}
.cta-build-campaign:hover {
    background-color: var(--untitled-ui--primary800);
}
.cta-build-campaign:active {
    background-color: var(--p-darker);
}
@media (max-width: 768px) {
    body {
        padding-bottom: 96px;
    }
    .cta-build-campaign-wrap {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
        background-color: var(--background-paper, #ffffff);
        border-top: 1px solid var(--divider);
        z-index: 100;
        box-shadow: 0 -4px 16px rgba(20, 26, 33, 0.06);
    }
    .cta-build-campaign {
        width: 100%;
        min-height: 56px;
        border-radius: var(--sm-radius, 12px);
    }
}
`}</style>
                </body>
            );
        }
    

export default HomePage
