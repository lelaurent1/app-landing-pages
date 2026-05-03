import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'


    
// Component

        function BenefitBlock({
            imgId,
            title,
            description
        }: {
            imgId: string;
            title: string;
            description: string;
        }) {
            return (
                <section animate={"up"} className={"benefits-block w-variant-9aa7ad0f-7e4c-4933-fd06-dc0070afca2c"}>
                    <Img id={imgId} />
                    <div className={"w-layout-vflex benefit-wrap w-variant-9aa7ad0f-7e4c-4933-fd06-dc0070afca2c"}>
                        <p className={"paragraph-14"}>
                            {title}
                        </p>
                        <p className={"body-grey w-variant-9aa7ad0f-7e4c-4933-fd06-dc0070afca2c"}>
                            {description}
                        </p>
                    </div>
                </section>
            );
        }
    

export default BenefitBlock
