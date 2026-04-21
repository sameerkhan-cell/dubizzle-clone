import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

/* ─── Data ─── */
const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about-us' },
      { label: 'Advertising', to: '/advertising' },
      { label: 'Careers', to: '/careers' },
      { label: 'Legal Hub', to: '/legal-hub' },
      { label: 'Terms of Use', to: '/terms' },
    ],
  },
  {
    title: 'UAE',
    links: [
      { label: 'Dubai', to: '/dubai' },
      { label: 'Abu Dhabi', to: '/abu-dhabi' },
      { label: 'Ras Al Khaimah', to: '/city/ras-al-khaimah' },
      { label: 'Sharjah', to: '/city/sharjah' },
      { label: 'Fujairah', to: '/city/fujairah' },
      { label: 'Ajman', to: '/city/ajman' },
      { label: 'Umm Al Quwain', to: '/city/umm-al-quwain' },
      { label: 'Al Ain', to: '/city/al-ain' },
    ],
  },
  {
    title: 'Other Countries',
    links: [
      { label: 'Egypt', to: '/egypt' },
      { label: 'Bahrain', href: '#' },
      { label: 'Saudi Arabia', href: '#' },
      { label: 'Kuwait', href: '#' },
      { label: 'Oman', href: '#' },
      { label: 'Qatar', href: '#' },
    ],
  },
  {
    title: 'Get Social',
    links: [
      { label: 'Facebook', href: 'https://www.facebook.com/dubizzle' },
      { label: 'X', href: 'https://x.com/dubizzle' },
      { label: 'Youtube', href: 'https://www.youtube.com/user/Dubizzle' },
      { label: 'Instagram', href: 'https://www.instagram.com/dubizzle' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/dubizzle-com/' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help', to: '/help' },
      { label: 'Contact Us', to: '/contact-us' },
      { label: 'Call Us', modal: true }, // ← triggers modal
    ],
  },
  {
    title: 'Languages',
    links: [{ label: 'العربية', href: '#' }],
  },
]

export const footerSocialLinks = footerColumns.find((column) => column.title === 'Get Social')?.links ?? []

/* ─── Call Us Modal ─── */
function CallUsModal({ onClose }) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 1000,
        }}
      />
      {/* Modal box */}
      <div style={{
        position: 'fixed',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#fff',
        borderRadius: 12,
        padding: '36px 40px 32px',
        zIndex: 1001,
        width: 340,
        maxWidth: '90vw',
        textAlign: 'center',
        boxShadow: '0 24px 48px rgba(0,0,0,0.18)',
      }}>
        {/* Phone icon */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
          <img
            src="https://static.dubizzle.com/frontend-web/static-resources/assets/images/phone-icon.svg"
            alt="Phone Icon"
            width={64}
            height={64}
          />
        </div>

        <p style={{ fontSize: 18, fontWeight: 700, color: '#222', margin: '0 0 8px' }}>
          Call us to get in touch
        </p>
        <p style={{ fontSize: 14, color: '#666', margin: '0 0 20px' }}>
          9:00 AM to 6:00 PM, Monday to Friday
        </p>

        {/* Phone button */}
        <a
          href="tel:800-38249953"
          style={{
            display: 'block',
            background: '#E8001C',
            color: '#fff',
            borderRadius: 6,
            padding: '14px 20px',
            fontWeight: 700,
            fontSize: 16,
            textDecoration: 'none',
            marginBottom: 16,
          }}
        >
          800-38249953 (dubizzle)
        </a>

        {/* Email */}
        <p style={{ fontSize: 14, color: '#555', margin: 0 }}>
          Or email us at{' '}
          <a
            href="mailto:customersupport@dubizzle.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#005f96', textDecoration: 'underline' }}
          >
            customersupport@dubizzle.com
          </a>
        </p>
      </div>
    </>
  )
}

/* ─── Consumer Rights Badge ─── */
function ConsumerRightsBadge() {
  return (
    <div style={{
      width: 80, height: 80, borderRadius: '50%',
      background: 'linear-gradient(135deg, #ffe84a 0%, #d4a800 100%)',
      border: '3px solid #c49b00',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
      padding: '4px', position: 'relative', flexShrink: 0,
    }}>
      <svg viewBox="0 0 80 80" style={{ position: 'absolute', top: 0, left: 0, width: 80, height: 80 }}>
        <path id="arcTop" d="M 12,40 A 28,28 0 0,1 68,40" fill="none" />
        <text fontSize="7" fill="#7a0000" fontWeight="bold" fontFamily="Arial">
          <textPath href="#arcTop" startOffset="10%">كن على حق</textPath>
        </text>
        <path id="arcBottom" d="M 14,44 A 26,26 0 0,0 66,44" fill="none" />
        <text fontSize="5.5" fill="#7a0000" fontWeight="600" fontFamily="Arial">
          <textPath href="#arcBottom" startOffset="5%">Know Your Consumer Rights</textPath>
        </text>
      </svg>
      <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: '#7a0000', marginTop: -4 }}>
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59L5.25 14c-.16.28-.25.61-.25.96C5 16.1 5.9 17 7 17h13v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 23.44 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2z" />
      </svg>
      <span style={{ fontSize: 6, fontWeight: 'bold', color: '#7a0000', lineHeight: 1.2, marginTop: 1 }}>Be Right</span>
      <span style={{ fontSize: 6.5, fontWeight: 'bold', color: '#cc0000', lineHeight: 1.3, letterSpacing: '0.02em' }}>600 545555</span>
    </div>
  )
}

/* ─── DubizzleGroupLogo ─── */
function DubizzleGroupLogo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1 }}>
      <Logo width={110} height={26} />
      <span style={{ fontSize: 16, fontWeight: 800, color: '#E8001C', marginTop: -1, fontStyle: 'normal', letterSpacing: '-0.01em' }}>
        group
      </span>
    </div>
  )
}

/* ─── Footer ─── */
export default function Footer() {
  const [showCallModal, setShowCallModal] = useState(false)

  const commonStyle = {
    fontSize: 14,
    color: '#0066CC',
    textDecoration: 'none',
    display: 'inline-block',
    padding: '2px 0',
  }

  return (
    <footer>
      {/* ── Call Us Modal ── */}
      {showCallModal && <CallUsModal onClose={() => setShowCallModal(false)} />}

      {/* ── Section 1: Link columns ── */}
      <div style={{ backgroundColor: '#F0F2F5', padding: '40px 0' }}>
        <div
          style={{
            maxWidth: 1232, margin: '0 auto', padding: '0 40px',
            display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px',
          }}
          className="footer-grid"
        >
          {footerColumns.map(({ title, links }) => (
            <div key={title}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: '#333333', marginBottom: 8, marginTop: 0 }}>
                {title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link.label} style={{ lineHeight: 2 }}>
                    {/* Call Us — opens modal */}
                    {link.modal ? (
                      <button
                        type="button"
                        onClick={() => setShowCallModal(true)}
                        style={{ ...commonStyle, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                        onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                        onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                      >
                        {link.label}
                      </button>
                    ) : link.to ? (
                      <Link
                        to={link.to}
                        style={commonStyle}
                        onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                        onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href ?? '#'}
                        style={commonStyle}
                        target={link.href?.startsWith('http') ? '_blank' : undefined}
                        rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                        onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 2: Bottom bar ── */}
      <div style={{ backgroundColor: '#ffffff', padding: '20px 40px' }}>
        <div
          style={{
            maxWidth: 1232, margin: '0 auto',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
          }}
          className="footer-bottom"
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6 }}>
            <DubizzleGroupLogo />
            <p style={{ fontSize: 13, color: '#888888', margin: 0 }}>
              © dubizzle.com 2026, All Rights Reserved.
            </p>
          </div>
          <ConsumerRightsBadge />
        </div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; padding: 0 20px !important; }
          .footer-bottom { flex-direction: column !important; align-items: center !important; }
        }
      `}</style>
    </footer>
  )
}