import { siteContent } from '../data/content'

export default function WhoStrip() {
  return (
    <div
      role="complementary"
      aria-label="Who we are"
      style={{ background: '#E8570A', padding: '1.5rem 2.5rem' }}
    >
      <p
        className="font-semibold text-center mx-auto"
        style={{
          fontSize: '1rem',
          color: '#0d0d0d',
          lineHeight: '1.5',
          maxWidth: '900px',
        }}
      >
        {siteContent.whoStrip}
      </p>
    </div>
  )
}
