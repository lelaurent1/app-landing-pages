import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


        type AutoTabData = {
            id: string;
            navigateRoutes: string;
            wrapperClassName: string;
            wrapperNavigateRoutes?: string;
            stepNumber: string;
            title: string;
            titleNavigateRoutes?: string;
            wrapTitleWithOverflow: boolean;
            description: string;
            descriptionOverflowExtraClass?: string;
            contentInnerModifier: string;
        }

// Component

        function AutoTab({
            dataId,
            isActive,
            progressMs
        }: {
            dataId: string;
            isActive?: boolean;
            progressMs?: number;
        }) {
            const {
                id,
                navigateRoutes,
                wrapperClassName,
                wrapperNavigateRoutes,
                stepNumber,
                title,
                titleNavigateRoutes,
                wrapTitleWithOverflow,
                description,
                descriptionOverflowExtraClass,
                contentInnerModifier
            }: AutoTabData = getAutoTabData(dataId);

            return (
                <a
                    data-auto-tabs={"link"}
                    className={`auto-tabs-link w-inline-block w-tab-link${isActive ? " w--current" : ""}`}
                    id={id}
                    role={"tab"}
                    {...(!isActive ? { tabIndex: -1 } : {})}
                    data-navigate-routes={navigateRoutes}
                >
                    <div
                        className={wrapperClassName}
                        {...(wrapperNavigateRoutes
                            ? { "data-navigate-routes": wrapperNavigateRoutes }
                            : {})}
                    >
                        <div className={"auto-tabs-link-title"}>
                            <div className={"number-autotab"}>
                                {stepNumber}
                            </div>
                            {wrapTitleWithOverflow ? (
                                <div className={"overflow-hidden"}>
                                    <div
                                        className={"step-title"}
                                        {...(titleNavigateRoutes
                                            ? { "data-navigate-routes": titleNavigateRoutes }
                                            : {})}
                                    >
                                        {title}
                                    </div>
                                </div>
                            ) : (
                                <div
                                    className={"step-title"}
                                    {...(titleNavigateRoutes
                                        ? { "data-navigate-routes": titleNavigateRoutes }
                                        : {})}
                                >
                                    {title}
                                </div>
                            )}
                        </div>
                        <div className={"auto-tabs-description"}>
                            <div
                                className={`overflow-hidden${descriptionOverflowExtraClass ? " " + descriptionOverflowExtraClass : ""}`}
                            >
                                <p className={"autotab-copy"}>
                                    {description}
                                </p>
                                <div
                                    className={`auto-tabs-content-inner ${contentInnerModifier}`}
                                >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        data-auto-tabs={"bar"}
                        className={"auto-tabs-progress-bar"}
                        style={
                            isActive && progressMs
                                ? { animation: `autoTabProgressFill ${progressMs}ms linear forwards` }
                                : { height: "0%" }
                        }
                    >
                    </div>
                </a>
            );
        }


function getAutoTabData(id: string): AutoTabData  {
    switch (String(id)) {
    case "0":
        return {
            "id": "w-tabs-0-data-w-tab-0",
            "navigateRoutes": JSON.stringify(["/#w-tabs-0-data-w-pane-0"]),
            "wrapperClassName": "w-layout-vflex auto-tab-wrap",
            "wrapperNavigateRoutes": undefined,
            "stepNumber": "1",
            "title": "Rank #1 on Marketplaces like Amazon",
            "titleNavigateRoutes": JSON.stringify(["/?step=7"]),
            "wrapTitleWithOverflow": true,
            "description": "Improve rankings by boosting external sales traffic, ratings and reviews (ToS complaint)",
            "descriptionOverflowExtraClass": "yep",
            "contentInnerModifier": "define"
        };
    case "1":
        return {
            "id": "w-tabs-0-data-w-tab-0",
            "navigateRoutes": JSON.stringify(["/#w-tabs-0-data-w-pane-0"]),
            "wrapperClassName": "w-layout-vflex auto-tab-wrap",
            "wrapperNavigateRoutes": undefined,
            "stepNumber": "1",
            "title": "Rank #1 on Marketplaces like Amazon",
            "titleNavigateRoutes": JSON.stringify(["/?step=7"]),
            "wrapTitleWithOverflow": true,
            "description": "Improve rankings by boosting external sales traffic, ratings and reviews (ToS complaint)",
            "descriptionOverflowExtraClass": "yep",
            "contentInnerModifier": "define"
        };
    case "2":
        return {
            "id": "w-tabs-0-data-w-tab-1",
            "navigateRoutes": "[\"/?step=2\"]",
            "wrapperClassName": "w-layout-vflex auto-tab-wrap",
            "wrapperNavigateRoutes": undefined,
            "stepNumber": "2",
            "title": "Pay Creators in Product",
            "titleNavigateRoutes": undefined,
            "wrapTitleWithOverflow": true,
            "description": "Our creators will buy your product at full price to receive it.",
            "descriptionOverflowExtraClass": undefined,
            "contentInnerModifier": "match-making"
        };
    case "3":
        return {
            "id": "w-tabs-0-data-w-tab-1",
            "navigateRoutes": "[\"/?step=2\"]",
            "wrapperClassName": "w-layout-vflex auto-tab-wrap",
            "wrapperNavigateRoutes": undefined,
            "stepNumber": "2",
            "title": "Pay Creators in Product",
            "titleNavigateRoutes": undefined,
            "wrapTitleWithOverflow": true,
            "description": "Our creators will buy your product at full price to receive it.",
            "descriptionOverflowExtraClass": undefined,
            "contentInnerModifier": "match-making"
        };
    case "4":
        return {
            "id": "w-tabs-0-data-w-tab-2",
            "navigateRoutes": "[\"/#w-tabs-0-data-w-pane-2\"]",
            "wrapperClassName": "w-layout-vflex auto-tab-wrap",
            "wrapperNavigateRoutes": "[\"/?step=3\"]",
            "stepNumber": "3",
            "title": "Fully Managed Campaign with Reporting",
            "titleNavigateRoutes": undefined,
            "wrapTitleWithOverflow": false,
            "description": "We automate reimbursement payment on your behalf and provide tracking info everything.",
            "descriptionOverflowExtraClass": undefined,
            "contentInnerModifier": "seeding"
        };
    case "5":
        return {
            "id": "w-tabs-0-data-w-tab-2",
            "navigateRoutes": "[\"/#w-tabs-0-data-w-pane-2\"]",
            "wrapperClassName": "w-layout-vflex auto-tab-wrap",
            "wrapperNavigateRoutes": "[\"/?step=3\"]",
            "stepNumber": "3",
            "title": "Fully Managed Campaign with Reporting",
            "titleNavigateRoutes": undefined,
            "wrapTitleWithOverflow": false,
            "description": "We automate reimbursement payment on your behalf and provide tracking info everything.",
            "descriptionOverflowExtraClass": undefined,
            "contentInnerModifier": "seeding"
        };
    case "6":
        return {
            "id": "w-tabs-0-data-w-tab-3",
            "navigateRoutes": "[\"/#w-tabs-0-data-w-pane-3\"]",
            "wrapperClassName": "w-layout-vflex auto-tab-wrap",
            "wrapperNavigateRoutes": "[\"/?step=4\"]",
            "stepNumber": "4",
            "title": "Case Studies",
            "titleNavigateRoutes": undefined,
            "wrapTitleWithOverflow": false,
            "description": "Brands like Magic Spoon, and Farmacy Beauty launch all their new ASINs on Stack.",
            "descriptionOverflowExtraClass": undefined,
            "contentInnerModifier": "ugc"
        };
    case "7":
        return {
            "id": "w-tabs-0-data-w-tab-3",
            "navigateRoutes": JSON.stringify(["/#w-tabs-0-data-w-pane-3"]),
            "wrapperClassName": "w-layout-vflex auto-tab-wrap",
            "wrapperNavigateRoutes": JSON.stringify(["/?step=4"]),
            "stepNumber": "4",
            "title": "Case Studies",
            "titleNavigateRoutes": undefined,
            "wrapTitleWithOverflow": false,
            "description": "Brands like Magic Spoon, and Farmacy Beauty launch all their new ASINs on Stack.",
            "descriptionOverflowExtraClass": undefined,
            "contentInnerModifier": "ugc"
        };
    case "8":
        return {
            "id": "w-tabs-0-data-w-tab-4",
            "navigateRoutes": JSON.stringify(["/#w-tabs-0-data-w-pane-4"]),
            "wrapperClassName": "w-layout-vflex auto-tab-wrap",
            "wrapperNavigateRoutes": undefined,
            "stepNumber": "5",
            "title": "Pricing",
            "titleNavigateRoutes": JSON.stringify(["/?step=5"]),
            "wrapTitleWithOverflow": false,
            "description": "Can go as low as $299 per month + $15 per influencer post.",
            "descriptionOverflowExtraClass": undefined,
            "contentInnerModifier": "tracking"
        };
    case "9":
        return {
            "id": "w-tabs-0-data-w-tab-4",
            "navigateRoutes": "[\"/#w-tabs-0-data-w-pane-4\"]",
            "wrapperClassName": "w-layout-vflex auto-tab-wrap",
            "wrapperNavigateRoutes": undefined,
            "stepNumber": "5",
            "title": "Pricing",
            "titleNavigateRoutes": "[\"/?step=5\"]",
            "wrapTitleWithOverflow": false,
            "description": "Can go as low as $299 per month + $15 per influencer post.",
            "descriptionOverflowExtraClass": undefined,
            "contentInnerModifier": "tracking"
        };
    default:
        return {
            "id": "w-tabs-0-data-w-tab-0",
            "navigateRoutes": JSON.stringify(["/#w-tabs-0-data-w-pane-0"]),
            "wrapperClassName": "w-layout-vflex auto-tab-wrap",
            "wrapperNavigateRoutes": undefined,
            "stepNumber": "1",
            "title": "Rank #1 on Marketplaces like Amazon",
            "titleNavigateRoutes": JSON.stringify(["/?step=7"]),
            "wrapTitleWithOverflow": true,
            "description": "Improve rankings by boosting external sales traffic, ratings and reviews (ToS complaint)",
            "descriptionOverflowExtraClass": "yep",
            "contentInnerModifier": "define"
        };
    }
}


export default AutoTab
