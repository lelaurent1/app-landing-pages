import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import CampaignHeader from './CampaignHeader.tsx'
import SiteFooter from './SiteFooter.tsx'
import MarketingMain from './MarketingMain.tsx'


// Component

        function AmazonGrowthPage() {
            const location = useLocation();
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
                    {(() => {
                        switch (location.pathname + location.search + location.hash) {
                            case "/amazon-growth/g-find-amazon-influencers-test":
                                return <MarketingMain carouselTranslate="-20.1755%" />;
                            case "/amazon-growth/g-find-amazon-influencers-test?step=2":
                                return <MarketingMain carouselTranslate="-23.1577%" />;
                            case "/amazon-growth/g-find-amazon-influencers-test?step=3":
                                return <MarketingMain carouselTranslate="-28.2718%" />;
                            default:
                                return null;
                        }
                    })()}
                    <SiteFooter
                        year={2026}
                        companyName="Stack Influence Inc"
                        address="111 NE 1st St, Miami, FL 33132"
                    />
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
