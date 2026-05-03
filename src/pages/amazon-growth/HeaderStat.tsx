import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function HeaderStat({
            value,
            label,
            position
        }: {
            value: string;
            label: string;
            position?: "first" | "mid";
        }) {
            const positionClass = position ? ` ${position}` : "";
            return (
                <div className={`w-layout-vflex header-stat${positionClass}`}>
                    <div className={"stat-anim tiny"}>
                        {value}
                    </div>
                    <div className={"stat-body"}>
                        {label}
                    </div>
                </div>
            );
        }
    

export default HeaderStat
