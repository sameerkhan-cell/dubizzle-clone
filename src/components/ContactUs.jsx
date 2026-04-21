import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Footer from './Footer'

/* ─── Search Icon ─── */
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8001C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

/* ─── Chevron Left ─── */
const ChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

/* ─── Diamond Icon ─── */
const DiamondIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
  </svg>
)

// /* ─── Phone Icon ─── */
// const PhoneIcon = () => (
//   <img
//     src="https://static.dubizzle.com/frontend-web/static-resources/assets/images/phone-icon.svg"
//     alt="Phone Icon"
//     width={64}
//     height={64}
//     style={{ display: 'block' }}
//     onError={(e) => {
//       e.currentTarget.style.display = 'none'
//     }}
//   />
// )

// /* ─── Call Us Modal ─── */
// function CallUsModal({ onClose }) {
//   return (
//     <>
//       {/* Backdrop */}
//       <div
//         onClick={onClose}
//         style={{
//           position: 'fixed', inset: 0,
//           background: 'rgba(0,0,0,0.5)',
//           zIndex: 1000,
//         }}
//       />
//       {/* Modal */}
//       <div style={{
//         position: 'fixed',
//         top: '50%', left: '50%',
//         transform: 'translate(-50%, -50%)',
//         background: '#fff',
//         borderRadius: 12,
//         padding: '36px 40px 32px',
//         zIndex: 1001,
//         width: 340,
//         maxWidth: '90vw',
//         textAlign: 'center',
//         boxShadow: '0 24px 48px rgba(0,0,0,0.18)',
//       }}>
//         {/* Phone icon */}
//         <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
//           <PhoneIcon />
//         </div>

//         <p style={{ fontSize: 18, fontWeight: 700, color: '#222', margin: '0 0 8px' }}>
//           Call us to get in touch
//         </p>
//         <p style={{ fontSize: 14, color: '#666', margin: '0 0 20px' }}>
//           9:00 AM to 6:00 PM, Monday to Friday
//         </p>

//         {/* Phone button */}
//         <a
//           href="tel:800-38249953"
//           style={{
//             display: 'block',
//             background: '#E8001C',
//             color: '#fff',
//             borderRadius: 6,
//             padding: '14px 20px',
//             fontWeight: 700,
//             fontSize: 16,
//             textDecoration: 'none',
//             marginBottom: 16,
//           }}
//         >
//           800-38249953 (dubizzle)
//         </a>

//         {/* Email */}
//         <p style={{ fontSize: 14, color: '#555', margin: 0 }}>
//           Or email us at{' '}
//           <a
//             href="mailto:customersupport@dubizzle.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: '#005f96', textDecoration: 'underline' }}
//           >
//             customersupport@dubizzle.com
//           </a>
//         </p>
//       </div>
//     </>
//   )
// }

/* ─── Dubai Skyline SVG ─── */
const DubaiSkyline = () => (
  <svg
    viewBox="0 0 1440 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', display: 'block' }}
    preserveAspectRatio="xMidYMax meet"
  >
    {/* Ground */}
    <rect x="0" y="155" width="1440" height="25" fill="#2a2a2a" />

    {/* Ferris wheel left */}
    <circle cx="80" cy="110" r="45" stroke="#aaa" strokeWidth="2" fill="none" />
    <line x1="80" y1="65" x2="80" y2="155" stroke="#aaa" strokeWidth="2" />
    <line x1="35" y1="110" x2="125" y2="110" stroke="#aaa" strokeWidth="2" />
    <line x1="48" y1="77" x2="112" y2="143" stroke="#aaa" strokeWidth="1.5" />
    <line x1="112" y1="77" x2="48" y2="143" stroke="#aaa" strokeWidth="1.5" />
    <circle cx="80" cy="110" r="8" fill="#aaa" />

    {/* Buildings left cluster */}
    <rect x="140" y="100" width="18" height="55" fill="#bbb" />
    <rect x="162" y="85" width="14" height="70" fill="#c0c0c0" />
    <rect x="180" y="95" width="20" height="60" fill="#b8b8b8" />
    <rect x="204" y="75" width="16" height="80" fill="#c5c5c5" />
    <rect x="224" y="90" width="22" height="65" fill="#b5b5b5" />

    {/* Palm trees */}
    <line x1="260" y1="155" x2="260" y2="105" stroke="#888" strokeWidth="3" />
    <ellipse cx="260" cy="100" rx="20" ry="10" fill="#999" />
    <ellipse cx="248" cy="107" rx="14" ry="6" fill="#999" transform="rotate(-20 248 107)" />
    <ellipse cx="272" cy="107" rx="14" ry="6" fill="#999" transform="rotate(20 272 107)" />

    {/* Burj Al Arab style */}
    <polygon points="300,155 320,30 340,155" fill="#c8c8c8" />
    <rect x="304" y="100" width="32" height="55" fill="#d0d0d0" />
    <rect x="318" y="28" width="4" height="10" fill="#aaa" />
    {/* Sail lines */}
    <line x1="302" y1="155" x2="320" y2="50" stroke="#aaa" strokeWidth="0.8" />
    <line x1="338" y1="155" x2="320" y2="50" stroke="#aaa" strokeWidth="0.8" />
    <line x1="305" y1="130" x2="335" y2="130" stroke="#aaa" strokeWidth="0.6" />
    <line x1="308" y1="110" x2="332" y2="110" stroke="#aaa" strokeWidth="0.6" />
    <line x1="310" y1="90" x2="330" y2="90" stroke="#aaa" strokeWidth="0.6" />
    <line x1="313" y1="70" x2="327" y2="70" stroke="#aaa" strokeWidth="0.6" />

    {/* More buildings */}
    <rect x="355" y="80" width="18" height="75" fill="#c0c0c0" />
    <rect x="377" y="60" width="14" height="95" fill="#ccc" />
    <rect x="395" y="90" width="20" height="65" fill="#bbb" />

    {/* Oval/egg shaped building (Aldar HQ style) */}
    <ellipse cx="440" cy="110" rx="25" ry="45" fill="#c5c5c5" />
    <rect x="435" y="130" width="10" height="25" fill="#bbb" />

    {/* Palm trees middle */}
    <line x1="475" y1="155" x2="475" y2="105" stroke="#888" strokeWidth="3" />
    <ellipse cx="475" cy="100" rx="20" ry="10" fill="#999" />
    <ellipse cx="463" cy="107" rx="14" ry="6" fill="#999" transform="rotate(-20 463 107)" />
    <ellipse cx="487" cy="107" rx="14" ry="6" fill="#999" transform="rotate(20 487 107)" />

    {/* Mid buildings */}
    <rect x="505" y="70" width="16" height="85" fill="#c8c8c8" />
    <rect x="525" y="50" width="20" height="105" fill="#d0d0d0" />
    <rect x="549" y="80" width="14" height="75" fill="#bbb" />
    <rect x="567" y="65" width="18" height="90" fill="#c5c5c5" />

    {/* Helicopter */}
    <ellipse cx="590" cy="48" rx="12" ry="5" fill="#999" />
    <rect x="578" y="45" width="24" height="6" rx="3" fill="#aaa" />
    <line x1="585" y1="53" x2="582" y2="60" stroke="#999" strokeWidth="1.5" />
    <line x1="595" y1="53" x2="598" y2="60" stroke="#999" strokeWidth="1.5" />
    <line x1="570" y1="47" x2="610" y2="47" stroke="#999" strokeWidth="1" />

    {/* Burj Khalifa style - tallest */}
    <polygon points="630,155 636,10 642,155" fill="#d0d0d0" />
    <rect x="625" y="100" width="22" height="55" fill="#c8c8c8" />
    <rect x="628" y="70" width="16" height="35" fill="#ccc" />
    <rect x="631" y="40" width="10" height="32" fill="#d0d0d0" />
    <line x1="636" y1="10" x2="636" y2="5" stroke="#aaa" strokeWidth="1.5" />
    {/* Setback lines */}
    <line x1="625" y1="100" x2="647" y2="100" stroke="#bbb" strokeWidth="1" />
    <line x1="628" y1="70" x2="644" y2="70" stroke="#bbb" strokeWidth="1" />
    <line x1="631" y1="40" x2="641" y2="40" stroke="#bbb" strokeWidth="1" />

    {/* Twin towers */}
    <rect x="660" y="65" width="18" height="90" fill="#c5c5c5" />
    <rect x="660" y="62" width="18" height="6" rx="3" fill="#bbb" />
    <rect x="690" y="65" width="18" height="90" fill="#c5c5c5" />
    <rect x="690" y="62" width="18" height="6" rx="3" fill="#bbb" />
    <rect x="669" y="100" width="30" height="6" fill="#bbb" />

    {/* Birds */}
    <path d="M 750 35 Q 754 30 758 35" stroke="#999" strokeWidth="1.5" fill="none" />
    <path d="M 762 28 Q 766 23 770 28" stroke="#999" strokeWidth="1.5" fill="none" />
    <path d="M 756 42 Q 760 37 764 42" stroke="#999" strokeWidth="1.5" fill="none" />

    {/* More mid-right buildings */}
    <rect x="780" y="80" width="20" height="75" fill="#c0c0c0" />
    <rect x="804" y="95" width="16" height="60" fill="#bbb" />
    <rect x="824" y="70" width="22" height="85" fill="#ccc" />
    <rect x="850" y="85" width="18" height="70" fill="#c5c5c5" />

    {/* Palm trees right-center */}
    <line x1="880" y1="155" x2="880" y2="105" stroke="#888" strokeWidth="3" />
    <ellipse cx="880" cy="100" rx="20" ry="10" fill="#999" />
    <ellipse cx="868" cy="107" rx="14" ry="6" fill="#999" transform="rotate(-20 868 107)" />
    <ellipse cx="892" cy="107" rx="14" ry="6" fill="#999" transform="rotate(20 892 107)" />

    {/* Right cluster buildings */}
    <rect x="910" y="75" width="16" height="80" fill="#c8c8c8" />
    <rect x="930" y="55" width="20" height="100" fill="#d0d0d0" />
    <rect x="955" y="85" width="14" height="70" fill="#bbb" />
    <rect x="973" y="65" width="22" height="90" fill="#c0c0c0" />
    <rect x="999" y="90" width="16" height="65" fill="#c5c5c5" />

    {/* Abu Dhabi gate style arch */}
    <rect x="1030" y="90" width="16" height="65" fill="#ccc" />
    <rect x="1076" y="90" width="16" height="65" fill="#ccc" />
    <path d="M 1030 90 Q 1061 50 1092 90" stroke="#ccc" strokeWidth="14" fill="none" />

    {/* More right buildings */}
    <rect x="1110" y="80" width="18" height="75" fill="#c0c0c0" />
    <rect x="1132" y="95" width="14" height="60" fill="#bbb" />
    <rect x="1150" y="70" width="20" height="85" fill="#ccc" />

    {/* Palm trees far right */}
    <line x1="1185" y1="155" x2="1185" y2="105" stroke="#888" strokeWidth="3" />
    <ellipse cx="1185" cy="100" rx="20" ry="10" fill="#999" />
    <ellipse cx="1173" cy="107" rx="14" ry="6" fill="#999" transform="rotate(-20 1173 107)" />
    <ellipse cx="1197" cy="107" rx="14" ry="6" fill="#999" transform="rotate(20 1197 107)" />

    {/* Far right buildings */}
    <rect x="1215" y="85" width="18" height="70" fill="#bbb" />
    <rect x="1237" y="65" width="22" height="90" fill="#c5c5c5" />
    <rect x="1263" y="95" width="16" height="60" fill="#c0c0c0" />
    <rect x="1283" y="75" width="20" height="80" fill="#ccc" />

    {/* Ferris wheel right */}
    <circle cx="1360" cy="110" r="45" stroke="#aaa" strokeWidth="2" fill="none" />
    <line x1="1360" y1="65" x2="1360" y2="155" stroke="#aaa" strokeWidth="2" />
    <line x1="1315" y1="110" x2="1405" y2="110" stroke="#aaa" strokeWidth="2" />
    <line x1="1328" y1="77" x2="1392" y2="143" stroke="#aaa" strokeWidth="1.5" />
    <line x1="1392" y1="77" x2="1328" y2="143" stroke="#aaa" strokeWidth="1.5" />
    <circle cx="1360" cy="110" r="8" fill="#aaa" />

    {/* Oval right */}
    <ellipse cx="1320" cy="110" rx="22" ry="42" fill="#c0c0c0" />
    <rect x="1315" y="132" width="10" height="23" fill="#bbb" />
  </svg>
)

/* ─── Form options ─── */
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

/* ─── Main Component ─── */
export default function ContactUs() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedForm, setSelectedForm] = useState('')
  const [showCallModal, setShowCallModal] = useState(true)

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
      fontSize: 14,
      color: '#3b4245',
    }}>

      {/* ── Call Us Modal ── */}
      {/* {showCallModal && <CallUsModal onClose={() => setShowCallModal(false)} />} */}

      {/* ── Header ── */}
      <header style={{
        background: '#fff',
        borderBottom: '3px solid #E8001C',
        padding: '0 40px',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
      }}>
        <Link to="/" aria-label="dubizzle home">
          <Logo width={120} height={28} />
        </Link>

        {/* Language selector */}
        <div style={{ color: '#E8001C', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
          English (United States)
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E8001C" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
        </div>

        {/* Place Your Ad */}
        <a
          href="https://uae.dubizzle.com/place-an-ad"
          rel="nofollow"
          style={{
            background: '#E8001C',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            padding: '10px 20px',
            fontWeight: 700,
            fontSize: 13,
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            letterSpacing: 0.5,
            textTransform: 'uppercase',
          }}
        >
          <DiamondIcon />
          Place Your Ad
        </a>
      </header>

      {/* ── Search Hero ── */}
      <div style={{ background: '#f2f2f2', padding: '40px 20px 36px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 28, fontWeight: 400, color: '#555', marginBottom: 24 }}>
          How can we help you?
        </h1>

        {/* Search bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: 600,
          margin: '0 auto',
          background: '#fff',
          border: '1px solid #ddd',
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
        }}>
          <input
            type="search"
            placeholder="Search our articles"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              padding: '13px 16px',
              fontSize: 15,
              color: '#333',
              background: 'transparent',
              fontFamily: 'inherit',
            }}
          />
          <button
            type="button"
            style={{
              background: 'transparent',
              border: 'none',
              padding: '0 16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <SearchIcon />
          </button>
        </div>
      </div>

      {/* ── Breadcrumbs ── */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
          <ol style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            listStyle: 'none',
            padding: '12px 0',
            margin: 0,
          }}>
            <li>
              <Link
                to="/help"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  color: '#555',
                  textDecoration: 'none',
                  fontSize: 13,
                  border: '1px solid #ddd',
                  borderRadius: 3,
                  padding: '5px 12px',
                }}
              >
                <ChevronLeft />
                Help Center
              </Link>
            </li>
            <li style={{ margin: '0 8px', color: '#aaa', fontSize: 13 }}></li>
            <li>
              <span style={{
                fontSize: 13,
                color: '#fff',
                background: '#555',
                borderRadius: 3,
                padding: '5px 14px',
                fontWeight: 600,
              }}>
                Submit a request
              </span>
            </li>
          </ol>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div style={{ flex: 1, background: '#f7f7f7' }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '32px 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 300px',
          gap: 24,
          alignItems: 'start',
        }}>

          {/* Left: Form */}
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: '#2a2a2a', margin: '0 0 4px' }}>
              Help us help you faster!
            </h1>
            <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '12px 0 24px' }} />

            <div style={{
              background: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: 4,
              padding: '24px 28px 20px',
            }}>
              <p style={{ color: '#555', fontSize: 13, lineHeight: 1.6, margin: '0 0 20px' }}>
                Accurately selecting your specific issue from the drop-down lists below will enable us to direct
                your message to the right deparment. Once you select your issue, you will be able to contact us.
              </p>

              {/* Dropdown */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontWeight: 600, fontSize: 13, color: '#333', marginBottom: 8 }}>
                  How can we help? Select a form that best meets your needs:
                </label>
                <div style={{ position: 'relative' }}>
                  <select
                    value={selectedForm}
                    onChange={(e) => setSelectedForm(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 36px 10px 12px',
                      fontSize: 14,
                      color: '#333',
                      border: '1px solid #ccc',
                      borderRadius: 4,
                      background: '#fff',
                      appearance: 'none',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                  >
                    {formOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {/* Custom chevron */}
                  <div style={{
                    position: 'absolute',
                    right: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
                  </div>
                </div>
              </div>

              {/* Mandatory note */}
              <div style={{ fontSize: 12, color: '#666' }}>
                <span style={{ color: '#E8001C', fontWeight: 700 }}>*</span>
                {' '}Mandatory fields
              </div>
            </div>
          </div>

          {/* Right: Trending Articles */}
          <div>
            <div style={{
              border: '1px solid #e0e0e0',
              borderRadius: 4,
              overflow: 'hidden',
            }}>
              <div style={{
                background: '#fff',
                padding: '14px 20px',
                borderBottom: '1px solid #e0e0e0',
              }}>
                <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: '#333' }}>Trending articles</h4>
              </div>
              <div style={{ background: '#f5f5f5', padding: '12px 20px' }}>
                {trendingArticles.map((article) => (
                  <div key={article} style={{ padding: '6px 0', borderBottom: '1px solid #eee' }}>
                    <a
                      href="#"
                      style={{
                        color: '#005f96',
                        textDecoration: 'none',
                        fontSize: 13,
                        lineHeight: 1.4,
                        display: 'block',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                    >
                      {article}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Dubai Skyline ── */}
      <div style={{ background: '#f7f7f7', lineHeight: 0, marginTop: 'auto' }}>
        <DubaiSkyline />
      </div>

      {/* ── Simple Footer ── */}
      <div style={{ background: '#f0f0f0', borderTop: '1px solid #ddd' }}>
        {/* Links row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 1100,
          margin: '0 auto',
          padding: '16px 40px',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          {/* Nav links */}
          <nav style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              { label: 'Home', href: 'https://uae.dubizzle.com/' },
              { label: 'Terms of Use', href: 'https://uae.dubizzle.com/terms/' },
              { label: 'Privacy Policy', href: 'https://uae.dubizzle.com/privacy/' },
              { label: 'About Us', href: 'https://uae.dubizzle.com/about/' },
              { label: 'Place Your Ad', href: 'https://uae.dubizzle.com/place-an-ad' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{ color: '#555', textDecoration: 'none', fontSize: 13 }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                {link.label}
              </a>
            ))}
            {/* Call Us — opens modal */}
            <button
              type="button"
              onClick={() => setShowCallModal(true)}
              style={{
                background: 'none', border: 'none', padding: 0,
                color: '#555', fontSize: 13, cursor: 'pointer',
                textDecoration: 'none', fontFamily: 'inherit',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              Call Us
            </button>
          </nav>

          {/* App store badges */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <a href="https://play.google.com/store/apps/details?id=com.dubizzle.horizontal&hl=en" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/320px-Google_Play_Store_badge_EN.svg.png"
                alt="Get it on Google Play"
                height="36"
                style={{ display: 'block' }}
              />
            </a>
            <a href="https://itunes.apple.com/app/apple-store/id892172848" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/320px-Download_on_the_App_Store_Badge.svg.png"
                alt="Download on the App Store"
                height="36"
                style={{ display: 'block' }}
              />
            </a>
          </div>
        </div>

        {/* Copyright bar */}
        <div style={{ background: '#E8001C', padding: '10px 40px' }}>
          <p style={{ color: '#fff', fontSize: 13, textAlign: 'center', margin: 0 }}>
            © dubizzle.com 2026, All Rights Reserved.
          </p>
        </div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .contact-header {
            padding: 0 16px !important;
          }
          .contact-hero {
            padding: 28px 16px !important;
          }
          .contact-main {
            padding: 20px 16px !important;
          }
        }
      `}</style>
    </div>
  )
}