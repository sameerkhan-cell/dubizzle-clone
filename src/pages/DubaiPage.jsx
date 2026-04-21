import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PromoBanners from '../components/PromoBanners'
import Categories from '../components/Categories'
import ListingSection from '../components/ListingSection'
import VerifiedBanner from '../components/VerifiedBanner'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'

/* ─── Dubai Listing Data ─── */

const residentialRentListings = [
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
    title: '3 Bed 4 Bath Apartment',
    price: 'AED 200,000',
    details: '3 Beds · 4 Baths',
    location: 'The Pulse, Dubai South',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80',
    title: '4 Bed 5 Bath Villa',
    price: 'AED 180,000',
    details: '4 Beds · 5 Baths',
    location: 'The Pulse, Dubai South',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80',
    title: '3 Bed 3 Bath Townhouse',
    price: 'AED 95,000',
    details: '3 Beds · 3 Baths',
    location: 'Victoria DAMAC Hills',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
    title: '3 Bed 2 Bath Apartment',
    price: 'AED 175,000',
    details: '3 Beds · 2 Baths',
    location: 'Santorini DAMAC Lagoons',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
    title: '3 Bed 4 Bath Apartment',
    price: 'AED 120,000',
    details: '3 Beds · 4 Baths',
    location: 'Sobha Creek Vista Tower',
    featured: false,
  },
]

const carListings = [
  {
    image: 'https://images.unsplash.com/photo-1503377211516-79ef88fb03b3?auto=format&fit=crop&w=400&q=80',
    title: 'Porsche Panamera 4S',
    price: 'AED 89,000',
    details: '2014 · 155,000 km',
    location: 'Dubai',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=400&q=80',
    title: 'Audi S3/RS3 RS',
    price: 'AED 53,953',
    details: '2025 · 20,965 km',
    location: 'Dubai',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80',
    title: 'Hyundai Elantra GLX Elite',
    price: 'AED 52,000',
    details: '2025 · 0 km',
    location: 'Dubai',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80',
    title: 'Land Rover Defender 110',
    price: 'AED 299,000',
    details: '2023 · 57,000 km',
    location: 'Dubai',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=400&q=80',
    title: 'BMW M5 Competition',
    price: 'AED 199,000',
    details: '2019 · 860,000 km',
    location: 'Dubai',
    featured: false,
  },
]

const furnitureListings = [
  {
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=400&q=80',
    title: 'Used Mattress',
    price: 'AED 250',
    details: 'Used - In good condition',
    location: 'Al Warqaa',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=400&q=80',
    title: 'Brand New TV entertainment unit',
    price: 'AED 5,500',
    details: 'New - Home Entertainment',
    location: 'Arabian Ranches',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=80',
    title: 'Brand New Single Wooden Bed',
    price: 'AED 250',
    details: 'New - Bedroom Furniture',
    location: 'Al Karama',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=400&q=80',
    title: 'Wall clock Rolex',
    price: 'AED 350',
    details: 'Home Decor - Clocks',
    location: 'Al Musroor',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
    title: 'Modern TV entertainment unit',
    price: 'AED 7,199',
    details: 'Used - Excellent Condition',
    location: 'Al Barsha',
    featured: false,
  },
]

const residentialSaleListings = [
  {
    image: 'https://images.unsplash.com/photo-1613490906263-ceb13ff781fd?auto=format&fit=crop&w=400&q=80',
    title: '6 Bed 8 Bath Villa',
    price: 'AED 3,900,000',
    details: '6 Beds · 8 Baths',
    location: 'Al Hetto',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80',
    title: '3 Bed 2 Bath Townhouse',
    price: 'AED 2,900,000',
    details: '3 Beds · 2 Baths',
    location: 'Mira Oasis',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
    title: '1 Bed 2 Bath Apartment',
    price: 'Contact for Price',
    details: '1 Bed · 2 Baths',
    location: 'Ajman Road Towers',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80',
    title: '6 Bed 7 Bath Mansion',
    price: 'AED 27,999,999',
    details: '6 Beds · 7 Baths',
    location: 'Mohammed Bin Rashid City',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80',
    title: '3 Bed 3 Bath Penthouse',
    price: 'AED 10,000,000',
    details: '3 Beds · 3 Baths',
    location: 'Dubai Opera Tower',
    featured: false,
  },
]

const computersListings = [
  {
    image: 'https://images.unsplash.com/photo-1588620242551-0cdef5bdfb6a?auto=format&fit=crop&w=400&q=80',
    title: 'Dell Workstation',
    price: 'AED 3,600',
    details: 'Used - Excellent Condition',
    location: 'Dubai',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80',
    title: 'HP Z4 G4 Workstation',
    price: 'AED 2,800',
    details: 'Used - Good condition',
    location: 'Dubai',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80',
    title: 'HP PROLIANT Server',
    price: 'AED 9,200',
    details: 'Used - Like New',
    location: 'Dubai',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1555674069-1c9f43702a0a?auto=format&fit=crop&w=400&q=80',
    title: 'DELL R740 Server',
    price: 'AED 23,000',
    details: 'Refurbished - With warranty',
    location: 'Dubai',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1550005973-51eb0eabd2b0?auto=format&fit=crop&w=400&q=80',
    title: 'Gateway router',
    price: 'AED 50',
    details: 'Used router',
    location: 'Dubai',
    featured: false,
  },
]

const mobilesListings = [
  {
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=400&q=80',
    title: 'Apple iPhone 5c',
    price: 'AED 250',
    details: 'Used - Perfect Condition',
    location: 'Dubai',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80',
    title: 'Samsung Z Fold 7',
    price: 'AED 5,200',
    details: 'Like New - 512GB',
    location: 'Dubai',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80',
    title: 'Samsung Galaxy Tab Active3',
    price: 'AED 650',
    details: 'Used - 64GB',
    location: 'Dubai',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=400&q=80',
    title: 'iPhone 17 256gb',
    price: 'AED 3,100',
    details: 'Brand New - Unopened',
    location: 'Dubai',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80',
    title: 'iPad 2021',
    price: 'AED 850',
    details: 'Used - 64GB WIFI',
    location: 'Dubai',
    featured: false,
  },
]

const roomsListings = [
  {
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80',
    title: 'Luxurious Hostel Bed',
    price: 'AED 697',
    details: 'Shared Room - Monthly',
    location: 'Dubai',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80',
    title: 'FURNISHED ACCOMMODATION',
    price: 'AED 2,000',
    details: 'Private Room - All Bills Included',
    location: 'Dubai',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1522771731478-44474de7ce36?auto=format&fit=crop&w=400&q=80',
    title: 'Full Partition Room',
    price: 'AED 1,599',
    details: 'Partition - Single Executive',
    location: 'Dubai',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=400&q=80',
    title: 'Studio Available For Rent',
    price: 'AED 2,600',
    details: 'Studio Apartment',
    location: 'Dubai',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ff2d6c1ac?auto=format&fit=crop&w=400&q=80',
    title: 'Spacious room in Jumeirah',
    price: 'AED 5,000',
    details: 'Master Bedroom - Ensuite',
    location: 'Jumeirah',
    featured: true,
  },
]

const sportsListings = [
  {
    image: 'https://images.unsplash.com/photo-1554260570-e9689a3418b8?auto=format&fit=crop&w=400&q=80',
    title: 'Apple J Luxurious Brand New',
    price: 'AED 1,591',
    details: 'New - Sports Accessories',
    location: 'Dubai',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1595821535970-222a014a6eb1?auto=format&fit=crop&w=400&q=80',
    title: 'Electric Scooter W2A by Wind',
    price: 'AED 999',
    details: 'Used - Good condition',
    location: 'Dubai',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1520639893475-40b4bcdeb841?auto=format&fit=crop&w=400&q=80',
    title: 'Beach umbrella',
    price: 'AED 40',
    details: 'Used - Outdoor',
    location: 'Dubai',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=400&q=80',
    title: 'Studio 17 VR Pro',
    price: 'AED 1,875',
    details: 'New - Exercise Machine',
    location: 'Dubai',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1595822369688-6629aeed8eb7?auto=format&fit=crop&w=400&q=80',
    title: 'Electric Scooter M4',
    price: 'AED 1,371',
    details: 'New - Scooters',
    location: 'Dubai',
    featured: false,
  },
]

export default function DubaiPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-dubizzle-dark">
      <Navbar city="Dubai" />
      <Hero city="Dubai" />
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
