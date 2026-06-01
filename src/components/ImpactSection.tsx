import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { siteContent } from '../data/content'

const { impact } = siteContent

export default function ImpactSection() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('in-view') },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      aria-labelledby="impact-heading"
      style={{ padding: '4rem 2.5rem' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* Left — text + stats */}
        <div>
          <p
            className="font-semibold uppercase mb-4"
            style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#E8570A' }}
          >
            {impact.label}
          </p>
          <h2
            id="impact-heading"
            className="font-bold uppercase mb-5"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              letterSpacing: '-0.01em',
              color: '#f5f0eb',
            }}
          >
            {impact.title}
          </h2>
          <p style={{ color: 'rgba(245,240,235,0.6)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            {impact.description}
          </p>
          <a
            href={impact.mapCta.href}
            className="inline-flex items-center gap-2 font-semibold no-underline transition-all"
            style={{
              background: 'transparent',
              color: '#f5f0eb',
              padding: '14px 28px',
              fontSize: '15px',
              border: '1.5px solid rgba(255,255,255,0.1)',
              borderRadius: '6px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#E8570A'
              e.currentTarget.style.color = '#E8570A'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.color = '#f5f0eb'
            }}
          >
            {impact.mapCta.label}
            <ArrowRight size={16} />
          </a>

          {/* Stats */}
          <div
            ref={statsRef}
            aria-label="Impact statistics"
            className="counter-group"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            {impact.stats.map((stat, i) => (
              <div
                key={i}
                className="stat-card"
                style={{
                  background: '#1a1a1a',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  padding: '1.25rem',
                }}
              >
                <div
                  className="font-extrabold"
                  style={{ fontSize: '1.8rem', color: '#E8570A', fontVariantNumeric: 'tabular-nums' }}
                >
                  {stat.num}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(245,240,235,0.6)', marginTop: '4px', lineHeight: '1.4' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — map placeholder + regions */}
        <div
          style={{
            background: '#1a1a1a',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '2rem',
            minHeight: '320px',
            position: 'relative',
          }}
        >
          <p
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,235,0.6)',
            }}
          >
            Active across 9 regions
          </p>

          {/* UK Map SVG outline */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', paddingTop: '1.5rem' }}>
            <svg
              width="120"
              height="160"
              viewBox="0 0 120 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M60 8 L72 20 L80 18 L85 30 L80 45 L88 55 L85 70 L75 80 L80 90 L75 105 L65 115 L60 130 L55 115 L45 105 L40 90 L45 80 L35 70 L32 55 L40 45 L35 30 L40 18 L48 20 Z"
                stroke="#E8570A"
                strokeWidth="2"
                fill="rgba(232,87,10,0.08)"
                strokeLinejoin="round"
              />
              <circle cx="60" cy="75" r="3" fill="#E8570A" opacity="0.6" />
              <circle cx="55" cy="55" r="2.5" fill="#E8570A" opacity="0.5" />
              <circle cx="65" cy="60" r="2" fill="#C2185B" opacity="0.6" />
              <circle cx="50" cy="85" r="2.5" fill="#E8570A" opacity="0.4" />
              <circle cx="70" cy="90" r="2" fill="#C2185B" opacity="0.5" />
              <circle cx="60" cy="100" r="2" fill="#E8570A" opacity="0.4" />
              <circle cx="58" cy="40" r="2" fill="#C2185B" opacity="0.4" />
              <circle cx="45" cy="65" r="2" fill="#E8570A" opacity="0.5" />
              <circle cx="72" cy="70" r="2" fill="#C2185B" opacity="0.4" />
            </svg>
          </div>

          {/* Region list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {impact.regions.map((region) => (
              <div
                key={region}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0.75rem',
                  background: 'rgba(232,87,10,0.06)',
                  border: '1px solid rgba(232,87,10,0.15)',
                  borderRadius: '6px',
                }}
              >
                <span style={{ fontSize: '13px', color: '#f5f0eb', fontWeight: 500 }}>{region}</span>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#E8570A',
                    flexShrink: 0,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
