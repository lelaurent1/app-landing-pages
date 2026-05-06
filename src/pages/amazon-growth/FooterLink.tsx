import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import { track } from '../../lib/analytics.ts'

type FooterLinkSlug = 'creator-terms' | 'website-terms' | 'privacy'


    
// Component

        function FooterLink({
            label,
            href,
            slug
        }: {
            label: string;
            href: string;
            slug: FooterLinkSlug;
        }) {
            return (
                <a
                    className={"footer-sml"}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track('Footer Link Clicked', { link: slug, target_url: href })}
                >
                    {label}
                </a>
            );
        }
    

export default FooterLink
