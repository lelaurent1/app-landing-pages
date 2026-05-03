import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import BenefitBlock from './BenefitBlock.tsx'


// Component

function BenefitsSection({
  dataId
}: {
  dataId: string;
}) {
  const { benefits }: BenefitsSectionData = getBenefitsSectionData(dataId);

  return (
    <section className={"section-benefits"}>
      <div className={"container-regular"}>
        <div className={"w-layout-vflex flex-block-21"}>
          <div className={"w-layout-vflex benefits-wrap"}>
            <div className={"w-layout-grid grid-3-cols"}>
              {benefits.map((benefit) => (
                <BenefitBlock
                  key={benefit.imgId}
                  imgId={benefit.imgId}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
    


type BenefitsSectionData = {
  benefits: {
    imgId: string;
    title: string;
    description: string;
  }[];
};

function getBenefitsSectionData(id: string): BenefitsSectionData {
  const key = String(id);

  const data: Record<string, BenefitsSectionData> = {
    "0": {
      benefits: [
        {
          imgId: "33",
          title: "Scale Micro Influence Promotions",
          description:
            "Easily collaborate with hundreds or thousands of Micro Influencers simultaneously delivering higher engagement and trust than celebrities."
        },
        {
          imgId: "34",
          title: "Automate Product Seeding",
          description:
            "Instead of negotiating fees with every creator, you simply pay Micro Influencers with your products and automate the process with A.I."
        },
        {
          imgId: "35",
          title: "Accumulate User-Generated Content",
          description:
            "Turn creator generated photos, videos, and product testimonials into a content war chest to use across ads and marketing materials."
        },
        {
          imgId: "36",
          title: "Drive External Traffic",
          description:
            "Direct influencers and their followers to your Amazon listings so you can accelerate sales velocity and boost organic discoverability."
        },
        {
          imgId: "37",
          title: "Improve Search Positioning",
          description:
            "Improve sales velocity and conversion history to help push your marketplace listings up the search results and increase recurring revenue."
        },
        {
          imgId: "38",
          title: "Strengthen Conversion Rates",
          description:
            "Improve consumer trust and conversion rates by integrating authentic UGC photos, videos and testimonials into your product listings."
        }
      ]
    }
  };

  return data[key] || data["0"];
}
    

export default BenefitsSection
