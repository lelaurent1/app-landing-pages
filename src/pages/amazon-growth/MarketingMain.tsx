import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import LogoBanner from '../../shared/LogoBanner.tsx'
import HeaderItals from '../../shared/HeaderItals.tsx'
import Img from './Img.tsx'
import BenefitsSection from './BenefitsSection.tsx'
import CampaignProcessSection from './CampaignProcessSection.tsx'
import StoriesSlider from './StoriesSlider.tsx'

const LOGO_IDS = Array.from({ length: 30 }, (_, i) => String(i + 3))


    
// Component

        function MarketingMain() {
            const location = useLocation();

            return (
                <main>
                    <LogoBanner
                        imgIds={LOGO_IDS}
                        ImgComponent={Img}
                        heading="Trusted by top & up-and-coming brands"
                    />
                    <div>
                        <BenefitsSection dataId="0" />
                    </div>
                    <CampaignProcessSection />
                    <section className={"success"}>
                        <div className={"w-layout-blockcontainer container-regular w-container"}>
                            <div className={"w-layout-vflex content-carousel-wrap"}>
                                <div className={"w-layout-hflex component-header-flex"}>
                                    <div className={"w-layout-vflex component-header no-margin"}>
                                        <h2 className={"preheader"}>
                                            Customer success storieS
                                        </h2>
                                        <p className={"sr-only"}>
                                            Trusted by thousands of eCommerce brands
                                        </p>
                                        <div
                                            role={"group"}
                                            animate={"word scroll"}
                                            className={"section-title"}
                                        >
                                            Trusted by<HeaderItals>thousands</HeaderItals>of eCommerce brands
                                        </div>
                                    </div>
                                    <a className={"button w-variant-c9f11e0e-c163-0ada-5fbc-21bd82715afe w-button"}>
                                        View all
                                    </a>
                                </div>
                                <div
                                    id={"stories"}
                                    className={"splide is-overflow is-initialized"}
                                >
                                    <div
                                        className={"splide__track"}
                                        id={"stories-track"}
                                    >
                                        {(() => {
                                            switch (
                                                location.pathname +
                                                location.search +
                                                location.hash
                                            ) {
                                                case "/amazon-growth/g-find-amazon-influencers-test":
                                                case "/amazon-growth/g-find-amazon-influencers-test?step=2":
                                                    return (
                                                        <StoriesSlider
                                                            slide1Width="20%"
                                                            slide2Width="60%"
                                                        />
                                                    );
                                                case "/amazon-growth/g-find-amazon-influencers-test?step=3":
                                                    return (
                                                        <StoriesSlider
                                                            slide1Width="60%"
                                                            slide2Width="20%"
                                                        />
                                                    );
                                                default:
                                                    return null;
                                            }
                                        })()}
                                    </div>
                                    <ul
                                        className={"splide__pagination"}
                                        role={"tablist"}
                                    >
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={"code-embed-2 w-embed w-script"}>
                        </div>
                    </section>
                </main>
            );
        }
    

export default MarketingMain
