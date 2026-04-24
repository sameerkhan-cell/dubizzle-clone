import { useState } from 'react'
import { Search, CheckCircle2, MapPin, Calendar, Quote } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AppDownload from '../components/AppDownload'
import ListingSection from '../components/ListingSection'
import { getProductsByCategory } from '../data/mockProducts'

const motorCategories = [
  { label: 'USED CARS', count: '28,505' },
  { label: 'NUMBER PLATES', count: '5,288' },
  { label: 'RENTAL CARS', count: '2,262' },
  { label: 'AUTO ACCESSORIES & PARTS', count: '511' },
  { label: 'MOTORCYCLES', count: '510' },
  { label: 'HEAVY VEHICLES', count: '157' },
  { label: 'BOATS', count: '119' },
]

const testimonials = [
  {
    quote: "I've been using dubizzle now for 10 years, I've literally lost count of the number cars I've bought and sold from it. Its become so addictive, I tend to log-on most days - planning the next car is both fast & fun.",
    name: 'Sean Cain',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    quote: "CarReport recently saved me a trip to Oman for a car I was seriously looking at where the friendly seller claimed \"no accidents\". However for 99 dirhams and 2 minutes online, CarReport revealed 4 accidents on the car's history.",
    name: 'Ed Surgeon',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    quote: "Put my Hyundai Coupe up for sale on dubizzle. Got a call within an hour and sold within the same day.",
    name: 'Hitesh Uchil',
    avatar: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&w=100&h=100&q=80'
  }
]

export default function MotorsPage() {
  const featuredCarListings = getProductsByCategory('car')

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-dubizzle-dark">
      <Navbar city="Dubai" />

      {/* Hero Section */}
      <div className="max-w-[1232px] mx-auto px-4 pt-6 pb-4">
        <div className="relative w-full h-[280px] rounded-2xl overflow-hidden bg-dubizzle-red flex items-center justify-center">
          {/* Background Image / Pattern Mock */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-multiply opacity-80"></div>
          
          <div className="relative z-10 w-full max-w-[600px] px-4 flex flex-col items-center">
            <h1 className="text-white text-[32px] sm:text-[40px] font-bold text-center mb-6 drop-shadow-md">
              Everyone is on dubizzle! Are you?
            </h1>
            
            <div className="w-full relative">
              <input 
                type="text" 
                placeholder="Search for motors" 
                className="w-full bg-white rounded-full py-4 pl-6 pr-12 text-[15px] outline-none shadow-lg placeholder:text-gray-400"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-dubizzle-red transition-colors">
                <Search size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories / Stats Row */}
      <div className="max-w-[1232px] mx-auto px-4 pb-10">
        <div className="flex flex-nowrap overflow-x-auto gap-3 pb-2 scrollbar-hide">
          {motorCategories.map((cat, i) => (
            <div key={i} className="flex-1 min-w-[160px] bg-white rounded-lg p-4 flex flex-col items-center justify-center border border-[#e0e0e0] shadow-sm cursor-pointer hover:border-dubizzle-red hover:shadow-md transition-all">
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 text-center mb-2 uppercase leading-tight h-8 flex items-center">{cat.label}</span>
              <span className="text-[22px] sm:text-[24px] font-bold text-[#222]">{cat.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Listings */}
      <div className="pb-10 -mt-10">
        <ListingSection 
          title="Featured Listings" 
          listings={featuredCarListings} 
          url="/motors" 
        />
      </div>

      {/* Car Inspection Banner */}
      <div className="max-w-[1232px] mx-auto px-4 pb-12">
        <div className="bg-[#f7f7f7] rounded-xl border border-[#e0e0e0] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-[22px] sm:text-[24px] font-bold text-[#222] mb-1">
              Request dubizzle <span className="text-dubizzle-red">Car Inspection</span>
            </h2>
            <p className="text-[15px] text-gray-600 mb-6">
              Trusted by 10K+ car buyers, dubizzle is the UAE's go-to platform
            </p>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fde8e8] flex items-center justify-center text-dubizzle-red shrink-0">
                  <CheckCircle2 size={22} />
                </div>
                <div className="flex flex-col text-[13px] font-bold text-[#444]">
                  <span>120 - 240</span>
                  <span>Points Covered</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fde8e8] flex items-center justify-center text-dubizzle-red shrink-0">
                  <MapPin size={22} />
                </div>
                <div className="flex flex-col text-[13px] font-bold text-[#444]">
                  <span>Inspect</span>
                  <span>Anywhere!</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fde8e8] flex items-center justify-center text-dubizzle-red shrink-0">
                  <Calendar size={22} />
                </div>
                <div className="flex flex-col text-[13px] font-bold text-[#444]">
                  <span>Same Day</span>
                  <span>Inspection</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-auto shrink-0">
            <button className="w-full md:w-auto bg-dubizzle-red text-white px-10 py-3 rounded font-bold text-[15px] hover:bg-red-700 transition-colors shadow-md">
              Book Inspection
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-[1232px] mx-auto px-4 pb-16">
        <h2 className="text-[22px] font-bold text-[#222] mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, i) => (
            <div key={i} className="bg-white rounded-xl border border-[#e0e0e0] p-6 shadow-sm flex flex-col justify-between">
              <div className="mb-6 text-[14px] text-gray-600 leading-relaxed italic relative">
                <Quote size={20} className="text-gray-300 absolute -left-2 -top-2 rotate-180" />
                <span className="pl-4 block">{test.quote}</span>
                <Quote size={20} className="text-gray-300 absolute right-0 bottom-0" />
              </div>
              <div className="flex items-center gap-3 mt-auto">
                <img src={test.avatar} alt={test.name} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                <span className="font-bold text-[14px] text-[#1a73e8]">{test.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AppDownload />
      <Footer />
    </div>
  )
}
