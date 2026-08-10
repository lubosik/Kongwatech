'use client'

import { useRef } from 'react'
import type { AiTool } from '@/lib/ai-tools'

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      properties: Record<string, string | boolean | number>,
    ) => void
  }
}

function trackToolClick(tool: AiTool, position: number) {
  window.gtag?.('event', 'ai_stack_tool_click', {
    tool: tool.slug,
    affiliate: tool.isAffiliate,
    position,
    source_section: 'ai_stack_tool',
  })
}

function HiggsfieldExamples({ tool }: { tool: AiTool }) {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([])

  const pauseOtherVideos = (activeIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeIndex) video.pause()
    })
  }

  return (
    <div className="simple-stack-media" aria-label="AI video examples from Lubosi's workflow">
      {tool.media.map((media, index) => {
        const captionId = `${tool.slug}-example-${index + 1}`
        return (
          <figure className="simple-stack-media__item" key={media.src}>
            <video
              ref={(node) => { videoRefs.current[index] = node }}
              controls
              controlsList="nodownload"
              disablePictureInPicture
              muted
              playsInline
              preload="none"
              poster={media.poster}
              aria-label={media.alt}
              aria-describedby={captionId}
              onPlay={() => pauseOtherVideos(index)}
            >
              <source src={media.src} type="video/mp4" />
            </video>
            <figcaption id={captionId}>{media.caption}</figcaption>
          </figure>
        )
      })}
    </div>
  )
}

export default function AiStackExplorer({ tools }: { tools: AiTool[] }) {
  return (
    <section className="simple-stack-tools" aria-label="Lubosi's recommended AI tools">
      <div className="simple-stack-container">
        {tools.map((tool, index) => {
          const position = index + 1
          return (
            <article className="simple-tool" id={tool.slug} key={tool.slug}>
              <div className="simple-tool__identity">
                <span className="simple-tool__position">
                  {String(position).padStart(2, '0')} / {String(tools.length).padStart(2, '0')}
                </span>
                <span className="simple-tool__mark" aria-hidden="true">{tool.logo}</span>
                <span className="simple-tool__brand">{tool.name}</span>
              </div>

              <div className="simple-tool__content">
                <div className="simple-tool__title-row">
                  <h2>{tool.name}</h2>
                  {tool.isAffiliate && (
                    <span className="simple-tool__affiliate">
                      {tool.affiliateLabel ?? 'Affiliate link'}
                    </span>
                  )}
                </div>

                <p className="simple-tool__prompt">{tool.prompt}</p>

                <div className="simple-tool__copy">
                  {tool.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>

                {tool.bullets && (
                  <ul className="simple-tool__bullets" aria-label={`${tool.name} uses`}>
                    {tool.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}

                {tool.proof && (
                  <aside className="simple-tool__proof" aria-label={`${tool.name} proof example`}>
                    <p className="simple-tool__proof-label">PROOF EXAMPLE</p>
                    <h3>{tool.proof.heading}</h3>
                    {tool.proof.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    <a href={tool.proof.href} target="_blank" rel="noopener noreferrer">
                      {tool.proof.linkLabel} <span aria-hidden="true">↗</span>
                    </a>
                  </aside>
                )}

                {tool.media.length > 0 && <HiggsfieldExamples tool={tool} />}

                <div className="simple-tool__action">
                  <a
                    href={`/go/${tool.redirectSlug}`}
                    target="_blank"
                    rel={tool.isAffiliate ? 'noopener noreferrer sponsored' : 'noopener noreferrer'}
                    onClick={() => trackToolClick(tool, position)}
                  >
                    {tool.cta} <span aria-hidden="true">→</span>
                  </a>
                  {tool.secondaryLink && (
                    <a
                      className="simple-tool__secondary-link"
                      href={`/go/${tool.secondaryLink.redirectSlug}`}
                      target="_blank"
                      rel={tool.isAffiliate ? 'noopener noreferrer sponsored' : 'noopener noreferrer'}
                      onClick={() => trackToolClick(tool, position)}
                    >
                      {tool.secondaryLink.label} <span aria-hidden="true">→</span>
                    </a>
                  )}
                  {tool.offerText && <p>{tool.offerText} for new users.</p>}
                  {tool.actionNote && <p>{tool.actionNote}</p>}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
