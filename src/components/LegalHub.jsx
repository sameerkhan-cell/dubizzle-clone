import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Footer from './Footer'
import PostAdModal from './PostAdModal'

/* ─── Icons ─── */
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const LegalTermsIcon = () => (
  <div style={{ width: 52, height: 52, marginBottom: 14 }}>
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="4" width="32" height="40" rx="2" fill="#e8e8e8" stroke="#d0d0d0" strokeWidth="1" />
      <line x1="13" y1="14" x2="33" y2="14" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round" />
      <line x1="13" y1="20" x2="33" y2="20" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round" />
      <line x1="13" y1="26" x2="24" y2="26" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round" />
      <circle cx="36" cy="36" r="13" fill="#E8001C" />
      <line x1="30" y1="36" x2="42" y2="36" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="30" y1="31" x2="38" y2="31" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="41" x2="36" y2="41" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
)

const PrivacyPolicyIcon = () => (
  <div style={{ width: 52, height: 52, marginBottom: 14 }}>
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="22" r="16" fill="#9fa8da" opacity="0.35" />
      <circle cx="22" cy="18" r="8" fill="#5c6bc0" opacity="0.7" />
      <ellipse cx="22" cy="36" rx="12" ry="8" fill="#5c6bc0" opacity="0.7" />
      <circle cx="36" cy="14" r="6" fill="#E8001C" opacity="0.85" />
    </svg>
  </div>
)

/* ─── Legal links data ─── */
const legalLinks = [
  { label: 'Terms of Use', to: '/terms' },
  { label: 'Additional Terms – Property', to: '/terms#additional-terms-property' },
  { label: 'Additional Terms – Motors', to: '/terms#additional-terms-motors' },
  { label: 'Additional Terms – Jobs', to: '/terms#additional-terms-jobs' },
  { label: 'Additional Terms – Holiday Homes', to: '/terms#additional-terms-holiday-homes' },
  { label: 'Additional Terms – Verified Business Account', to: '/terms#additional-terms-vba' },
  { label: 'Acceptable Use Policy', to: '/terms#acceptable-use-policy' },
  { label: 'Vehicle Inspection Terms and Conditions', to: '/terms#vehicle-inspection-terms' },
  { label: 'Vehicle Auction Terms and Conditions', to: '/terms#vehicle-auction-terms' },
  { label: 'Vehicle Intermediary Services Terms and Conditions', to: '/terms#vehicle-intermediary-terms' },
  { label: 'Vehicle Evaluation Terms and Conditions', to: '/terms#vehicle-evaluation-terms' },
]

const linkStyle = {
  color: '#0066CC',
  textDecoration: 'none',
  fontSize: 14,
  lineHeight: '2',
  display: 'inline-block',
}

/* ─── Main Page ─── */
export default function LegalHub() {
  const [searchQuery, setSearchQuery] = useState('')
  const [modalOpen, setModalOpen] = useState(false)  // ← PostAdModal state

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff', fontFamily: "'Segoe UI', Arial, sans-serif" }}>

      {/* ── Simple Header ── */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        height: 56,
        borderBottom: '1px solid #e0e0e0',
        background: '#fff',
        flexShrink: 0,
      }}>
        <Link to="/" aria-label="dubizzle home">
          <Logo width={110} height={26} />
        </Link>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          style={{
            background: '#e00718',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 18px',
            fontWeight: 800,
            fontSize: 11,
            cursor: 'pointer',
            letterSpacing: 0.5,
            textTransform: 'uppercase',
          }}
        >
          Place Your Ad
        </button>
      </header>

      {/* ── Hero Section ── */}
      <div style={{ position: 'relative', background: '#fff', overflow: 'hidden', borderBottom: '1px solid #e0e0e0' }}>

        {/* Geometric background — right side triangles */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', zIndex: 0, pointerEvents: 'none' }}>
          <svg width="100%" height="100%" viewBox="0 0 500 280" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="500,0 500,280 140,280" fill="#c8d8e8" opacity="0.55" />
            <polygon points="500,0 500,200 240,200" fill="#b0c8dc" opacity="0.6" />
          </svg>
        </div>

        {/* Yellow top-right corner */}
        <div style={{
          position: 'absolute', right: 0, top: 0,
          width: 0, height: 0,
          borderStyle: 'solid',
          borderWidth: '0 70px 70px 0',
          borderColor: 'transparent #f5c518 transparent transparent',
          zIndex: 1,
        }} />

        {/* Hero content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1232, margin: '0 auto', padding: '60px 40px 64px' }}>
          <p style={{ margin: '0 0 4px', fontSize: 20, color: '#333', fontWeight: 400 }}>Welcome to</p>
          <h1 style={{ margin: '0 0 10px', fontSize: 38, color: '#E8001C', fontWeight: 700, lineHeight: 1.15 }}>
            dubizzle Legal Hub
          </h1>
          <p style={{ margin: '0 0 30px', fontSize: 15, color: '#555' }}>
            Find legal information and resources for dubizzle products and services
          </p>

          {/* Search bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: 320,
              borderRadius: 8,
              overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
              border: '1.5px solid #e0e0e0',
              background: '#fff',
              transition: 'box-shadow 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(232,0,28,0.13)'
              e.currentTarget.style.borderColor = '#E8001C'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.10)'
              e.currentTarget.style.borderColor = '#e0e0e0'
            }}
          >
            <input
              type="text"
              placeholder="Search legal documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                flex: 1,
                padding: '12px 16px',
                fontSize: 14,
                color: '#333',
                background: 'transparent',
                fontFamily: 'inherit',
              }}
            />
            <button
              type="button"
              style={{
                background: '#E8001C',
                border: 'none',
                width: 42,
                height: 42,
                margin: 4,
                borderRadius: 6,
                cursor: 'pointer',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'background 0.2s, transform 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#c0001a'
                e.currentTarget.style.transform = 'scale(0.96)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#E8001C'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>

      {/* ── Cards: Legal Terms & Privacy Policy ── */}
      <div style={{ flex: 1, maxWidth: 1232, margin: '0 auto', width: '100%', padding: '52px 40px 0', boxSizing: 'border-box' }}>
        <div
          className="legal-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px 80px',
            paddingBottom: 52,
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          {/* Legal Terms */}
          <div>
            <LegalTermsIcon />
            <h2 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 700, color: '#222' }}>Legal Terms</h2>
            <p style={{ margin: '0 0 16px', color: '#666', fontSize: 13 }}>Terms you agree to when you use dubizzle</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Privacy Policy */}
          <div>
            <PrivacyPolicyIcon />
            <h2 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 700, color: '#222' }}>Privacy Policy</h2>
            <p style={{ margin: '0 0 16px', color: '#666', fontSize: 13 }}>
              Information about how we handle your personal Information
            </p>
            <Link
              to="/privacy-policy"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* ── Transparency & Contact ── */}
        <div style={{ padding: '48px 0 64px' }}>
          <h2 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 700, color: '#222' }}>
            We're all about transparency and accountability.
          </h2>
          <p style={{ margin: '0 0 32px', color: '#555', fontSize: 14, lineHeight: 1.6 }}>
            That's why we built this hub: to simplify access to the legal bits. Let's make buying and selling a seamless and enjoyable experience for everyone.
          </p>

          <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 700, color: '#222' }}>Need to contact us?</h3>
          <p style={{ margin: '0 0 6px', color: '#555', fontSize: 14, lineHeight: 1.6 }}>
            For any questions about your use of our services, please email{' '}
            <a
              href="mailto:support@dubizzle.com"
              style={{ color: '#0066CC', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              support@dubizzle.com
            </a>.
          </p>
          <p style={{ margin: 0, color: '#555', fontSize: 14, lineHeight: 1.6 }}>
            For any questions relating to your privacy or our use of your personal information, please email{' '}
            <a
              href="mailto:privacy@dubizzle.com"
              style={{ color: '#0066CC', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              privacy@dubizzle.com
            </a>.
          </p>
        </div>
      </div>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 768px) {
          .legal-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 540px) {
          .legal-hub-hero {
            padding: 36px 20px 44px !important;
          }
          .legal-hub-body {
            padding: 32px 20px 0 !important;
          }
        }
      `}</style>

      {/* ── Post Ad Modal ── */}
      <PostAdModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

    </div>
  )
}