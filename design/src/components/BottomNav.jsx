import './BottomNav.css'

function HomeIcon({ active }) {
  const color = active ? '#179A9C' : '#717275'
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {active ? (
        <>
          <path d="M4 10.5L12 4L20 10.5V19C20 19.552 19.552 20 19 20H5C4.448 20 4 19.552 4 19V10.5Z" fill={color} />
          <path d="M10 20V14H14V20" fill="white" />
        </>
      ) : (
        <path
          d="M4 10.5L12 4L20 10.5V19C20 19.552 19.552 20 19 20H5C4.448 20 4 19.552 4 19V10.5Z"
          stroke={color}
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}

function MessageIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 6H19C20.105 6 21 6.895 21 8V14C21 15.105 20.105 16 19 16H9L5 19V8C5 6.895 5.895 6 7 6H5Z"
        stroke="#717275"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ContractIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="#717275" strokeWidth="1.8" />
      <path d="M9 8H15M9 12H15M9 16H13" stroke="#717275" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function ProfileIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="#717275" strokeWidth="1.8" />
      <path
        d="M5 20C5 16.686 8.134 14 12 14C15.866 14 19 16.686 19 20"
        stroke="#717275"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 6V22M6 14H22" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  )
}

const navItems = [
  { id: 'home', label: 'خانه', Icon: HomeIcon, active: true },
  { id: 'messages', label: 'پیام‌ها', Icon: MessageIcon },
  { id: 'fab', label: '', isFab: true },
  { id: 'contracts', label: 'قراردادها', Icon: ContractIcon },
  { id: 'profile', label: 'پروفایل', Icon: ProfileIcon },
]

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="ناوبری اصلی">
      <div className="bottom-nav__inner">
        {navItems.map((item) =>
          item.isFab ? (
            <button key={item.id} type="button" className="bottom-nav__fab" aria-label="ثبت جدید">
              <PlusIcon />
            </button>
          ) : (
            <button
              key={item.id}
              type="button"
              className={`bottom-nav__item ${item.active ? 'bottom-nav__item--active' : ''}`}
            >
              <item.Icon active={item.active} />
              {item.label && <span className="bottom-nav__label">{item.label}</span>}
            </button>
          )
        )}
      </div>
    </nav>
  )
}
