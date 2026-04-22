import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Search,
  MapPin,
  ChevronDown,
  ChevronRight,
  Car,
  Home as HomeIcon,
  Building2,
  Package,
  Briefcase,
  Users,
  Factory,
  Tv2,
  Armchair,
  Smartphone,
  Star,
  Flame,
} from 'lucide-react'
import MobileBottomNav from './MobileBottomNav'
import Logo from '../components/Logo'

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

/* ─── Category data with navigation paths ─── */
const mobileCategories = [
  { title: 'Motors',               icon: Car,         bg: '#FEE2E2', color: '#E8001C', slug: 'motors' },
  { title: 'Property\nfor Rent',   icon: HomeIcon,    bg: '#DCFCE7', color: '#16A34A', slug: 'property-for-rent' },
  { title: 'Property\nfor Sale',   icon: Building2,   bg: '#DCFCE7', color: '#16A34A', slug: 'property-for-sale' },
  { title: 'Classifieds',          icon: Package,     bg: '#DBEAFE', color: '#2563EB', slug: 'classifieds' },
  { title: 'Jobs',                 icon: Briefcase,   bg: '#DBEAFE', color: '#2563EB', slug: 'jobs' },
  { title: 'Community',            icon: Users,       bg: '#F3F4F6', color: '#4B5563', slug: 'community' },
  { title: 'Business &\nIndustrial', icon: Factory,   bg: '#F3F4F6', color: '#4B5563', slug: 'business' },
  { title: 'Home\nAppliances',     icon: Tv2,         bg: '#FFF7ED', color: '#EA580C', slug: 'home-appliances' },
  { title: 'Furniture\n& Garden',  icon: Armchair,    bg: '#FFF7ED', color: '#EA580C', slug: 'furniture' },
  { title: 'Mobile\nPhones',       icon: Smartphone,  bg: '#F3E8FF', color: '#9333EA', slug: 'mobiles' },
  { title: 'New Projects',         icon: Star,        bg: '#FEE2E2', color: '#E8001C', slug: 'new-projects' },
  { title: 'Trending',             icon: Flame,       bg: '#FEF3C7', color: '#D97706', slug: 'trending' },
]

/* ─── Sample featured listings ─── */
const featuredListings = [
  {
    image: 'https://images.unsplash.com/photo-1503377211516-79ef88fb03b3?auto=format&fit=crop&w=400&q=80',
    title: 'Porsche Panamera 4S',
    price: 'AED 89,000',
    location: 'Dubai',
    tag: 'FEATURED',
    category: 'motors',
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
    title: '3 Bed 4 Bath Apartment',
    price: 'AED 200,000',
    location: 'Dubai South',
    tag: 'FEATURED',
    category: 'property-for-rent',
  },
  {
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80',
    title: 'Samsung Z Fold 7',
    price: 'AED 5,200',
    location: 'Dubai',
    tag: null,
    category: 'mobiles',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
    title: '3 Bed Townhouse',
    price: 'AED 95,000',
    location: 'DAMAC Hills',
    tag: 'FEATURED',
    category: 'property-for-sale',
  },
  {
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80',
    title: 'Hyundai Elantra GLX',
    price: 'AED 52,000',
    location: 'Dubai',
    tag: null,
    category: 'motors',
  },
]

/* ─── Quick links per city ─── */
function getQuickLinks(city, cityRoute) {
  return [
    { label: 'Used Cars for Sale',       path: `${cityRoute}?category=motors` },
    { label: 'Properties for Rent',      path: `${cityRoute}?category=property-for-rent` },
    { label: 'Apartments for Sale',      path: `${cityRoute}?category=property-for-sale` },
    { label: `Jobs in ${city}`,          path: `${cityRoute}?category=jobs` },
    { label: 'Mobile Phones & Tablets',  path: `${cityRoute}?category=mobiles` },
    { label: 'Furniture & Garden',       path: `${cityRoute}?category=furniture` },
  ]
}

/* ─── Component ─── */
export default function MobileHome({ city = 'Dubai' }) {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const cityRoute = cityRoutes[city] || '/dubai'

  return (
    <div style={{ background: '#F5F5F5', minHeight: '100vh', paddingBottom: 80, fontFamily: "'Inter', sans-serif" }}>
      {/* ── Header ── */}
      <header style={{
        background: '#fff',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #E0E0E0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Logo width={95} height={22} />
        </Link>
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            textDecoration: 'none',
            padding: '4px 8px',
            borderRadius: 6,
          }}
        >
          <MapPin size={16} color="#E8001C" />
          <span style={{ fontSize: 14, fontWeight: 600, color: '#333' }}>{city}</span>
          <ChevronDown size={14} color="#888" />
        </Link>
      </header>

      {/* ── Search Bar ── */}
      <div style={{ padding: '12px 16px 8px', background: '#fff' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: '#F5F5F5',
          borderRadius: 10,
          padding: '0 14px',
          height: 44,
          border: '1px solid #E8E8E8',
        }}>
          <Search size={18} color="#999" strokeWidth={2} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for anything..."
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              outline: 'none',
              fontSize: 15,
              color: '#333',
              fontFamily: 'inherit',
            }}
          />
        </div>
      </div>

      {/* ── Browse Categories (all clickable) ── */}
      <section style={{ padding: '20px 16px 12px' }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, color: '#333', marginBottom: 14 }}>
          Browse Categories
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 10,
        }}>
          {mobileCategories.map((cat) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.title}
                to={`${cityRoute}?category=${cat.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '16px 6px 14px',
                  background: '#fff',
                  borderRadius: 12,
                  border: '1px solid #F0F0F0',
                  cursor: 'pointer',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  textDecoration: 'none',
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.transform = 'scale(0.95)'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.10)'
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: cat.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Icon size={22} color={cat.color} strokeWidth={2} />
                </div>
                <span style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#444',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  whiteSpace: 'pre-line',
                }}>
                  {cat.title}
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Featured Listings (all clickable) ── */}
      <section style={{ padding: '8px 0 16px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          marginBottom: 12,
        }}>
          <h2 style={{ fontSize: 17, fontWeight: 700, color: '#333' }}>
            Featured
          </h2>
          <Link
            to={`${cityRoute}?category=featured`}
            style={{ fontSize: 13, fontWeight: 600, color: '#E8001C', textDecoration: 'none' }}
          >
            View all
          </Link>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 10,
            overflowX: 'auto',
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 4,
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
          className="scrollbar-hide"
        >
          {featuredListings.map((item, i) => (
            <Link
              key={i}
              to={`${cityRoute}?category=${item.category}`}
              style={{
                flex: '0 0 200px',
                scrollSnapAlign: 'start',
                background: '#fff',
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid #F0F0F0',
                boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
                textDecoration: 'none',
                transition: 'transform 0.15s',
              }}
              onTouchStart={(e) => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onTouchEnd={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <div style={{ position: 'relative' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: 130, objectFit: 'cover', display: 'block' }}
                />
                {item.tag && (
                  <span style={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    background: '#E8001C',
                    color: '#fff',
                    fontSize: 9,
                    fontWeight: 700,
                    padding: '3px 6px',
                    borderRadius: 4,
                    letterSpacing: '0.02em',
                  }}>
                    {item.tag}
                  </span>
                )}
              </div>
              <div style={{ padding: '10px 12px 12px' }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: '#E8001C', margin: '0 0 4px' }}>
                  {item.price}
                </p>
                <p style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#333',
                  margin: '0 0 4px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  {item.title}
                </p>
                <p style={{ fontSize: 11, color: '#888', margin: 0 }}>
                  {item.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Popular Quick Links (all clickable) ── */}
      <section style={{ padding: '8px 16px 20px' }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, color: '#333', marginBottom: 12 }}>
          Popular in {city}
        </h2>
        {getQuickLinks(city, cityRoute).map((link) => (
          <Link
            key={link.label}
            to={link.path}
            style={{
              background: '#fff',
              borderRadius: 10,
              padding: '13px 16px',
              marginBottom: 6,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: '1px solid #F0F0F0',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'background 0.15s',
            }}
            onTouchStart={(e) => { e.currentTarget.style.background = '#F9F9F9' }}
            onTouchEnd={(e) => { e.currentTarget.style.background = '#fff' }}
          >
            <span style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>{link.label}</span>
            <ChevronRight size={16} color="#ccc" />
          </Link>
        ))}
      </section>

      {/* ── Bottom Nav ── */}
      <MobileBottomNav />
    </div>
  )
}
