import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import './styles/inline-style-0.css'
import './styles/stylesheet_1.css'
import './styles/stylesheet_0.css'
import './styles/inline-style-3.css'
import './styles/inline-style-4.css'
import './styles/inline-style-5.css'
import './styles/inline-style-6.css'
import './styles/inline-style-7.css'

import { useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Img from './Img.tsx'
import CampaignHeader from './CampaignHeader.tsx'
import SiteFooter from './SiteFooter.tsx'
import MarketingMain from './MarketingMain.tsx'
import { useEffect } from 'react'
import { CTA_TEXT, CTA_CAPTION } from '../../shared/cta.ts'
import { buildCampaignUrl } from '../../shared/email.ts'
import { track } from '../../lib/analytics.ts'


// Component

        function AmazonGrowthPage() {
            const location = useLocation();
            const ctaUrl = buildCampaignUrl();

            useEffect(() => {
                track('Page Viewed', { page: 'page-2' });
            }, []);

            return (
                <body>
                    <div className={"div-block-37"}>
                        <div className={"nav-container-copy"}>
                            <a className={"nav-logo-link w-nav-brand"}>
                                <Img id="0" />
                            </a>
                        </div>
                    </div>
                    <CampaignHeader />
                    <MarketingMain />
                    <SiteFooter
                        year={2026}
                        companyName="Stack Influence Inc"
                        address="111 NE 1st St, Miami, FL 33132"
                    />
                    <div className={"cta-build-campaign-wrap"}>
                        <a
                            className={"cta-build-campaign"}
                            href={ctaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => track('Build Campaign CTA Clicked', { placement: 'page-2-mobile-sticky', target_url: ctaUrl })}
                        >
                            <span>{CTA_TEXT}</span>
                            <ArrowRight aria-hidden={"true"} size={22} strokeWidth={2.25} />
                        </a>
                        <p className={"cta-build-campaign-caption"}>{CTA_CAPTION}</p>
                    </div>
                    <style>{`
.cta-build-campaign-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 16px 20px;
    background-color: transparent;
}
.cta-build-campaign-caption {
    margin: 0;
    font-size: 0.875rem;
    color: var(--grey-body);
    text-align: center;
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
@media (min-width: 769px) {
    .cta-build-campaign-wrap {
        display: none;
    }
}
`}</style>
                    <div
                        id={"Botsonic-wrapper"}
                        style={{
                            width: "100%",
                            maxWidth: "75px",
                            height: "100%",
                            maxHeight: "75px",
                            minHeight: "80px",
                            position: "fixed",
                            bottom: "0px",
                            right: "0px",
                            zIndex: "2147480000"
                        }}
                    >
                        <iframe
                            id={"widget-Botsonic"}
                            title={"Widget - Botsonic"}
                            allow={"fullscreen"}
                            role={"dialog"}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderWidth: "medium",
                                borderStyle: "none",
                                borderColor: "currentcolor",
                                borderImage: "initial",
                                maxWidth: "none",
                                maxHeight: "none"
                            }}
                            sandbox={"allow-popups allow-top-navigation-by-user-activation"}
                            src="/frames/b7ad7b31-cddf-4c02-ae5d-8bc70503e16e/index.html"
                        >
                        </iframe>
                    </div>
                </body>
            );
        }
    

export default AmazonGrowthPage
