import './DraftCard.css'

function DocIcon() {
  return (
    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" aria-hidden="true">
      <rect x="2" y="1" width="18" height="24" rx="4" fill="#3D92F5" fillOpacity="0.15" />
      <rect x="4" y="3" width="14" height="20" rx="3" fill="#3D92F5" />
      <rect x="7" y="8" width="8" height="2" rx="1" fill="white" fillOpacity="0.8" />
      <rect x="7" y="12" width="6" height="2" rx="1" fill="white" fillOpacity="0.6" />
      <rect x="7" y="16" width="7" height="2" rx="1" fill="white" fillOpacity="0.6" />
    </svg>
  )
}

function ContinueArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#E8F4FE" />
      <path
        d="M12 7L8 10L12 13"
        stroke="#3D92F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function DraftCard({ draft }) {
  if (!draft) return null

  const { title, lastEdited, progressPercent } = draft
  const progressLabel = `${progressPercent.toLocaleString('fa-IR')}٪ تکمیل شده`

  return (
    <section className="draft section-padding">
      <button type="button" className="draft__card">
        <div className="draft__icon-wrap">
          <DocIcon />
        </div>

        <div className="draft__body">
          <span className="draft__label">پیش‌نویس</span>
          <h3 className="draft__title">{title}</h3>
          <p className="draft__date">تاریخ آخرین ویرایش: {lastEdited}</p>
        </div>

        <div className="draft__progress-wrap">
          <div className="draft__progress-header">
            <span className="draft__progress-text">{progressLabel}</span>
            <ContinueArrow />
          </div>
          <div
            className="draft__progress-bar"
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="draft__progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>
      </button>
    </section>
  )
}
