import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'


    
// Component

        function StoreBadgeLink({
            className,
            imgId,
            href
        }: {
            className: string;
            imgId: string;
            href: string;
        }) {
            return (
                <a className={className} href={href} target="_blank" rel="noopener noreferrer">
                    <Img id={imgId} />
                </a>
            );
        }
    

export default StoreBadgeLink
