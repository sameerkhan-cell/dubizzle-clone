import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

/* ── City name → route map ── */
const cities = [
  { name: 'Dubai',           route: '/dubai' },
  { name: 'Abu Dhabi',       route: '/abu-dhabi' },
  { name: 'Sharjah',         route: '/city/sharjah' },
  { name: 'Ajman',           route: '/city/ajman' },
  { name: 'Al Ain',          route: '/city/al-ain' },
  { name: 'Ras Al Khaimah',  route: '/city/ras-al-khaimah' },
  { name: 'Fujairah',        route: '/city/fujairah' },
  { name: 'Umm Al Quwain',   route: '/city/umm-al-quwain' },
]

/* ── Tab name → URL category slug ── */
const tabSlug = {
  'Property for Sale': 'property-for-sale',
  'Property for Rent': 'property-for-rent',
  'Motors':            'motors',
  'Classifieds':       'classifieds',
  'Jobs':              'jobs',
}

const seoTabs = ['Property for Sale', 'Property for Rent', 'Motors', 'Classifieds', 'Jobs']
const seoLinkTemplates = {
  'Property for Sale': (city) => [
    `Properties for Sale in ${city}`,
    `Apartments for Sale in ${city}`,
    `Villas for Sale in ${city}`,
    `Off Plan Properties in ${city}`,
    `New Projects in ${city}`,
  ],
  'Property for Rent': (city) => [
    `Properties for Rent in ${city}`,
    `Apartments for Rent in ${city}`,
    `Villas for Rent in ${city}`,
    `Rooms for Rent in ${city}`,
    `Monthly Properties for Rent in ${city}`,
  ],
  Motors: (city) => [
    `Used Cars for Sale in ${city}`,
    `New Cars for Sale in ${city}`,
    `Export Cars for Sale in ${city}`,
    `Rental Cars in ${city}`,
    `Motorcycles for Sale in ${city}`,
  ],
  Classifieds: (city) => [
    `Classifieds for Sale in ${city}`,
    `Mobile Phones & Tablets in ${city}`,
    `Home Appliances in ${city}`,
    `Furniture, Home & Garden in ${city}`,
    `Electronics in ${city}`,
  ],
  Jobs: (city) => [
    `Jobs in ${city}`,
    `Sales & Business Development Jobs in ${city}`,
    `Accounting & Finance Jobs in ${city}`,
    `Secretarial & Front Office Jobs in ${city}`,
    `Driver & Delivery Jobs in ${city}`,
  ],
}

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('Property for Sale')
  const seoLinks = cities.map(({ name, route }) => ({
    city: name,
    route,
    links: seoLinkTemplates[activeTab](name),
  }))

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-dubizzle-dark">
      {/* White header bar */}
      <div
        className="dubz-landing-header"
        style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #E0E0E0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '14px 24px',
        }}
      >
        <Logo width={130} height={30} />
      </div>

      {/* Hero section */}
      <div
        className="dubz-landing-hero"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(130,15,15,0.82), rgba(60,8,8,0.92)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          paddingBottom: 60,
        }}
      >

        {/* Content */}
        <div className="dubz-landing-hero-content" style={{ maxWidth: 920, margin: '0 auto', padding: '40px 24px 0', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.25,
              marginBottom: 12,
            }}
          >
            Welcome to the UAE's #1<br />online classifieds website!
          </h1>
          <p style={{ fontSize: 15, fontWeight: 500, color: 'rgba(255,255,255,0.82)', marginBottom: 28 }}>
            Which emirate would you like to explore?
          </p>

          {/* City cards grid */}
          <div
            className="dubz-landing-city-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: 12,
              width: '100%',
            }}
          >
            {cities.map(({ name, route }) => (
              <Link
                key={name}
                to={route}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '22px 12px 20px',
                  backgroundColor: '#ffffff',
                  borderRadius: 10,
                  border: '2px solid transparent',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.18s, box-shadow 0.18s, border-color 0.18s',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(232,0,28,0.28)'
                  e.currentTarget.style.borderColor = '#E8001C'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.18)'
                  e.currentTarget.style.borderColor = 'transparent'
                }}
              >
                <Logo width={88} height={20} />
                <span style={{ fontSize: 13, fontWeight: 700, color: '#222222' }}>
                  {name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>


      {/* SEO links */}
      <section className="mx-auto max-w-[1232px] px-4 py-10">
        <h2 className="mb-6 text-center text-[22px] font-bold text-dubizzle-dark">
          Join millions of users to buy and sell <em>anything</em> in the UAE
        </h2>

        {/* Tab bar */}
        <div className="mb-8 mx-auto grid w-full max-w-[980px] grid-cols-5 gap-1 rounded-full bg-[#efefef] p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {seoTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-3 py-2 text-center text-[13px] font-semibold transition-all sm:px-2 sm:text-[11px] md:px-3 md:text-[12px] lg:px-3 lg:text-[13px] ${
                activeTab === tab
                  ? 'bg-dubizzle-red text-white'
                  : 'bg-transparent text-[#1f2937] hover:text-[#111827]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* City link columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4">
          {seoLinks.map(({ city, route, links }) => (
            <div key={city}>
              <h3 className="mb-2 text-[14px] font-bold text-dubizzle-dark">{city}</h3>
              <ul className="space-y-1.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to={`${route}?category=${tabSlug[activeTab]}`}
                      className="text-[13px] text-[#00A39B] transition-colors hover:underline"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
