import React from 'react'

import LogoBanner from '../../shared/LogoBanner.tsx'
import Img from './Img.tsx'
import StackInfluenceSection from './StackInfluenceSection.tsx'

const LOGO_IDS = Array.from({ length: 30 }, (_, i) => String(i))

function LogoStackSection() {
    return (
        <main>
            <LogoBanner imgIds={LOGO_IDS} ImgComponent={Img} />
            <div className={"spacer-half"} style={{ height: "16px" }} />
            <StackInfluenceSection />
        </main>
    )
}

export default LogoStackSection
