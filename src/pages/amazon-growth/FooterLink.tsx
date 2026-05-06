import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function FooterLink({
            label,
            href
        }: {
            label: string;
            href: string;
        }) {
            return (
                <a className={"footer-sml"} href={href} target="_blank" rel="noopener noreferrer">
                    {label}
                </a>
            );
        }
    

export default FooterLink
