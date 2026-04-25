/* eslint-disable no-unused-vars */
import { useState } from 'react'
import PromoBanners from '../components/PromoBanners'
import Categories from '../components/Categories'
import ListingSection from '../components/ListingSection'
import CountryNavbar from '../components/CountryNavbar'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const categoriesData = [
  { heading:'Motors', items:[{label:'Used Cars for Sale'},{label:'Motorcycles'},{label:'Accessories'},{label:'Boats'}] },
  { heading:'Properties', items:[{label:'Apartments for Sale'},{label:'Apartments for Rent'},{label:'Villas for Sale'},{label:'Villas for Rent'}] },
  { heading:'Jobs', items:[{label:'Accounting'},{label:'Engineering'},{label:'Sales'},{label:'Customer Service'}] },
  { heading:'Mobiles', items:[{label:'Mobile Phones'},{label:'Accessories'},{label:'Tablets'}] },
  { heading:'Electronics', items:[{label:'TVs'},{label:'Laptops'},{label:'Cameras'},{label:'Gaming Consoles'}] },
  { heading:'Furniture', items:[{label:'Living Room'},{label:'Bedroom'},{label:'Dining Room'},{label:'Decor'}] },
  { heading:'Fashion', items:[{label:'Women'},{label:'Men'},{label:'Watches'},{label:'Bags'}] },
  { heading:'Services', items:[{label:'Movers'},{label:'Cleaners'},{label:'Home Repair'}] },
]

const egyptCities = [
  'Alexandria','Aswan','Asyut','Beheira','Beni Suef','Cairo',
  'Dakahlia','Damietta','Faiyum','Gharbia','Giza','Ismailia',
  'Kafr El Sheikh','Luxor','Matruh','Minya','Monufia','New Valley',
  'North Sinai','Port Said','Qalyubia','Qena','Red Sea','Sharqia',
  'Sohag','South Sinai','Suez',
]



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
      <CountryNavbar country="Egypt" cities={egyptCities} categoriesData={categoriesData} homeHref="/egypt" />
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