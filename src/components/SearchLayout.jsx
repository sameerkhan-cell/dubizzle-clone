import { ChevronRight, ChevronDown, Bell } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import VerticalListingCard from './VerticalListingCard'

export default function SearchLayout({ title, category, listings, breadcrumbs }) {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-dubizzle-dark">
      <Navbar city="Dubai" />

      {/* Main Search Area (Simplified for layout) */}
      <div className="bg-white border-b border-[#e5e5e5] py-4">
        <div className="max-w-[1232px] mx-auto px-4">
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder={`Search in ${title}`} 
              className="flex-1 bg-[#f5f5f5] rounded py-2.5 px-4 outline-none text-[14px]"
            />
            <button className="bg-dubizzle-red text-white px-8 rounded font-bold text-[14px] hover:bg-red-700">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1232px] mx-auto px-4 py-4">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-6">
          <Link to="/" className="hover:text-dubizzle-dark">Home</Link>
          {breadcrumbs.map((crumb, i) => (
            <div key={i} className="flex items-center gap-2">
              <ChevronRight size={14} />
              <span className={i === breadcrumbs.length - 1 ? 'font-bold text-[#222]' : 'hover:text-dubizzle-dark cursor-pointer'}>
                {crumb}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar (Filters) */}
          <div className="w-full lg:w-[260px] shrink-0">
            <div className="bg-white rounded border border-[#e5e5e5] p-4 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-[16px] text-[#222]">Filters</h3>
                <button className="text-[12px] text-[#1a73e8] hover:underline">Reset</button>
              </div>

              {/* Categories Filter */}
              <div className="border-t border-[#e5e5e5] py-4">
                <h4 className="font-bold text-[14px] text-[#222] mb-3 flex items-center justify-between cursor-pointer">
                  Categories <ChevronDown size={16} />
                </h4>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-[13px] text-gray-600 cursor-pointer">
                    <input type="checkbox" className="accent-dubizzle-red" defaultChecked />
                    All {title}
                  </label>
                  <label className="flex items-center gap-2 text-[13px] text-gray-600 cursor-pointer">
                    <input type="checkbox" className="accent-dubizzle-red" />
                    Accessories
                  </label>
                </div>
              </div>

              {/* Price Filter */}
              <div className="border-t border-[#e5e5e5] py-4">
                <h4 className="font-bold text-[14px] text-[#222] mb-3 flex items-center justify-between cursor-pointer">
                  Price (AED) <ChevronDown size={16} />
                </h4>
                <div className="flex gap-2">
                  <input type="number" placeholder="Min" className="w-full border border-gray-300 rounded px-2 py-1.5 text-[13px] outline-none" />
                  <input type="number" placeholder="Max" className="w-full border border-gray-300 rounded px-2 py-1.5 text-[13px] outline-none" />
                </div>
              </div>

              {/* Condition Filter */}
              <div className="border-t border-[#e5e5e5] py-4">
                <h4 className="font-bold text-[14px] text-[#222] mb-3 flex items-center justify-between cursor-pointer">
                  Condition <ChevronDown size={16} />
                </h4>
                <div className="flex flex-col gap-2 text-[13px] text-gray-600">
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-dubizzle-red" /> Brand New</label>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-dubizzle-red" /> Like New</label>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-dubizzle-red" /> Used</label>
                </div>
              </div>

            </div>

            {/* Save Search Alert */}
            <div className="bg-blue-50 border border-blue-100 rounded p-4 flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1a73e8] mb-2 shadow-sm">
                <Bell size={20} />
              </div>
              <h4 className="font-bold text-[14px] text-[#222] mb-1">Save Search</h4>
              <p className="text-[12px] text-gray-500 mb-3">Get notified when new ads matching your criteria are posted.</p>
              <button className="bg-white border border-[#1a73e8] text-[#1a73e8] w-full py-2 rounded font-bold text-[13px] hover:bg-blue-50 transition-colors">
                Create Alert
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-[20px] sm:text-[24px] font-bold text-[#222]">
                {title} in Dubai
              </h1>
              <span className="text-[13px] text-gray-500">{listings.length} results</span>
            </div>

            {/* Active Filters Bubbles */}
            <div className="flex gap-2 mb-4">
              <span className="bg-white border border-gray-300 text-gray-600 text-[12px] px-3 py-1.5 rounded-full flex items-center gap-2">
                Dubai <button className="hover:text-black">×</button>
              </span>
            </div>

            <div className="flex flex-col xl:flex-row gap-6">
              {/* Listings List */}
              <div className="flex-1 flex flex-col gap-3">
                {listings.map(listing => (
                  <VerticalListingCard key={listing.id} listing={listing} urlPrefix={category} />
                ))}

                {/* Pagination placeholder */}
                <div className="flex items-center justify-center gap-2 mt-8 mb-4">
                  <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-400 rounded cursor-not-allowed">
                    <ChevronRight size={18} className="rotate-180" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center bg-dubizzle-red text-white font-bold rounded">1</button>
                  <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-gray-600 font-bold rounded hover:bg-gray-50">2</button>
                  <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-gray-600 font-bold rounded hover:bg-gray-50">3</button>
                  <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-gray-600 rounded hover:bg-gray-50">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Right Side Promoted Banner (Visible on very large screens, else stacked or hidden) */}
              <div className="w-full xl:w-[240px] shrink-0 hidden lg:block">
                <div className="bg-dubizzle-red rounded-lg p-6 text-white text-center shadow-md sticky top-4">
                  <h3 className="font-bold text-[18px] mb-2 leading-tight">Cars Wanted!</h3>
                  <p className="text-[13px] opacity-90 mb-6">Sell your car in 30 minutes. Get cash instantly.</p>
                  <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=300&q=80" alt="Car" className="w-full rounded mb-6 object-cover" />
                  <button className="bg-white text-dubizzle-red w-full py-2.5 rounded font-bold text-[14px] hover:bg-gray-100 transition-colors">
                    Sell Now
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
