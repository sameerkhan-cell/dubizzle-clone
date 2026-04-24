import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Footer from './Footer'
import PostAdModal from './PostAdModal'

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8001C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)
const ChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)
const DiamondIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
  </svg>
)

const DubaiSkyline = () => (
  <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', display: 'block' }} preserveAspectRatio="xMidYMax meet">
    <rect x="0" y="155" width="1440" height="25" fill="#2a2a2a" />
    <circle cx="80" cy="110" r="45" stroke="#aaa" strokeWidth="2" fill="none" />
    <line x1="80" y1="65" x2="80" y2="155" stroke="#aaa" strokeWidth="2" />
    <line x1="35" y1="110" x2="125" y2="110" stroke="#aaa" strokeWidth="2" />
    <line x1="48" y1="77" x2="112" y2="143" stroke="#aaa" strokeWidth="1.5" />
    <line x1="112" y1="77" x2="48" y2="143" stroke="#aaa" strokeWidth="1.5" />
    <circle cx="80" cy="110" r="8" fill="#aaa" />
    <rect x="140" y="100" width="18" height="55" fill="#bbb" />
    <rect x="162" y="85" width="14" height="70" fill="#c0c0c0" />
    <rect x="180" y="95" width="20" height="60" fill="#b8b8b8" />
    <rect x="204" y="75" width="16" height="80" fill="#c5c5c5" />
    <rect x="224" y="90" width="22" height="65" fill="#b5b5b5" />
    <line x1="260" y1="155" x2="260" y2="105" stroke="#888" strokeWidth="3" />
    <ellipse cx="260" cy="100" rx="20" ry="10" fill="#999" />
    <ellipse cx="248" cy="107" rx="14" ry="6" fill="#999" transform="rotate(-20 248 107)" />
    <ellipse cx="272" cy="107" rx="14" ry="6" fill="#999" transform="rotate(20 272 107)" />
    <polygon points="300,155 320,30 340,155" fill="#c8c8c8" />
    <rect x="304" y="100" width="32" height="55" fill="#d0d0d0" />
    <rect x="355" y="80" width="18" height="75" fill="#c0c0c0" />
    <rect x="377" y="60" width="14" height="95" fill="#ccc" />
    <rect x="395" y="90" width="20" height="65" fill="#bbb" />
    <ellipse cx="440" cy="110" rx="25" ry="45" fill="#c5c5c5" />
    <rect x="435" y="130" width="10" height="25" fill="#bbb" />
    <line x1="475" y1="155" x2="475" y2="105" stroke="#888" strokeWidth="3" />
    <ellipse cx="475" cy="100" rx="20" ry="10" fill="#999" />
    <rect x="505" y="70" width="16" height="85" fill="#c8c8c8" />
    <rect x="525" y="50" width="20" height="105" fill="#d0d0d0" />
    <rect x="549" y="80" width="14" height="75" fill="#bbb" />
    <rect x="567" y="65" width="18" height="90" fill="#c5c5c5" />
    <polygon points="630,155 636,10 642,155" fill="#d0d0d0" />
    <rect x="625" y="100" width="22" height="55" fill="#c8c8c8" />
    <rect x="628" y="70" width="16" height="35" fill="#ccc" />
    <rect x="631" y="40" width="10" height="32" fill="#d0d0d0" />
    <rect x="660" y="65" width="18" height="90" fill="#c5c5c5" />
    <rect x="690" y="65" width="18" height="90" fill="#c5c5c5" />
    <rect x="669" y="100" width="30" height="6" fill="#bbb" />
    <rect x="780" y="80" width="20" height="75" fill="#c0c0c0" />
    <rect x="824" y="70" width="22" height="85" fill="#ccc" />
    <rect x="850" y="85" width="18" height="70" fill="#c5c5c5" />
    <line x1="880" y1="155" x2="880" y2="105" stroke="#888" strokeWidth="3" />
    <ellipse cx="880" cy="100" rx="20" ry="10" fill="#999" />
    <rect x="930" y="55" width="20" height="100" fill="#d0d0d0" />
    <rect x="973" y="65" width="22" height="90" fill="#c0c0c0" />
    <rect x="1030" y="90" width="16" height="65" fill="#ccc" />
    <rect x="1076" y="90" width="16" height="65" fill="#ccc" />
    <path d="M 1030 90 Q 1061 50 1092 90" stroke="#ccc" strokeWidth="14" fill="none" />
    <rect x="1150" y="70" width="20" height="85" fill="#ccc" />
    <rect x="1237" y="65" width="22" height="90" fill="#c5c5c5" />
    <circle cx="1360" cy="110" r="45" stroke="#aaa" strokeWidth="2" fill="none" />
    <line x1="1360" y1="65" x2="1360" y2="155" stroke="#aaa" strokeWidth="2" />
    <line x1="1315" y1="110" x2="1405" y2="110" stroke="#aaa" strokeWidth="2" />
    <line x1="1328" y1="77" x2="1392" y2="143" stroke="#aaa" strokeWidth="1.5" />
    <line x1="1392" y1="77" x2="1328" y2="143" stroke="#aaa" strokeWidth="1.5" />
    <circle cx="1360" cy="110" r="8" fill="#aaa" />
  </svg>
)

const formOptions = [
  { value: '', label: '-' },
  { value: 'customer-support', label: 'Customer Support' },
  { value: 'verified-business', label: 'Verified Business' },
  { value: 'become-verified', label: 'Become a Verified Business' },
  { value: 'holiday-homes', label: 'Holiday Homes' },
]

const trendingArticles = [
  'How do I delete my account?',
  'Why was my ad removed?',
  'How to get a verified badge?',
  'How to place an ad on dubizzle?',
  'How do I report a suspicious listing?',
]

export default function ContactUs() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedForm, setSelectedForm] = useState('')
  const [showCallModal, setShowCallModal] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="cu-page">
      {/* ── Header ── */}
      <header className="cu-header">
        <div className="cu-header-left">
          <Link to="/" aria-label="dubizzle home">
            <Logo width={110} height={26} />
          </Link>
        </div>
        <div className="cu-header-right">
          <div className="cu-header-lang">
            English (United States)
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E8001C" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
          <button type="button" onClick={() => setModalOpen(true)} className="cu-header-btn">
            <DiamondIcon />
            <span className="cu-btn-label">Place Your Ad</span>
          </button>
        </div>
      </header>

      {/* ── Search Hero ── */}
      <div className="cu-hero">
        <h1 className="cu-hero-title">How can we help you?</h1>
        <div className="cu-search-box">
          <input
            type="search"
            placeholder="Search our articles"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="cu-search-input"
          />
          <button type="button" className="cu-search-btn"><SearchIcon /></button>
        </div>
      </div>

      {/* ── Breadcrumbs ── */}
      <div className="cu-breadcrumb-bg">
        <div className="cu-wrap">
          <ol className="cu-breadcrumb">
            <li>
              <Link to="/help" className="cu-bc-link">
                <ChevronLeft /> Help Center
              </Link>
            </li>
            <li className="cu-bc-sep">›</li>
            <li><span className="cu-bc-active">Submit a request</span></li>
          </ol>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="cu-main-bg">
        <div className="cu-wrap cu-grid">
          {/* Form */}
          <div className="cu-form-col">
            <h1 className="cu-form-title">Help us help you faster!</h1>
            <hr className="cu-form-hr" />
            <div className="cu-card">
              <p className="cu-form-desc">
                Accurately selecting your specific issue from the drop-down lists below will enable us to direct
                your message to the right department. Once you select your issue, you will be able to contact us.
              </p>
              <div className="cu-form-group">
                <label className="cu-form-label">
                  How can we help? Select a form that best meets your needs:
                </label>
                <div className="cu-select-wrap">
                  <select value={selectedForm} onChange={(e) => setSelectedForm(e.target.value)} className="cu-select">
                    {formOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <div className="cu-select-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cu-form-hint">
                <span className="cu-required">*</span> Mandatory fields
              </div>
            </div>
          </div>

          {/* Trending Articles */}
          <div className="cu-sidebar-col">
            <div className="cu-trending">
              <div className="cu-trending-header">
                <h4 className="cu-trending-title">Trending articles</h4>
              </div>
              <div className="cu-trending-body">
                {trendingArticles.map((article) => (
                  <div key={article} className="cu-trending-item">
                    <a href="#" className="cu-trending-link"
                      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                    >{article}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Skyline ── */}
      <div className="cu-skyline-bg">
        <DubaiSkyline />
      </div>

      {/* ── Footer ── */}
      <div className="cu-footer-bg">
        <div className="cu-footer-row">
          <nav className="cu-footer-nav">
            {[
              { label: 'Home', href: 'https://uae.dubizzle.com/' },
              { label: 'Terms of Use', href: 'https://uae.dubizzle.com/terms/' },
              { label: 'Privacy Policy', href: 'https://uae.dubizzle.com/privacy/' },
              { label: 'About Us', href: 'https://uae.dubizzle.com/about/' },
            ].map((link) => (
              <a key={link.label} href={link.href} className="cu-footer-link"
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >{link.label}</a>
            ))}
            <button type="button" onClick={() => setModalOpen(true)} className="cu-footer-btn"
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >Place Your Ad</button>
            <button type="button" onClick={() => setShowCallModal(true)} className="cu-footer-btn"
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >Call Us</button>
          </nav>
          <div className="cu-badges">
            <a href="https://play.google.com/store/apps/details?id=com.dubizzle.horizontal&hl=en" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/320px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play" className="cu-badge-img" />
            </a>
            <a href="https://itunes.apple.com/app/apple-store/id892172848" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/320px-Download_on_the_App_Store_Badge.svg.png"
                alt="App Store" className="cu-badge-img" />
            </a>
          </div>
        </div>
        <div className="cu-copyright-bg">
          <p className="cu-copyright-text">
            © dubizzle.com 2026, All Rights Reserved.
          </p>
        </div>
      </div>

      <style>{`
        .cu-page {
          min-height: 100vh; display: flex; flex-direction: column;
          background: #fff; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
          font-size: 14px; color: #3b4245;
        }

        .cu-wrap {
          max-width: 1100px; margin: 0 auto;
          padding: 0 16px; box-sizing: border-box; width: 100%;
        }

        /* HEADER */
        .cu-header {
          background: #fff; border-bottom: 3px solid #E8001C;
          box-sizing: border-box; width: 100%;
          display: flex; flex-direction: column; align-items: stretch;
          padding: 0;
        }
        .cu-header-left {
          display: flex; align-items: center; justify-content: center;
          padding: 10px 16px; min-height: 48px;
        }
        .cu-header-right {
          display: flex; align-items: center; justify-content: flex-end;
          gap: 10px; padding: 6px 16px 8px;
          border-top: 1px solid #f0f0f0;
        }
        .cu-header-lang {
          color: #E8001C; font-size: 12px; font-weight: 600;
          cursor: pointer; display: flex; align-items: center; gap: 3px;
          white-space: nowrap;
        }
        .cu-header-btn {
          background: #E8001C; color: #fff; border: none;
          border-radius: 4px; padding: 7px 10px; font-weight: 700;
          font-size: 11px; cursor: pointer; letter-spacing: 0.5px;
          text-transform: uppercase; display: flex; align-items: center; gap: 5px;
          white-space: nowrap; flex-shrink: 0;
        }
        @media (min-width: 600px) {
          .cu-header {
            flex-direction: row; align-items: center;
            justify-content: space-between; padding: 0 24px; min-height: 56px;
          }
          .cu-header-left {
            justify-content: flex-start; padding: 0; border: none; min-height: auto;
          }
          .cu-header-right {
            border: none; padding: 0;
          }
          .cu-header-btn { font-size: 13px; padding: 10px 18px; }
        }
        @media (min-width: 1000px) {
          .cu-header { padding: 0 40px; }
        }

        /* HERO */
        .cu-hero {
          background: #f2f2f2; padding: 24px 16px 20px; text-align: center;
        }
        .cu-hero-title {
          font-size: 20px; font-weight: 400; color: #555; margin: 0 0 16px;
        }
        .cu-search-box {
          display: flex; align-items: center;
          max-width: 580px; margin: 0 auto;
          background: #fff; border: 1px solid #ddd;
          border-radius: 4px; overflow: hidden;
          box-shadow: 0 1px 4px rgba(0,0,0,0.08);
        }
        .cu-search-input {
          flex: 1; border: none; outline: none;
          padding: 11px 12px;
          color: #333; background: transparent; min-width: 0;
          font-family: inherit; width: 100%;
          font-size: 16px;
        }
        .cu-search-btn {
          background: transparent; border: none; padding: 0 12px;
          cursor: pointer; display: flex; align-items: center; flex-shrink: 0;
        }
        @media (min-width: 600px) {
          .cu-hero { padding: 40px 20px 36px; }
          .cu-hero-title { font-size: 28px; margin-bottom: 24px; }
          .cu-search-input { padding: 13px 16px; }
          .cu-search-btn { padding: 0 16px; }
        }

        /* BREADCRUMB */
        .cu-breadcrumb-bg { background: #fff; border-bottom: 1px solid #e5e5e5; }
        .cu-breadcrumb {
          display: flex; align-items: center; flex-wrap: nowrap;
          list-style: none; padding: 10px 0; margin: 0; gap: 6px;
          overflow-x: auto; -webkit-overflow-scrolling: touch;
        }
        .cu-bc-link {
          display: flex; align-items: center; gap: 4px;
          color: #555; text-decoration: none; font-size: 12px;
          white-space: nowrap;
        }
        .cu-bc-link:hover { text-decoration: underline; }
        .cu-bc-sep { color: #aaa; font-size: 13px; flex-shrink: 0; }
        .cu-bc-active {
          font-size: 12px; color: #fff; background: #666;
          border-radius: 3px; padding: 3px 8px; font-weight: 600;
          white-space: nowrap;
        }

        /* MAIN CONTENT */
        .cu-main-bg { flex: 1; background: #f7f7f7; overflow: hidden; }
        .cu-grid {
          display: grid; grid-template-columns: 1fr;
          grid-template-areas: "form" "sidebar";
          gap: 20px; padding-top: 20px; padding-bottom: 24px;
          align-items: start; width: 100%; box-sizing: border-box;
        }
        .cu-form-col { grid-area: form; min-width: 0; overflow: hidden; }
        .cu-sidebar-col { grid-area: sidebar; min-width: 0; overflow: hidden; }
        @media (min-width: 700px) {
          .cu-grid {
            grid-template-columns: 1fr 260px;
            grid-template-areas: "form sidebar";
            gap: 24px; padding-top: 32px; padding-bottom: 32px;
          }
        }
        @media (min-width: 900px) {
          .cu-grid { grid-template-columns: 1fr 300px; }
        }

        /* FORM */
        .cu-form-title { font-size: 20px; font-weight: 700; color: #2a2a2a; margin: 0 0 4px; }
        .cu-form-hr { border: none; border-top: 1px solid #e0e0e0; margin: 12px 0 20px; }
        .cu-card {
          background: #fff; border: 1px solid #e0e0e0;
          border-radius: 4px; padding: 16px; box-sizing: border-box; width: 100%;
        }
        @media (min-width: 600px) {
          .cu-card { padding: 24px 28px 20px; }
        }
        .cu-form-desc { color: #555; font-size: 13px; line-height: 1.6; margin: 0 0 20px; }
        .cu-form-group { margin-bottom: 20px; }
        .cu-form-label { display: block; font-weight: 600; font-size: 13px; color: #333; margin-bottom: 8px; }
        .cu-select-wrap { position: relative; }
        .cu-select {
          width: 100%; padding: 10px 36px 10px 12px;
          color: #333; border: 1px solid #ccc;
          border-radius: 4px; background: #fff;
          appearance: none; -webkit-appearance: none;
          cursor: pointer; font-family: inherit; outline: none;
          box-sizing: border-box; font-size: 16px;
        }
        @media (min-width: 600px) {
          .cu-select { font-size: 14px; }
        }
        .cu-select-icon { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); pointer-events: none; }
        .cu-form-hint { font-size: 12px; color: #666; }
        .cu-required { color: #E8001C; font-weight: 700; }

        /* TRENDING */
        .cu-trending { border: 1px solid #e0e0e0; border-radius: 4px; overflow: hidden; }
        .cu-trending-header { background: #fff; padding: 14px 20px; border-bottom: 1px solid #e0e0e0; }
        .cu-trending-title { margin: 0; font-size: 14px; font-weight: 700; color: #333; }
        .cu-trending-body { background: #f5f5f5; padding: 12px 20px; }
        .cu-trending-item { padding: 6px 0; border-bottom: 1px solid #eee; }
        .cu-trending-item:last-child { border-bottom: none; }
        .cu-trending-link { color: #005f96; text-decoration: none; font-size: 13px; line-height: 1.4; display: block; }

        /* SKYLINE */
        .cu-skyline-bg { background: #f7f7f7; line-height: 0; margin-top: auto; }

        /* FOOTER */
        .cu-footer-bg { background: #f0f0f0; border-top: 1px solid #ddd; }
        .cu-footer-row {
          display: flex; flex-direction: column;
          max-width: 1100px; margin: 0 auto;
          padding: 16px; gap: 16px; box-sizing: border-box;
        }
        @media (min-width: 600px) {
          .cu-footer-row {
            flex-direction: row; align-items: center;
            justify-content: space-between; padding: 16px 24px;
          }
        }
        @media (min-width: 1000px) {
          .cu-footer-row { padding: 16px 40px; }
        }
        .cu-footer-nav { display: flex; flex-wrap: wrap; gap: 8px 14px; align-items: center; }
        .cu-footer-link { color: #555; text-decoration: none; font-size: 13px; }
        .cu-footer-btn { background: none; border: none; padding: 0; color: #555; font-size: 13px; cursor: pointer; font-family: inherit; }
        .cu-badges { display: flex; gap: 10px; align-items: center; flex-shrink: 0; }
        .cu-badge-img { height: 32px; display: block; }
        @media (min-width: 600px) {
          .cu-badge-img { height: 36px; }
        }
        .cu-copyright-bg { background: #E8001C; padding: 10px 20px; }
        .cu-copyright-text { color: #fff; font-size: 13px; text-align: center; margin: 0; }
      `}</style>

      <PostAdModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}