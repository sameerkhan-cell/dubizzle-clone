import { useState } from 'react'
import { ChevronRight, ChevronLeft, Search, Play, Maximize } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ListingSection from '../components/ListingSection'
import { getProductsByCategory } from '../data/mockProducts'

const popularCategories = [
  { title: 'Commercial for Rent', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80' },
  { title: 'Daily Short Term for Rent', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80' },
  { title: 'Apartment for Rent', image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=400&q=80' },
  { title: 'Villa for Rent', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80' },
  { title: 'Rooms for Rent', image: 'https://images.unsplash.com/photo-1522771731478-44474de7ce36?auto=format&fit=crop&w=400&q=80' },
]

export default function PropertyPage() {
  const [activeMainTab, setActiveMainTab] = useState('Rent')
  const [activeSubTab, setActiveSubTab] = useState('Residential')

  const featuredRentListings = getProductsByCategory('rent')

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-dubizzle-dark">
      <Navbar city="Dubai" />

      {/* Hero Search Area */}
      <div className="bg-dubizzle-red pb-10 pt-16 relative overflow-hidden">
        {/* Abstract shapes/images in background as shown in screenshot */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-50 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80')] bg-cover mix-blend-multiply"></div>
        <div className="absolute top-0 left-0 w-1/4 h-full opacity-50 bg-[url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80')] bg-cover mix-blend-multiply"></div>
        
        <div className="max-w-[1232px] mx-auto px-4 relative z-10">
          <h1 className="text-white text-[32px] sm:text-[40px] font-bold text-center mb-6">
            Everyone is on dubizzle
          </h1>

          <div className="max-w-[960px] mx-auto">
            {/* Main Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {['Sale', 'Rent', 'Off-Plan', 'New Projects', 'TruEstimate™'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveMainTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-[14px] font-bold transition-colors ${
                    activeMainTab === tab 
                      ? 'bg-white text-dubizzle-dark' 
                      : 'bg-[#1a1a1a] text-white hover:bg-gray-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="bg-[#1a1a1a] rounded-lg p-2 sm:p-4">
              {/* Sub Tabs */}
              <div className="flex flex-wrap gap-2 mb-4">
                {['Residential', 'Commercial', 'Rooms For Rent', 'Monthly Short Term', 'Daily Short Term'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveSubTab(tab)}
                    className={`px-4 py-2 rounded text-[13px] font-bold transition-colors ${
                      activeSubTab === tab 
                        ? 'bg-white text-dubizzle-dark' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Inputs */}
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex flex-1 bg-white rounded overflow-hidden">
                  <div className="w-[120px] shrink-0 border-r border-gray-200">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase px-3 pt-1.5">City</label>
                    <select className="w-full px-2 pb-1.5 text-[14px] font-bold text-dubizzle-dark outline-none cursor-pointer">
                      <option>Dubai</option>
                      <option>Abu Dhabi</option>
                      <option>Sharjah</option>
                    </select>
                  </div>
                  <div className="flex-1 px-3 py-1.5">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase">Location</label>
                    <input 
                      type="text" 
                      placeholder="Enter Neighborhood or Building" 
                      className="w-full text-[14px] outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="w-full md:w-[200px] shrink-0 bg-white rounded overflow-hidden px-3 py-1.5">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase">Property Type</label>
                  <select className="w-full text-[14px] font-bold text-dubizzle-dark outline-none cursor-pointer">
                    <option>All in Residential</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                  </select>
                </div>

                <div className="w-full md:w-[140px] shrink-0 bg-white rounded overflow-hidden px-3 py-1.5">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase">Price Range</label>
                  <select className="w-full text-[14px] font-bold text-dubizzle-dark outline-none cursor-pointer">
                    <option>Any</option>
                    <option>Up to 50k</option>
                    <option>50k - 100k</option>
                  </select>
                </div>

                <div className="w-full md:w-[100px] shrink-0 bg-white rounded overflow-hidden px-3 py-1.5">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase">Beds</label>
                  <select className="w-full text-[14px] font-bold text-dubizzle-dark outline-none cursor-pointer">
                    <option>Any</option>
                    <option>Studio</option>
                    <option>1 Bed</option>
                    <option>2 Beds</option>
                  </select>
                </div>

                <button className="bg-dubizzle-red text-white w-full md:w-[120px] shrink-0 rounded font-bold text-[14px] flex items-center justify-center hover:bg-red-700 transition-colors py-3 md:py-0">
                  Search
                </button>
              </div>

              <div className="mt-3 text-right">
                <button className="text-white text-[12px] hover:underline font-semibold">
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1232px] mx-auto px-4 py-8 flex flex-col gap-6">
        
        {/* Banner: TruEstimate */}
        <div className="bg-[#FEF5F5] border border-red-100 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 cursor-pointer hover:shadow-sm transition-shadow">
          <div className="flex items-center gap-6">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=150&q=80" alt="Chart" className="w-[80px] object-cover rounded mix-blend-multiply" />
            <div>
              <h2 className="text-[20px] font-bold text-[#222]">Know Your Property Value Instantly with TruEstimate™</h2>
              <p className="text-[14px] text-gray-600">Generate a TruEstimate™ report with reliable property valuations and insights.</p>
            </div>
          </div>
          <button className="bg-dubizzle-red text-white px-6 py-2.5 rounded font-bold text-[14px] flex items-center gap-2 whitespace-nowrap hover:bg-red-700 transition-colors">
            Get Your TruEstimate™ <ChevronRight size={16} />
          </button>
        </div>

        {/* Banner: Sell or Rent */}
        <div className="bg-[#FFF8E7] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 cursor-pointer hover:shadow-sm transition-shadow">
          <div className="flex items-center gap-6">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=150&q=80" alt="House" className="w-[120px] h-[70px] object-cover rounded" />
            <div>
              <h2 className="text-[20px] font-bold text-[#222]">Looking to sell or rent your home?</h2>
              <p className="text-[14px] text-gray-600">Reach more buyers or renters through an expert agent.</p>
            </div>
          </div>
          <button className="bg-white text-[#222] border border-gray-300 px-6 py-2.5 rounded font-bold text-[14px] flex items-center gap-2 whitespace-nowrap hover:bg-gray-50 transition-colors">
            Get started now <ChevronRight size={16} />
          </button>
        </div>

        {/* Dual Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F0F8FF] rounded-lg p-6 flex items-center justify-between cursor-pointer hover:shadow-sm transition-shadow">
            <div>
              <h3 className="text-[18px] font-bold text-[#222] mb-1">Introducing New Projects</h3>
              <p className="text-[13px] text-gray-600 mb-4">Get access to the latest property developments</p>
              <button className="bg-white text-[#222] border border-gray-300 px-4 py-1.5 rounded font-bold text-[13px] flex items-center gap-1 hover:bg-gray-50 transition-colors">
                Explore Now <ChevronRight size={14} />
              </button>
            </div>
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=150&q=80" alt="Buildings" className="w-[100px] h-[80px] object-cover rounded mix-blend-multiply" />
          </div>
          
          <div className="bg-[#F4FAFC] rounded-lg p-6 flex items-center justify-between cursor-pointer hover:shadow-sm transition-shadow">
            <div>
              <h3 className="text-[18px] font-bold text-[#222] mb-1">Discover Agents and Agencies!</h3>
              <p className="text-[13px] text-gray-600 mb-4">Connect with our partners to find your ideal home!</p>
              <button className="bg-white text-[#222] border border-gray-300 px-4 py-1.5 rounded font-bold text-[13px] flex items-center gap-1 hover:bg-gray-50 transition-colors">
                Browse Now <ChevronRight size={14} />
              </button>
            </div>
            <div className="flex gap-2">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=80&q=80" alt="Agent" className="w-[50px] h-[60px] object-cover rounded" />
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80" alt="Agent" className="w-[50px] h-[60px] object-cover rounded" />
            </div>
          </div>
        </div>

        {/* Virtual Viewing Banner */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 relative overflow-hidden flex flex-col md:flex-row items-center justify-between mt-4">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80')] bg-cover opacity-60"></div>
          <div className="relative z-10 w-full">
            <h2 className="text-[18px] font-bold text-[#222] mb-1">Virtual Viewing</h2>
            <p className="text-[14px] text-gray-600 mb-4">Explore properties with interactive tours from your home</p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-dubizzle-red font-bold text-[14px] hover:underline">
                <Play size={16} fill="currentColor" /> View listings with Videos →
              </button>
              <button className="flex items-center gap-2 text-dubizzle-red font-bold text-[14px] hover:underline">
                <Maximize size={16} /> View listings with 360 views →
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Popular Categories */}
      <div className="max-w-[1232px] mx-auto px-4 py-8">
        <h2 className="text-[22px] font-bold text-[#222] mb-6">Popular Categories</h2>
        <div className="relative group">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
            {popularCategories.map((cat, i) => (
              <div key={i} className="relative w-[220px] h-[160px] shrink-0 snap-start rounded-lg overflow-hidden cursor-pointer group/card">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-[16px] leading-tight">{cat.title}</h3>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll Buttons */}
          <button className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronLeft size={24} className="text-[#222]" />
          </button>
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight size={24} className="text-[#222]" />
          </button>
        </div>
      </div>

      {/* Popular Areas in Dubai (Masonry Grid) */}
      <div className="max-w-[1232px] mx-auto px-4 py-8">
        <h2 className="text-[22px] font-bold text-[#222] mb-6">Popular Areas in Dubai</h2>
        
        {/* CSS Grid layout for 5 columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 h-auto md:h-[400px]">
          
          {/* Col 1: Tall */}
          <div className="col-span-2 md:col-span-1 md:row-span-2 relative rounded-lg overflow-hidden group cursor-pointer h-[200px] md:h-full">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80" alt="Downtown Dubai" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-[18px]">Downtown Dubai</h3>
              <p className="text-white/80 text-[12px] line-clamp-2">Home to the world's tallest tower and biggest mall.</p>
            </div>
          </div>

          {/* Col 2 */}
          <div className="relative rounded-lg overflow-hidden group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1582647509711-c8aa8a8bdef3?auto=format&fit=crop&w=400&q=80" alt="The Palm Jumeirah" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-[16px] leading-tight">The Palm Jumeirah</h3>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden group cursor-pointer md:col-start-2 md:row-start-2">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80" alt="Dubai Marina" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-[16px] leading-tight">Dubai Marina</h3>
            </div>
          </div>

          {/* Col 3 */}
          <div className="relative rounded-lg overflow-hidden group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=400&q=80" alt="Business Bay" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-[16px] leading-tight">Business Bay</h3>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden group cursor-pointer md:col-start-3 md:row-start-2">
            <img src="https://images.unsplash.com/photo-1580137189272-c9379f8864fd?auto=format&fit=crop&w=400&q=80" alt="International City" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-[16px] leading-tight">International City</h3>
            </div>
          </div>

          {/* Col 4 */}
          <div className="relative rounded-lg overflow-hidden group cursor-pointer hidden md:block">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" alt="Dubai Silicon Oasis" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-[16px] leading-tight">Dubai Silicon Oasis</h3>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden group cursor-pointer hidden md:block md:col-start-4 md:row-start-2">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80" alt="Jumeirah Beach Residence" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-[16px] leading-tight">Jumeirah Beach Residence</h3>
            </div>
          </div>

          {/* Col 5 */}
          <div className="relative rounded-lg overflow-hidden group cursor-pointer hidden md:block">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80" alt="JLT Jumeirah Lake Towers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-[16px] leading-tight">JLT Jumeirah Lake Towers</h3>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden group cursor-pointer hidden md:block md:col-start-5 md:row-start-2">
            <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=400&q=80" alt="Arabian Ranches" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-[16px] leading-tight">Arabian Ranches</h3>
            </div>
          </div>

        </div>
      </div>

      {/* Featured Properties */}
      <div className="pb-16 -mt-8">
        {/* We use ListingSection but override the View All text to be red like screenshot */}
        <ListingSection 
          title="Featured Properties" 
          listings={featuredRentListings} 
          url="/property-for-rent" 
        />
      </div>

      {/* SEO Links Area */}
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-[1232px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-[14px] text-[#222] mb-4">Apartments for rent</h4>
            <ul className="flex flex-col gap-2 text-[13px] text-gray-500">
              <li className="hover:text-dubizzle-red cursor-pointer">Apartments for rent in Dubai Marina</li>
              <li className="hover:text-dubizzle-red cursor-pointer">Apartments for rent in Downtown Dubai</li>
              <li className="hover:text-dubizzle-red cursor-pointer">Apartments for rent in The Palm Jumeirah</li>
              <li className="hover:text-dubizzle-red cursor-pointer">Apartments for rent in Business Bay</li>
              <li className="hover:text-dubizzle-red cursor-pointer">Apartments for rent in Dubai Silicon Oasis</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[14px] text-[#222] mb-4">Villas for rent</h4>
            <ul className="flex flex-col gap-2 text-[13px] text-gray-500">
              <li className="hover:text-dubizzle-red cursor-pointer">Villas for rent in Dubai Marina</li>
              <li className="hover:text-dubizzle-red cursor-pointer">Villas for rent in Downtown Dubai</li>
              <li className="hover:text-dubizzle-red cursor-pointer">Villas for rent in The Palm Jumeirah</li>
              <li className="hover:text-dubizzle-red cursor-pointer">Villas for rent in Business Bay</li>
              <li className="hover:text-dubizzle-red cursor-pointer">Villas for rent in Dubai Silicon Oasis</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[14px] text-[#222] mb-4">Commercial buildings for rent</h4>
            <ul className="flex flex-col gap-2 text-[13px] text-gray-500">
              <li className="hover:text-dubizzle-red cursor-pointer">Commercial buildings for rent in Business Bay</li>
              <li className="hover:text-dubizzle-red cursor-pointer">Commercial buildings for rent in JLT</li>
              <li className="hover:text-dubizzle-red cursor-pointer">Commercial buildings for rent in Barsha Heights</li>
              <li className="hover:text-dubizzle-red cursor-pointer">Commercial buildings for rent in Dubai Silicon Oasis</li>
              <li className="hover:text-dubizzle-red cursor-pointer">Commercial buildings for rent in Downtown Dubai</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[14px] text-[#222] mb-4">Rooms for rent</h4>
            <ul className="flex flex-col gap-2 text-[13px] text-gray-500">
              <li className="hover:text-dubizzle-red cursor-pointer">Rooms for rent in Bur Dubai</li>
              <li className="hover:text-dubizzle-red cursor-pointer">Rooms for rent in Deira</li>
              <li className="hover:text-dubizzle-red cursor-pointer">Rooms for rent in Dubai Marina</li>
              <li className="hover:text-dubizzle-red cursor-pointer">Rooms for rent in Al Barsha</li>
              <li className="hover:text-dubizzle-red cursor-pointer">Rooms for rent in Karama</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
