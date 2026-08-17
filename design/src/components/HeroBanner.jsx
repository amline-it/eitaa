import './HeroBanner.css'

function HeroIllustration() {
  return (
    <div className="hero__illustration" aria-hidden="true">
      <div className="hero__phone">
        <div className="hero__phone-screen">
          <div className="hero__phone-doc">
            <div className="hero__phone-line" />
            <div className="hero__phone-line hero__phone-line--short" />
            <div className="hero__phone-barcode">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} style={{ height: `${40 + (i % 3) * 20}%` }} />
              ))}
            </div>
          </div>
          <div className="hero__phone-check">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7L6 10L11 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <div className="hero__house">
        <div className="hero__house-roof" />
        <div className="hero__house-body">
          <div className="hero__house-window" />
          <div className="hero__house-door" />
        </div>
      </div>

      <div className="hero__shield">
        <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
          <path d="M14 2L26 8V16C26 24.284 20.627 29.5 14 31C7.373 29.5 2 24.284 2 16V8L14 2Z" fill="#179A9C" />
          <path d="M9 16L12.5 19.5L19 12" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

export default function HeroBanner() {
  return (
    <section className="hero section-padding">
      <div className="hero__card">
        <div className="hero__content">
          <span className="hero__badge">جدید • قرارداد آنلاین رسمی</span>
          <h1 className="hero__title">۳ قدم تا قرارداد با کد رهگیری</h1>
          <p className="hero__subtitle">موجر، مستأجر، یا خریدار — همینجا شروع کن</p>
        </div>

        <HeroIllustration />

        <div className="hero__steps-bg" aria-hidden="true">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
      </div>
    </section>
  )
}
