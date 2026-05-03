import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import AutoTab from './AutoTab.tsx'


    
// Component

        function AutoTabsPane({
            paneId,
            innerVariant,
            isActive,
            styleType
        }: {
            paneId: string;
            innerVariant: string;
            isActive: boolean;
            styleType: "none" | "empty" | "active-no-space" | "active-with-space";
        }) {
            const className = `auto-tabs-content-item w-tab-pane${isActive ? " w--tab-active" : ""}`;

            const activeStyleNoSpace = { opacity: "1", transition: "all,opacity 300ms ease-in-out" };
            const activeStyleWithSpace = { opacity: "1", transition: "all, opacity 300ms ease-in-out" };

            if (styleType === "none") {
                return (
                    <div className={className} id={paneId} role={"tabpanel"}>
                        <div className={`auto-tabs-content-inner ${innerVariant}`}>
                        </div>
                    </div>
                );
            }

            if (styleType === "empty") {
                return (
                    <div className={className} id={paneId} role={"tabpanel"} style={{}}>
                        <div className={`auto-tabs-content-inner ${innerVariant}`}>
                        </div>
                    </div>
                );
            }

            if (styleType === "active-no-space") {
                return (
                    <div className={className} id={paneId} role={"tabpanel"} style={activeStyleNoSpace}>
                        <div className={`auto-tabs-content-inner ${innerVariant}`}>
                        </div>
                    </div>
                );
            }

            return (
                <div className={className} id={paneId} role={"tabpanel"} style={activeStyleWithSpace}>
                    <div className={`auto-tabs-content-inner ${innerVariant}`}>
                    </div>
                </div>
            );
        }
    

export default AutoTabsPane
