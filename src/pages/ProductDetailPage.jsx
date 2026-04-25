import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Heart, Share2, MapPin, Clock, Eye, Phone, MessageCircle, ChevronDown, Check, Flag, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ListingSection from '../components/ListingSection'
import { getProductById, getProductsByCategory } from '../data/mockProducts'

function Breadcrumbs({ product }) {
  return (
    <div className="flex items-center gap-2 text-[12px] text-dubizzle-gray py-4">
      <Link to="/" className="hover:text-dubizzle-dark">Home</Link>
      <ChevronRight size={14} />
      <Link to={`/${product.category}`} className="hover:text-dubizzle-dark capitalize">
        {product.category.replace('-', ' ')}
      </Link>
      <ChevronRight size={14} />
      <span className="text-dubizzle-dark font-semibold truncate max-w-[200px]">
        {product.title}
      </span>
    </div>
  )
}

function ImageGallery({ images }) {
  const mainImage = images[0]
  const sideImage1 = images[1] || images[0]
  const sideImage2 = images[2] || images[0]

  return (
    <div className="flex gap-2 h-[300px] sm:h-[400px] lg:h-[480px] mb-6 rounded-lg overflow-hidden">
      <div className="flex-1 relative bg-gray-100 cursor-pointer group">
        <img src={mainImage} alt="Main" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
      </div>
      <div className="hidden sm:flex flex-col gap-2 w-[25%] shrink-0">
        <div className="flex-1 relative bg-gray-100 cursor-pointer group overflow-hidden">
          <img src={sideImage1} alt="Side 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
        </div>
        <div className="flex-1 relative bg-gray-100 cursor-pointer group overflow-hidden">
          <img src={sideImage2} alt="Side 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
          {images.length > 3 && (
            <div className="absolute inset-0 bg-black/40 flex items-end justify-end p-3">
              <span className="text-white text-[14px] font-bold">+{images.length - 3}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function OverviewTable({ overview }) {
  if (!overview) return null
  const keys = Object.keys(overview)
  return (
    <div className="mb-8">
      <h2 className="text-[18px] font-bold text-dubizzle-dark mb-4">Overview</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 text-[14px]">
        {keys.map((key) => (
          <div key={key} className="flex flex-col">
            <span className="text-dubizzle-gray mb-1">{key}</span>
            <span className="font-bold text-[#222]">{overview[key]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function FeaturesList({ features }) {
  if (!features) return null
  const categories = Object.keys(features)
  return (
    <div className="mb-8">
      <h2 className="text-[18px] font-bold text-dubizzle-dark mb-4">Features</h2>
      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <details key={category} className="group border-b border-gray-200 pb-3" open>
            <summary className="flex cursor-pointer items-center justify-between font-bold text-[#222] text-[15px] list-none">
              {category}
              <ChevronDown size={18} className="text-gray-400 transition-transform group-open:rotate-180" />
            </summary>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mt-4 text-[14px] text-[#4b4b4b]">
              {features[category].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Check size={16} className="text-green-600 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}

function FinanceCalculator({ priceStr }) {
  const priceNum = parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 100000
  const monthly = Math.round((priceNum * 0.8 * 1.05) / 60) // Rough 5yr calc with 20% down
  
  return (
    <div className="mb-8 p-6 bg-[#f7f7f7] rounded-lg">
      <h2 className="text-[18px] font-bold text-dubizzle-dark mb-4">Our Finance Calculator</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <div className="flex justify-between text-[13px] mb-1">
              <span className="text-[#888]">Car Price</span>
              <span className="font-bold">AED {priceNum.toLocaleString()}</span>
            </div>
            <input type="range" className="w-full h-1 bg-gray-300 rounded appearance-none" readOnly value="100" />
          </div>
          <div>
            <div className="flex justify-between text-[13px] mb-1">
              <span className="text-[#888]">Down Payment (20%)</span>
              <span className="font-bold">AED {(priceNum * 0.2).toLocaleString()}</span>
            </div>
            <input type="range" className="w-full h-1 bg-dubizzle-red rounded appearance-none" readOnly value="20" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-[13px] text-[#888] block mb-1">Interest Rate</label>
              <div className="px-3 py-2 bg-white border border-gray-300 rounded font-bold text-[14px]">4.99%</div>
            </div>
            <div className="flex-1">
              <label className="text-[13px] text-[#888] block mb-1">Loan Period</label>
              <div className="px-3 py-2 bg-white border border-gray-300 rounded font-bold text-[14px]">60 Months</div>
            </div>
          </div>
        </div>
        <div className="w-[240px] shrink-0 bg-white p-5 rounded border border-gray-200 flex flex-col items-center justify-center text-center shadow-sm">
          <div className="text-[13px] text-[#888] mb-1">Estimated Monthly Payment</div>
          <div className="text-[28px] font-bold text-[#222] mb-4">AED {monthly.toLocaleString()}</div>
          <button className="w-full py-2.5 bg-[#222] text-white rounded font-bold text-[14px] hover:bg-black transition-colors">
            Apply for Finance
          </button>
        </div>
      </div>
    </div>
  )
}

function SellerCard({ seller }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 sticky top-[100px]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center overflow-hidden shrink-0">
          {/* Mock seller logo */}
          <div className="w-8 h-8 bg-[#222] rounded flex items-center justify-center text-white font-bold text-[12px]">
            {seller?.name.substring(0, 2).toUpperCase() || 'DL'}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-[15px] text-[#222] leading-tight flex items-center gap-1">
            {seller?.name || 'Private Seller'}
            {seller?.verified && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#00A39B">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L20 8l-9 9z"/>
              </svg>
            )}
          </h3>
          <p className="text-[12px] text-dubizzle-gray">View All Ads</p>
        </div>
      </div>
      <button className="w-full mb-2 bg-dubizzle-red text-white py-2.5 rounded font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-red-700 transition-colors">
        <Phone size={18} /> Show Phone Number
      </button>
      <button className="w-full bg-white text-[#222] border border-gray-300 py-2.5 rounded font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
        <MessageCircle size={18} /> Chat with Seller
      </button>
      
      <div className="mt-4 pt-4 border-t border-gray-100 text-center">
        <button className="text-[#888] text-[12px] flex items-center justify-center gap-1 mx-auto hover:text-[#4b4b4b]">
          <Flag size={14} /> Report this ad
        </button>
      </div>
    </div>
  )
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetch
    window.scrollTo(0, 0)
    const data = getProductById(id)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProduct(data)
    setLoading(false)
  }, [id])

  if (loading) return <div className="min-h-screen bg-[#F5F5F5]"></div>
  if (!product) return <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center"><h1 className="text-2xl font-bold">Product not found</h1></div>

  // Generate similar items by passing same category string
  const similarItems = getProductsByCategory(product.category.substring(0, 3)).filter(p => p.id !== product.id).slice(0, 5)

  return (
    <div className="min-h-screen bg-white font-sans text-dubizzle-dark">
      <Navbar city={product.location.split(',').pop().trim() || 'Dubai'} />
      
      <div className="max-w-[1232px] mx-auto px-4 pb-16">
        <Breadcrumbs product={product} />
        
        <ImageGallery images={product.images || [product.image]} />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Info Column */}
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="text-[28px] font-bold text-[#222] mb-1">{product.price}</div>
                <h1 className="text-[22px] font-bold text-[#4b4b4b] mb-4 leading-tight">{product.title}</h1>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                  <Heart size={20} />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-dubizzle-gray mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-1.5"><MapPin size={16} /> {product.location}</div>
              <div className="flex items-center gap-1.5"><Clock size={16} /> Posted {product.timePosted || 'recently'}</div>
              <div className="flex items-center gap-1.5"><Eye size={16} /> {product.views || 42} views</div>
            </div>

            <OverviewTable overview={product.overview} />
            
            {product.description && (
              <div className="mb-8">
                <h2 className="text-[18px] font-bold text-dubizzle-dark mb-4">Description</h2>
                <div className="text-[15px] text-[#4b4b4b] leading-relaxed whitespace-pre-line">
                  {product.description}
                </div>
              </div>
            )}

            <FeaturesList features={product.features} />

            {/* Render Finance Calculator only for Motors */}
            {product.category === 'motors' && (
              <FinanceCalculator priceStr={product.price} />
            )}

            {/* Map Placeholder */}
            <div className="mb-10">
              <h2 className="text-[18px] font-bold text-dubizzle-dark mb-4">Location</h2>
              <div className="w-full h-[200px] bg-[#f0f4f8] rounded-lg border border-gray-200 flex flex-col items-center justify-center text-gray-400 relative overflow-hidden">
                {/* Fake map pattern */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="bg-white px-4 py-2 rounded-full shadow-md z-10 flex items-center gap-2 font-bold text-[14px] text-[#1a73e8]">
                  <MapPin size={18} /> Show Map
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[320px] shrink-0">
            <SellerCard seller={product.seller} />
          </div>
        </div>
        
        {/* Similar Items */}
        {similarItems.length > 0 && (
          <div className="mt-12 pt-12 border-t border-gray-200">
            <ListingSection 
              title="Similar Ads" 
              listings={similarItems} 
              url={`/${product.category}`} 
            />
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
