import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {
  Bell,
  Heart,
  MessageCircle,
  LayoutGrid,
  ChevronDown,
  MapPin,
  LocateFixed,
  ChevronRight,
} from 'lucide-react'
import Logo from './Logo'

const navTabs = [
  { label: 'Motors', badge: 'NEW', active: true },
  { label: 'Property' },
  { label: 'Jobs' },
  { label: 'Classifieds' },
  { label: 'New Projects', badge: 'NEW' },
  { label: 'Community' },
  { label: 'Furniture & Garden' },
  { label: 'Mobiles & Tablets' },
]

const iconActions = [
  { icon: Bell, label: 'Notifications' },
  { icon: Heart, label: 'Favourites' },
  { icon: MessageCircle, label: 'Chats' },
  { icon: LayoutGrid, label: 'My Ads' },
]

const cityRoutes = {
  Dubai: '/dubai',
  'Abu Dhabi': '/abu-dhabi',
  'Ras Al Khaimah': '/city/ras-al-khaimah',
  Fujairah: '/city/fujairah',
  'Umm Al Quwain': '/city/umm-al-quwain',
  Sharjah: '/city/sharjah',
  Ajman: '/city/ajman',
  'Al Ain': '/city/al-ain',
  Egypt: '/egypt',
}

// Keep city order and labels aligned with the target UI.
const cities = [
  'Dubai',
  'Abu Dhabi',
  'Ras Al Khaimah',
  'Sharjah',
  'Fujairah',
  'Ajman',
  'Umm Al Quwain',
  'Al Ain',
]

const egyptCities = [
  'Alexandria',
  'Aswan',
  'Asyut',
  'Beheira',
  'Beni Suef',
  'Cairo',
]

export default function Navbar({ city = 'Dubai' }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('Motors')
  const [isCityOpen, setIsCityOpen] = useState(false)
  const cityRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e) {
      if (cityRef.current && !cityRef.current.contains(e.target)) {
        setIsCityOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleCitySelect(selectedCity) {
    setIsCityOpen(false)
    const route = cityRoutes[selectedCity]
    if (route) {
      navigate(route)
    } else {
      // Cities without dedicated pages → go to landing
      navigate('/')
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-header' : ''
        }`}
    >
      {/* Top bar */}
      <div className="border-b border-dubizzle-border">
        <div className="mx-auto flex h-[56px] max-w-[1232px] items-center justify-between px-4">
          {/* Left - Logo + City */}
          <div className="flex items-center gap-3">
            <a href="/" aria-label="dubizzle home" onClick={(e) => { e.preventDefault(); navigate('/') }}>
              <Logo width={110} height={26} />
            </a>
            <div
              ref={cityRef}
              className="relative mt-1"
              onMouseEnter={() => setIsCityOpen(true)}
              onMouseLeave={() => setIsCityOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsCityOpen((p) => !p)}
                onFocus={() => setIsCityOpen(true)}
                className={`flex items-center gap-1.5 text-[14px] font-semibold transition-colors ${
                  city === 'Egypt' ? 'text-dubizzle-dark' : 'text-dubizzle-red hover:text-red-700'
                }`}
              >
                {city === 'Egypt' && <MapPin size={18} className="text-dubizzle-red" />}
                {city}
                <ChevronDown size={16} className={`transition-transform duration-200 ${isCityOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCityOpen && city !== 'Egypt' && (
                <div className="absolute left-0 top-full z-50 mt-1 w-[164px] overflow-hidden rounded-md border border-dubizzle-border bg-white shadow-lg sm:w-[220px]">
                  <button
                    type="button"
                    className="w-full border-b border-dubizzle-border bg-[#f6f6f6] px-4 py-2.5 text-left text-[15px] text-[#4b4b4b]"
                    onClick={() => handleCitySelect('All Cities (UAE)')}
                  >
                    All Cities (UAE)
                  </button>
                  {cities.map((c) => (
                    <button
                      key={c}
                      type="button"
                      className={`flex w-full items-center border-b border-dubizzle-border px-4 py-2.5 text-left text-sm transition-colors last:border-b-0 hover:bg-gray-50 ${c === city ? 'font-semibold text-dubizzle-dark' : 'text-dubizzle-dark'
                        }`}
                      onClick={() => handleCitySelect(c)}
                    >
                      {c}
                      {c === city && <span className="ml-auto text-[14px] font-semibold text-dubizzle-red">✓</span>}
                    </button>
                  ))}
                </div>
              )}
              {isCityOpen && city === 'Egypt' && (
                <div className="absolute left-0 top-full z-50 mt-1 w-[260px] overflow-hidden rounded-md border border-[#e5e5e5] bg-white shadow-lg">
                  <div className="p-3 border-b border-[#e5e5e5]">
                    <input 
                      type="text" 
                      placeholder="Search for location" 
                      className="w-full rounded border border-[#cccccc] px-3 py-2.5 text-[14px] outline-none focus:border-dubizzle-red text-dubizzle-dark"
                    />
                  </div>
                  <button className="flex w-full items-center gap-2 border-b border-[#e5e5e5] px-4 py-3 text-left transition-colors hover:bg-gray-50">
                    <LocateFixed size={18} className="text-dubizzle-red" />
                    <span className="text-[14px] font-bold text-dubizzle-dark">Use current location</span>
                  </button>
                  <div className="max-h-[300px] overflow-y-auto scrollbar-hide">
                    <div className="px-4 py-3 pb-2 text-[13px] font-bold text-[#888888]">
                      Choose location
                    </div>
                    <button className="flex w-full items-center px-4 py-2 text-left text-[14px] text-dubizzle-red hover:bg-gray-50">
                      See ads in all Egypt
                    </button>
                    {egyptCities.map(c => (
                      <button key={c} className="flex w-full items-center justify-between px-4 py-3 text-left text-[14px] text-dubizzle-dark hover:bg-gray-50">
                        {c}
                        <ChevronRight size={16} className="text-dubizzle-dark" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right - Icons + Login + Place Ad */}
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-4 md:flex">
              {iconActions.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  className="group flex flex-col items-center gap-0.5 transition-colors"
                  title={label}
                >
                  <Icon
                    size={18}
                    className="text-dubizzle-gray transition-colors group-hover:text-dubizzle-red"
                    strokeWidth={1.8}
                  />
                  <span className="text-[10px] text-dubizzle-gray transition-colors group-hover:text-dubizzle-red">
                    {label}
                  </span>
                </button>
              ))}
            </div>
              <button
                type="button"
                className="hidden text-[13px] font-bold text-dubizzle-dark transition-colors hover:text-dubizzle-red md:block"
              >
                Log in or sign up
              </button>
              <Link
                to="/help"
                className="hidden text-[13px] font-semibold text-dubizzle-dark transition-colors hover:text-dubizzle-red md:block"
              >
                Help Center
              </Link>
              <button
                type="button"
                className="rounded bg-dubizzle-red px-3 py-2 text-[11px] font-bold text-white transition-all hover:bg-red-700 active:scale-[0.98] sm:px-4 sm:text-[13px]"
              >
                Place Your Ad
              </button>
          </div>
        </div>
      </div>

      {/* Category nav tabs */}
      <div className="border-b border-[#e5e5e5] bg-white">
        <div className="mx-auto max-w-[1232px] px-4">
          <nav className="scrollbar-hide flex h-[42px] items-center justify-between overflow-x-auto" aria-label="Category navigation">
            {navTabs.map((tab) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveTab(tab.label)}
                className={`relative flex h-full shrink-0 items-center gap-1 whitespace-nowrap px-3 text-[14px] font-semibold transition-colors ${activeTab === tab.label
                    ? 'text-dubizzle-red'
                    : 'text-dubizzle-dark hover:text-dubizzle-red'
                  }`}
              >
                {tab.label}
                {tab.badge && (
                  <span className="rounded-full bg-dubizzle-red px-1.5 py-0.5 text-[9px] font-bold leading-none tracking-tight text-white">
                    {tab.badge}
                  </span>
                )}
                {activeTab === tab.label && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-dubizzle-red" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
