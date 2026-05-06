import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import StoreBadgeLink from './StoreBadgeLink.tsx'
import FooterLink from './FooterLink.tsx'


// Component

        function SiteFooter({
            year,
            companyName,
            address
        }: {
            year: number;
            companyName: string;
            address: string;
        }) {
            return (
                <footer className={"footer"}>
                    <div className={"container-regular"}>
                        <div className={"w-layout-hflex newsletters"}>
                        </div>
                        <div className={"w-layout-hflex footer-logos-top"}>
                            <a className={"footer-logo w-nav-brand"}>
                                <div className={"f-logo-copy"}>
                                </div>
                            </a>
                            <div className={"w-layout-hflex flex-block-14"}>
                                <StoreBadgeLink
                                    className="link-block w-inline-block"
                                    imgId="45"
                                    href="https://apps.apple.com/us/app/stack-influence-creator-deals/id6481402069"
                                    store="ios"
                                />
                                <StoreBadgeLink
                                    className="link-block-2 w-inline-block"
                                    imgId="46"
                                    href="https://play.google.com/store/apps/details?id=com.stackinfluence.creators"
                                    store="android"
                                />
                            </div>
                        </div>
                        <div className={"footer-copyright"}>
                            <div className={"uui-footer05_legal-list-wrapper"}>
                                <div className={"footer-sml"}>
                                    ©
                                    <span>
                                        {year}
                                    </span>
                                    {companyName}
                                </div>
                                <div className={"footer-sml"}>
                                    {address}
                                </div>
                            </div>
                            <div className={"uui-footer05_legal-list-wrapper"}>
                                <div className={"w-layout-grid uui-footer05_legal-list"}>
                                    <FooterLink label="Creator terms" href="https://stackinfluence.com/influencer-terms" slug="creator-terms" />
                                    <FooterLink label="Website terms" href="https://stackinfluence.com/terms-conditions" slug="website-terms" />
                                    <FooterLink label="Privacy" href="https://stackinfluence.com/privacy-policy" slug="privacy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            )
        }
    

export default SiteFooter
