import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import { track } from '../../lib/analytics.ts'


    
// Component

        function StoreBadgeLink({
            className,
            imgId,
            href,
            store
        }: {
            className: string;
            imgId: string;
            href: string;
            store: 'ios' | 'android';
        }) {
            return (
                <a
                    className={className}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track('App Badge Clicked', { store, target_url: href })}
                >
                    <Img id={imgId} />
                </a>
            );
        }
    

export default StoreBadgeLink
