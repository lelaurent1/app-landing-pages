import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'


    
// Component

        function StoreBadgeLink({
            className,
            imgId
        }: {
            className: string;
            imgId: string;
        }) {
            return (
                <a className={className}>
                    <Img id={imgId} />
                </a>
            );
        }
    

export default StoreBadgeLink
