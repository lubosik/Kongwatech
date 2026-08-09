'use client'

import { useEffect, useRef, useState } from 'react'
import type { AiTool, ToolCategory } from '@/lib/ai-tools'
import { toolCategories } from '@/lib/ai-tools'

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      properties: Record<string, string | boolean>,
    ) => void
  }
}

type CategoryFilter = 'All' | ToolCategory

function trackToolClick(tool: AiTool) {
  window.gtag?.('event', 'ai_stack_tool_click', {
    tool: tool.slug,
    is_affiliate: tool.isAffiliate,
    source_section: 'tool_directory',
  })
}

function MediaStrip({ tool }: { tool: AiTool }) {
  const [nearViewport, setNearViewport] = useState(false)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [reduceMotion, setReduceMotion] = useState(true)
  const stripRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({})

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => setReduceMotion(motionQuery.matches)
    updateMotion()
    motionQuery.addEventListener('change', updateMotion)
    return () => motionQuery.removeEventListener('change', updateMotion)
  }, [])

  useEffect(() => {
    if (!stripRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setNearViewport(entry.isIntersecting)
        if (!entry.isIntersecting) setActiveVideo(null)
      },
      { rootMargin: '300px 0px', threshold: 0.01 },
    )
    observer.observe(stripRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([src, video]) => {
      if (!video) return
      if (src === activeVideo) {
        video.play().catch(() => setActiveVideo(null))
      } else {
        video.pause()
      }
    })
  }, [activeVideo, nearViewport])

  const playFromIntent = (src: string, intent: 'hover' | 'activate') => {
    if (intent === 'hover' && reduceMotion) return
    setNearViewport(true)
    setActiveVideo((current) => (current === src && intent === 'activate' ? null : src))
  }

  return (
    <div className="stack-media-strip" ref={stripRef} aria-label="Owner-supplied AI video concepts">
      {tool.media.map((media, index) => {
        const captionId = `${tool.slug}-media-${index}-caption`
        const isActive = activeVideo === media.src
        return (
          <figure
            className="stack-media-card"
            key={media.src}
            onPointerEnter={(event) => {
              if (event.pointerType !== 'touch') playFromIntent(media.src, 'hover')
            }}
            onPointerLeave={() => {
              if (!reduceMotion) setActiveVideo(null)
            }}
          >
            <video
              ref={(node) => { videoRefs.current[media.src] = node }}
              poster={media.poster}
              preload="none"
              muted
              playsInline
              loop
              aria-label={media.alt}
              aria-describedby={captionId}
              onFocus={() => playFromIntent(media.src, 'hover')}
            >
              {nearViewport && <source src={media.src} type="video/mp4" />}
            </video>
            <button
              type="button"
              className="stack-media-card__control"
              onClick={() => playFromIntent(media.src, 'activate')}
              aria-label={`${isActive ? 'Pause' : 'Play'} ${media.alt}`}
            >
              <span aria-hidden="true">{isActive ? 'Ⅱ' : '▶'}</span>
            </button>
            <figcaption id={captionId}>
              <span>{String(index + 1).padStart(2, '0')} / 03</span>
              <b>{media.caption}</b>
            </figcaption>
          </figure>
        )
      })}
    </div>
  )
}

function ProofVisual({ tool }: { tool: AiTool }) {
  if (tool.media.length > 0) {
    return <MediaStrip tool={tool} />
  }

  if (tool.slug === 'unipile') {
    return (
      <div className="stack-proof-flow" aria-label="Research to replies workflow">
        {['Research', 'AI agent', 'Unipile MCP', 'LinkedIn / email', 'Replies'].map(
          (step, index) => (
            <span key={step}>
              <b>{String(index + 1).padStart(2, '0')}</b>
              {step}
            </span>
          ),
        )}
      </div>
    )
  }

  if (tool.slug === 'heygen') {
    return (
      <div className="stack-proof-flow stack-proof-flow--compact" aria-label="Digital twin workflow">
        {['15-sec capture', 'Digital twin', 'Script', 'Finished video'].map((step, index) => (
          <span key={step}>
            <b>{String(index + 1).padStart(2, '0')}</b>
            {step}
          </span>
        ))}
      </div>
    )
  }

  if (tool.slug === 'elevenlabs') {
    return (
      <div className="voice-study" aria-label="Static visual study of a voice agent interface">
        <div className="voice-study__orb" aria-hidden="true">
          <span />
        </div>
        <div>
          <p>VOICE AGENT / INTERFACE STUDY</p>
          <div className="voice-study__wave" aria-hidden="true">
            {[6, 15, 24, 11, 31, 19, 9, 27, 17, 7, 21, 12].map((height, index) => (
              <i key={index} style={{ height }} />
            ))}
          </div>
          <small>Visual concept · not an interactive demo</small>
        </div>
      </div>
    )
  }

  return (
    <div className="stack-proof-default">
      <span aria-hidden="true">↳</span>
      <p>{tool.proofDescription}</p>
    </div>
  )
}

export default function AiStackExplorer({ tools }: { tools: AiTool[] }) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All')
  const categories: CategoryFilter[] = ['All', ...toolCategories]
  const visibleTools =
    activeCategory === 'All'
      ? tools
      : tools.filter((tool) => tool.category === activeCategory)

  return (
    <section className="stack-directory" id="tools" aria-labelledby="tool-directory-heading">
      <div className="stack-shell">
        <div className="stack-section-heading stack-section-heading--light">
          <div>
            <p className="stack-kicker">CHOOSE THE OUTCOME</p>
            <h2 id="tool-directory-heading">Nine tools. Five jobs.</h2>
          </div>
          <p className="stack-section-heading__copy">
            Start with the bottleneck, then choose the smallest useful part of the stack.
          </p>
        </div>

        <div className="stack-filter" aria-label="Filter tools by outcome">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={activeCategory === category ? 'is-active' : ''}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              <span>{category}</span>
              <small>
                {category === 'All'
                  ? tools.length
                  : tools.filter((tool) => tool.category === category).length}
              </small>
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visibleTools.length} {visibleTools.length === 1 ? 'tool' : 'tools'}.
        </p>

        <div className="tool-grid">
          {visibleTools.map((tool, index) => (
            <article
              className={`tool-card${tool.media.length > 0 ? ' tool-card--featured' : ''}`}
              key={tool.slug}
              style={{ '--tool-index': index } as React.CSSProperties}
            >
              <div className="tool-card__topline">
                <div className="tool-mark" aria-hidden="true">{tool.logo}</div>
                <div className="tool-card__meta">
                  <span>{tool.category}</span>
                  {tool.isAffiliate && <em>Affiliate</em>}
                </div>
              </div>

              <div className="tool-card__intro">
                <p className="tool-card__name">{tool.name}</p>
                <h3>{tool.headline}</h3>
                <p>{tool.description}</p>
              </div>

              <ul className="tool-card__uses" aria-label={`${tool.name} use cases`}>
                {tool.useCases.map((useCase) => (
                  <li key={useCase}>{useCase}</li>
                ))}
              </ul>

              <div className="tool-card__proof">
                <p className="tool-card__proof-label">{tool.proofTitle}</p>
                <ProofVisual tool={tool} />
              </div>

              <a
                className="tool-card__cta"
                href={`/go/${tool.redirectSlug}`}
                target="_blank"
                rel={tool.isAffiliate ? 'noopener noreferrer sponsored' : 'noopener noreferrer'}
                onClick={() => trackToolClick(tool)}
              >
                <span>{tool.cta}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
