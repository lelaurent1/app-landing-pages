import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Img from './Img.tsx'
import HeaderStat from './HeaderStat.tsx'

import catalogImg from '/assets/attachments/6971348d38d8897d26b5077d_4ee3bb8c26c55a470cc3b99eb9f528f1_catalog.webp'


// Component
function CampaignHeader() {
    return <header className={"secondary-header-wrapper"}>
        <div className={"container-regular"}>
            <div className={"w-layout-grid campaign-header"}>
                <div className={"w-layout-vflex pricing-header-wrapper"}>
                    <div className={"w-layout-hflex flex-block-102"}>
                        <Img id="1" />
                        <Img id="2" />
                    </div>
                    <h1 className={"page-title"}>
                        Automate influencers for
                        <span className={"header-itals"}>
                            Amazon listing growth
                        </span>
                    </h1>
                    <p>
                        Find, connect and automate amazon influencer relationships at scale to help you launch new products, gather UGC, increase reviews, grow sales, and become a top listing on Amazon.
                    </p>
                    <div id={"w-node-ec06864a-af6d-d7ea-171d-6a7546e631e0-6ac5eb65"} className={"w-layout-hflex small-stats-wrap"}>

                                    <HeaderStat value="340k" label="vetted creators" position="first" />


                                    <HeaderStat value="175hrs" label="saved per month" position="mid" />


                                    <HeaderStat value="4x" label="ad conversions" />

                    </div>
                    <div
                        style={{
                            marginTop: "var(--_variable-spacing---component-spacing)",
                            display: "flex",
                            justifyContent: "flex-start",
                            width: "100%",
                        }}
                    >
                        <a
                            className={"button"}
                            style={{
                                gap: "12px",
                                cursor: "pointer",
                                textDecoration: "none",
                                height: "60px",
                                paddingLeft: "34px",
                                paddingRight: "34px",
                                fontSize: "1.05rem",
                            }}
                        >
                            Define Your Goals &amp; Product
                            <ArrowRight size={22} strokeWidth={2} />
                        </a>
                    </div>
                </div>
                <div
                    id={"w-node-ec06864a-af6d-d7ea-171d-6a7546e631f0-6ac5eb65"}
                    className={"div-block-36"}
                    style={{
                        padding: 0,
                        border: "none",
                        background: "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src={catalogImg}
                        alt="Stack Influence catalog interface showing skincare and fashion products available for influencer campaigns"
                        style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            borderRadius: "var(--radius)",
                            boxShadow: "0 12px 40px rgba(20, 26, 33, 0.08)",
                        }}
                    />
                </div>
            </div>
        </div>
    </header>}


export default CampaignHeader
