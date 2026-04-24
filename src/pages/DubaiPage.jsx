import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PromoBanners from '../components/PromoBanners'
import Categories from '../components/Categories'
import ListingSection from '../components/ListingSection'
import VerifiedBanner from '../components/VerifiedBanner'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'
import PostAdModal from '../components/PostAdModal'
import { getProductsByCategory } from '../data/mockProducts'

/* ─── Dubai Listing Data ─── */

const residentialRentListings = getProductsByCategory('rent')
const carListings = getProductsByCategory('car')
const furnitureListings = getProductsByCategory('furn')
const residentialSaleListings = getProductsByCategory('sale')
const computersListings = getProductsByCategory('comp')
const mobilesListings = getProductsByCategory('mob')
const roomsListings = getProductsByCategory('rent') // reusing rent for rooms
const sportsListings = getProductsByCategory('furn') // reusing furniture for sports



export default function DubaiPage() {
  const [modalOpen, setModalOpen] = useState(false)   // ← NEW

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-dubizzle-dark">

      {/*
        Pass onPostAd down to Navbar so the "Post your ad" button can open the modal.
        Your Navbar should accept an `onPostAd` prop and call it on button click.
        Example inside Navbar.jsx:
          <button onClick={onPostAd}>Post your ad</button>
      */}
      <Navbar city="Dubai" onPostAd={() => setModalOpen(true)} />

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

      {/* ── Post Ad Modal ── */}
      <PostAdModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  )
}