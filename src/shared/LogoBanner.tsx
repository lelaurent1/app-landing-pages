import React from 'react'
import type { ComponentType } from 'react'

type ImgProps = { id: string }

type LogoBannerProps = {
  imgIds: string[]
  ImgComponent: ComponentType<ImgProps>
  heading?: string
  marqueeDurationSeconds?: number
}

function LogoBanner({
  imgIds,
  ImgComponent,
  heading,
  marqueeDurationSeconds = 40,
}: LogoBannerProps) {
  const logoStrip = (
    <ul role="list" className="publication-logos">
      {imgIds.map((id) => (
        <li key={id} className="logo">
          <ImgComponent id={id} />
        </li>
      ))}
    </ul>
  )

  return (
    <div
      className="section-logo-wrap"
      style={{ marginTop: '16px', marginBottom: '16px', rowGap: '16px' }}
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
