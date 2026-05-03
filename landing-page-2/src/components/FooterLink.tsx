import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function FooterLink({
            label
        }: {
            label: string;
        }) {
            return (
                <a className={"footer-sml"}>
                    {label}
                </a>
            );
        }
    

export default FooterLink
