import React, { useEffect } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import BoosterTab from './BoosterTab.tsx'
import TabPane from './TabPane.tsx'
import HeaderItals from '../../shared/HeaderItals.tsx'

const STEP_SEARCHES = ['', '?step=2', '?step=3'] as const

const CYCLE_MS = 6000

function CampaignProcessSection() {
    const location = useLocation()
    const navigate = useNavigate()
    const searchIdx = STEP_SEARCHES.indexOf(location.search as typeof STEP_SEARCHES[number])
    const activeIdx = searchIdx === -1 ? 0 : searchIdx

    useEffect(() => {
        const nextSearch = STEP_SEARCHES[(activeIdx + 1) % STEP_SEARCHES.length]
        const timer = window.setTimeout(
            () => navigate(nextSearch || location.pathname, { replace: true }),
            CYCLE_MS,
        )
        return () => window.clearTimeout(timer)
    }, [activeIdx, navigate, location.pathname])

    return (
        <section className={"section-24"}>
            <div className={"hidden"}>
                <div className={"w-embed w-script"}></div>
            </div>
            <div className={"w-layout-blockcontainer container-regular w-container"}>
                <div className={"w-layout-vflex _3-tab-wrap"}>
                    <div className={"w-layout-vflex flex-block-60"}>
                        <h2 className={"preheader"}>our campaign process</h2>
                        <p className={"sr-only"}>From product seeding to product growth</p>
                        <div role={"group"} animate={"word"} className={"section-title"}>
                            From product seeding to<HeaderItals>product growth</HeaderItals>
                        </div>
                    </div>
                    <div className={"auto-tabs w-tabs"}>
                        <div className={"booster-tab-menu w-tab-menu"} role={"tablist"}>
                            <BoosterTab
                                dataId="step1"
                                isActive={activeIdx === 0}
                                progressMs={activeIdx === 0 ? CYCLE_MS : undefined}
                                id="w-tabs-0-data-w-tab-0"
                            />
                            <BoosterTab
                                dataId="step2"
                                isActive={activeIdx === 1}
                                progressMs={activeIdx === 1 ? CYCLE_MS : undefined}
                                id="w-tabs-0-data-w-tab-1"
                            />
                            <BoosterTab
                                dataId="step3"
                                isActive={activeIdx === 2}
                                progressMs={activeIdx === 2 ? CYCLE_MS : undefined}
                                id="w-tabs-0-data-w-tab-2"
                            />
                        </div>
                        <div className={"tabs-content w-tab-content"}>
                            <TabPane
                                dataId="0"
                                baseClassName="tab-pane-tab-1 w-tab-pane"
                                isActive={activeIdx === 0}
                                styleVariant={activeIdx === 0 ? 'activeNoSpace' : 'none'}
                                paneId="w-tabs-0-data-w-pane-0"
                            />
                            <TabPane
                                dataId="1"
                                baseClassName="w-tab-pane"
                                isActive={activeIdx === 1}
                                styleVariant={activeIdx === 1 ? 'activeComma' : 'none'}
                                paneId="w-tabs-0-data-w-pane-1"
                            />
                            <TabPane
                                dataId="2"
                                baseClassName="w-tab-pane"
                                isActive={activeIdx === 2}
                                styleVariant={activeIdx === 2 ? 'activeComma' : 'none'}
                                paneId="w-tabs-0-data-w-pane-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
@keyframes boosterTabProgress {
    from { width: 0%; }
    to { width: 100%; }
}
`}</style>
        </section>
    )
}

export default CampaignProcessSection
