import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import BoosterTab from './BoosterTab.tsx'
import TabPane from './TabPane.tsx'
import HeaderItals from '../../shared/HeaderItals.tsx'


// Component

        function CampaignProcessSection() {
            const location = useLocation();
            const current = location.pathname + location.search + location.hash;

            return (
                <section className={"section-24"}>
                    <div className={"hidden"}>
                        <div className={"w-embed w-script"}>
                        </div>
                    </div>
                    <div className={"w-layout-blockcontainer container-regular w-container"}>
                        <div className={"w-layout-vflex _3-tab-wrap"}>
                            <div className={"w-layout-vflex flex-block-60"}>
                                <h2 className={"preheader"}>
                                    our campaign process
                                </h2>
                                <p className={"sr-only"}>
                                    From product seeding to product growth
                                </p>
                                <div role={"group"} animate={"word"} className={"section-title"}>
                                    From product seeding to<HeaderItals>product growth</HeaderItals>
                                </div>
                            </div>
                            <div className={"auto-tabs w-tabs"}>
                                <div className={"booster-tab-menu w-tab-menu"} role={"tablist"}>
                                    {(() => {
                                        switch (current) {
                                            case "/amazon-growth/g-find-amazon-influencers-test":
                                                return (
                                                    <BoosterTab
                                                        dataId="step1"
                                                        isActive={true}
                                                        progress="99%"
                                                        id="w-tabs-0-data-w-tab-0"
                                                    />
                                                );
                                            case "/amazon-growth/g-find-amazon-influencers-test?step=2":
                                                return (
                                                    <BoosterTab
                                                        dataId="step1"
                                                        isActive={false}
                                                        tabIndexValue="-1"
                                                        id="w-tabs-0-data-w-tab-0"
                                                    />
                                                );
                                            case "/amazon-growth/g-find-amazon-influencers-test?step=3":
                                                return (
                                                    <BoosterTab
                                                        dataId="step1"
                                                        isActive={true}
                                                        progress="29%"
                                                        id="w-tabs-0-data-w-tab-0"
                                                    />
                                                );
                                            default:
                                                return null;
                                        }
                                    })()}
                                    {(() => {
                                        switch (current) {
                                            case "/amazon-growth/g-find-amazon-influencers-test":
                                            case "/amazon-growth/g-find-amazon-influencers-test?step=3":
                                                return (
                                                    <BoosterTab
                                                        dataId="step2"
                                                        isActive={false}
                                                        tabIndexValue="-1"
                                                        id="w-tabs-0-data-w-tab-1"
                                                    />
                                                );
                                            case "/amazon-growth/g-find-amazon-influencers-test?step=2":
                                                return (
                                                    <BoosterTab
                                                        dataId="step2"
                                                        isActive={true}
                                                        progress="71%"
                                                        id="w-tabs-0-data-w-tab-1"
                                                    />
                                                );
                                            default:
                                                return null;
                                        }
                                    })()}
                                    <BoosterTab
                                        dataId="step3"
                                        isActive={false}
                                        tabIndexValue="-1"
                                        id="w-tabs-0-data-w-tab-2"
                                    />
                                </div>
                                <div className={"tabs-content w-tab-content"}>
                                    {(() => {
                                        switch (current) {
                                            case "/amazon-growth/g-find-amazon-influencers-test":
                                                return (
                                                    <TabPane
                                                        dataId="0"
                                                        baseClassName="tab-pane-tab-1 w-tab-pane"
                                                        isActive={true}
                                                        styleVariant="activeNoSpace"
                                                        paneId="w-tabs-0-data-w-pane-0"
                                                    />
                                                );
                                            case "/amazon-growth/g-find-amazon-influencers-test?step=2":
                                                return (
                                                    <TabPane
                                                        dataId="0"
                                                        baseClassName="tab-pane-tab-1 w-tab-pane"
                                                        isActive={false}
                                                        styleVariant="none"
                                                        paneId="w-tabs-0-data-w-pane-0"
                                                    />
                                                );
                                            case "/amazon-growth/g-find-amazon-influencers-test?step=3":
                                                return (
                                                    <TabPane
                                                        dataId="0"
                                                        baseClassName="tab-pane-tab-1 w-tab-pane"
                                                        isActive={true}
                                                        styleVariant="activeComma"
                                                        paneId="w-tabs-0-data-w-pane-0"
                                                    />
                                                );
                                            default:
                                                return null;
                                        }
                                    })()}
                                    {(() => {
                                        switch (current) {
                                            case "/amazon-growth/g-find-amazon-influencers-test":
                                            case "/amazon-growth/g-find-amazon-influencers-test?step=3":
                                                return (
                                                    <TabPane
                                                        dataId="1"
                                                        baseClassName="w-tab-pane"
                                                        isActive={false}
                                                        styleVariant="none"
                                                        paneId="w-tabs-0-data-w-pane-1"
                                                    />
                                                );
                                            case "/amazon-growth/g-find-amazon-influencers-test?step=2":
                                                return (
                                                    <TabPane
                                                        dataId="1"
                                                        baseClassName="w-tab-pane"
                                                        isActive={true}
                                                        styleVariant="activeComma"
                                                        paneId="w-tabs-0-data-w-pane-1"
                                                    />
                                                );
                                            default:
                                                return null;
                                        }
                                    })()}
                                    <TabPane
                                        dataId="2"
                                        baseClassName="w-tab-pane"
                                        isActive={false}
                                        styleVariant="none"
                                        paneId="w-tabs-0-data-w-pane-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    

export default CampaignProcessSection
