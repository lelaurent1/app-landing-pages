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
                    <MarketingMain />
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
