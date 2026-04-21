import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ListingSection({ title, url = '#', listings }) {
    const scrollRef = useRef(null)
    const [canScrollLeft, setScrollLeft] = useState(false)
    const [canScrollRight, setScrollRight] = useState(true)

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setScrollLeft(scrollLeft > 0)
            setScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
        }
    }

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -350 : 350
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
    }

    return (
        <div className="mx-auto mt-10 max-w-[1232px] px-4">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-[20px] font-bold text-black">
                    {title}
                </h2>
                <a
                    href={url}
                    className="text-[14px] font-bold text-dubizzle-gray hover:text-dubizzle-red hover:underline"
                >
                    View all →
                </a>
            </div>

            <div className="group relative">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
                >
                    {listings.map((listing, i) => (
                        <div
                            key={i}
                            className="flex w-[260px] shrink-0 snap-start flex-col overflow-hidden rounded-lg border border-[#E0E0E0] bg-white transition-shadow hover:shadow-card-hover sm:w-[240px] md:w-[260px] lg:w-[280px]"
                        >
                            <div className="relative">
                                <img
                                    src={listing.image}
                                    alt={listing.title}
                                    className="h-[180px] w-full object-cover"
                                />
                                {listing.featured && (
                                    <span className="absolute left-2 top-2 rounded bg-dubizzle-red px-1.5 py-0.5 text-[10px] font-bold text-white shadow-sm">
                                        FEATURED
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-1 flex-col p-3">
                                <div className="mb-1 text-[17px] font-bold text-dubizzle-red">
                                    {listing.price}
                                </div>
                                <h3 className="line-clamp-1 text-[14px] font-bold text-dubizzle-dark">
                                    {listing.title}
                                </h3>
                                {listing.details && (
                                    <p className="mt-1 line-clamp-1 text-[12px] text-dubizzle-gray">
                                        {listing.details}
                                    </p>
                                )}
                                <div className="mt-2 line-clamp-1 text-[12px] text-dubizzle-gray">
                                    {listing.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                {canScrollLeft && (
                    <button
                        type="button"
                        onClick={() => scroll('left')}
                        className="absolute -left-5 top-[35%] flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition-transform hover:scale-110 disabled:opacity-0"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={24} className="text-dubizzle-dark" />
                    </button>
                )}
                {canScrollRight && (
                    <button
                        type="button"
                        onClick={() => scroll('right')}
                        className="absolute -right-5 top-[35%] flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition-transform hover:scale-110 disabled:opacity-0"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={24} className="text-dubizzle-dark" />
                    </button>
                )}
            </div>
        </div>
    )
}
