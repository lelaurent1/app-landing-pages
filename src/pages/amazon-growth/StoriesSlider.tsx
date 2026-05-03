import React from 'react'

import { useLocation } from 'react-router-dom'
import StoryCard from './StoryCard.tsx'

function StoriesSlider() {
    return (
        <div className={"splide__list stories-wrap"} id={"stories-list"}>
            <StorySlide
                slideClass={"testimonials-01-list _01 splide__slide w-dyn-list"}
                slideId={"stories-slide01"}
            >
                <StoryCard dataId="0" />
            </StorySlide>

            <StorySlide
                slideClass={"testimonials-01-list _02 splide__slide w-dyn-list"}
                slideId={"stories-slide02"}
            >
                <StoryCard dataId="2" />
            </StorySlide>

            <StorySlide
                slideClass={"testimonials-01-list _03 splide__slide w-dyn-list"}
                slideId={"stories-slide03"}
            >
                <StoryCard dataId="4" />
            </StorySlide>
        </div>
    )
}

function StorySlide({
    slideClass,
    slideId,
    children
}: {
    slideClass: string;
    slideId: string;
    children: React.ReactNode;
}) {
    return (
        <div className={slideClass} id={slideId} style={{ height: "495px" }}>
            <div role={"list"} className={"story-wrapper w-dyn-items"}>
                <div role={"listitem"} className={"story-wrap w-dyn-item"}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default StoriesSlider
