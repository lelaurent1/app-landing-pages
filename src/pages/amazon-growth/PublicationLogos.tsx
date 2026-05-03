import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'


// Component

        function PublicationLogos() {
            return (
                <ul role={"list"} className={"publication-logos"}>
                    <LogoItem imgId="3" />
                    <LogoItem imgId="4" />
                    <LogoItem imgId="5" />
                    <LogoItem imgId="6" />
                    <LogoItem imgId="7" />
                    <LogoItem imgId="8" />
                    <LogoItem imgId="9" />
                    <LogoItem imgId="10" />
                    <LogoItem imgId="11" />
                    <LogoItem imgId="12" />
                    <LogoItem imgId="13" />
                    <LogoItem imgId="14" />
                    <LogoItem imgId="15" />
                    <LogoItem imgId="16" />
                    <LogoItem imgId="17" />
                    <LogoItem imgId="18" />
                    <LogoItem imgId="19" />
                    <LogoItem imgId="20" />
                    <LogoItem imgId="21" />
                    <LogoItem imgId="22" />
                    <LogoItem imgId="23" />
                    <LogoItem imgId="24" />
                    <LogoItem imgId="25" />
                    <LogoItem imgId="26" />
                    <LogoItem imgId="27" />
                    <LogoItem imgId="28" />
                    <LogoItem imgId="29" />
                    <LogoItem imgId="30" />
                    <LogoItem imgId="31" />
                    <LogoItem imgId="32" />
                </ul>
            );
        }
    

// Subcomponents

        function LogoItem({ imgId }: { imgId: string }) {
            return (
                <li className={"logo"}>
                    <Img id={imgId} />
                </li>
            );
        }
    

export default PublicationLogos
