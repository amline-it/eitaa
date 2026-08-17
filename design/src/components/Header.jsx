import './Header.css'

function BellIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3C9.239 3 7 5.239 7 8V11.586L5.293 14.293A1 1 0 006 16H18A1 1 0 0018.707 14.293L17 11.586V8C17 5.239 14.761 3 12 3Z"
        stroke="#1E1E1F"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10 18C10.552 19.657 11.895 21 14 21"
        stroke="#1E1E1F"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Header() {
  return (
    <header className="header">
      <a
        href="https://amline.ir/"
        className="header__brand"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="املاین — باز کردن سایت"
      >
        <img
          src="/images/logotype.svg"
          alt="املاین"
          className="header__logo"
          width={83}
          height={32}
        />
      </a>

      <button type="button" className="header__bell" aria-label="اعلان‌ها">
        <BellIcon />
        <span className="header__bell-dot" />
      </button>
    </header>
  )
}
