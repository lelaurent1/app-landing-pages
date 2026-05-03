import React from 'react'
import type { ComponentType } from 'react'

type ImgProps = { id: string }

type LogoBannerProps = {
  imgIds: string[]
  ImgComponent: ComponentType<ImgProps>
  heading?: string
  marqueeDurationSeconds?: number
}

// Single source of truth for banner dimensions across both landing pages.
// Tweak here and both pages update.
const LOGO_WIDTH = 80
const LOGO_HEIGHT = 40
const LOGO_GAP = 48
const WRAPPER_MARGIN_Y = 13

function LogoBanner({
  imgIds,
  ImgComponent,
  heading,
  marqueeDurationSeconds = 55,
}: LogoBannerProps) {
  const logoStrip = (
    <ul role="list" className="publication-logos" style={{ gap: `${LOGO_GAP}px` }}>
      {imgIds.map((id) => (
        <li
          key={id}
          className="logo"
          style={{ width: `${LOGO_WIDTH}px`, height: `${LOGO_HEIGHT}px` }}
        >
          <ImgComponent id={id} />
        </li>
      ))}
    </ul>
  )

  return (
    <div
      className="section-logo-wrap"
      style={{
        marginTop: `${WRAPPER_MARGIN_Y}px`,
        marginBottom: `${WRAPPER_MARGIN_Y}px`,
        rowGap: '16px',
      }}
    >
      {heading && (
        <div className="div-block-19">
          <div className="container-regular">
            <h2 className="preheader">{heading}</h2>
          </div>
        </div>
      )}
      {!heading && <div className="div-block-19" />}
      <div className="carousel-2 transparent-5">
        <div
          className="logo-carousel-wrap"
          style={{
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            animation: `logoMarquee ${marqueeDurationSeconds}s linear infinite`,
            willChange: 'transform',
          }}
        >
          {logoStrip}
          {logoStrip}
          {logoStrip}
        </div>
      </div>
      <style>{`
@keyframes logoMarquee {
    from { transform: translate3d(0, 0, 0); }
    to { transform: translate3d(-33.3333%, 0, 0); }
}
@media (prefers-reduced-motion: reduce) {
    .logo-carousel-wrap { animation: none !important; }
}
`}</style>
    </div>
  )
}

export default LogoBanner
