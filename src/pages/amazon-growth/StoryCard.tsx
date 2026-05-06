import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import CaseStatNumber from './CaseStatNumber.tsx'
import StatBodyCopy from './StatBodyCopy.tsx'


        type StoryCardData = {
            imageVariant: string;
            imgId: string;
            brand: string;
            title: string;
            url: string;
            stats: {
                value: string;
                label: string;
                isLast?: boolean;
            }[];
            hasTabIndex?: boolean;
        }
    
// Component

        function StoryCard({
            dataId
        }: {
            dataId: string;
        }) {
            const {
                imageVariant,
                imgId,
                brand,
                title,
                url,
                stats,
                hasTabIndex
            }: StoryCardData = getStoryCardData(dataId);

            return (
                <a
                    className={"story-link w-inline-block"}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...(hasTabIndex ? { tabIndex: "-1" } : {})}
                >
                    <div className={`testimonials-01-image-box ${imageVariant}`}>
                        <Img id={imgId} />
                        <div className={"shadow-cover"}>
                        </div>
                    </div>
                    <div
                        className={`testimonials-01-list-details ${imageVariant}`}
                    >
                        <div className={"stories-card-content"}>
                            <div className={"stories-card-title-wrap"}>
                                <div className={"small-losenge"}>
                                    {brand}
                                </div>
                                <h3 className={"cs-card-title"}>
                                    {title}
                                </h3>
                            </div>
                            <div className={"w-layout-hflex card-stats"}>
                                {stats.map((stat, index) => (
                                    <StatItem
                                        key={index}
                                        value={stat.value}
                                        label={stat.label}
                                        isLast={stat.isLast}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </a>
            );
        }
    

// Subcomponents

        function StatItem({
            value,
            label,
            isLast
        }: {
            value: string;
            label: string;
            isLast?: boolean;
        }) {
            return (
                <div className={`w-layout-vflex card-stat${isLast ? " last" : ""}`}>
                    <CaseStatNumber value={value} />
                    <StatBodyCopy text={label} />
                </div>
            );
        }
    

function getStoryCardData(id): StoryCardData  {
    switch (String(id)) {
    case "0":
        return {
                  "imageVariant": "_02",
                  "imgId": "42",
                  "brand": "Aunt Fannie's",
                  "title": "Aunt Fannie’s scaled an eco-cleaner to 8x Amazon sales in 90 days",
                  "url": "https://stackinfluence.com/customer-stories/aunt-fannies",
                  "stats": [
                    { "value": "8x", "label": "Revenue", "isLast": undefined },
                    { "value": "528k", "label": "Impressions", "isLast": undefined },
                    { "value": "3.5x", "label": "Rank Boost", "isLast": true }
                  ],
                  "hasTabIndex": undefined
                };
    case "1":
        return {
                    "imageVariant": "_02",
                    "imgId": "42",
                    "brand": "Aunt Fannie's",
                    "title": "Aunt Fannie’s scaled an eco-cleaner to 8x Amazon sales in 90 days",
                    "url": "https://stackinfluence.com/customer-stories/aunt-fannies",
                    "hasTabIndex": undefined,
                    "stats": [
                        { "value": "8x", "label": "Revenue", "isLast": undefined },
                        { "value": "528k", "label": "Impressions", "isLast": undefined },
                        { "value": "3.5x", "label": "Rank Boost", "isLast": true }
                    ]
                };
    case "2":
        return {
                    "imageVariant": "_01",
                    "imgId": "43",
                    "brand": "Naked Sunday",
                    "title": "How Naked Sunday scaled BeautyScreen™ to 10x Amazon sales in 4 months",
                    "url": "https://stackinfluence.com/customer-stories/naked-sunday",
                    "hasTabIndex": true,
                    "stats": [
                        { "value": "10x", "label": "Revenue", "isLast": undefined },
                        { "value": "1.4m", "label": "Impressions", "isLast": undefined },
                        { "value": "2.4x", "label": "Rank Boost", "isLast": true }
                    ]
                };
    case "3":
        return {
                    "imageVariant": "_01",
                    "imgId": "43",
                    "brand": "Naked Sunday",
                    "title": "How Naked Sunday scaled BeautyScreen™ to 10x Amazon sales in 4 months",
                    "url": "https://stackinfluence.com/customer-stories/naked-sunday",
                    "hasTabIndex": true,
                    "stats": [
                        { "value": "10x", "label": "Revenue", "isLast": undefined },
                        { "value": "1.4m", "label": "Impressions", "isLast": undefined },
                        { "value": "2.4x", "label": "Rank Boost", "isLast": true }
                    ]
                };
    case "4":
        return {
                  "imageVariant": "_03",
                  "imgId": "44",
                  "brand": "Inopro",
                  "title": "InoPro scaled Amazon sales 7x with Influencer-driven demand",
                  "url": "https://stackinfluence.com/customer-stories/inopro",
                  "hasTabIndex": true,
                  "stats": [
                    { "value": "7x", "label": "Monthly Sales", "isLast": undefined },
                    { "value": "4.3x", "label": "Rank Boost", "isLast": undefined },
                    { "value": "1.3m", "label": "Impressions", "isLast": true }
                  ]
                };
    default:
        return {
                  "imageVariant": "_02",
                  "imgId": "42",
                  "brand": "Aunt Fannie's",
                  "title": "Aunt Fannie’s scaled an eco-cleaner to 8x Amazon sales in 90 days",
                  "url": "https://stackinfluence.com/customer-stories/aunt-fannies",
                  "stats": [
                    { "value": "8x", "label": "Revenue", "isLast": undefined },
                    { "value": "528k", "label": "Impressions", "isLast": undefined },
                    { "value": "3.5x", "label": "Rank Boost", "isLast": true }
                  ],
                  "hasTabIndex": undefined
                };
    }
}


export default StoryCard
