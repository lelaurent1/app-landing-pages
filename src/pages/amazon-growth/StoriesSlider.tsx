import React, { useState } from 'react'

import StoryCard from './StoryCard.tsx'

function StoriesSlider() {
    const [activeIndex, setActiveIndex] = useState(0)

    const slides = [
        { variant: '_01', slideId: 'stories-slide01', dataId: '0' },
        { variant: '_02', slideId: 'stories-slide02', dataId: '2' },
        { variant: '_03', slideId: 'stories-slide03', dataId: '4' },
    ]

    return (
        <div className={"splide__list stories-wrap"} id={"stories-list"}>
            {slides.map((slide, i) => {
                const isActive = activeIndex === i
                const slideClass = `testimonials-01-list ${slide.variant} splide__slide w-dyn-list${isActive ? ' is-active' : ''}`
                return (
                    <StorySlide
                        key={slide.slideId}
                        slideClass={slideClass}
                        slideId={slide.slideId}
                        onMouseEnter={() => setActiveIndex(i)}
                    >
                        <StoryCard dataId={slide.dataId} />
                    </StorySlide>
                )
            })}
        </div>
    )
}

function StorySlide({
    slideClass,
    slideId,
    onMouseEnter,
    children,
}: {
    slideClass: string
    slideId: string
    onMouseEnter: () => void
    children: React.ReactNode
}) {
    return (
        <div
            className={slideClass}
            id={slideId}
            onMouseEnter={onMouseEnter}
        >
            <div role={"list"} className={"story-wrapper w-dyn-items"}>
                <div role={"listitem"} className={"story-wrap w-dyn-item"}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default StoriesSlider
