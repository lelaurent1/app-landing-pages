import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { track } from '../../lib/analytics.ts'

type BoosterTabData = {
    stepNumber: number;
    title: string;
    searchParam: string;
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
    const { stepNumber, title, searchParam }: BoosterTabData = getBoosterTabData(dataId)
    const location = useLocation()
    const navigate = useNavigate()

    const progressBarStyle: React.CSSProperties =
        isActive && progressMs
            ? { animation: `boosterTabProgress ${progressMs}ms linear forwards` }
            : { width: '0%' }

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        track('Process Tab Clicked', { page: 'page-2', step: stepNumber })
        navigate(searchParam || location.pathname, { replace: true })
    }

    return (
        <a
            className={`booster-tab-link w-inline-block w-tab-link${isActive ? ' w--current' : ''}`}
            id={id}
            role={"tab"}
            tabIndex={isActive ? undefined : -1}
            onClick={handleClick}
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
            searchParam: '',
        },
        step2: {
            stepNumber: 2,
            title: 'Scale Product Positioning & Growth',
            searchParam: '?step=2',
        },
        step3: {
            stepNumber: 3,
            title: 'Analyze, Optimize, and Scale',
            searchParam: '?step=3',
        },
    }
    return data[id] ?? { stepNumber: 1, title: '', searchParam: '' }
}

export default BoosterTab
