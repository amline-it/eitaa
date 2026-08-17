import './Stepper.css'

const steps = ['اطلاعات', 'امضا', 'رهگیری']

function ArrowIcon() {
  return (
    <svg width="18" height="16" viewBox="0 0 12 16" fill="none" aria-hidden="true">
      <path
        className="stepper__chevron"
        d="M10 4L6 8L10 12"
        stroke="#179A9C"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="stepper__chevron stepper__chevron--blink"
        d="M6 4L2 8L6 12"
        stroke="#179A9C"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Stepper() {
  return (
    <section className="stepper section-padding" aria-label="مراحل قرارداد">
      <div className="stepper__track">
        {steps.map((label, index) => (
          <div key={label} className="stepper__group">
            <div className="stepper__item">
              <span className="stepper__dot" />
              <span className="stepper__label">{label}</span>
            </div>
            {index < steps.length - 1 && (
              <span className="stepper__arrow">
                <ArrowIcon />
              </span>
            )}
          </div>
        ))}
        <div className="stepper__line" aria-hidden="true" />
      </div>
    </section>
  )
}
