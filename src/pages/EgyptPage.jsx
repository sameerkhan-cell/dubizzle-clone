import { useState } from 'react'
import PromoBanners from '../components/PromoBanners'
import Categories from '../components/Categories'
import ListingSection from '../components/ListingSection'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const egyptCities = [
  'Alexandria','Aswan','Asyut','Beheira','Beni Suef','Cairo',
  'Dakahlia','Damietta','Faiyum','Gharbia','Giza','Ismailia',
  'Kafr El Sheikh','Luxor','Matruh','Minya','Monufia','New Valley',
  'North Sinai','Port Said','Qalyubia','Qena','Red Sea','Sharqia',
  'Sohag','South Sinai','Suez',
]

/* ─── Custom Egypt Navbar (only used on this page) ─── */
function EgyptNavbar() {
  const [search, setSearch] = useState('')
  const [locationOpen, setLocationOpen] = useState(false)
  const [locationSearch, setLocationSearch] = useState('')

  const filteredCities = egyptCities.filter(city =>
    city.toLowerCase().includes(locationSearch.toLowerCase())
  )

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto max-w-[1232px] px-4 flex items-center gap-3 h-[60px]">

        {/* Left group: Logo + Motors + Properties */}
        <div className="flex items-center gap-0 shrink-0">

          {/* Dubizzle Logo (SVG from real site) */}
          <a href="/en/" className="mr-3 shrink-0">
            <svg fill="none" viewBox="0 0 64 35" className="h-[34px] w-auto" aria-label="Logo">
              <path fill="#212223" d="M37.04 33.28c.13.06.32.09.45.09.37 0 .6-.12.78-.52l.3-.71-2.2-5.43h1.06l1.68 4.21 1.68-4.2h1.08l-2.65 6.38c-.34.85-.93 1.15-1.7 1.16a2.9 2.9 0 0 1-.63-.08l.15-.9zm-2.3-1.2v-7.4h1v7.4h-1zm-3.57 0v-5.37h1v.87a2.28 2.28 0 0 1 1.75-.95v1l-.34-.02c-.5 0-1.18.38-1.41.78v3.73h-1zM24.8 29.4c0-1.56 1.12-2.82 2.68-2.82 1.61 0 2.61 1.26 2.61 2.9v.25h-4.24c.08.9.74 1.66 1.82 1.66.57 0 1.2-.22 1.6-.63l.46.65c-.54.53-1.3.8-2.16.8a2.68 2.68 0 0 1-2.78-2.82zm2.68-2c-1.07 0-1.6.87-1.64 1.6h3.28c-.03-.7-.5-1.6-1.64-1.6zm-4.77 4.68V28.5c0-.62-.27-1.03-.93-1.03-.54 0-1.08.38-1.33.77v3.84h-1V28.5c0-.62-.27-1.03-.95-1.03-.52 0-1.04.4-1.3.78v3.83h-1v-5.37h1v.8c.22-.33.93-.89 1.73-.89.8 0 1.29.42 1.45 1 .31-.5 1.02-1 1.81-1 1 0 1.52.55 1.52 1.62v3.88h-1zm-10.1 0v-5.37h1v.87a2.28 2.28 0 0 1 1.76-.95v1l-.34-.02c-.5 0-1.18.38-1.41.78v3.73h-1zm-3.8.13c-1.63 0-2.67-1.26-2.67-2.82 0-1.54 1.04-2.8 2.7-2.8 1.68 0 2.72 1.26 2.72 2.8 0 1.56-1.04 2.82-2.7 2.82zm.04-.9c1.07 0 1.66-.89 1.66-1.92 0-1-.6-1.92-1.66-1.92-1.07 0-1.67.9-1.67 1.92s.6 1.93 1.67 1.93zm-5.25.77V27.6h-.9v-.88h.88v-.35c0-1.16.68-1.8 1.64-1.8.34 0 .64.07.88.2l-.24.74a.95.95 0 0 0-.48-.1c-.5 0-.8.34-.8.99v.35h1.1v.88h-1.1v4.5h-1z"/>
              <path fill="#212223" fillRule="evenodd" d="M55.25 33.54h-2.38V23.51l2.38.03v10.04zm-3.23-5a4.13 4.13 0 1 1-8.26 0 4.13 4.13 0 0 1 8.26 0zm-2.88 0a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zm12.14-2.5H59.7l-.92.91-.93-.92h-1.58v1.6l.91.92-.9.9v1.6h1.59l.9-.9.91.9h1.61v-1.6l-.9-.9.9-.92v-1.6z" clipRule="evenodd"/>
              <g fillRule="evenodd" clipRule="evenodd">
                <path fill="#212223" d="M42.3 11.9c-.33.25-.54.6-.9 1.06a54.45 54.45 0 0 0-2.36 3.3c-.4.6-.78 1.12-1.1 1.75h4.45v1.78h-6.9v-1.4c.32-.47.57-1 .93-1.56l1.12-1.7c.38-.57.77-1.14 1.14-1.65.38-.52.72-.95 1-1.37h-3.97v-1.78h6.58v1.53zm8.13 0a40.84 40.84 0 0 0-1.97 2.58c-.4.56-.8 1.16-1.21 1.77-.4.6-.77 1.13-1.1 1.76h4.38v1.78h-6.78v-1.4c.31-.47.55-1 .9-1.56a92.92 92.92 0 0 1 2.26-3.35l1-1.37h-3.95v-1.78h6.47v1.53zm3.87-5.93h-.03c-.34 0-1.82.27-2.16.6V19.8h2.18V5.97zm7.53 8.17c0-.32-.05-.58-.13-.85a1.8 1.8 0 0 0-.37-.74 1.74 1.74 0 0 0-1.43-.64 1.94 1.94 0 0 0-1.52.7 3.12 3.12 0 0 0-.6 1.49h4.05zm-6.3.98c0-.83.1-1.55.35-2.18.25-.62.58-1.14.98-1.56a4.33 4.33 0 0 1 3.02-1.25c1.3 0 2.3.4 3.03 1.2.73.81 1.1 2.01 1.1 3.6a9.37 9.37 0 0 1 0 .78l-6.2.03c.05.86.32 1.38.8 1.8.47.4 1.15.63 2.05.63a6.75 6.75 0 0 0 2.48-.44l.3 1.8a6.93 6.93 0 0 1-2.1.5 7.2 7.2 0 0 1-3.1-.31 4.01 4.01 0 0 1-2.39-2.58 6.26 6.26 0 0 1-.28-1.97zm-39.24-4.75v4.93c0 1-.13 1.73-.42 2.17-.3.43-.8.64-1.52.64-.73 0-1.22-.21-1.5-.64-.3-.44-.43-1.16-.43-2.17v-4.93h-2.2v5.28c0 .63.07 1.22.21 1.75a3.03 3.03 0 0 0 1.87 2.28c.5.2 1.3.32 2.06.32s1.56-.1 2.07-.32a3.04 3.04 0 0 0 1.87-2.28 7.4 7.4 0 0 0 .18-1.75v-5.28h-2.2zM2.23 15.05c0-.92.18-1.66.55-2.2.36-.54.94-.8 1.73-.8a3.05 3.05 0 0 1 1.75.51V18l-.58.1c-.25.02-.54.03-.9.03a2.3 2.3 0 0 1-1.87-.82 3.43 3.43 0 0 1-.68-2.26m-1.9 2.08a4.1 4.1 0 0 0 2.45 2.55c.6.23 1.26.34 2 .34a12.55 12.55 0 0 0 3.68-.52V5.97c-.36 0-1.85.27-2.18.6l-.02 4.11a4.21 4.21 0 0 0-2.12-.52c-.65 0-1.24.12-1.76.36a3.4 3.4 0 0 0-1.3 1c-.35.43-.62.95-.8 1.56a6.84 6.84 0 0 0 .05 4.05zm25.47.18c-.45.55-1.07.82-1.88.82a7.33 7.33 0 0 1-1.47-.14v-5.43a3.4 3.4 0 0 1 1.76-.52c.8 0 1.37.27 1.74.81.36.54.54 1.28.54 2.2 0 .96-.22 1.72-.68 2.26m2.63-4.23a4.62 4.62 0 0 0-.8-1.56 3.47 3.47 0 0 0-1.3-1 4.27 4.27 0 0 0-1.77-.35c-.44 0-.84.05-1.2.16-.37.1-.71.23-.92.36V5.97h-.03c-.34 0-1.82.27-2.16.6V19.5a12.6 12.6 0 0 0 3.68.52c.74 0 1.4-.1 2-.34a4.1 4.1 0 0 0 2.45-2.55 6.84 6.84 0 0 0 .05-4.06m3.53-2.7s-1.01 0-1.3.18c-.35.22-.56.53-.56.92 0 .37.12 3.35.17 3.64.05.29.35.1.48.83.13.75.43 3.9.5 3.98.12.12.61.2.73.2.1 0 .6-.08.67-.2.08-.07.4-3.23.52-3.98.12-.74.42-.54.46-.83.05-.3.17-3.27.17-3.64 0-.4-.2-.7-.56-.92a3.74 3.74 0 0 0-1.3-.18h-.05m1.32-1.67a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"/>
                <path fill="#DE1F26" d="M31.3 4.05c.67-.55 1.68-1.56 1.68-2.34 0-1.17-.62-1.7-.62-1.7s.27.92-1.87 2.9C28.65 4.64 28.9 6.2 28.9 6.3c.1.95.49 2.06 1.2 2.52a2.78 2.78 0 0 1-.46-1.45c0-.15-.14-1.73 1.7-3.27"/>
                <path fill="#DE1F26" d="M34.8 7.46c-.03-.93-.33-1.01-.68-1.84-.5-1.34.35-2.49-.58-3.9-.29 1.8-1.64 2.33-2.62 3.5-.76.9-.97 2.07-.6 2.9a1.8 1.8 0 1 1 3.19 1.56c.85-.3 1.33-1.32 1.3-2.22z"/>
              </g>
            </svg>
          </a>

          {/* Motors */}
          <a href="/en/motors/" className="flex items-center gap-1.5 px-3 h-[60px] text-[14px] font-medium text-gray-800 hover:text-[#DE1F26] hover:border-b-2 hover:border-[#DE1F26] transition-colors">
            <img src="/assets/vehicles_noinline.f0509d15f4ed1cd4cb243005f067d354.svg" alt="Motors" className="w-5 h-5" onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'block'
            }} />
            {/* Fallback car icon */}
            <svg className="w-5 h-5 text-[#DE1F26] hidden" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
            </svg>
            <span>Motors</span>
          </a>

          {/* Properties */}
          <a href="/en/realestate/" className="flex items-center gap-1.5 px-3 h-[60px] text-[14px] font-medium text-gray-800 hover:text-[#DE1F26] hover:border-b-2 hover:border-[#DE1F26] transition-colors">
            <img src="/assets/property-for-rent_noinline.afd1b8bf81720cc538aba324a684f145.svg" alt="Properties" className="w-5 h-5" onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'block'
            }} />
            {/* Fallback property icon */}
            <svg className="w-5 h-5 text-[#DE1F26] hidden" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span>Properties</span>
          </a>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Location Dropdown */}
        <div className="relative shrink-0">
          {/* Trigger button */}
          <div
            onClick={() => setLocationOpen(!locationOpen)}
            className="flex items-center gap-1.5 border border-gray-300 rounded-md px-3 py-2 cursor-pointer hover:border-gray-400 transition h-[38px] select-none"
          >
            <svg className="w-4 h-4 text-[#DE1F26]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="text-[14px] text-gray-800 min-w-[38px]">Egypt</span>
            <svg
              className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${locationOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 24 24" fill="currentColor"
            >
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>

          {/* Dropdown Panel */}
          {locationOpen && (
            <div className="absolute top-[44px] left-0 w-[280px] bg-white border border-gray-200 rounded-md shadow-xl z-50 overflow-hidden">

              {/* Header row: Egypt + chevron up */}
              <div
                onClick={() => setLocationOpen(false)}
                className="flex items-center justify-between px-4 py-3 border-b border-gray-200 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#DE1F26]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-[14px] font-medium text-gray-800">Egypt</span>
                </div>
                <svg className="w-5 h-5 text-gray-500 rotate-180" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </div>

              {/* Search for location */}
              <div className="px-3 py-2 border-b border-gray-100">
                <input
                  type="text"
                  placeholder="Search for location"
                  value={locationSearch}
                  onChange={(e) => setLocationSearch(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-[13px] text-gray-700 placeholder-gray-400 outline-none focus:border-gray-400"
                  autoFocus
                />
              </div>

              {/* Use current location */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50">
                <svg className="w-5 h-5 text-[#DE1F26]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
                  <circle cx="12" cy="12" r="8" strokeDasharray="2 2"/>
                </svg>
                <span className="text-[14px] font-semibold text-gray-800">Use current location</span>
              </div>

              {/* Choose location label */}
              <div className="px-4 pt-3 pb-1">
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">Choose location</span>
              </div>

              {/* See ads in all Egypt */}
              <div className="px-4 py-2 cursor-pointer hover:bg-gray-50">
                <span className="text-[14px] font-medium text-[#DE1F26]">See ads in all Egypt</span>
              </div>

              {/* City list — scrollable */}
              <div className="max-h-[240px] overflow-y-auto">
                {filteredCities.map((city) => (
                  <div
                    key={city}
                    onClick={() => setLocationOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 cursor-pointer hover:bg-gray-50 border-t border-gray-100"
                  >
                    <span className="text-[14px] text-gray-800">{city}</span>
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </div>
                ))}
              </div>

            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="flex items-center flex-1 max-w-[500px] border border-gray-300 rounded-md overflow-hidden h-[38px]">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Find Cars, Mobile Phones and more..."
            className="flex-1 px-4 text-[14px] text-gray-700 placeholder-gray-400 outline-none bg-white h-full"
            autoComplete="off"
          />
          <button
            aria-label="Search"
            className="bg-[#DE1F26] hover:bg-[#c01a20] transition-colors px-4 h-full flex items-center justify-center"
          >
            {/* Search icon matching real site */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024" className="fill-white">
              <path d="M448 725.33c-152.92 0-277.33-124.41-277.33-277.33S295.08 170.67 448 170.67 725.33 295.08 725.33 448 600.92 725.33 448 725.33zm436.44 98.78v.02L732.52 672.19c48.77-61.78 78.15-139.54 78.15-224.19 0-199.98-162.7-362.67-362.67-362.67S85.33 248.03 85.33 448c0 199.98 162.69 362.67 362.67 362.67 84.63 0 162.41-29.38 224.17-78.15l206.14 206.15h60.36v-60.33l-54.23-54.23z"/>
            </svg>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Arabic language switch */}
          <a
            href="/"
            title="العربية"
            aria-label="language switch button"
            className="text-[14px] font-medium text-gray-700 hover:text-[#DE1F26] transition-colors"
            style={{ minWidth: '4.1rem', maxWidth: '5.7rem' }}
          >
            العربية
          </a>

          {/* Login */}
          <button
            aria-label="Login"
            className="text-[14px] font-semibold text-gray-800 hover:text-[#DE1F26] transition-colors px-1"
          >
            Login
          </button>

          {/* Post Your Ad */}
          <button
            aria-label="Post your ad"
            type="submit"
            className="bg-[#DE1F26] hover:bg-[#c01a20] text-white text-[14px] font-bold px-4 py-2 rounded transition-colors whitespace-nowrap"
          >
            Post Your Ad
          </button>
        </div>

      </div>
    </header>
  )
}

/* ─── Egypt Listing Data ─── */

const villasSaleListings = [
  {
    image: 'https://images.unsplash.com/photo-1613490906263-ceb13ff781fd?auto=format&fit=crop&w=400&q=80',
    title: 'Twin Villa 250m in Sodic West',
    price: 'EGP 9,500,000',
    details: '4 Beds · 4 Baths · 250 m²',
    location: 'Sheikh Zayed, Giza',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80',
    title: 'Modern Villa in New Cairo',
    price: 'EGP 12,000,000',
    details: '5 Beds · 5 Baths · 400 m²',
    location: 'Fifth Settlement, New Cairo',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
    title: 'Standalone Villa in Madinaty',
    price: 'EGP 7,800,000',
    details: '4 Beds · 3 Baths · 320 m²',
    location: 'Madinaty, New Cairo',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80',
    title: 'Luxury Villa in Palm Hills',
    price: 'EGP 15,500,000',
    details: '5 Beds · 6 Baths · 500 m²',
    location: 'Palm Hills, 6th October',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80',
    title: 'Villa in Uptown Cairo',
    price: 'EGP 11,200,000',
    details: '4 Beds · 4 Baths · 380 m²',
    location: 'Mokattam, Cairo',
    featured: false,
  },
]

const villasRentListings = [
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
    title: 'Furnished Villa – Sheikh Zayed',
    price: 'EGP 45,000 / month',
    details: '4 Beds · 3 Baths · Garden',
    location: 'Sheikh Zayed, Giza',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80',
    title: '5 Bed Villa in New Cairo',
    price: 'EGP 55,000 / month',
    details: '5 Beds · 4 Baths · Pool',
    location: 'Fifth Settlement, Cairo',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80',
    title: 'Standalone Villa for Rent',
    price: 'EGP 35,000 / month',
    details: '3 Beds · 3 Baths · 300 m²',
    location: 'Maadi, Cairo',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
    title: 'Garden Villa in Heliopolis',
    price: 'EGP 28,000 / month',
    details: '3 Beds · 2 Baths · 220 m²',
    location: 'Heliopolis, Cairo',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1613490906263-ceb13ff781fd?auto=format&fit=crop&w=400&q=80',
    title: 'Duplex Villa in Beverly Hills',
    price: 'EGP 65,000 / month',
    details: '6 Beds · 5 Baths · Basement',
    location: 'Beverly Hills, 6th October',
    featured: false,
  },
]

const vacationRentListings = [
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80',
    title: 'Chalet – North Coast Marassi',
    price: 'EGP 8,000 / night',
    details: '3 Beds · Sea View · Pool',
    location: 'Marassi, North Coast',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80',
    title: 'Beachfront Cabin – Ain Sokhna',
    price: 'EGP 5,500 / night',
    details: '2 Beds · Sea View · Direct Beach',
    location: 'Porto Sokhna, Ain Sokhna',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80',
    title: 'Luxury Chalet – Sahel',
    price: 'EGP 6,200 / night',
    details: '3 Beds · Garden · Pool Access',
    location: 'Hacienda Bay, Sahel',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=400&q=80',
    title: 'Studio Apartment – Red Sea',
    price: 'EGP 2,800 / night',
    details: '1 Bed · Sea View · Furnished',
    location: 'Hurghada, Red Sea',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
    title: 'Penthouse – Gouna',
    price: 'EGP 9,000 / night',
    details: '4 Beds · Rooftop · Marina View',
    location: 'El Gouna, Hurghada',
    featured: false,
  },
]

const carListings = [
  {
    image: 'https://images.unsplash.com/photo-1503377211516-79ef88fb03b3?auto=format&fit=crop&w=400&q=80',
    title: 'Kia Sportage 2023',
    price: 'EGP 1,350,000',
    details: '2023 · 12,000 km · Automatic',
    location: 'Nasr City, Cairo',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80',
    title: 'Hyundai Tucson 2022',
    price: 'EGP 980,000',
    details: '2022 · 35,000 km · Automatic',
    location: 'Giza',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80',
    title: 'Toyota Corolla 2021',
    price: 'EGP 720,000',
    details: '2021 · 60,000 km · Manual',
    location: 'Heliopolis, Cairo',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=400&q=80',
    title: 'BMW 520i 2020',
    price: 'EGP 1,650,000',
    details: '2020 · 45,000 km · Automatic',
    location: 'New Cairo',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=400&q=80',
    title: 'Mitsubishi Eclipse Cross',
    price: 'EGP 1,100,000',
    details: '2022 · 22,000 km · Automatic',
    location: 'Maadi, Cairo',
    featured: false,
  },
]

const mobilesListings = [
  {
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=400&q=80',
    title: 'iPhone 15 Pro Max 256GB',
    price: 'EGP 75,000',
    details: 'New · Natural Titanium · Sealed',
    location: 'Cairo',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80',
    title: 'Samsung Galaxy S24 Ultra',
    price: 'EGP 58,000',
    details: 'New · 512GB · Phantom Black',
    location: 'Giza',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=400&q=80',
    title: 'iPhone 14 128GB',
    price: 'EGP 32,000',
    details: 'Used – Like New · Midnight',
    location: 'Alexandria',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80',
    title: 'Samsung Galaxy Tab S9',
    price: 'EGP 27,000',
    details: 'New · 256GB · Beige',
    location: 'Cairo',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=400&q=80',
    title: 'Xiaomi 14 Pro 512GB',
    price: 'EGP 22,000',
    details: 'New · Black · Leica Camera',
    location: 'Nasr City, Cairo',
    featured: false,
  },
]

const jobsListings = [
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    title: 'Senior Software Engineer',
    price: 'EGP 35,000 – 50,000',
    details: 'Full Time · IT & Software',
    location: 'Cairo',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    title: 'Marketing Manager',
    price: 'EGP 20,000 – 30,000',
    details: 'Full Time · Marketing',
    location: 'Giza',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    title: 'Sales Representative',
    price: 'EGP 10,000 – 18,000',
    details: 'Full Time · Sales',
    location: 'New Cairo',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    title: 'Customer Service Agent',
    price: 'EGP 8,000 – 12,000',
    details: 'Full Time · Customer Service',
    location: 'Alexandria',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    title: 'Civil Engineer',
    price: 'EGP 18,000 – 28,000',
    details: 'Full Time · Engineering',
    location: 'Cairo',
    featured: false,
  },
]

const laptopsListings = [
  {
    image: 'https://images.unsplash.com/photo-1588620242551-0cdef5bdfb6a?auto=format&fit=crop&w=400&q=80',
    title: 'MacBook Pro M3 14"',
    price: 'EGP 85,000',
    details: 'New · 16GB RAM · 512GB SSD',
    location: 'Cairo',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80',
    title: 'Dell XPS 15 – i7',
    price: 'EGP 45,000',
    details: 'Used – Excellent · 32GB · 1TB',
    location: 'New Cairo',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=400&q=80',
    title: 'HP Spectre x360 14"',
    price: 'EGP 38,000',
    details: 'Used – Good · Intel i5 · 16GB',
    location: 'Giza',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80',
    title: 'Lenovo ThinkPad X1 Carbon',
    price: 'EGP 42,000',
    details: 'Used – Like New · i7 · 16GB',
    location: 'Heliopolis, Cairo',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=400&q=80',
    title: 'ASUS ROG Strix G16',
    price: 'EGP 55,000',
    details: 'New · RTX 4070 · 32GB RAM',
    location: 'Alexandria',
    featured: false,
  },
]

const homeDecorListings = [
  {
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80',
    title: 'L-Shaped Sofa Set',
    price: 'EGP 18,500',
    details: 'New · Beige Fabric · 5-Seater',
    location: 'Cairo',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80',
    title: 'Modern Dining Table Set',
    price: 'EGP 12,000',
    details: 'New · Wood & Glass · 6 Chairs',
    location: 'Giza',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=400&q=80',
    title: 'King Size Bedroom Set',
    price: 'EGP 25,000',
    details: 'New · White Oak · Complete Set',
    location: 'New Cairo',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=400&q=80',
    title: 'Decorative Wall Art Set',
    price: 'EGP 2,400',
    details: 'New · Canvas Prints · 3 Pieces',
    location: 'Maadi, Cairo',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1530603907829-659dc1a6b932?auto=format&fit=crop&w=400&q=80',
    title: 'Persian-Style Area Rug 3×4m',
    price: 'EGP 8,800',
    details: 'New · Handmade · Red & Gold',
    location: 'Cairo',
    featured: false,
  },
]

/* ─── Popular Searches Data ─── */
const popularSearches = [
  {
    heading: 'Properties For Sale',
    links: [
      'Apartments for Sale in Cairo',
      'Apartments for Sale in Giza',
      'Villas for Sale in New Cairo',
      'Villas for Sale in Sheikh Zayed',
      'Duplex for Sale in Maadi',
      'Chalet for Sale in North Coast',
    ],
  },
  {
    heading: 'Properties For Rent',
    links: [
      'Apartments for Rent in Cairo',
      'Apartments for Rent in Maadi',
      'Villas for Rent in Sheikh Zayed',
      'Rooms for Rent in Cairo',
      'Offices for Rent in Downtown',
      'Studios for Rent in New Cairo',
    ],
  },
  {
    heading: 'Cars For Sale',
    links: [
      'Used Cars in Cairo',
      'Toyota for Sale in Egypt',
      'Hyundai for Sale in Cairo',
      'Kia for Sale in Giza',
      'BMW for Sale in Egypt',
      'Mercedes for Sale in Cairo',
    ],
  },
  {
    heading: 'Jobs',
    links: [
      'IT Jobs in Cairo',
      'Sales Jobs in Cairo',
      'Engineering Jobs in Egypt',
      'Marketing Jobs in Giza',
      'Customer Service Jobs',
      'Part-Time Jobs in Cairo',
    ],
  },
]

const popularBrands = [
  {
    heading: 'Car Brands',
    links: ['Toyota', 'Hyundai', 'Kia', 'BMW', 'Mercedes', 'Nissan', 'Mitsubishi', 'Peugeot'],
  },
  {
    heading: 'Phone Brands',
    links: ['Apple iPhone', 'Samsung', 'Xiaomi', 'OPPO', 'Huawei', 'Realme', 'vivo', 'Honor'],
  },
]

/* ─── Popular Searches Section ─── */
function PopularSearches() {
  return (
    <section className="bg-white py-10 border-t border-gray-200">
      <div className="mx-auto max-w-[1232px] px-4">
        <h2 className="mb-6 text-[20px] font-bold text-gray-900">Popular Searches</h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {popularSearches.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-3 text-[13px] font-bold text-gray-700 uppercase tracking-wide">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-1.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-[#146AA8] hover:underline hover:text-[#EE3124] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Popular Brands */}
        <div className="mt-10 pt-6 border-t border-gray-100">
          <h2 className="mb-5 text-[20px] font-bold text-gray-900">Popular Brands</h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {popularBrands.map((col) => (
              <div key={col.heading}>
                <h3 className="mb-3 text-[13px] font-bold text-gray-700 uppercase tracking-wide">
                  {col.heading}
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[13px] text-[#146AA8] hover:underline hover:text-[#EE3124] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Page Component ─── */
export default function EgyptPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-dubizzle-dark">
      {/* Custom navbar — only on this page, does NOT affect other pages */}
      <EgyptNavbar />
      <Hero city="Egypt" />
      <PromoBanners />
      <Categories />
      <main className="pb-8 pt-4">
        <ListingSection
          title="Villas For Sale"
          listings={villasSaleListings}
          url="/property-for-sale/villas"
        />
        <ListingSection
          title="Villas For Rent"
          listings={villasRentListings}
          url="/property-for-rent/villas"
        />
        <ListingSection
          title="Vacation Homes By Rent"
          listings={vacationRentListings}
          url="/property-for-rent/vacation"
        />
        <ListingSection
          title="Cars For Sale"
          listings={carListings}
          url="/motors"
        />
        <ListingSection
          title="Mobile Phones"
          listings={mobilesListings}
          url="/mobiles"
        />
        <ListingSection
          title="Jobs"
          listings={jobsListings}
          url="/jobs"
        />
        <ListingSection
          title="Laptops"
          listings={laptopsListings}
          url="/classifieds/laptops"
        />
        <ListingSection
          title="Home Decoration"
          listings={homeDecorListings}
          url="/classifieds/home-decor"
        />
      </main>
      <PopularSearches />
      <AppDownload />
      {/* Shared Footer — unchanged */}
      <Footer />
    </div>
  )
}