import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
  Bell,
  Heart,
  MessageCircle,
  LayoutGrid,
  ChevronDown,
  MapPin,
  LocateFixed,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react'
import Logo from './Logo'

const navTabs = [
  { label: 'Motors', badge: 'NEW', active: true },
  { label: 'Property' },
  { label: 'Jobs' },
  { label: 'Classifieds' },
  { label: 'Furniture & Garden' },
  { label: 'Mobiles & Tablets' },
  { label: 'Community' },
]

const iconActions = [
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: Heart, label: 'Favourites', path: '/favourites' },
  { icon: MessageCircle, label: 'Chats', path: '/chats' },
  { icon: LayoutGrid, label: 'My Ads', path: '/my-ads' },
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

const megaMenus = {
  Motors: {
    left: [
      { label: 'Used Cars', key: 'used-cars', active: true, blue: true },
      { label: 'New Cars', key: 'new-cars' },
      { label: 'Export Cars', key: 'export-cars' },
      { label: 'Rental Cars', key: 'rental-cars', badge: 'NEW' },
      { label: 'Motorcycles', key: 'motorcycles' },
      { label: 'Auto Accessories & Parts', key: 'auto-accessories' },
      { label: 'Heavy Vehicles', key: 'heavy-vehicles' },
      { label: 'Boats', key: 'boats' },
      { label: 'Number Plates', key: 'number-plates' },
    ],
    sellMyCar: true,
    services: ['Car Inspection', 'Car Finance', 'Car Evaluation'],
    right: {
      'used-cars':    { title: 'Used Cars',    viewAll: '/?cat=used-cars',    cols: [['Toyota','Mercedes-Benz','BMW','Nissan','Lexus','Hyundai','Porsche','Ford','Audi','Kia','Land Rover','Jeep','Chevrolet','Mitsubishi','Honda','Volkswagen'],['Jetour','Dodge','Rolls-Royce','Bentley']] },
      'new-cars':     { title: 'New Cars',     viewAll: '/?cat=new-cars',     cols: [['Toyota','BMW','Nissan','Mercedes-Benz','Hyundai','Kia'],['Audi','Ford','Chevrolet','Jeep']] },
      'export-cars':  { title: 'Export Cars',  viewAll: '/?cat=export-cars',  cols: [['Toyota','Nissan','Land Rover','Lexus'],['Jeep','Ford','BMW','Hyundai']] },
      'rental-cars':  { title: 'Rental Cars',  viewAll: '/?cat=rental-cars',  cols: [['Daily Rental','Weekly Rental','Monthly Rental','Long Term Rental'],['Luxury Cars','Economy Cars']] },
      'motorcycles':  { title: 'Motorcycles',  viewAll: '/?cat=motorcycles',  cols: [['Honda','Yamaha','Kawasaki','Suzuki','Ducati'],['Harley-Davidson','BMW','KTM','Royal Enfield']] },
      'auto-accessories':{ title:'Auto Accessories & Parts', viewAll:'/?cat=auto-accessories', cols:[['Tyres & Wheels','Car Audio','Navigation','Car Care'],['Exterior Accessories','Interior Accessories','Engine Parts']] },
      'heavy-vehicles':{ title:'Heavy Vehicles', viewAll:'/?cat=heavy-vehicles', cols:[['Trucks','Buses','Forklifts','Excavators'],['Cranes','Trailers','Tankers']] },
      'boats':        { title: 'Boats',         viewAll: '/?cat=boats',        cols: [['Speedboats','Yachts','Jet Skis','Fishing Boats'],['Sailboats','Pontoon Boats']] },
      'number-plates':{ title:'Number Plates',  viewAll:'/?cat=number-plates', cols:[['Dubai Plates','Abu Dhabi Plates','Sharjah Plates'],['Ajman Plates','RAK Plates']] },
    },
  },
  Property: {
    left: [
      { label: 'For Rent', bold: true },
      { label: 'Residential', key: 'residential-rent' },
      { label: 'Commercial', key: 'commercial-rent' },
      { label: 'Rooms For Rent', key: 'rooms-for-rent' },
      { label: 'Monthly Short Term', key: 'monthly-short' },
      { label: 'Daily Short Term', key: 'daily-short' },
      { label: 'For Sale', bold: true },
      { label: 'New Projects', key: 'new-projects', active: true, blue: true },
      { label: 'Residential', key: 'residential-sale' },
      { label: 'Commercial', key: 'commercial-sale' },
      { label: 'Off-Plan', key: 'off-plan' },
      { label: 'Land', key: 'land' },
      { label: 'Multiple Units', key: 'multiple-units' },
      { label: 'Agent & Agency Search', bold: true },
      { label: 'TruEstimate™', key: 'truestimate', badge: 'NEW' },
    ],
    defaultKey: 'new-projects',
    right: {
      'residential-rent': { title:'Residential for Rent', cols:[['Studio','1 Bedroom','2 Bedrooms','3 Bedrooms','4 Bedrooms','5+ Bedrooms'],['Penthouse','Villa','Townhouse','Duplex']] },
      'commercial-rent':  { title:'Commercial for Rent',  cols:[['Office','Shop','Warehouse','Labour Camp'],['Showroom','Factory','Land']] },
      'rooms-for-rent':   { title:'Rooms For Rent',       cols:[['Partition','Bed Space','Studio'],['1 Room','2 Rooms','Whole Unit']] },
      'monthly-short':    { title:'Monthly Short Term',   cols:[['Studio','1 Bedroom','2 Bedrooms'],['Chalet','Villa','Apartment']] },
      'daily-short':      { title:'Daily Short Term',     cols:[['Hotel Apartment','Studio','1 Bedroom'],['2 Bedrooms','Villa','Chalet']] },
      'new-projects':     { title:'',                      cols:[['All New Projects','Apartment','Villa','Townhouse','Penthouse','Hotel Apartment','Residential Building']] },
      'residential-sale': { title:'Residential for Sale', cols:[['Studio','1 Bedroom','2 Bedrooms','3 Bedrooms'],['4 Bedrooms','5+ Bedrooms','Villa','Penthouse']] },
      'commercial-sale':  { title:'Commercial for Sale',  cols:[['Office','Shop','Warehouse','Labour Camp'],['Showroom','Factory','Land']] },
      'off-plan':         { title:'Off-Plan',              cols:[['Apartments','Villas','Townhouses'],['Penthouses','Duplexes']] },
      'land':             { title:'Land for Sale',         cols:[['Residential Land','Commercial Land','Industrial Land'],['Mixed Use','Agricultural']] },
      'multiple-units':   { title:'Multiple Units',        cols:[['2 Units','3-5 Units','6-10 Units'],['11-20 Units','20+ Units']] },
      'truestimate':      { title:'TruEstimate™',          cols:[['Property Valuation','Market Insights','Price Trends'],['Area Reports','Investment Guide']] },
    },
  },
  Jobs: {
    left: [
      { label: 'Jobs Seekers', bold: true },
      { label: 'Jobs by Categories', key: 'jobs-by-categories', active: true },
      { label: 'Jobs by Types', key: 'jobs-by-types' },
      { label: 'Jobs by Qualifications', key: 'jobs-by-quals' },
      { label: 'Recruiters', bold: true },
      { label: 'Jobs Seeker by Categories', key: 'rec-categories' },
      { label: 'Jobs Seeker by Types', key: 'rec-types' },
      { label: 'Jobs Seeker by Qualifications', key: 'rec-quals' },
      { label: 'Hire with Us', bold: true },
    ],
    defaultKey: 'jobs-by-categories',
    right: {
      'jobs-by-categories': { title:'Jobs by Categories', viewAll:'/?cat=jobs', cols:[['Accounting / Finance','Automobile','Beauty / Salon','Cleaner / Housekeeper','Construction','Cook / Chef','Customer Service / Call Centre','Data Management & Analysis','Design','Driver / Delivery'],['Education','Engineering','Event Management & Operations','HR / Admin','Handyman / Technician','Information Technology','Legal Services','Logistics & Distribution','Manufacturing / Warehouse','Marine Captain / Crew']] },
      'jobs-by-types':      { title:'Jobs by Types',       viewAll:'/?cat=jobs-types', cols:[['Full Time','Part Time','Freelance','Contract'],['Temporary','Internship','Remote']] },
      'jobs-by-quals':      { title:'Jobs by Qualifications', cols:[['No Degree Required','High School','Diploma','Bachelor'],['Master','PhD','Professional Certification']] },
      'rec-categories':     { title:'Recruiter by Categories', cols:[['IT & Technology','Finance & Banking','Healthcare'],['Construction','Hospitality','Education']] },
      'rec-types':          { title:'Recruiter by Types',    cols:[['Agency','Direct Employer','Headhunter'],['Staffing Firm','RPO']] },
      'rec-quals':          { title:'Recruiter by Qualifications', cols:[['Entry Level','Mid Level','Senior Level'],['Executive','C-Suite']] },
    },
  },
  Classifieds: {
    left: [
      { label: 'Electronics', key: 'electronics', active: true },
      { label: 'Computers & Networking', key: 'computers' },
      { label: 'Business & Industrial', key: 'business' },
      { label: 'Home Appliances', key: 'home-appliances' },
      { label: 'Sports Equipment', key: 'sports' },
      { label: 'Clothing & Accessories', key: 'clothing' },
      { label: 'Cameras & Imaging', key: 'cameras' },
      { label: 'Jewelry & Watches', key: 'jewelry' },
      { label: 'Pets', key: 'pets' },
      { label: 'Musical Instruments', key: 'musical' },
      { label: 'Gaming', key: 'gaming' },
      { label: 'Baby Items', key: 'baby' },
      { label: 'Toys', key: 'toys' },
    ],
    defaultKey: 'electronics',
    right: {
      'electronics':    { title:'Electronics',           viewAll:'/?cat=electronics',     cols:[['Home Audio & Turntables','Televisions','DVD & Home Theater','Electronic Accessories','Gadgets','Car Electronics','Projectors','Mp3 Players and Portable Audio','Satellite & Cable TV','Health Electronics','Smart Home'],['Wearable Technology','Other']] },
      'computers':      { title:'Computers & Networking', viewAll:'/?cat=computers',       cols:[['Laptops','Desktops','Tablets','Monitors','Keyboards & Mice'],['Printers','Networking','Storage','Components']] },
      'business':       { title:'Business & Industrial',  viewAll:'/?cat=business',        cols:[['Office Furniture','Office Equipment','Point of Sale'],['Retail & Shelving','Cleaning Supplies','Safety Equipment']] },
      'home-appliances':{ title:'Home Appliances',        viewAll:'/?cat=home-appliances', cols:[['Washing Machines','Refrigerators','Dishwashers','Air Conditioners'],['Ovens','Microwaves','Vacuum Cleaners','Water Heaters']] },
      'sports':         { title:'Sports Equipment',       viewAll:'/?cat=sports',          cols:[['Exercise & Fitness','Cycling','Water Sports','Football'],['Cricket','Tennis','Golf','Boxing']] },
      'clothing':       { title:'Clothing & Accessories', viewAll:'/?cat=clothing',        cols:[['Men\'s Clothing','Women\'s Clothing','Kids Clothing','Shoes'],['Bags','Accessories','Sunglasses','Watches']] },
      'cameras':        { title:'Cameras & Imaging',      viewAll:'/?cat=cameras',         cols:[['Digital Cameras','DSLR','Mirrorless','Action Cameras'],['Lenses','Drones','Accessories','Film']] },
      'jewelry':        { title:'Jewelry & Watches',      viewAll:'/?cat=jewelry',         cols:[['Necklaces','Bracelets','Rings','Earrings'],['Watches','Gold','Diamonds','Platinum']] },
      'pets':           { title:'Pets',                   viewAll:'/?cat=pets',            cols:[['Dogs','Cats','Birds','Fish'],['Reptiles','Hamsters','Rabbits','Pet Accessories']] },
      'musical':        { title:'Musical Instruments',    viewAll:'/?cat=musical',         cols:[['Guitars','Keyboards','Drums','Violins'],['Flutes','DJ Equipment','Microphones','Amplifiers']] },
      'gaming':         { title:'Gaming',                 viewAll:'/?cat=gaming',          cols:[['PlayStation','Xbox','Nintendo','PC Gaming'],['Games','Controllers','Headsets','VR']] },
      'baby':           { title:'Baby Items',             viewAll:'/?cat=baby',            cols:[['Strollers','Car Seats','Cribs','Feeding'],['Clothing','Toys','Monitors','Bath']] },
      'toys':           { title:'Toys',                   viewAll:'/?cat=toys',            cols:[['Action Figures','Dolls','Board Games','Puzzles'],['LEGO','Remote Control','Educational','Outdoor']] },
    },
  },
  'Furniture & Garden': {
    left: [
      { label: 'Furniture', key: 'furniture', active: true },
      { label: 'Home Accessories', key: 'home-accessories' },
      { label: 'Garden & Outdoor', key: 'garden-outdoor' },
      { label: 'Lighting & Fans', key: 'lighting-fans' },
      { label: 'Rugs & Carpets', key: 'rugs-carpets' },
      { label: 'Curtains & Blinds', key: 'curtains-blinds' },
      { label: 'Tools & Home Improvement', key: 'tools-home-improvement' },
    ],
    defaultKey: 'furniture',
    right: {
      'furniture': { title:'Furniture', viewAll:'/?cat=furniture', cols:[['Armoires & Wardrobes','Bar Tables','Beds & Bed Sets','Bookcases','Cabinets & Cupboards','Chairs, Benches & Stools','Children\'s Furniture','Dining Sets','Dressers & Vanities','Entertainment Centers','Kitchen Islands & Carts','Nightstands'],['Office Furniture','Sofas, Futons & Lounges','Study Tables & Computer Tables','Tables','Other']] },
      'home-accessories': { title:'Home Accessories', viewAll:'/?cat=home-accessories', cols:[['Mirrors','Clocks','Vases','Candles & Holders'],['Wall Art','Decorative Pillows']] },
      'garden-outdoor': { title:'Garden & Outdoor', viewAll:'/?cat=garden-outdoor', cols:[['Patio Furniture','BBQ & Grills','Outdoor Decor'],['Plants & Pots','Gardening Tools']] },
      'lighting-fans': { title:'Lighting & Fans', viewAll:'/?cat=lighting-fans', cols:[['Ceiling Fans','Chandeliers','Lamps'],['Outdoor Lighting','Wall Lights']] },
      'rugs-carpets': { title:'Rugs & Carpets', viewAll:'/?cat=rugs-carpets', cols:[['Area Rugs','Runners','Outdoor Rugs'],['Door Mats']] },
      'curtains-blinds': { title:'Curtains & Blinds', viewAll:'/?cat=curtains-blinds', cols:[['Curtains & Drapes','Blinds & Shades'],['Curtain Rods & Hardware']] },
      'tools-home-improvement': { title:'Tools & Home Improvement', viewAll:'/?cat=tools-home-improvement', cols:[['Power Tools','Hand Tools','Hardware'],['Plumbing','Electrical']] },
    }
  },
  'Mobiles & Tablets': {
    left: [
      { label: 'Mobile Phones', key: 'mobile-phones', active: true },
      { label: 'Mobile Phone & Tablet Accessories', key: 'mobile-accessories' },
      { label: 'Tablets', key: 'tablets' },
      { label: 'Other Mobile Phones & Tablets', key: 'other-mobiles' },
    ],
    defaultKey: 'mobile-phones',
    right: {
      'mobile-phones':      { title:'Mobile Phones',      viewAll:'/?cat=mobiles',      cols:[['Apple','Samsung','Google','Huawei','Xiaomi','Oppo','OnePlus','Honor','Nokia','Vivo','Motorola','Realme'],['Sony Ericsson','ZTE Phones','Vertu','Asus','Infinix','Blackberry','Nothing Phone','Aquos']] },
      'mobile-accessories': { title:'Mobile Accessories', viewAll:'/?cat=accessories',  cols:[['Cases & Covers','Screen Protectors','Chargers','Power Banks'],['Earphones','Cables','Memory Cards','Holders']] },
      'tablets':            { title:'Tablets',            viewAll:'/?cat=tablets',      cols:[['Apple iPad','Samsung Galaxy Tab','Huawei MatePad','Lenovo'],['Amazon Fire','Microsoft Surface','Other Tablets']] },
      'other-mobiles':      { title:'Other Mobiles',      viewAll:'/?cat=other-mobiles',cols:[['Feature Phones','Satellite Phones','Dual SIM'],['Rugged Phones','Kids Phones']] },
    },
  },
  Community: {
    singleColumn: [
      'Auto Services',
      'Consultancy Services',
      'Domestic',
      'Event & Entertainment',
      'Freelancers',
      'Health & Wellbeing Services',
      'Home Maintenance',
      'Movers & Removals',
      'Other Services',
      'Restoration & Repairs',
      'Tutors & Classes',
      'Web & Computer Services'
    ]
  }
}

export default function Navbar({ city = 'Dubai', onPostAd }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('Motors')
  const [isCityOpen, setIsCityOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredTab, setHoveredTab] = useState(null)
  const [hoveredLeftKey, setHoveredLeftKey] = useState(null)
  const cityRef = useRef(null)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

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
    <>
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
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="hidden items-center gap-4 md:flex">
                {iconActions.map(({ label, path }) => {
                  const isActive = location.pathname === path
                  return (
                    <Link
                      key={label}
                      to={path}
                      className="group flex flex-col items-center gap-0.5 transition-colors"
                      title={label}
                    >
                      <Icon
                        size={18}
                        className={`transition-colors ${isActive ? 'text-dubizzle-red' : 'text-dubizzle-gray group-hover:text-dubizzle-red'}`}
                        strokeWidth={1.8}
                      />
                      <span className={`text-[10px] transition-colors ${isActive ? 'text-dubizzle-red' : 'text-dubizzle-gray group-hover:text-dubizzle-red'}`}>
                        {label}
                      </span>
                    </Link>
                  )
                })}
              </div>
              <Link
                to="/login"
                className="hidden text-[13px] font-bold text-dubizzle-dark transition-colors hover:text-dubizzle-red md:block"
              >
                Log in or sign up
              </Link>
              <Link
                to="/help"
                className="hidden text-[13px] font-semibold text-dubizzle-dark transition-colors hover:text-dubizzle-red md:block"
              >
                Help Center
              </Link>
              <button
                type="button"
                onClick={onPostAd}
                className="rounded bg-dubizzle-red px-3 py-2 text-[11px] font-bold text-white transition-all hover:bg-red-700 active:scale-[0.98] sm:px-4 sm:text-[13px]"
              >
                Place Your Ad
              </button>
              {/* Hamburger — mobile only */}
              <button
                type="button"
                className="flex items-center justify-center rounded p-1.5 text-dubizzle-dark transition-colors hover:bg-gray-100 md:hidden"
                onClick={() => setIsMobileMenuOpen((p) => !p)}
                aria-label="Toggle menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Category nav tabs */}
        <div
          ref={menuRef}
          className="border-b border-[#e5e5e5] bg-white relative"
          onMouseLeave={() => { setHoveredTab(null); setHoveredLeftKey(null) }}
        >
          <div className="mx-auto max-w-[1232px] px-4">
            <nav className="scrollbar-hide flex h-[42px] items-center justify-between overflow-x-auto" aria-label="Category navigation">
              {navTabs.map((tab) => (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.label)
                    const routeMap = {
                      'Property': '/property',
                      'Motors': '/motors',
                      'Jobs': '/jobs',
                      'Classifieds': '/classifieds',
                      'Furniture & Garden': '/furniture-and-garden',
                      'Mobiles & Tablets': '/mobiles-and-tablets',
                      'Community': '/community'
                    }
                    if (routeMap[tab.label]) {
                      navigate(routeMap[tab.label])
                    }
                  }}
                  onMouseEnter={() => {
                    setHoveredTab(megaMenus[tab.label] ? tab.label : null)
                    setHoveredLeftKey(megaMenus[tab.label]?.defaultKey ||
                      megaMenus[tab.label]?.left?.find(i => i.active)?.key || null)
                  }}
                  className={`relative flex h-full shrink-0 items-center gap-1 whitespace-nowrap px-3 text-[14px] font-semibold transition-colors ${
                    hoveredTab === tab.label || (!hoveredTab && activeTab === tab.label)
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
                  {(hoveredTab === tab.label || (!hoveredTab && activeTab === tab.label)) && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-dubizzle-red" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* ── Mega Dropdown Panel ── */}
          {hoveredTab && megaMenus[hoveredTab] && (() => {
            const menu = megaMenus[hoveredTab]
            
            // Render single column dropdown (e.g., Community)
            if (menu.singleColumn) {
              return (
                <div className="absolute right-0 top-full z-[100] bg-white border border-[#e5e5e5] shadow-2xl w-[280px] py-3 rounded-b-md">
                  {menu.singleColumn.map((item, i) => (
                    <a key={i} href={`/?cat=${encodeURIComponent(item)}`} className="block px-6 py-[10px] text-[14.5px] text-[#333] hover:bg-[#f7f7f7] hover:text-[#e8192c] transition-colors">
                      {item}
                    </a>
                  ))}
                </div>
              )
            }

            const activeKey = hoveredLeftKey || menu.defaultKey || menu.left?.find(i=>i.active)?.key
            const rightPanel = menu.right?.[activeKey]
            return (
              <div className="absolute left-0 right-0 top-full z-[100] bg-white border border-[#e5e5e5] shadow-2xl flex" style={{minHeight:320}}>
                {/* Left panel */}
                <div className="w-[260px] shrink-0 border-r border-[#f0f0f0] py-4 overflow-y-auto" style={{maxHeight:480}}>
                  {menu.left.map((item, i) => {
                    if (item.bold) return (
                      <div key={i} className="px-5 pt-4 pb-1 text-[13px] font-bold text-[#222]">{item.label}</div>
                    )
                    return (
                      <a
                        key={i}
                        href={`/?cat=${item.key}`}
                        onMouseEnter={() => setHoveredLeftKey(item.key)}
                        className={`flex items-center justify-between px-5 py-[7px] text-[13.5px] cursor-pointer transition-colors ${
                          activeKey === item.key
                            ? 'bg-[#f7f7f7] text-[#e8192c] font-semibold'
                            : item.blue ? 'text-[#1a73e8] hover:bg-[#f7f7f7]' : 'text-[#333] hover:bg-[#f7f7f7]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className="flex items-center gap-1.5">
                          {item.badge && <span className="rounded-full bg-[#e8192c] px-1.5 py-0.5 text-[9px] font-bold text-white leading-none">{item.badge}</span>}
                          {activeKey === item.key && <span className="text-[#ccc] text-[12px]">›</span>}
                        </span>
                      </a>
                    )
                  })}
                  {menu.sellMyCar && (
                    <div className="mx-3 mt-3 rounded-lg overflow-hidden cursor-pointer" style={{background:'linear-gradient(135deg,#f0f4ff 0%,#e8f0fe 100%)',padding:'12px 14px'}}>
                      <div className="text-[13px] font-bold text-[#222] mb-0.5">Sell My Car</div>
                      <div className="text-[11px] text-[#666]">Get the best price</div>
                    </div>
                  )}
                  {menu.services && (
                    <div className="px-3 mt-3">
                      <div className="text-[11px] font-bold text-[#888] mb-2">Services by <span className="text-[#e8192c]">dubizzle</span><span className="text-[11px] font-bold text-[#e8192c]">.cars</span></div>
                      <div className="flex flex-wrap gap-2">
                        {menu.services.map(s => (
                          <a key={s} href={`/?service=${encodeURIComponent(s)}`}
                            className="border border-[#e8192c] text-[#e8192c] rounded px-2.5 py-1 text-[11px] font-semibold hover:bg-[#fff0f1] transition-colors">{s}</a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right panel */}
                {rightPanel && (
                  <div className="flex-1 bg-[#f7f7f7] py-5 px-6 overflow-y-auto" style={{maxHeight:480}}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[15px] font-bold text-[#222]">{rightPanel.title}</span>
                      {rightPanel.viewAll && (
                        <a href={rightPanel.viewAll} className="text-[13px] font-semibold text-[#e8192c] hover:underline flex items-center gap-1">
                          View All <span>→</span>
                        </a>
                      )}
                    </div>
                    <div className="grid gap-x-8" style={{gridTemplateColumns:`repeat(${rightPanel.cols?.length||1},1fr)`}}>
                      {rightPanel.cols?.map((col, ci) => (
                        <ul key={ci} className="flex flex-col gap-[6px]">
                          {col.map(item => (
                            <li key={item}>
                              <a href={`/?q=${encodeURIComponent(item)}&cat=${activeKey}`}
                                className="text-[13px] text-[#333] hover:text-[#e8192c] transition-colors">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })()}
        </div>
      </header>

      {/* ── Mobile Menu Drawer ── */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Drawer panel */}
          <div className="absolute right-0 top-0 flex h-full w-[290px] flex-col bg-white shadow-2xl">
            {/* Drawer header */}
            <div className="flex items-center justify-between border-b border-dubizzle-border px-4 py-3">
              <Logo width={100} height={24} />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded p-1 text-dubizzle-gray transition-colors hover:text-dubizzle-dark"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Icon actions */}
            <div className="flex flex-col gap-1 px-2 py-3">
              {iconActions.map(({ label, path }) => {
                const isActive = location.pathname === path
                return (
                  <Link
                    key={label}
                    to={path}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-dubizzle-dark transition-colors hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={20} strokeWidth={1.8} className={`transition-colors ${isActive ? 'text-dubizzle-red' : 'text-dubizzle-gray'}`} />
                    <span className={`text-[15px] font-semibold transition-colors ${isActive ? 'text-dubizzle-red' : ''}`}>{label}</span>
                  </Link>
                )
              })}
            </div>

            <hr className="border-dubizzle-border" />

            {/* Login & Help links */}
            <div className="flex flex-col gap-1 px-2 py-3">
              <Link
                to="/login"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[15px] font-bold text-dubizzle-dark transition-colors hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log in or sign up
              </Link>
              <Link
                to="/help"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] font-semibold text-dubizzle-dark transition-colors hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Help Center
              </Link>
            </div>

            {/* CTA at bottom */}
            <div className="mt-auto border-t border-dubizzle-border p-4">
              <button
                type="button"
                className="w-full rounded bg-dubizzle-red py-3 text-[14px] font-bold text-white transition-colors hover:bg-red-700"
                onClick={() => { setIsMobileMenuOpen(false); onPostAd?.() }}
              >
                Place Your Ad
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
