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

      {/* ── Responsive scoped styles ── */}
      <style>{`
        .lp-header {
          background: #fff;
          border-bottom: 1px solid #E0E0E0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 14px 24px;
        }
        .lp-hero {
          background-image: linear-gradient(to bottom, rgba(130,15,15,0.82), rgba(60,8,8,0.92)),
            url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80');
          background-size: cover;
          background-position: center;
          width: 100%;
          padding-bottom: 60px;
        }
        .lp-hero-inner {
          max-width: 920px;
          margin: 0 auto;
          padding: 40px 24px 0;
          text-align: center;
        }
        .lp-hero-title {
          font-size: clamp(24px, 3.5vw, 36px);
          font-weight: 800;
          color: #fff;
          line-height: 1.25;
          margin-bottom: 12px;
        }
        .lp-hero-sub {
          font-size: 15px;
          font-weight: 500;
          color: rgba(255,255,255,0.82);
          margin-bottom: 28px;
        }
        .lp-city-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          width: 100%;
        }
        .lp-city-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 22px 12px 20px;
          background: #fff;
          border-radius: 10px;
          border: 2px solid transparent;
          box-shadow: 0 2px 12px rgba(0,0,0,0.18);
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s;
        }
        .lp-city-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(232,0,28,0.28);
          border-color: #E8001C;
        }
        .lp-city-card:active {
          transform: scale(0.97);
        }
        .lp-city-name {
          font-size: 13px;
          font-weight: 700;
          color: #222;
        }

        /* ── Tablet (≤768px) ── */
        @media (max-width: 768px) {
          .lp-hero-inner { padding: 32px 20px 0; }
          .lp-hero { padding-bottom: 44px; }
          .lp-hero-sub { font-size: 14px; margin-bottom: 22px; }
        }

        /* ── Mobile (≤640px) ── */
        @media (max-width: 640px) {
          .lp-header { padding: 12px 16px; }
          .lp-city-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }
          .lp-hero-inner { padding: 28px 16px 0; }
          .lp-hero { padding-bottom: 36px; }
          .lp-hero-title { font-size: 22px; }
          .lp-hero-sub { font-size: 13px; margin-bottom: 18px; }
          .lp-city-card { padding: 18px 10px 16px; gap: 6px; }
          .lp-city-name { font-size: 12px; }
        }

        /* ── Small phone (≤400px) ── */
        @media (max-width: 400px) {
          .lp-hero-inner { padding: 22px 12px 0; }
          .lp-hero { padding-bottom: 28px; }
          .lp-city-card { padding: 14px 8px 12px; gap: 5px; border-radius: 8px; }
          .lp-city-name { font-size: 11px; }
        }
      `}</style>

      {/* ── Header ── */}
      <div className="lp-header">
        <Logo width={130} height={30} />
      </div>

      {/* ── Hero ── */}
      <div className="lp-hero">
        <div className="lp-hero-inner">
          <h1 className="lp-hero-title">
            Welcome to the UAE's #1<br />online classifieds website!
          </h1>
          <p className="lp-hero-sub">
            Which emirate would you like to explore?
          </p>

          {/* City cards */}
          <div className="lp-city-grid">
            {cities.map(({ name, route }) => (
              <Link key={name} to={route} className="lp-city-card">
                <Logo width={88} height={20} />
                <span className="lp-city-name">{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── SEO links ── */}
      <section className="mx-auto max-w-[1232px] px-4 py-10">
        <h2 className="mb-6 text-center text-[22px] font-bold text-dubizzle-dark sm:text-[20px]">
          Join millions of users to buy and sell <em>anything</em> in the UAE
        </h2>

        {/* Tab bar — wraps cleanly on mobile */}
        <div className="mb-8 mx-auto flex w-full max-w-[980px] flex-wrap justify-center gap-1 rounded-2xl bg-[#efefef] p-2 sm:rounded-full">
          {seoTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-center text-[13px] font-semibold transition-all whitespace-nowrap ${
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
