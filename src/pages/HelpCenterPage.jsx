import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ChevronDown, ChevronUp, Plus } from 'lucide-react'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import PostAdModal from '../components/PostAdModal'

const categories = [
  {
    id: 'my-account',
    label: 'My Account',
    color: '#c00',
    articles: [
      'How do I create an account?',
      'How do I change my password?',
      'How do I update my profile?',
      'How do I delete my account?',
    ],
  },
  {
    id: 'ads',
    label: 'Ads',
    color: '#222',
    articles: [
      'How do I post an ad?',
      'How do I edit my ad?',
      'Why was my ad rejected?',
      'How long does my ad stay active?',
    ],
  },
  {
    id: 'trust-safety',
    label: 'Trust & Safety',
    color: '#c00',
    articles: [
      'How do I report a suspicious ad?',
      'How do I block a user?',
      'Tips for safe buying and selling',
    ],
  },
  {
    id: 'verified-business',
    label: 'Verified Business',
    color: '#222',
    articles: [
      'What is a verified business account?',
      'How do I apply for verification?',
      'Benefits of a verified business account',
    ],
  },
  {
    id: 'troubleshooting',
    label: 'Troubleshooting',
    color: '#c00',
    articles: [
      'I cannot log in to my account',
      'My ad is not showing',
      'App is not working properly',
    ],
  },
  {
    id: 'motors-faqs',
    label: 'Motors FAQs',
    color: '#c00',
    articles: [
      'How do I list a car for sale?',
      'What is the vehicle inspection service?',
      'How do I search for cars?',
    ],
  },
  {
    id: 'holiday-homes',
    label: 'Holiday Homes',
    color: '#222',
    articles: [
      'What are holiday homes on dubizzle?',
      'How do I list my property as a holiday home?',
      'What are the requirements for holiday home listings?',
    ],
  },
]

const trendingArticles = [
  'How to post an ad on dubizzle',
  'Why was my ad rejected?',
  'How to stay safe on dubizzle',
  'Reset my password',
  'Contact dubizzle support',
]

function CategoryRow({ cat, query }) {
  const [open, setOpen] = useState(false)

  const filtered = query
    ? cat.articles.filter((a) => a.toLowerCase().includes(query.toLowerCase()))
    : cat.articles

  if (query && filtered.length === 0) return null

  return (
    <div style={{ borderBottom: '1px solid #e5e5e5', background: '#fff' }}>
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          gap: 16, padding: '18px 20px',
          background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{
          width: 32, height: 32, background: '#1a1a1a', borderRadius: 4,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <Plus size={18} color="#fff" strokeWidth={2.5} />
        </span>
        <span style={{ flex: 1, fontSize: 16, fontWeight: 600, color: cat.color }}>
          {cat.label}
        </span>
        {open ? <ChevronUp size={18} color="#888" /> : <ChevronDown size={18} color="#888" />}
      </button>

      {(open || query) && filtered.length > 0 && (
        <ul style={{ margin: 0, padding: '0 20px 16px 68px', listStyle: 'none' }}>
          {filtered.map((article) => (
            <li key={article} style={{ padding: '6px 0', borderTop: '1px solid #f0f0f0' }}>
              <a
                href="#"
                style={{ fontSize: 14, color: '#0066cc', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                {article}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function HelpCenterPage() {
  const [query, setQuery] = useState('')
  const [modalOpen, setModalOpen] = useState(false)  // ← PostAdModal state

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, Arial, sans-serif', background: '#f5f5f5' }}>

      {/* ── Navbar ── */}
      <header style={{ background: '#fff', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 'auto', minHeight: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <Link to="/"><Logo width={110} height={26} /></Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ fontSize: 13, color: '#c00', fontWeight: 500, cursor: 'pointer' }}>
              English (United States) ▾
            </span>
            {/* Header — Place Your Ad button */}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              style={{
                background: '#c00', color: '#fff', fontSize: 13, fontWeight: 700,
                padding: '8px 16px', borderRadius: 4, border: 'none',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              ◇ PLACE YOUR AD
            </button>
          </div>
        </div>
        <div style={{ height: 3, background: '#c00' }} />
      </header>

      {/* ── Hero / Search ── */}
      <section style={{ background: '#f5f5f5', padding: '48px 24px 40px' }}>
        <h1 style={{ textAlign: 'center', fontSize: 32, fontWeight: 400, color: '#555', margin: '0 0 28px' }}>
          How can we help you?
        </h1>
        <div style={{ maxWidth: 540, margin: '0 auto', position: 'relative' }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search our articles"
            style={{
              width: '100%', boxSizing: 'border-box',
              padding: '12px 50px 12px 16px', fontSize: 15,
              border: '1px solid #ddd', borderRadius: 4,
              outline: 'none', background: '#fff', color: '#333',
            }}
          />
          <button type="button" style={{ position: 'absolute', right: 0, top: 0, height: '100%', padding: '0 14px', background: 'none', border: 'none', cursor: 'pointer', color: '#c00', display: 'flex', alignItems: 'center' }}>
            <Search size={20} />
          </button>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div
        style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 60px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 32, width: '100%', boxSizing: 'border-box' }}
        className="help-grid"
      >
        {/* Categories */}
        <div style={{ border: '1px solid #ddd', borderRadius: 4, overflow: 'hidden', background: '#fff' }}>
          {categories.map((cat) => (
            <CategoryRow key={cat.id} cat={cat} query={query} />
          ))}
        </div>

        {/* Trending sidebar */}
        <div>
          <div style={{ border: '1px solid #ddd', borderRadius: 4, background: '#fff', overflow: 'hidden' }}>
            <div style={{ padding: '14px 18px', borderBottom: '1px solid #eee', fontWeight: 700, fontSize: 15, color: '#333' }}>
              Trending articles
            </div>
            <ul style={{ margin: 0, padding: '8px 18px 16px', listStyle: 'none' }}>
              {trendingArticles.map((a) => (
                <li key={a} style={{ padding: '8px 0', borderBottom: '1px solid #f5f5f5' }}>
                  <a href="#" style={{ fontSize: 13, color: '#0066cc', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                  >{a}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Dubai skyline illustration ── */}
      <div style={{ marginTop: 'auto', background: '#f5f5f5', overflow: 'hidden', lineHeight: 0 }}>
        <svg viewBox="0 0 1200 180" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8e8e8" />
              <stop offset="100%" stopColor="#c8c8c8" />
            </linearGradient>
          </defs>
          <rect width="1200" height="180" fill="url(#skyGrad)" />
          <rect y="140" width="1200" height="40" fill="#555" />
          <g fill="#888">
            <circle cx="60" cy="110" r="40" fill="none" stroke="#888" strokeWidth="3" />
            <line x1="60" y1="70" x2="60" y2="150" stroke="#888" strokeWidth="2" />
            <line x1="20" y1="110" x2="100" y2="110" stroke="#888" strokeWidth="2" />
            <rect x="110" y="120" width="4" height="30" fill="#777" />
            <ellipse cx="112" cy="115" rx="12" ry="8" fill="#777" />
            <rect x="130" y="115" width="4" height="35" fill="#777" />
            <ellipse cx="132" cy="110" rx="12" ry="8" fill="#777" />
            <ellipse cx="200" cy="95" rx="30" ry="20" fill="#888" />
            <rect x="170" y="95" width="60" height="55" fill="#888" />
            <rect x="185" y="60" width="8" height="40" fill="#888" />
            <rect x="205" y="60" width="8" height="40" fill="#888" />
            <polygon points="290,140 310,40 330,140" fill="#888" />
            <rect x="350" y="80" width="30" height="70" fill="#888" />
            <rect x="385" y="60" width="25" height="90" fill="#888" />
            <rect x="415" y="70" width="20" height="80" fill="#888" />
            <rect x="450" y="118" width="4" height="30" fill="#777" />
            <ellipse cx="452" cy="113" rx="14" ry="9" fill="#777" />
            <rect x="470" y="115" width="4" height="33" fill="#777" />
            <ellipse cx="472" cy="110" rx="14" ry="9" fill="#777" />
            <rect x="500" y="70" width="12" height="80" fill="#888" />
            <rect x="540" y="70" width="12" height="80" fill="#888" />
            <rect x="500" y="70" width="52" height="12" fill="#888" />
            <polygon points="600,140 610,10 620,140" fill="#888" />
            <rect x="640" y="50" width="22" height="100" fill="#888" />
            <rect x="668" y="55" width="22" height="95" fill="#888" />
            <rect x="656" y="45" width="10" height="15" fill="#888" />
            <rect x="700" y="75" width="28" height="75" fill="#888" />
            <rect x="734" y="85" width="20" height="65" fill="#888" />
            <rect x="770" y="110" width="3" height="40" fill="#777" />
            <circle cx="771" cy="108" r="5" fill="#777" />
            <rect x="800" y="112" width="3" height="38" fill="#777" />
            <circle cx="801" cy="110" r="5" fill="#777" />
            <circle cx="900" cy="105" r="38" fill="none" stroke="#888" strokeWidth="3" />
            <line x1="900" y1="67" x2="900" y2="143" stroke="#888" strokeWidth="2" />
            <line x1="862" y1="105" x2="938" y2="105" stroke="#888" strokeWidth="2" />
            <rect x="950" y="80" width="25" height="70" fill="#888" />
            <rect x="980" y="90" width="20" height="60" fill="#888" />
            <ellipse cx="470" cy="40" rx="15" ry="5" fill="#999" />
            <rect x="482" y="38" width="20" height="4" fill="#999" />
            <line x1="465" y1="35" x2="490" y2="35" stroke="#999" strokeWidth="1.5" />
            <path d="M600 25 Q605 20 610 25" stroke="#999" strokeWidth="1.5" fill="none" />
            <path d="M615 30 Q620 25 625 30" stroke="#999" strokeWidth="1.5" fill="none" />
            <path d="M625 22 Q630 17 635 22" stroke="#999" strokeWidth="1.5" fill="none" />
          </g>
        </svg>
      </div>

      {/* ── Mini footer bar ── */}
      <div style={{ background: '#2b2b2b', padding: '18px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <nav style={{ display: 'flex', gap: 0, flexWrap: 'wrap', alignItems: 'center' }}>
            {[
              { label: 'Home', to: '/' },
              { label: 'Terms of Use', to: '/terms' },
              { label: 'Privacy Policy', href: 'https://www.dubizzle.com/legalhub/privacy/' },
              { label: 'About Us', to: '/about-us' },
            ].map((item, i) => (
              <span key={item.label} style={{ display: 'flex', alignItems: 'center' }}>
                {i > 0 && <span style={{ color: '#888', margin: '0 8px' }}>|</span>}
                {item.to ? (
                  <Link to={item.to} style={{ color: '#bbb', fontSize: 13, textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                  >{item.label}</Link>
                ) : (
                  <a href={item.href} target="_blank" rel="noopener noreferrer"
                    style={{ color: '#bbb', fontSize: 13, textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                  >{item.label}</a>
                )}
              </span>
            ))}
            {/* Footer — Place Your Ad button */}
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#888', margin: '0 8px' }}>|</span>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                style={{
                  background: 'none', border: 'none', padding: 0,
                  color: '#bbb', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                Place Your Ad
              </button>
            </span>
          </nav>

          <div style={{ display: 'flex', gap: 10 }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#000', color: '#fff', padding: '6px 14px', borderRadius: 6, textDecoration: 'none', fontSize: 12, fontWeight: 600, border: '1px solid #444' }}>
              <span style={{ fontSize: 20 }}>▶</span>
              <span><span style={{ fontSize: 9, display: 'block', fontWeight: 400 }}>GET IT ON</span>Google Play</span>
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#000', color: '#fff', padding: '6px 14px', borderRadius: 6, textDecoration: 'none', fontSize: 12, fontWeight: 600, border: '1px solid #444' }}>
              <span style={{ fontSize: 20 }}></span>
              <span><span style={{ fontSize: 9, display: 'block', fontWeight: 400 }}>Download on the</span>App Store</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div style={{ background: '#c00', padding: '10px 24px' }}>
        <p style={{ margin: 0, color: '#fff', fontSize: 12, textAlign: 'left', maxWidth: 1100, marginInline: 'auto' }}>
          © dubizzle.com 2026, All Rights Reserved.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) { .help-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) {
          .help-footer-inner { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .help-footer-inner nav { flex-wrap: wrap !important; }
          .help-footer-apps { flex-wrap: wrap !important; }
          .help-hero h1 { font-size: 24px !important; }
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