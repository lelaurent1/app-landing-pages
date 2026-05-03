import React from 'react'

type BoosterTabData = {
    stepNumber: number;
    title: string;
    navigateRoutes: string[];
}

function BoosterTab({
    dataId,
    isActive,
    progressMs,
    id,
}: {
    dataId: string;
    isActive: boolean;
    progressMs?: number;
    id: string;
}) {
    const { stepNumber, title, navigateRoutes }: BoosterTabData = getBoosterTabData(dataId)

    const progressBarStyle: React.CSSProperties =
        isActive && progressMs
            ? { animation: `boosterTabProgress ${progressMs}ms linear forwards` }
            : { width: '0%' }

    return (
        <a
            className={`booster-tab-link w-inline-block w-tab-link${isActive ? ' w--current' : ''}`}
            id={id}
            role={"tab"}
            tabIndex={isActive ? undefined : -1}
            data-navigate-routes={JSON.stringify(navigateRoutes)}
            style={{ cursor: 'pointer' }}
        >
            <div className={"w-layout-hflex tab-header"}>
                <div className={"number sml"}>{stepNumber}</div>
                <div className={"step-title"}>{title}</div>
            </div>
            <div className={"tab-progress-bar-base"}>
                <div className={"tab-progress-bar"} style={progressBarStyle} />
            </div>
        </a>
    )
}

function getBoosterTabData(id: string): BoosterTabData {
    const data: Record<string, BoosterTabData> = {
        step1: {
            stepNumber: 1,
            title: 'Automate Creator Collaborations',
            navigateRoutes: ['/amazon-growth/g-find-amazon-influencers-test'],
        },
        step2: {
            stepNumber: 2,
            title: 'Scale Product Positioning & Growth',
            navigateRoutes: ['/amazon-growth/g-find-amazon-influencers-test?step=2'],
        },
        step3: {
            stepNumber: 3,
            title: 'Analyze, Optimize, and Scale',
            navigateRoutes: ['/amazon-growth/g-find-amazon-influencers-test?step=3'],
        },
    }
    return data[id] ?? { stepNumber: 1, title: '', navigateRoutes: [] }
}

export default BoosterTab
