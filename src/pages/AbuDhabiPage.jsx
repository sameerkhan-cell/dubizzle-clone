import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PromoBanners from '../components/PromoBanners'
import Categories from '../components/Categories'
import ListingSection from '../components/ListingSection'
import VerifiedBanner from '../components/VerifiedBanner'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'

/* ─── Abu Dhabi Listing Data ─── */

const residentialRentListings = [
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
    title: '3 Bed 4 Bath Apartment',
    price: 'AED 200,000',
    details: '3 Beds · 4 Baths',
    location: 'The Pulse Beachfront, Yas Island',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80',
    title: '3 Bed 4 Bath Apartment',
    price: 'AED 110,000',
    details: '3 Beds · 4 Baths',
    location: 'Hamdan Street, Abu Dhabi',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80',
    title: '3 Bed 4 Bath Apartment',
    price: 'AED 500,000',
    details: '3 Beds · 4 Baths',
    location: 'Azure, Mansha Al Saadiyat',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
    title: '3 Bed 4 Bath Apartment',
    price: 'AED 157,000',
    details: '3 Beds · 4 Baths',
    location: 'Etihad Towers, Corniche Road',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
    title: '6 Bed 8 Bath Villa',
    price: 'AED 240,000',
    details: '6 Beds · 8 Baths',
    location: 'Mohamed Bin Zayed City',
    featured: false,
  },
]

const carListings = [
  {
    image: 'https://images.unsplash.com/photo-1503377211516-79ef88fb03b3?auto=format&fit=crop&w=400&q=80',
    title: 'Nissan Sunny SV 2019',
    price: 'AED 48,000',
    details: '2019 · 60,000 km',
    location: 'Abu Dhabi',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=400&q=80',
    title: 'Volkswagen T-Roc Life 2024',
    price: 'AED 62,800',
    details: '2024 · 20,324 km',
    location: 'Abu Dhabi',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80',
    title: 'Chevrolet Tahoe LS 2022',
    price: 'AED 68,000',
    details: '2022 · 0 km',
    location: 'Abu Dhabi',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80',
    title: 'Kia Sportage EX 2022',
    price: 'AED 58,999',
    details: '2022 · 30,000 km',
    location: 'Abu Dhabi',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=400&q=80',
    title: 'Ford Territory Trend 2023',
    price: 'AED 76,500',
    details: '2023 · 57,000 km',
    location: 'Abu Dhabi',
    featured: false,
  },
]

const furnitureListings = [
  {
    image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=400&q=80',
    title: 'Modern L-Shape Sofa Set',
    price: 'AED 2,500',
    details: 'New - Living Room',
    location: 'Khalifa City',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=400&q=80',
    title: 'Wooden Dining Table 8 Seater',
    price: 'AED 800',
    details: 'Used - Dining Room',
    location: 'Abu Dhabi',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=80',
    title: 'King Size Bed Frame',
    price: 'AED 1,200',
    details: 'Used - Bedroom',
    location: 'Mussafah',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=400&q=80',
    title: 'Office Desk Ergonomic',
    price: 'AED 350',
    details: 'Used - Office Furniture',
    location: 'Al Nahyan',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
    title: 'Full Bedroom Set 5 Pieces',
    price: 'AED 1,850',
    details: 'New - Bedroom Set',
    location: 'Hamdan Street',
    featured: false,
  },
]

const residentialSaleListings = [
  {
    image: 'https://images.unsplash.com/photo-1613490906263-ceb13ff781fd?auto=format&fit=crop&w=400&q=80',
    title: '2 Bed Apartment Al Reem',
    price: 'AED 1,250,000',
    details: '2 Beds · 2 Baths',
    location: 'Al Reem Island',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80',
    title: '3 Bed Villa Yas Acres',
    price: 'AED 2,500,000',
    details: '3 Beds · 3 Baths',
    location: 'Yas Island',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
    title: '4 Bed Penthouse Saadiyat',
    price: 'AED 4,100,000',
    details: '4 Beds · 5 Baths',
    location: 'Saadiyat Island',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80',
    title: '5 Bed Villa Al Raha Gardens',
    price: 'AED 5,460,000',
    details: '5 Beds · 6 Baths',
    location: 'Al Raha Gardens',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80',
    title: 'Studio Apartment Al Ghadeer',
    price: 'AED 380,000',
    details: 'Studio · 1 Bath',
    location: 'Al Ghadeer',
    featured: false,
  },
]

const computersListings = [
  {
    image: 'https://images.unsplash.com/photo-1588620242551-0cdef5bdfb6a?auto=format&fit=crop&w=400&q=80',
    title: 'MacBook Pro 14 M3 Pro',
    price: 'AED 3,200',
    details: 'Used - Excellent Condition',
    location: 'Abu Dhabi',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80',
    title: 'Gaming PC RTX 4060',
    price: 'AED 1,200',
    details: 'Used - Good condition',
    location: 'Khalifa City',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80',
    title: 'Dell Monitor 27" 4K UHD',
    price: 'AED 560',
    details: 'Used - Like New',
    location: 'Al Reem Island',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1555674069-1c9f43702a0a?auto=format&fit=crop&w=400&q=80',
    title: 'Lenovo ThinkPad X1 Carbon',
    price: 'AED 300',
    details: 'Refurbished - With warranty',
    location: 'Mussafah',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1550005973-51eb0eabd2b0?auto=format&fit=crop&w=400&q=80',
    title: 'Mechanical Keyboard 80%',
    price: 'AED 140',
    details: 'New - Compact Layout',
    location: 'Abu Dhabi',
    featured: false,
  },
]

const mobilesListings = [
  {
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=400&q=80',
    title: 'iPhone 15 Pro Max 256GB',
    price: 'AED 2,800',
    details: 'Used - Perfect Condition',
    location: 'Al Reem Island',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80',
    title: 'Samsung Galaxy S24 Ultra',
    price: 'AED 1,450',
    details: 'Like New - 256GB',
    location: 'Al Reem Island',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80',
    title: 'iPad Air M2 11 inch',
    price: 'AED 799',
    details: 'Used - 128GB',
    location: 'Khalifa City',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=400&q=80',
    title: 'Samsung Galaxy A15 128GB',
    price: 'AED 200',
    details: 'Brand New - Sealed',
    location: 'Mussafah',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80',
    title: 'Phone Accessories Bundle',
    price: 'AED 70',
    details: 'New - Cases & Chargers',
    location: 'Abu Dhabi',
    featured: false,
  },
]

const roomsListings = [
  {
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80',
    title: 'Furnished Master Room Marina',
    price: 'AED 2,600',
    details: 'Master Room - Monthly',
    location: 'Al Reem Island',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80',
    title: 'Private Room with Balcony',
    price: 'AED 2,200',
    details: 'Private Room - Bills Included',
    location: 'Al Reem Island',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1522771731478-44474de7ce36?auto=format&fit=crop&w=400&q=80',
    title: 'Shared Room Khalifa City',
    price: 'AED 1,700',
    details: 'Shared Room - Monthly',
    location: 'Khalifa City',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=400&q=80',
    title: 'Bed Space in Studio',
    price: 'AED 1,300',
    details: 'Bed Space - Monthly',
    location: 'Mussafah',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ff2d6c1ac?auto=format&fit=crop&w=400&q=80',
    title: 'Spacious room near Corniche',
    price: 'AED 1,049',
    details: 'Private Room - Near Beach',
    location: 'Corniche Area',
    featured: false,
  },
]

const sportsListings = [
  {
    image: 'https://images.unsplash.com/photo-1554260570-e9689a3418b8?auto=format&fit=crop&w=400&q=80',
    title: 'Treadmill NordicTrack',
    price: 'AED 300',
    details: 'Used - Good Condition',
    location: 'Abu Dhabi',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1595821535970-222a014a6eb1?auto=format&fit=crop&w=400&q=80',
    title: 'Home Gym Set Dumbbells',
    price: 'AED 390',
    details: 'Used - Complete Set',
    location: 'Abu Dhabi',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1520639893475-40b4bcdeb841?auto=format&fit=crop&w=400&q=80',
    title: 'Mountain Bike Trek Marlin 5',
    price: 'AED 250',
    details: 'Used - Good Condition',
    location: 'Abu Dhabi',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=400&q=80',
    title: 'Yoga Mat Set with Blocks',
    price: 'AED 180',
    details: 'New - Full Set',
    location: 'Abu Dhabi',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1595822369688-6629aeed8eb7?auto=format&fit=crop&w=400&q=80',
    title: 'Swimming Goggles',
    price: 'AED 120',
    details: 'New - Professional Grade',
    location: 'Abu Dhabi',
    featured: false,
  },
]

export default function AbuDhabiPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-dubizzle-dark">
      <Navbar city="Abu Dhabi" />
      <Hero city="Abu Dhabi" />
      <PromoBanners />
      <Categories />
      <main className="pb-16 pt-4">
        <ListingSection
          title="Popular in Residential for Rent"
          listings={residentialRentListings}
          url="/property-for-rent"
        />
        <ListingSection
          title="Popular in Cars"
          listings={carListings}
          url="/motors"
        />
        <VerifiedBanner />
        <ListingSection
          title="Popular in Furniture & Garden"
          listings={furnitureListings}
          url="/furniture"
        />
        <ListingSection
          title="Popular in Residential for Sale"
          listings={residentialSaleListings}
          url="/property-for-sale"
        />
        <ListingSection
          title="Popular in Computers & Networking"
          listings={computersListings}
          url="/classifieds/computers"
        />
        <ListingSection
          title="Popular in Mobile Phones & Tablets"
          listings={mobilesListings}
          url="/mobiles"
        />
        <ListingSection
          title="Popular in Rooms for Rent"
          listings={roomsListings}
          url="/property-for-rent/rooms"
        />
        <ListingSection
          title="Popular in Sports Equipment"
          listings={sportsListings}
          url="/classifieds/sports"
        />
      </main>
      <AppDownload />
      <Footer />
    </div>
  )
}
