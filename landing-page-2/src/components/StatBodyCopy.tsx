import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function StatBodyCopy({
            text
        }: {
            text: string;
        }) {
            return (
                <div className={"stat-body-copy"}>
                    {text}
                </div>
            );
        }
    

export default StatBodyCopy
