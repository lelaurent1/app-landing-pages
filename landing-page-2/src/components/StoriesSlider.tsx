import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import StoryCard from './StoryCard.tsx'


    
// Component

        function StoriesSlider({
            slide1Width,
            slide2Width
        }: {
            slide1Width: string;
            slide2Width: string;
        }) {
            return (
                <div className={"splide__list stories-wrap"} id={"stories-list"}>
                    <StorySlide
                        slideClass={"testimonials-01-list _01 splide__slide w-dyn-list"}
                        slideId={"stories-slide01"}
                        width={slide1Width}
                    >
                        <RouteStoryCard
                            defaultDataId={"0"}
                            step3DataId={"1"}
                        />
                    </StorySlide>

                    <StorySlide
                        slideClass={"testimonials-01-list _02 splide__slide w-dyn-list"}
                        slideId={"stories-slide02"}
                        width={slide2Width}
                    >
                        <RouteStoryCard
                            defaultDataId={"2"}
                            step3DataId={"3"}
                        />
                    </StorySlide>

                    <StorySlide
                        slideClass={"testimonials-01-list _03 splide__slide w-dyn-list"}
                        slideId={"stories-slide03"}
                        width={"20%"}
                    >
                        <StoryCard dataId="4" />
                    </StorySlide>
                </div>
            )
        }
    

// Subcomponents

        function StorySlide({
            slideClass,
            slideId,
            width,
            children
        }: {
            slideClass: string;
            slideId: string;
            width: string;
            children: React.ReactNode;
        }) {
            return (
                <div
                    className={slideClass}
                    id={slideId}
                    style={{ width: width, height: "495px" }}
                >
                    <div role={"list"} className={"story-wrapper w-dyn-items"}>
                        <div role={"listitem"} className={"story-wrap w-dyn-item"}>
                            {children}
                        </div>
                    </div>
                </div>
            )
        }

        function RouteStoryCard({
            defaultDataId,
            step3DataId
        }: {
            defaultDataId: string;
            step3DataId: string;
        }) {
            const location = useLocation()

            switch (location.pathname + location.search + location.hash) {
                case "/amazon-growth/g-find-amazon-influencers-test":
                case "/amazon-growth/g-find-amazon-influencers-test?step=2":
                    return <StoryCard dataId={defaultDataId} />
                case "/amazon-growth/g-find-amazon-influencers-test?step=3":
                    return <StoryCard dataId={step3DataId} />
                default:
                    return <StoryCard dataId={defaultDataId} />
            }
        }
    

export default StoriesSlider
