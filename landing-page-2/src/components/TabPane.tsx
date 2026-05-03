import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'


        type TabPaneData = {
            imgId: string;
            number: string;
            title: string;
            description: string;
        }
    
// Component

        function TabPane({
            dataId,
            baseClassName,
            isActive,
            styleVariant,
            paneId
        }: {
            dataId: string;
            baseClassName: string;
            isActive?: boolean;
            styleVariant: "none" | "activeComma" | "activeNoSpace";
            paneId: string;
        }) {
            const { imgId, number, title, description }: TabPaneData = getTabPaneData(dataId);

            const className = isActive
                ? `${baseClassName} w--tab-active`
                : baseClassName;

            let style: React.CSSProperties | undefined = undefined;

            if (styleVariant === "activeComma") {
                style = { opacity: "1", transition: "all, opacity 300ms" };
            } else if (styleVariant === "activeNoSpace") {
                style = { opacity: "1", transition: "all,opacity 300ms" };
            } else {
                style = undefined;
            }

            return (
                <div className={className} id={paneId} role={"tabpanel"} style={style}>
                    <div className={"autotab-side-content-wrap"}>
                        <Img id={imgId} />
                        <TabContent
                            number={number}
                            title={title}
                            description={description}
                        />
                    </div>
                </div>
            );
        }
    

// Subcomponents

        function TabContent({
            number,
            title,
            description
        }: {
            number: string;
            title: string;
            description: string;
        }) {
            return (
                <div animate={"up"} className={"autotab-side-content"}>
                    <div className={"w-layout-hflex tabbed-title-wrap"}>
                        <div className={"number-static"}>
                            {number}
                        </div>
                        <h3 className={"stage-title"}>
                            {title}
                        </h3>
                    </div>
                    <p className={"autotab-copy"}>
                        {description}
                    </p>
                </div>
            );
        }
    


        function getTabPaneData(id: string): TabPaneData {
            const key = String(id);
            if (key === "0") {
                return {
                    imgId: "39",
                    number: "1",
                    title: "Automate influencers powered by AI",
                    description:
                        "Tap into an AI-driven Influencer software that validates profiles, streamlines product seeding, automates your creator collaboration process, and provides an easy way to track all results, download assets, and double down on winners."
                };
            }
            if (key === "1") {
                return {
                    imgId: "40",
                    number: "2",
                    title: "Drive external traffic and improve visibility",
                    description:
                        "Scale external traffic to marketplaces, generate rights‑cleared UGC for product listings & ads, and increase your listings visibility and conversions. Beat out your competition with existing listings and turn new product launches into best sellers."
                };
            }
            return {
                imgId: "41",
                number: "3",
                title: "Track results and double down on winners",
                description:
                    "Monitor creator statuses, live links, and performance in one simple dashboard. Activate and scale commission‑based creators (through your favorite affiliate softwares) to keep content and sales flowing in the long term."
            };
        }
    

export default TabPane
