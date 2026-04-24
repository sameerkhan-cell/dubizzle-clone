import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function VerticalListingCard({ listing, urlPrefix }) {
  return (
    <Link to={`/item/${listing.id}`} className="block">
      <div className="flex bg-white border border-[#e5e5e5] rounded overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
        {/* Left Image */}
        <div className="w-[180px] h-[140px] sm:h-[160px] shrink-0 bg-gray-100 relative">
          <img 
            src={listing.image} 
            alt={listing.title} 
            className="w-full h-full object-cover" 
          />
          {listing.featured && (
            <div className="absolute top-2 left-2 bg-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded">
              FEATURED
            </div>
          )}
          {listing.images && listing.images.length > 1 && (
            <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[11px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              {listing.images.length}
            </div>
          )}
        </div>

        {/* Right Content */}
        <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between relative">
          {/* Heart Icon */}
          <button className="absolute top-3 right-3 text-gray-400 hover:text-dubizzle-red" onClick={(e) => e.preventDefault()}>
            <Heart size={20} />
          </button>

          <div>
            <h3 className="font-bold text-[16px] sm:text-[18px] text-[#222] line-clamp-1 pr-8 mb-1">{listing.price}</h3>
            <h4 className="text-[14px] sm:text-[15px] text-[#222] font-semibold line-clamp-1 mb-1">{listing.title}</h4>
            <p className="text-[12px] sm:text-[13px] text-gray-500 line-clamp-1">{listing.details}</p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-[12px] text-gray-400">{listing.location}</span>
            <span className="text-[11px] text-gray-400">{listing.timePosted || 'just now'}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
