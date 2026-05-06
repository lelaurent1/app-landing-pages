import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Img from './Img.tsx'
import HeaderStat from './HeaderStat.tsx'
import HeaderItals from '../../shared/HeaderItals.tsx'
import { CTA_TEXT, CTA_CAPTION } from '../../shared/cta.ts'
import { buildCampaignUrl } from '../../shared/email.ts'
import { track } from '../../lib/analytics.ts'

import catalogImg from '/assets/attachments/6971348d38d8897d26b5077d_4ee3bb8c26c55a470cc3b99eb9f528f1_catalog.webp'


// Component
function CampaignHeader() {
    const ctaUrl = buildCampaignUrl();
    return <header className={"secondary-header-wrapper"}>
        <div className={"container-regular"}>
            <div className={"w-layout-grid campaign-header"}>
                <div className={"w-layout-vflex pricing-header-wrapper"}>
                    <div className={"w-layout-hflex flex-block-102"}>
                        <Img id="1" />
                        <Img id="2" />
                    </div>
                    <h1 className={"page-title"}>
                        Automate influencers for<HeaderItals>Amazon listing growth</HeaderItals>
                    </h1>
                    <p>
                        Find, connect and automate amazon influencer relationships at scale to help you launch new products, gather UGC, increase reviews, grow sales, and become a top listing on Amazon.
                    </p>
                    <div id={"w-node-ec06864a-af6d-d7ea-171d-6a7546e631e0-6ac5eb65"} className={"w-layout-hflex small-stats-wrap"}>

                                    <HeaderStat value="340k" label="vetted creators" position="first" />


                                    <HeaderStat value="175hrs" label="saved per month" position="mid" />


                                    <HeaderStat value="4x" label="ad conversions" />

                    </div>
                    <div className={"hero-cta-wrap"}>
                        <div className={"hero-cta-stack"}>
                            <a
                                className={"cta-build-campaign"}
                                href={ctaUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => track('Build Campaign CTA Clicked', { placement: 'page-2-hero', target_url: ctaUrl })}
                            >
                                <span>{CTA_TEXT}</span>
                                <ArrowRight aria-hidden={"true"} size={22} strokeWidth={2.25} />
                            </a>
                            <p className={"hero-cta-caption"}>{CTA_CAPTION}</p>
                        </div>
                    </div>
                    <style>{`
.hero-cta-wrap {
    margin-top: var(--_variable-spacing---component-spacing);
    display: flex;
    justify-content: flex-start;
    width: 100%;
}
.hero-cta-stack {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
.hero-cta-caption {
    margin: 0;
    font-size: 0.875rem;
    color: var(--grey-body);
    text-align: center;
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
@media (max-width: 991px) {
    .hero-cta-wrap {
        justify-content: center;
        margin-bottom: 80px;
    }
    .cta-build-campaign {
        width: auto;
        padding: 18px 34px;
    }
}
@media (max-width: 768px) {
    .hero-cta-wrap {
        display: none;
    }
    .hero-figcaption {
        white-space: nowrap;
        max-width: none !important;
    }
    .div-block-37 {
        padding-top: 52px;
        padding-bottom: 0;
        margin-bottom: -22px;
    }
}
`}</style>
                </div>
                <figure
                    id={"w-node-ec06864a-af6d-d7ea-171d-6a7546e631f0-6ac5eb65"}
                    className={"div-block-36"}
                    style={{
                        margin: 0,
                        padding: 0,
                        border: "none",
                        background: "transparent",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "14px",
                    }}
                >
                    <img
                        src={catalogImg}
                        alt="Stack Influence catalog interface showing skincare and fashion products available for influencer campaigns"
                        style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            borderRadius: "var(--radius)",
                            boxShadow: "0 12px 40px rgba(20, 26, 33, 0.08)",
                        }}
                    />
                    <figcaption
                        className={"hero-figcaption"}
                        style={{
                            margin: 0,
                            fontSize: "0.875rem",
                            color: "var(--grey-body)",
                            textAlign: "center",
                            maxWidth: "90%",
                            lineHeight: 1.4,
                        }}
                    >
                        How vetted creators browse and apply to your campaigns.
                    </figcaption>
                </figure>
            </div>
        </div>
    </header>}


export default CampaignHeader
