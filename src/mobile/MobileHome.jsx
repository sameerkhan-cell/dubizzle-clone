/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom'
import {
  Search,
  MapPin,
  ChevronDown,
  Car,
  Home as HomeIcon,
  Building2,
  Package,
  Briefcase,
  Users,
  Armchair,
  Star,
  Settings2
} from 'lucide-react'
import MobileBottomNav from './MobileBottomNav'
import Logo from '../components/Logo'
import { getProductsByCategory } from '../data/mockProducts'

/* ─── City → route map ─── */
const cityRoutes = {
  'Dubai':           '/dubai',
  'Abu Dhabi':       '/abu-dhabi',
  'Sharjah':         '/city/sharjah',
  'Ajman':           '/city/ajman',
  'Al Ain':          '/city/al-ain',
  'Ras Al Khaimah':  '/city/ras-al-khaimah',
  'Fujairah':        '/city/fujairah',
  'Umm Al Quwain':   '/city/umm-al-quwain',
  'Egypt':           '/egypt',
  'Bahrain':         '/bahrain',
  'Jordan':          '/jordan',
  'Kuwait':          '/kuwait',
  'Oman':            '/oman',
  'Pakistan':        '/pakistan',
}

/* ─── Category data with navigation paths (3x3 grid) ─── */
const mobileCategories = [
  { title: 'Property for Rent',    icon: HomeIcon,    color: '#E8001C', slug: 'property' },
  { title: 'Property for Sale',    icon: Building2,   color: '#E8001C', slug: 'property' },
  { title: 'Off-Plan Properties',  icon: Star,        color: '#E8001C', slug: 'property' },
  { title: 'Rooms For Rent',       icon: HomeIcon,    color: '#E8001C', slug: 'property' },
  { title: 'Motors',               icon: Car,         color: '#E8001C', slug: 'motors' },
  { title: 'Jobs',                 icon: Briefcase,   color: '#E8001C', slug: 'jobs' },
  { title: 'Classifieds',          icon: Package,     color: '#E8001C', slug: 'classifieds' },
  { title: 'Furniture, Home &\nGarden', icon: Armchair, color: '#E8001C', slug: 'furniture-and-garden' },
  { title: 'Community',            icon: Users,       color: '#E8001C', slug: 'community' },
]

export default function MobileHome({ city = 'Dubai' }) {
  const navigate = useNavigate()
  
  // Data fetching for carousels
  const motors = getProductsByCategory('car')
  const furniture = getProductsByCategory('furn')
  const propertySale = getProductsByCategory('sale')
  const computers = getProductsByCategory('comp')
  const mobiles = getProductsByCategory('mob')
  const rooms = getProductsByCategory('room')
  const sports = getProductsByCategory('sport')

  const renderCarousel = (title, items) => {
    if (!items || items.length === 0) return null;
    return (
      <section style={{ padding: '16px 0 8px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          marginBottom: 12,
        }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#222' }}>
            {title}
          </h2>
          <Link
            to={`/`}
            style={{ color: '#888' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </Link>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 12,
            overflowX: 'auto',
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 8,
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
          className="scrollbar-hide"
        >
          {items.map((item, i) => (
            <Link
              key={item.id}
              to={`/item/${item.id}`}
              style={{
                flex: '0 0 calc(50% - 6px)',
                scrollSnapAlign: 'start',
                textDecoration: 'none',
              }}
            >
              <div style={{ borderRadius: 8, overflow: 'hidden', marginBottom: 8, height: 120 }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#E8001C', margin: '0 0 4px' }}>
                  {item.price}
                </p>
                <p style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#222',
                  margin: '0 0 4px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  lineHeight: '1.2'
                }}>
                  {item.title}
                </p>
                <p style={{ fontSize: 12, color: '#888', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {item.details}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    )
  }

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingBottom: 80, fontFamily: "'Inter', sans-serif" }}>
      {/* ── Header ── */}
      <header style={{
        background: '#fff',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
        <Logo width={100} height={24} />
      </header>

      {/* ── Search Bar ── */}
      <div style={{ padding: '8px 16px', background: '#fff' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: '#fff',
          borderRadius: 8,
          border: '1px solid #E0E0E0',
          padding: '8px 12px',
        }} onClick={() => navigate('/mobile-search')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: '#E8001C', padding: 4, borderRadius: 4 }}>
              <Settings2 size={16} color="#fff" />
            </div>
          </div>
          <div style={{
            flex: 1,
            fontSize: 14,
            color: '#888',
          }}>
            Search for anything
          </div>
          <Search size={18} color="#888" />
        </div>
      </div>

      {/* ── Browse Categories (3x3 grid) ── */}
      <section style={{ padding: '16px 16px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
        }}>
          {mobileCategories.map((cat) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.title}
                to={`/${cat.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '16px 8px',
                  background: '#FDFDFD',
                  borderRadius: 12,
                  border: '1px solid #F0F0F0',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                }}
              >
                <Icon size={24} color={cat.color} strokeWidth={1.5} />
                <span style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#222',
                  textAlign: 'center',
                  lineHeight: 1.2,
                  whiteSpace: 'pre-line',
                }}>
                  {cat.title}
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── TruEstimate Banner ── */}
      <div style={{ padding: '0 16px 16px' }}>
        <div style={{
          background: '#fff',
          border: '1px solid #FEE2E2',
          borderRadius: 12,
          padding: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#222' }}>TruEstimate™</h3>
              <span style={{ background: '#E8001C', color: '#fff', fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: 4 }}>NEW</span>
            </div>
            <p style={{ fontSize: 12, color: '#666', marginBottom: 12 }}>Learn your property's<br/>value today</p>
            <button style={{ color: '#E8001C', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', padding: 0 }}>
              Get Your TruEstimate™ <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </button>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80" 
            alt="Buildings" 
            style={{ width: 100, height: 80, objectFit: 'cover', opacity: 0.8, borderRadius: 8, zIndex: 1 }}
          />
        </div>
      </div>

      {/* ── Get Verified Banner ── */}
      <div style={{ padding: '0 16px 16px' }}>
        <div style={{
          background: '#1A73E8',
          borderRadius: 12,
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}>
          <div style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: '2px solid #fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.2)'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
          </div>
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 2 }}>Verify your account</h3>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', marginBottom: 8 }}>Get more visibility<br/>Enhance your credibility</p>
            <button style={{ background: '#fff', color: '#1A73E8', border: 'none', borderRadius: 4, padding: '4px 12px', fontSize: 12, fontWeight: 700 }}>
              Get Verified
            </button>
          </div>
        </div>
      </div>

      {/* ── Carousels ── */}
      {renderCarousel('Popular in Cars', motors)}
      {renderCarousel('Popular in Furniture & Garden', furniture)}
      {renderCarousel('Popular in Residential for Sale', propertySale)}
      {renderCarousel('Popular in Computers & Networking', computers)}
      {renderCarousel('Popular in Mobile Phones & Tablets', mobiles)}
      {renderCarousel('Popular in Rooms for Rent', rooms)}
      {renderCarousel('Popular in Sports Equipment', sports)}

      {/* ── Bottom Nav ── */}
      <MobileBottomNav />
    </div>
  )
}
