import './ServiceGrid.css'

function ArrowLink() {
  return (
    <span className="service-card__arrow" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M11 5L7 9L11 13"
          stroke="#179A9C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

function BuySellIcon() {
  return (
    <svg className="service-card__icon" viewBox="0 0 80 72" fill="none" aria-hidden="true">
      <ellipse cx="40" cy="62" rx="28" ry="6" fill="rgba(23,154,156,0.12)" />
      <path d="M18 38L40 22L62 38V54H18V38Z" fill="#179A9C" />
      <path d="M24 38L40 26L56 38V48H24V38Z" fill="#007879" />
      <rect x="34" y="42" width="12" height="12" rx="2" fill="#AD3A10" />
      <rect x="48" y="28" width="22" height="16" rx="4" fill="#53BB6A" transform="rotate(12 48 28)" />
      <text x="52" y="40" fill="white" fontSize="9" fontWeight="700" transform="rotate(12 52 40)">%</text>
    </svg>
  )
}

function RentIcon() {
  return (
    <svg className="service-card__icon" viewBox="0 0 80 72" fill="none" aria-hidden="true">
      <ellipse cx="40" cy="62" rx="28" ry="6" fill="rgba(23,154,156,0.12)" />
      <rect x="14" y="28" width="18" height="34" rx="3" fill="#179A9C" />
      <rect x="18" y="34" width="5" height="5" rx="1" fill="#CCF0F1" />
      <rect x="26" y="34" width="5" height="5" rx="1" fill="#CCF0F1" />
      <rect x="18" y="44" width="5" height="5" rx="1" fill="#CCF0F1" />
      <rect x="26" y="44" width="5" height="5" rx="1" fill="#CCF0F1" />
      <rect x="31" y="20" width="18" height="42" rx="3" fill="#007879" />
      <rect x="35" y="26" width="5" height="5" rx="1" fill="#CCF0F1" />
      <rect x="43" y="26" width="5" height="5" rx="1" fill="#CCF0F1" />
      <rect x="35" y="36" width="5" height="5" rx="1" fill="#CCF0F1" />
      <rect x="43" y="36" width="5" height="5" rx="1" fill="#CCF0F1" />
      <rect x="35" y="46" width="5" height="5" rx="1" fill="#CCF0F1" />
      <rect x="43" y="46" width="5" height="5" rx="1" fill="#CCF0F1" />
      <rect x="48" y="32" width="18" height="30" rx="3" fill="#179A9C" />
      <rect x="52" y="38" width="5" height="5" rx="1" fill="#CCF0F1" />
      <rect x="60" y="38" width="5" height="5" rx="1" fill="#CCF0F1" />
      <rect x="52" y="48" width="5" height="5" rx="1" fill="#CCF0F1" />
    </svg>
  )
}

function PostAdIcon() {
  return (
    <svg className="service-card__icon" viewBox="0 0 80 72" fill="none" aria-hidden="true">
      <ellipse cx="40" cy="62" rx="28" ry="6" fill="rgba(23,154,156,0.12)" />
      <rect x="22" y="16" width="36" height="46" rx="6" fill="white" stroke="#D7ECEC" strokeWidth="2" />
      <rect x="28" y="26" width="24" height="3" rx="1.5" fill="#D7ECEC" />
      <rect x="28" y="34" width="18" height="3" rx="1.5" fill="#D7ECEC" />
      <rect x="28" y="42" width="20" height="3" rx="1.5" fill="#D7ECEC" />
      <circle cx="56" cy="22" r="12" fill="#53BB6A" />
      <path d="M56 16V28M50 22H62" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function InquiryIcon() {
  return (
    <svg className="service-card__icon" viewBox="0 0 80 72" fill="none" aria-hidden="true">
      <ellipse cx="40" cy="62" rx="28" ry="6" fill="rgba(23,154,156,0.12)" />
      <rect x="24" y="18" width="32" height="42" rx="5" fill="white" stroke="#D7ECEC" strokeWidth="2" />
      <rect x="30" y="28" width="20" height="3" rx="1.5" fill="#D7ECEC" />
      <rect x="30" y="36" width="14" height="3" rx="1.5" fill="#D7ECEC" />
      <rect x="30" y="44" width="16" height="3" rx="1.5" fill="#D7ECEC" />
      <circle cx="52" cy="44" r="16" fill="#3D92F5" fillOpacity="0.15" />
      <circle cx="52" cy="44" r="11" fill="#3D92F5" />
      <circle cx="52" cy="44" r="7" stroke="white" strokeWidth="2.5" fill="none" />
      <path d="M57 49L62 54" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

const services = [
  {
    id: 'buy-sell',
    title: 'خرید و فروش',
    description: 'قرارداد خرید یا فروش ملک با خیال راحت',
    Icon: BuySellIcon,
    highlight: true,
  },
  {
    id: 'rent',
    title: 'رهن و اجاره',
    description: 'قرارداد اجاره یا رهن ملک با کد رهگیری رسمی',
    Icon: RentIcon,
    highlight: true,
  },
  {
    id: 'post-ad',
    title: 'ثبت آگهی',
    description: 'ثبت و انتشار آگهی ملک شما',
    Icon: PostAdIcon,
  },
  {
    id: 'inquiry',
    title: 'استعلام',
    description: 'استعلام قرارداد و کد رهگیری ملک',
    Icon: InquiryIcon,
  },
]

export default function ServiceGrid() {
  return (
    <section className="service-grid section-padding" aria-label="خدمات">
      <div className="service-grid__inner">
        {services.map(({ id, title, description, Icon, highlight }) => (
          <button
            key={id}
            type="button"
            className={`service-card${highlight ? ' service-card--highlight' : ''}`}
          >
            <div className="service-card__text">
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__desc">{description}</p>
            </div>
            <Icon />
            <ArrowLink />
          </button>
        ))}
      </div>
    </section>
  )
}
