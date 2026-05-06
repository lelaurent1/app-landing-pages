import React, { useEffect } from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation, useNavigate } from 'react-router-dom'
import AutoTab from './AutoTab.tsx'
import AutoTabsPane from './AutoTabsPane.tsx'
import HeaderItals from '../../shared/HeaderItals.tsx'


// Auto-advance configuration: cycle through steps using relative search params
const STEP_SEARCHES = ["", "?step=2", "?step=3", "?step=4", "?step=5"] as const;
const CYCLE_MS = 5000;

function normalizeSearch(search: string): string {
    return search === "?step=7" ? "" : search;
}

// Component

        function StackInfluenceSection() {
            const location = useLocation();
            const navigate = useNavigate();
            const search = normalizeSearch(location.search);

            useEffect(() => {
                const idx = STEP_SEARCHES.indexOf(search as typeof STEP_SEARCHES[number]);
                if (idx === -1) return;
                const nextSearch = STEP_SEARCHES[(idx + 1) % STEP_SEARCHES.length];
                const timer = window.setTimeout(() => {
                    navigate(nextSearch || location.pathname, { replace: true });
                }, CYCLE_MS);
                return () => window.clearTimeout(timer);
            }, [search, navigate, location.pathname]);

            return (
                <section className={"section-tabs-autoplay"} style={{ paddingTop: "24px", paddingBottom: "24px" }}>
                    <div className={"container-regular"}>
                        <div
                            className={"w-layout-vflex section-header-wide"}
                            style={{ marginBottom: "20px" }}
                        >
                            <h2 className={"preheader"} aria-hidden={"true"}>
                                {" "}
                            </h2>
                            <p className={"sr-only"}>
                                Stack Influence how it works
                            </p>
                            <p
                                role={"group"}
                                animate={"word scroll"}
                                className={"section-title hero"}
                                style={{ fontSize: "1.7rem" }}
                            >
                                Stack Influence<span className={"mobile-break"}></span><HeaderItals>how it works</HeaderItals>
                            </p>
                        </div>
                        <div className={"auto-tabs-component"}>
                            <div className={"auto-tabs-wrapper w-tabs"}>
                                <div className={"auto-tabs-menu w-tab-menu"} role={"tablist"}>
                                    {(() => {
                                        switch (current) {
                                            case "/":
                                            case "/?step=7":
                                                return <AutoTab dataId="0" isActive={true} progressMs={CYCLE_MS} />;
                                            case "/?step=2":
                                            case "/?step=3":
                                            case "/?step=4":
                                            case "/?step=5":
                                            default:
                                                return <AutoTab dataId="1" isActive={false} />;
                                        }
                                    })()}
                                    {(() => {
                                        switch (current) {
                                            case "/":
                                            case "/?step=3":
                                            case "/?step=4":
                                            case "/?step=5":
                                            case "/?step=7":
                                                return <AutoTab dataId="2" />;
                                            case "/?step=2":
                                                return <AutoTab dataId="3" isActive={true} progressMs={CYCLE_MS} />;
                                            default:
                                                return <AutoTab dataId="2" />;
                                        }
                                    })()}
                                    {(() => {
                                        switch (current) {
                                            case "/":
                                            case "/?step=2":
                                            case "/?step=4":
                                            case "/?step=5":
                                            case "/?step=7":
                                                return <AutoTab dataId="4" isActive={false} />;
                                            case "/?step=3":
                                                return <AutoTab dataId="5" isActive={true} progressMs={CYCLE_MS} />;
                                            default:
                                                return <AutoTab dataId="4" isActive={false} />;
                                        }
                                    })()}
                                    {(() => {
                                        switch (current) {
                                            case "/":
                                            case "/?step=2":
                                            case "/?step=3":
                                            case "/?step=5":
                                            case "/?step=7":
                                                return <AutoTab dataId="6" isActive={false} />;
                                            case "/?step=4":
                                                return <AutoTab dataId="7" isActive={true} progressMs={CYCLE_MS} />;
                                            default:
                                                return <AutoTab dataId="6" isActive={false} />;
                                        }
                                    })()}
                                    {(() => {
                                        switch (current) {
                                            case "/":
                                            case "/?step=2":
                                            case "/?step=3":
                                            case "/?step=4":
                                            case "/?step=7":
                                                return <AutoTab dataId="8" isActive={false} />;
                                            case "/?step=5":
                                                return <AutoTab dataId="9" isActive={true} progressMs={CYCLE_MS} />;
                                            default:
                                                return <AutoTab dataId="8" isActive={false} />;
                                        }
                                    })()}
                                </div>
                                <div className={"auto-tabs-content w-tab-content"}>
                                    {(() => {
                                        switch (current) {
                                            case "/":
                                                return <AutoTabsPane paneId="w-tabs-0-data-w-pane-0" innerVariant="define" isActive={true} styleType="active-no-space" />;
                                            case "/?step=7":
                                                return <AutoTabsPane paneId="w-tabs-0-data-w-pane-0" innerVariant="define" isActive={true} styleType="active-with-space" />;
                                            case "/?step=2":
                                            case "/?step=3":
                                            case "/?step=4":
                                            case "/?step=5":
                                            default:
                                                return <AutoTabsPane paneId="w-tabs-0-data-w-pane-0" innerVariant="define" isActive={false} styleType="empty" />;
                                        }
                                    })()}
                                    {(() => {
                                        switch (current) {
                                            case "/":
                                                return <AutoTabsPane paneId="w-tabs-0-data-w-pane-1" innerVariant="match-making" isActive={false} styleType="none" />;
                                            case "/?step=2":
                                                return <AutoTabsPane paneId="w-tabs-0-data-w-pane-1" innerVariant="match-making" isActive={true} styleType="active-with-space" />;
                                            case "/?step=3":
                                            case "/?step=4":
                                            case "/?step=5":
                                            case "/?step=7":
                                            default:
                                                return <AutoTabsPane paneId="w-tabs-0-data-w-pane-1" innerVariant="match-making" isActive={false} styleType="empty" />;
                                        }
                                    })()}
                                    {(() => {
                                        switch (current) {
                                            case "/":
                                            case "/?step=2":
                                                return <AutoTabsPane paneId="w-tabs-0-data-w-pane-2" innerVariant="seeding" isActive={false} styleType="none" />;
                                            case "/?step=3":
                                                return <AutoTabsPane paneId="w-tabs-0-data-w-pane-2" innerVariant="seeding" isActive={true} styleType="active-with-space" />;
                                            case "/?step=4":
                                            case "/?step=5":
                                            case "/?step=7":
                                            default:
                                                return <AutoTabsPane paneId="w-tabs-0-data-w-pane-2" innerVariant="seeding" isActive={false} styleType="empty" />;
                                        }
                                    })()}
                                    {(() => {
                                        switch (current) {
                                            case "/":
                                            case "/?step=2":
                                            case "/?step=3":
                                                return <AutoTabsPane paneId="w-tabs-0-data-w-pane-3" innerVariant="ugc" isActive={false} styleType="none" />;
                                            case "/?step=4":
                                                return <AutoTabsPane paneId="w-tabs-0-data-w-pane-3" innerVariant="ugc" isActive={true} styleType="active-with-space" />;
                                            case "/?step=5":
                                            case "/?step=7":
                                            default:
                                                return <AutoTabsPane paneId="w-tabs-0-data-w-pane-3" innerVariant="ugc" isActive={false} styleType="empty" />;
                                        }
                                    })()}
                                    {(() => {
                                        switch (current) {
                                            case "/":
                                            case "/?step=2":
                                            case "/?step=3":
                                            case "/?step=4":
                                                return <AutoTabsPane paneId="w-tabs-0-data-w-pane-4" innerVariant="tracking" isActive={false} styleType="none" />;
                                            case "/?step=5":
                                                return <AutoTabsPane paneId="w-tabs-0-data-w-pane-4" innerVariant="tracking" isActive={true} styleType="active-with-space" />;
                                            case "/?step=7":
                                            default:
                                                return <AutoTabsPane paneId="w-tabs-0-data-w-pane-4" innerVariant="tracking" isActive={false} styleType="empty" />;
                                        }
                                    })()}
                                </div>
                            </div>
                            <div className={"autoplay-tabs-custom-css w-embed"}>
                                <style>{`
@keyframes autoTabProgressFill {
    from { height: 0%; }
    to { height: 100%; }
}
`}</style>
                            </div>
                            <div className={"autoplay-tabs-custom-js w-embed w-script"}>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    

export default StackInfluenceSection
