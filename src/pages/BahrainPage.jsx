import ListingSection from '../components/ListingSection'
import CountryNavbar from '../components/CountryNavbar'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'

/* ─── Bahrain Cities ─── */
const bahrainCities = [
  'Capital Governorate',
  'Central Governorate',
  'Muharraq Governorate',
  'Northern Governorate',
  'Southern Governorate',
]

/* ─── Categories Data ─── */
const categoriesData = [
  {
    heading: 'Vehicles', url: '/en/vehicles/',
    items: [
      { label: 'Cars for Sale', url: '/en/vehicles/cars-for-sale/' },
      { label: 'Cars for Rent', url: '/en/vehicles/cars-for-rent/' },
      { label: 'Car Accessories', url: '/en/vehicles/car-accessories/' },
      { label: 'Motorcycles', url: '/en/vehicles/motorcycles/' },
      { label: 'Boats', url: '/en/vehicles/boats/' },
      { label: 'Trucks & buses', url: '/en/vehicles/trucks/' },
      { label: 'Other Vehicles', url: '/en/vehicles/other-vehicles/' },
      { label: 'Spare Parts', url: '/en/vehicles/spare-parts/' },
    ],
  },
  {
    heading: 'Properties', url: '/en/properties/',
    items: [
      { label: 'Properties for Rent', url: '/en/properties/properties-for-rent/' },
      { label: 'Properties for Sale', url: '/en/properties/properties-for-sale/' },
    ],
  },
  {
    heading: 'Mobiles & Tablets', url: '/en/mobile-phones-accessories/',
    items: [
      { label: 'Mobile Phones', url: '/en/mobile-phones-accessories/mobile-phones/' },
      { label: 'Mobile Accessories', url: '/en/mobile-phones-accessories/mobile-accessories/' },
    ],
  },
  {
    heading: 'Electronics & Appliances', url: '/en/electronics-home-appliances/',
    items: [
      { label: 'TV - Audio - Video', url: '/en/electronics-home-appliances/tv-audio-video/' },
      { label: 'Computers - Tablets', url: '/en/electronics-home-appliances/computers-tablets/' },
      { label: 'Video games - Consoles', url: '/en/electronics-home-appliances/video-games-and-consoles/' },
      { label: 'Cameras - Imaging', url: '/en/electronics-home-appliances/cameras-imaging/' },
      { label: 'Home Appliances', url: '/en/electronics-home-appliances/home-appliances/' },
    ],
  },
  {
    heading: 'Home & Garden', url: '/en/home-garden/',
    items: [
      { label: 'Kitchenware', url: '/en/home-garden/kitchenware/' },
      { label: 'Furniture', url: '/en/home-garden/furniture/' },
      { label: 'Decoration - Accessories', url: '/en/home-garden/decoration-accessories/' },
      { label: 'Garden - Outdoor', url: '/en/home-garden/garden-outdoor/' },
      { label: 'Other Home & Garden', url: '/en/home-garden/home-garden-other/' },
    ],
  },
  {
    heading: 'Fashion & Beauty', url: '/en/fashion-beauty/',
    items: [
      { label: 'Clothing - Accessories', url: '/en/fashion-beauty/clothing-accessories/' },
      { label: 'Jewelry - Watches', url: '/en/fashion-beauty/jewelry-watches/' },
      { label: 'Health - Beauty - Cosmetics', url: '/en/fashion-beauty/health-beauty-cosmetics/' },
    ],
  },
  {
    heading: 'Pets', url: '/en/pets/',
    items: [
      { label: 'Cats', url: '/en/pets/cats/' },
      { label: 'Dogs', url: '/en/pets/dogs/' },
      { label: 'Horses', url: '/en/pets/horses/' },
      { label: 'Fishes', url: '/en/pets/fishes/' },
      { label: 'Birds', url: '/en/pets/birds/' },
      { label: 'Other Pets', url: '/en/pets/pets-other/' },
    ],
  },
  {
    heading: 'Kids & Babies', url: '/en/kids-babies/',
    items: [
      { label: 'Clothes for Kids and Babies', url: '/en/kids-babies/clothes-for-kids-and-babies/' },
      { label: 'Toys', url: '/en/kids-babies/toys/' },
      { label: 'Cribs - Strollers', url: '/en/kids-babies/cribs-strollers/' },
      { label: 'Accessories', url: '/en/kids-babies/kids-babies-accessories/' },
      { label: 'Other Kids & Babies', url: '/en/kids-babies/kids-babies-other/' },
    ],
  },
  {
    heading: 'Sporting Goods & Bikes', url: '/en/sporting-goods-bikes/',
    items: [
      { label: 'Sporting Goods', url: '/en/sporting-goods-bikes/sporting-goods/' },
      { label: 'Bikes', url: '/en/sporting-goods-bikes/bikes/' },
      { label: 'Outdoor Equipment', url: '/en/sporting-goods-bikes/outdoor-equipment/' },
    ],
  },
  {
    heading: 'Hobbies', url: '/en/hobbies-music-art-books/',
    items: [
      { label: 'Study tools', url: '/en/hobbies-music-art-books/study-tools/' },
      { label: 'Movies - Music', url: '/en/hobbies-music-art-books/movies-music/' },
      { label: 'Musical instruments', url: '/en/hobbies-music-art-books/musical-instruments/' },
      { label: 'Books', url: '/en/hobbies-music-art-books/books/' },
      { label: 'Tickets - Vouchers', url: '/en/hobbies-music-art-books/tickets-vouchers/' },
      { label: 'Antiques - Collectibles', url: '/en/hobbies-music-art-books/antiques-collectibles/' },
      { label: 'Other items', url: '/en/hobbies-music-art-books/hobbies-music-art-books-other/' },
    ],
  },
  {
    heading: 'Jobs', url: '/en/jobs-services/',
    items: [
      { label: 'Jobs Wanted', url: '/en/jobs-services/jobs-wanted/' },
      { label: 'Accounting', url: '/en/jobs-services/accounting/' },
      { label: 'Hospitality', url: '/en/jobs-services/hospitality/' },
      { label: 'Business Development', url: '/en/jobs-services/business-development/' },
      { label: 'Marketing - PR', url: '/en/jobs-services/marketingpr/' },
      { label: 'Sales', url: '/en/jobs-services/sales/' },
      { label: 'IT - Telecom', url: '/en/jobs-services/ittelecom/' },
      { label: 'Medical - Health', url: '/en/jobs-services/medicalhealth/' },
      { label: 'Education', url: '/en/jobs-services/education/' },
      { label: 'Other', url: '/en/jobs-services/jobs-other/' },
    ],
  },
  {
    heading: 'Businesses & Industrial', url: '/en/business-industrial/',
    items: [
      { label: 'Factories Equipment', url: '/en/business-industrial/factories-equipment/' },
      { label: 'Medical Equipment', url: '/en/business-industrial/medical-equipment/' },
      { label: 'Heavy Equipment', url: '/en/business-industrial/heavy-equipment/' },
      { label: 'Restaurants Equipment', url: '/en/business-industrial/restaurants-equipment/' },
      { label: 'Other Business & Industrial', url: '/en/business-industrial/business-industrial-other/' },
    ],
  },
  {
    heading: 'Services', url: '/en/services/',
    items: [
      { label: 'Domestic Services', url: '/en/services/domestic-services/' },
      { label: 'Business Services', url: '/en/services/business-services/' },
      { label: 'Personal Services', url: '/en/services/personal-services/' },
      { label: 'Events', url: '/en/services/events/' },
      { label: 'Private Tutors', url: '/en/services/private-tutors/' },
      { label: 'Car Repairs', url: '/en/services/car-repairs/' },
      { label: 'Movers', url: '/en/services/services-movers/' },
      { label: 'Home', url: '/en/services/home/' },
      { label: 'Other Services', url: '/en/services/other-services/' },
    ],
  },
]



/* ─── Hero Banner (from real HTML) ─── */
function BahrainHero() {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-[1232px]">
        <a href="https://www.dubizzle.com.bh/" title="Sell it, Search it, Buy it" rel="noopener noreferrer" target="_blank">
          <img
            src="https://olx-bh-production.s3.eu-west-1.amazonaws.com/image/3469172/890b6212da0a4d289af89ddd4316afa4"
            alt="Dubizzle Bahrain"
            className="w-full object-cover"
            style={{ maxHeight: '200px' }}
          />
        </a>
      </div>
    </div>
  )
}

/* ─── Popular Categories Section ─── */
const categoryIcons = {
  'Vehicles': '🚗', 'Properties': '🏠', 'Mobiles & Tablets': '📱',
  'Electronics & Appliances': '💻', 'Home & Garden': '🛋️',
  'Fashion & Beauty': '👗', 'Pets': '🐾', 'Kids & Babies': '🍼',
  'Sporting Goods & Bikes': '🚴', 'Hobbies': '🎵',
  'Jobs': '💼', 'Businesses & Industrial': '🏭', 'Services': '🔧',
}

function PopularCategories() {
  return (
    <section className="bg-white py-6 border-b border-gray-200">
      <div className="mx-auto max-w-[1232px] px-4">
        <h2 className="text-[18px] font-bold text-gray-900 mb-4">Popular Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categoriesData.map(cat => (
            <div key={cat.heading}>
              <a href={cat.url} className="flex items-center gap-2 text-[13px] font-bold text-gray-800 hover:text-[#DE1F26] mb-1.5">
                <span>{categoryIcons[cat.heading] || '📦'}</span>
                <span>{cat.heading}</span>
              </a>
              <ul className="flex flex-col gap-0.5 pl-6">
                {cat.items.slice(0, 3).map(item => (
                  <li key={item.label}>
                    <a href={item.url} className="text-[12px] text-gray-600 hover:text-[#DE1F26]">{item.label}</a>
                  </li>
                ))}
                {cat.items.length > 3 && (
                  <li>
                    <a href={cat.url} className="text-[12px] text-[#DE1F26] font-medium">
                      All in {cat.heading} &rsaquo;
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Bahrain Listing Data ─── */
const propertiesSaleListings = [
  { image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80', title: '2 Bedroom Apartment in Juffair', price: 'BHD 35,000 Negotiable', details: '2 Beds · 2 Baths · 97 sqm', location: 'Juffair, Capital Governorate', featured: true },
  { image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80', title: 'Expat Leasing – Profitable Running Apartment', price: 'BHD 30,000 Negotiable', details: '1 Bed · 1 Bath · 60 sqm', location: 'Gudaibiya, Capital Governorate', featured: false },
  { image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=400&q=80', title: 'Land for Sale in Askar', price: 'BHD 120,000', details: 'Plot · 500 sqm · Prime Location', location: 'Riffa, Southern Governorate', featured: false },
  { image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80', title: 'Luxury Villa in Amwaj Islands', price: 'BHD 41,000', details: '4 Beds · 4 Baths · Sea View', location: 'Amwaj, Muharraq Governorate', featured: true },
]

const propertiesRentListings = [
  { image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80', title: 'Flat For Rent in Tubli Area – Near Exhibition Market', price: 'BHD 150', details: '1 Bed · 1 Bath · 46 sqm', location: 'Tubli, Northern Governorate', featured: true },
  { image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80', title: 'Studio Flat for Rent', price: 'BHD 120', details: '0 Beds · 1 Bath · 40 sqm', location: 'Manama, Capital Governorate', featured: false },
  { image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400&q=80', title: 'LIMITED TIME OFFER – Business Address Packages', price: 'BHD 67 Negotiable', details: 'Office · Virtual · Flexible', location: 'Manama, Capital Governorate', featured: false },
  { image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80', title: 'Cosy Studio in Sept – Juffair Area', price: 'BHD 300', details: '0 Beds · 1 Bath · Furnished', location: 'Juffair, Muharraq Governorate', featured: true },
]

const carsForSaleListings = [
  { image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=400&q=80', title: 'Maserati GRECALE GT HYBRID MY24', price: 'BHD 28,500', details: '2024 · 11000 km · Automatic', location: 'Riffa, Southern Governorate', featured: true },
  { image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80', title: 'Kia Pegasus 2025 White', price: 'BHD 4,950', details: '2025 · 350 km · Automatic', location: 'Manama, Southern Governorate', featured: false },
  { image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=400&q=80', title: 'Maserati Ghiab 2022 MY22', price: 'BHD 22,900', details: '2022 · 45000 km · Automatic', location: 'Manama, Southern Governorate', featured: false },
  { image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80', title: 'Chevrolet Tahoe LS 2025 White', price: 'BHD 21,900', details: 'New · 2025 · Automatic', location: 'Riffa, Southern Governorate', featured: true },
]

const mobilePhonesListings = [
  { image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=400&q=80', title: 'iPhone 11 pro 256 gb', price: 'BHD 91', details: 'Used · 256GB · Space Gray', location: 'Capital Governorate', featured: false },
  { image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80', title: 'Nothing 3A in excellent condition very good used', price: 'BHD 110', details: 'Used – Like New · 256GB', location: 'Capital Governorate', featured: true },
  { image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=400&q=80', title: 'Samsung tab a7 lite', price: 'BHD 30', details: 'Used · 32GB · Silver', location: 'Southern Governorate', featured: false },
  { image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80', title: 'Galaxy Tab S10 Plus Case', price: 'BHD 4', details: 'New · Siopen Tough Armor Pro', location: 'Capital Governorate', featured: false },
]

const laptopsListings = [
  { image: 'https://images.unsplash.com/photo-1588620242551-0cdef5bdfb6a?auto=format&fit=crop&w=400&q=80', title: 'MacBook Pro M3 14"', price: 'BHD 850', details: 'New · 16GB RAM · 512GB SSD', location: 'Capital Governorate', featured: true },
  { image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80', title: 'Dell Latitude 5590 i5 8th Gen', price: 'BHD 80', details: 'Used – Excellent · 8GB · 256GB', location: 'Northern Governorate', featured: false },
  { image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=400&q=80', title: 'DELL 11 7th Generation Computer Set', price: 'BHD 95', details: 'Used – Good · 16GB · 512GB', location: 'Muharraq Governorate', featured: false },
  { image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80', title: 'NEC POS System Set with Software', price: 'BHD 195', details: 'Used – Good · Complete Set', location: 'Capital Governorate', featured: true },
]

const jobsListings = [
  { image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', title: 'Senior Software Engineer', price: 'BHD 1,200 – 1,800', details: 'Full Time · IT & Telecom', location: 'Manama, Capital Governorate', featured: true },
  { image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80', title: 'Marketing Manager', price: 'BHD 800 – 1,200', details: 'Full Time · Marketing', location: 'Manama, Capital Governorate', featured: false },
  { image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', title: 'Sales Executive', price: 'BHD 500 – 900', details: 'Full Time · Sales', location: 'Riffa, Southern Governorate', featured: false },
  { image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80', title: 'Civil Engineer', price: 'BHD 900 – 1,400', details: 'Full Time · Engineering', location: 'Northern Governorate', featured: true },
]

const tvAudioListings = [
  { image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f4834a?auto=format&fit=crop&w=400&q=80', title: '55" TV Good Conditions', price: 'BHD 50', details: 'Used · 55 inch · Smart TV', location: 'Riffa, Southern Governorate', featured: false },
  { image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=400&q=80', title: '32" TV Good Working Condition With Remote', price: 'BHD 18', details: 'Used · 32 inch · LCD', location: 'Tubli, Northern Governorate', featured: false },
  { image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=400&q=80', title: 'STARGOLD LED SMART TV 43 inch', price: 'BHD 40 Negotiable', details: 'Used · 43 inch · Android TV', location: 'Riffa, Northern Governorate', featured: true },
  { image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=400&q=80', title: 'Apple Airpods Pro Original', price: 'BHD 40', details: 'Used · 2nd Gen · With Case', location: 'Sanabis, Capital Governorate', featured: false },
]

/* ─── Popular Searches ─── */
const popularSearches = [
  {
    heading: 'Properties For Sale',
    links: ['Apartments for Sale in Manama', 'Villas for Sale in Riffa', 'Land for Sale in Bahrain', 'Duplex for Sale in Juffair', 'Studio for Sale in Manama', 'Townhouse for Sale in Bahrain'],
  },
  {
    heading: 'Properties For Rent',
    links: ['Apartments for Rent in Manama', 'Studios for Rent in Juffair', 'Villas for Rent in Riffa', 'Rooms for Rent in Bahrain', 'Offices for Rent in Manama', 'Furnished Flats for Rent'],
  },
  {
    heading: 'Cars For Sale',
    links: ['Used Cars in Bahrain', 'Toyota for Sale in Bahrain', 'Hyundai for Sale in Bahrain', 'Kia for Sale in Bahrain', 'BMW for Sale in Bahrain', 'Mercedes for Sale in Bahrain'],
  },
  {
    heading: 'Jobs',
    links: ['IT Jobs in Bahrain', 'Sales Jobs in Manama', 'Engineering Jobs in Bahrain', 'Marketing Jobs in Bahrain', 'Customer Service Jobs', 'Part-Time Jobs in Bahrain'],
  },
]

const popularBrands = [
  { heading: 'Car Brands', links: ['Toyota', 'Hyundai', 'Kia', 'BMW', 'Mercedes', 'Nissan', 'Mitsubishi', 'Honda'] },
  { heading: 'Phone Brands', links: ['Apple iPhone', 'Samsung', 'Xiaomi', 'OPPO', 'Huawei', 'Realme', 'vivo', 'Honor'] },
]

function PopularSearches() {
  return (
    <section className="bg-white py-10 border-t border-gray-200">
      <div className="mx-auto max-w-[1232px] px-4">
        <h2 className="mb-6 text-[20px] font-bold text-gray-900">Popular Searches</h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {popularSearches.map(col => (
            <div key={col.heading}>
              <h3 className="mb-3 text-[13px] font-bold text-gray-700 uppercase tracking-wide">{col.heading}</h3>
              <ul className="flex flex-col gap-1.5">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-[#146AA8] hover:underline hover:text-[#DE1F26] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-gray-100">
          <h2 className="mb-5 text-[20px] font-bold text-gray-900">Popular Brands</h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {popularBrands.map(col => (
              <div key={col.heading}>
                <h3 className="mb-3 text-[13px] font-bold text-gray-700 uppercase tracking-wide">{col.heading}</h3>
                <ul className="flex flex-col gap-1.5">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-[13px] text-[#146AA8] hover:underline hover:text-[#DE1F26] transition-colors">{link}</a>
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
export default function BahrainPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans">
      {/* Custom navbar — Bahrain only, does NOT affect other pages */}
      <CountryNavbar country="Bahrain" cities={bahrainCities} categoriesData={categoriesData} homeHref="/bahrain" />

      {/* Hero Banner */}
      <BahrainHero />

      {/* Popular Categories */}
      <PopularCategories />

      {/* Listings */}
      <main className="pb-8 pt-4">
        <ListingSection title="Properties for Sale" listings={propertiesSaleListings} url="/en/properties/properties-for-sale/" />
        <ListingSection title="Properties for Rent" listings={propertiesRentListings} url="/en/properties/properties-for-rent/" />
        <ListingSection title="Cars for Sale" listings={carsForSaleListings} url="/en/vehicles/cars-for-sale/" />
        <ListingSection title="Mobile Phones" listings={mobilePhonesListings} url="/en/mobile-phones-accessories/mobile-phones/" />
        <ListingSection title="Laptops & Computers" listings={laptopsListings} url="/en/electronics-home-appliances/computers-tablets/" />
        <ListingSection title="Jobs" listings={jobsListings} url="/en/jobs-services/" />
        <ListingSection title="TV - Audio - Video" listings={tvAudioListings} url="/en/electronics-home-appliances/tv-audio-video/" />
      </main>

      <PopularSearches />
      <AppDownload />
      {/* Shared Footer — unchanged */}
      <Footer />
    </div>
  )
}