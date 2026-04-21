import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  Factory,
  Tv2,
  Armchair,
  Smartphone,
  Star,
  Flame,
} from 'lucide-react'
import MobileBottomNav from './MobileBottomNav'
import Logo from '../components/Logo'

/* ─── Category data (self-contained, does NOT touch desktop Categories.jsx) ─── */
const mobileCategories = [
  { title: 'Motors',               icon: Car,         bg: '#FEE2E2', color: '#E8001C' },
  { title: 'Property\nfor Rent',   icon: HomeIcon,    bg: '#DCFCE7', color: '#16A34A' },
  { title: 'Property\nfor Sale',   icon: Building2,   bg: '#DCFCE7', color: '#16A34A' },
  { title: 'Classifieds',          icon: Package,     bg: '#DBEAFE', color: '#2563EB' },
  { title: 'Jobs',                 icon: Briefcase,   bg: '#DBEAFE', color: '#2563EB' },
  { title: 'Community',            icon: Users,       bg: '#F3F4F6', color: '#4B5563' },
  { title: 'Business &\nIndustrial', icon: Factory,   bg: '#F3F4F6', color: '#4B5563' },
  { title: 'Home\nAppliances',     icon: Tv2,         bg: '#FFF7ED', color: '#EA580C' },
  { title: 'Furniture\n& Garden',  icon: Armchair,    bg: '#FFF7ED', color: '#EA580C' },
  { title: 'Mobile\nPhones',       icon: Smartphone,  bg: '#F3E8FF', color: '#9333EA' },
  { title: 'New Projects',         icon: Star,        bg: '#FEE2E2', color: '#E8001C' },
  { title: 'Trending',             icon: Flame,       bg: '#FEF3C7', color: '#D97706' },
]

/* ─── Sample featured listings (mobile-only data, does NOT affect desktop) ─── */
const featuredListings = [
  {
    image: 'https://images.unsplash.com/photo-1503377211516-79ef88fb03b3?auto=format&fit=crop&w=400&q=80',
    title: 'Porsche Panamera 4S',
    price: 'AED 89,000',
    location: 'Dubai',
    tag: 'FEATURED',
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
    title: '3 Bed 4 Bath Apartment',
    price: 'AED 200,000',
    location: 'Dubai South',
    tag: 'FEATURED',
  },
  {
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80',
    title: 'Samsung Z Fold 7',
    price: 'AED 5,200',
    location: 'Dubai',
    tag: null,
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
    title: '3 Bed Townhouse',
    price: 'AED 95,000',
    location: 'DAMAC Hills',
    tag: 'FEATURED',
  },
  {
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80',
    title: 'Hyundai Elantra GLX',
    price: 'AED 52,000',
    location: 'Dubai',
    tag: null,
  },
]

/* ─── Component ─── */
export default function MobileHome({ city = 'Dubai' }) {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

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
        <Logo width={95} height={22} />
        <button
          type="button"
          onClick={() => navigate('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            padding: '4px 8px',
            borderRadius: 6,
          }}
        >
          <MapPin size={16} color="#E8001C" />
          <span style={{ fontSize: 14, fontWeight: 600, color: '#333' }}>{city}</span>
          <ChevronDown size={14} color="#888" />
        </button>
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

      {/* ── Browse Categories ── */}
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
              <button
                key={cat.title}
                type="button"
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
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.transform = 'scale(0.97)'
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
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
              </button>
            )
          })}
        </div>
      </section>

      {/* ── Featured Listings ── */}
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
          <span style={{ fontSize: 13, fontWeight: 600, color: '#E8001C', cursor: 'pointer' }}>
            View all
          </span>
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
            <div
              key={i}
              style={{
                flex: '0 0 200px',
                scrollSnapAlign: 'start',
                background: '#fff',
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid #F0F0F0',
                boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
              }}
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
            </div>
          ))}
        </div>
      </section>

      {/* ── Quick Links ── */}
      <section style={{ padding: '8px 16px 20px' }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, color: '#333', marginBottom: 12 }}>
          Popular in {city}
        </h2>
        {[
          'Used Cars for Sale',
          'Properties for Rent',
          'Apartments for Sale',
          'Jobs in ' + city,
          'Mobile Phones & Tablets',
          'Furniture & Garden',
        ].map((link) => (
          <div
            key={link}
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
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>{link}</span>
            <ChevronDown size={16} color="#ccc" style={{ transform: 'rotate(-90deg)' }} />
          </div>
        ))}
      </section>

      {/* ── Bottom Nav ── */}
      <MobileBottomNav />
    </div>
  )
}
