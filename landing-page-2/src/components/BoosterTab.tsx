import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


        type BoosterTabData = {
            stepNumber: number;
            title: string;
            navigateRoutes?: string[];
        }
    
// Component

        function BoosterTab({
            dataId,
            isActive,
            progress,
            tabIndexValue,
            id
        }: {
            dataId: string;
            isActive?: boolean;
            progress?: string;
            tabIndexValue?: string;
            id: string;
        }) {
            const { stepNumber, title, navigateRoutes }: BoosterTabData = getBoosterTabData(dataId);
            return (
                <a
                    className={`booster-tab-link w-inline-block w-tab-link${isActive ? " w--current" : ""}`}
                    id={id}
                    role={"tab"}
                    style={progress !== undefined ? {"--fb-tab-progress": progress} as React.CSSProperties : (tabIndexValue === undefined ? undefined : {})}
                    tabIndex={tabIndexValue}
                >
                    <div className={"w-layout-hflex tab-header"}>
                        <div className={"number sml"}>
                            {stepNumber}
                        </div>
                        <div
                            className={"step-title"}
                            data-navigate-routes={navigateRoutes ? JSON.stringify(navigateRoutes) : undefined}
                        >
                            {title}
                        </div>
                    </div>
                    <div className={"tab-progress-bar-base"}>
                        <div className={"tab-progress-bar"}>
                        </div>
                    </div>
                </a>
            );
        }
    


        function getBoosterTabData(id: string): BoosterTabData {
            const key = String(id);
            const data: Record<string, BoosterTabData> = {
                "step1": {
                    stepNumber: 1,
                    title: "Automate Creator Collaborations"
                },
                "step2": {
                    stepNumber: 2,
                    title: "Scale Product Positioning & Growth",
                    navigateRoutes: ["/amazon-growth/g-find-amazon-influencers-test?step=2"]
                },
                "step3": {
                    stepNumber: 3,
                    title: "Analyze, Optimize, and Scale",
                    navigateRoutes: ["/amazon-growth/g-find-amazon-influencers-test?step=3"]
                }
            };
            return data[key] ?? {
                stepNumber: 1,
                title: ""
            };
        }
    

export default BoosterTab
