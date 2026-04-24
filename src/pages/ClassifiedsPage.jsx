import { Search, BadgeCheck } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AppDownload from '../components/AppDownload'
import ListingSection from '../components/ListingSection'
import { getProductsByCategory, mockProducts } from '../data/mockProducts'

const statsCategories = [
  { label: 'FURNITURE, HOME & GARDEN', count: '74,483' },
  { label: 'HOME APPLIANCES', count: '21,874' },
  { label: 'MOBILE PHONES & TABLETS', count: '10,591' },
  { label: 'SPORTS EQUIPMENT', count: '9,775' },
  { label: 'ELECTRONICS', count: '8,007' },
  { label: 'COMPUTERS & NETWORKING', count: '6,607' },
]

export default function ClassifiedsPage() {
  // Mix classifieds, furniture, mobiles for the featured listings
  const featuredListings = mockProducts.filter(p => 
    p.category === 'classifieds' || p.category === 'furniture' || p.category === 'mobiles'
  ).slice(0, 5)

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-dubizzle-dark">
      <Navbar city="Dubai" />

      {/* Hero Section */}
      <div className="max-w-[1232px] mx-auto px-4 pt-6 pb-4">
        <div className="relative w-full h-[320px] rounded-2xl overflow-hidden bg-[#2D5A27] flex items-center justify-center">
          {/* Background Image: Green Sofa */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-90 mix-blend-overlay"></div>
          
          <div className="relative z-10 w-full max-w-[700px] px-4 flex flex-col items-center">
            <h1 className="text-white text-[32px] sm:text-[40px] font-bold text-center mb-8 drop-shadow-md leading-tight">
              Your favorite place for great deals on secondhand items
            </h1>
            
            <div className="w-full relative">
              <input 
                type="text" 
                placeholder="Search for classifieds" 
                className="w-full bg-white rounded py-4 pl-6 pr-12 text-[15px] outline-none shadow-lg placeholder:text-gray-400"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-dubizzle-red transition-colors">
                <Search size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories / Stats Row */}
      <div className="max-w-[1232px] mx-auto px-4 pb-8">
        <div className="flex flex-nowrap overflow-x-auto gap-3 pb-2 scrollbar-hide">
          {statsCategories.map((cat, i) => (
            <div key={i} className="flex-1 min-w-[180px] bg-white rounded-lg p-5 flex flex-col items-center justify-center border border-[#e0e0e0] shadow-sm cursor-pointer hover:border-[#1a73e8] hover:shadow-md transition-all">
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 text-center mb-3 uppercase leading-tight h-8 flex items-center">{cat.label}</span>
              <span className="text-[22px] sm:text-[26px] font-medium text-[#222]">{cat.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Badge Banner */}
      <div className="max-w-[1232px] mx-auto px-4 pb-12">
        <div className="bg-[#e8f0fe] rounded-lg border border-[#d2e3fc] p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full scale-75"></div>
              <BadgeCheck size={48} className="text-[#1a73e8] relative z-10" strokeWidth={1.5} />
              {/* Decorative lines around badge as in image */}
              <div className="absolute -inset-2 border border-blue-200 rounded-full animate-ping opacity-20"></div>
            </div>
            <div>
              <span className="font-bold text-[15px] text-[#222] mr-2">Got a verified badge yet?</span>
              <span className="text-[13px] text-gray-500 hidden sm:inline">Get more visibility | Enhance your credibility</span>
            </div>
          </div>
          <button className="bg-white text-[#222] border border-gray-300 px-6 py-2 rounded font-bold text-[14px] hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap">
            Get Started
          </button>
        </div>
      </div>

      {/* Featured Listings */}
      <div className="pb-10 -mt-4">
        <ListingSection 
          title="Featured Listings" 
          listings={featuredListings} 
          url="/classifieds" 
        />
      </div>

      <AppDownload />
      <Footer />
    </div>
  )
}
