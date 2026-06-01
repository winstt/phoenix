import { siteContent } from '../data/content'

const { tickerPanels } = siteContent

// Duplicate panels so the infinite scroll loops seamlessly
const allPanels = [...tickerPanels, ...tickerPanels]

export default function ScrollTicker() {
  return (
    <div
      aria-label="Community photos"
      aria-hidden="true"
      className="scroll-ticker overflow-hidden"
      style={{
        height: '340px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div className="scroll-track">
        {allPanels.map((panel, i) => (
          <div
            key={i}
            className="scroll-panel"
            style={{ width: '340px', height: '340px', flexShrink: 0 }}
          >
            {panel.imageUrl ? (
              <img
                src={panel.imageUrl}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: panel.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  style={{ opacity: 0.2 }}
                  aria-hidden="true"
                >
                  <circle cx="40" cy="40" r="35" stroke="#E8570A" strokeWidth="8" fill="none" />
                  <circle cx="40" cy="40" r="15" stroke="#C2185B" strokeWidth="6" fill="none" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
