import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import PublicationLogos from './PublicationLogos.tsx'
import StackInfluenceSection from './StackInfluenceSection.tsx'


    
// Component

        function LogoStackSection() {
            return (
                <main>
                    <div
                        className={"section-logo-wrap"}
                        style={{ marginTop: "20px", marginBottom: "20px", rowGap: "16px" }}
                    >
                        <div className={"div-block-19"}>
                        </div>
                        <div className={"carousel-2 transparent-5"}>
                            <div
                                className={"logo-carousel-wrap"}
                                style={{
                                    translate: "none",
                                    rotate: "none",
                                    scale: "none",
                                    animation: "logoMarquee 40s linear infinite",
                                    willChange: "transform"
                                }}
                            >
                                <PublicationLogos />
                                <PublicationLogos />
                                <PublicationLogos />
                            </div>
                        </div>
                    </div>
                    <div className={"spacer-half"} style={{ height: "16px" }}>
                    </div>
                    <StackInfluenceSection />
                    <style>{`
@keyframes logoMarquee {
    from { transform: translate3d(0, 0, 0); }
    to { transform: translate3d(-33.3333%, 0, 0); }
}
@media (prefers-reduced-motion: reduce) {
    .logo-carousel-wrap { animation: none !important; }
}
`}</style>
                </main>
            )
        }
    

export default LogoStackSection
