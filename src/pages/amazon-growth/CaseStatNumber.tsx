import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function CaseStatNumber({
            value
        }: {
            value: string;
        }) {
            return (
                <div className={"case-stat-number"}>
                    {value}
                </div>
            );
        }
    

export default CaseStatNumber
