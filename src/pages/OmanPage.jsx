import ListingSection from '../components/ListingSection'
import CountryNavbar from '../components/CountryNavbar'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'

const omanCities = ['Muscat','Salalah','Sohar','Nizwa','Sur','Ibri','Barka','Rustaq']

const categoriesData = [
  { heading:'Vehicles', items:[{label:'Cars for Sale'},{label:'Cars for Rent'},{label:'Motorcycles & ATVs'},{label:'Car Accessories'},{label:'Boats'},{label:'Spare Parts'}] },
  { heading:'Properties', items:[{label:'Apartments & Villas for Sale'},{label:'Apartments & Villas for Rent'},{label:'Commercial'}] },
  { heading:'Mobiles & Tablets', items:[{label:'Mobile Phones'},{label:'Tablets'},{label:'Accessories'}] },
  { heading:'Electronics', items:[{label:'AC, Cooling & Heating'},{label:'Laptops, Tablets, Computers'},{label:'TV - Audio - Video'},{label:'Cameras'}] },
  { heading:'Furniture & Décor', items:[{label:'Furniture'},{label:'Home Décor'},{label:'Garden & Outdoor'}] },
  { heading:'Fashion & Beauty', items:[{label:'Clothing'},{label:'Jewelry & Watches'},{label:'Health & Beauty'}] },
  { heading:'Business & Industrial', items:[{label:'Heavy Equipment'},{label:'Medical Equipment'},{label:'Construction'}] },
  { heading:'Jobs', items:[{label:'Engineering'},{label:'IT & Telecom'},{label:'Sales'},{label:'Hospitality'}] },
  { heading:'Sports & Equipment', items:[{label:'Gym Equipment'},{label:'Bicycles'},{label:'Outdoor Gear'}] },
  { heading:'Kids & Babies', items:[{label:'Clothes'},{label:'Toys'},{label:'Strollers'}] },
]
const categoryIcons = {'Vehicles':'🚗','Properties':'🏠','Mobiles & Tablets':'📱','Electronics':'💻','Furniture & Décor':'🛋️','Fashion & Beauty':'👗','Business & Industrial':'🏭','Jobs':'💼','Sports & Equipment':'🚴','Kids & Babies':'🍼'}

/* Listings */
const carsSale = [
  {image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=400&q=80',title:'Nissan Patrol 2023',price:'OMR 18,500',details:'2023 · 20,000 km · V6',location:'Muscat',featured:true},
  {image:'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80',title:'Toyota Fortuner 2022',price:'OMR 11,500',details:'2022 · 45,000 km · Auto',location:'Sohar',featured:false},
  {image:'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=400&q=80',title:'Mitsubishi Pajero 2021',price:'OMR 8,900',details:'2021 · 60,000 km · 4WD',location:'Salalah',featured:false},
  {image:'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80',title:'Hyundai Sonata 2024',price:'OMR 9,200',details:'2024 · 8,000 km · Auto',location:'Muscat',featured:true},
]
const aptRent = [
  {image:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80',title:'2 BHK Apartment – Al Khuwair',price:'OMR 350/mo',details:'2 Beds · 2 Baths · 110 m²',location:'Al Khuwair, Muscat',featured:true},
  {image:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',title:'Studio in Bausher',price:'OMR 180/mo',details:'Studio · 1 Bath · 40 m²',location:'Bausher, Muscat',featured:false},
  {image:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400&q=80',title:'3 BHK Villa – Al Hail',price:'OMR 500/mo',details:'3 Beds · Garden · Parking',location:'Al Hail, Muscat',featured:false},
  {image:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80',title:'Furnished Flat – Qurum',price:'OMR 400/mo',details:'2 Beds · Furnished · A/C',location:'Qurum, Muscat',featured:true},
]
const mobilePhones = [
  {image:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=400&q=80',title:'iPhone 15 Pro 256GB',price:'OMR 280',details:'Used · 256GB · Black Ti',location:'Muscat',featured:true},
  {image:'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80',title:'Samsung S24 Ultra',price:'OMR 220',details:'Used · 512GB · Titanium',location:'Muscat',featured:false},
  {image:'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=400&q=80',title:'Xiaomi 14 Pro',price:'OMR 160',details:'New · 256GB · Black',location:'Sohar',featured:false},
  {image:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80',title:'iPad Air M2',price:'OMR 180',details:'Used · Like New · 128GB',location:'Muscat',featured:true},
]
const aptSale = [
  {image:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',title:'2 BHK in Al Mouj',price:'OMR 85,000',details:'2 Beds · 2 Baths · Sea View',location:'Al Mouj, Muscat',featured:true},
  {image:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80',title:'Villa in Madinat Sultan Qaboos',price:'OMR 250,000',details:'5 Beds · 4 Baths · 500 m²',location:'MSQ, Muscat',featured:false},
  {image:'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=400&q=80',title:'Land in Al Amerat',price:'OMR 35,000',details:'600 m² · Residential',location:'Al Amerat, Muscat',featured:false},
  {image:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',title:'Penthouse in Shatti Al Qurum',price:'OMR 150,000',details:'3 Beds · Beach Access',location:'Shatti Al Qurum',featured:true},
]
const motorcycles = [
  {image:'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=400&q=80',title:'Honda CRF 250 Rally',price:'OMR 1,800',details:'2022 · 8,000 km',location:'Muscat',featured:true},
  {image:'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=400&q=80',title:'Yamaha MT-07 2023',price:'OMR 2,500',details:'2023 · 3,000 km',location:'Sohar',featured:false},
  {image:'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=400&q=80',title:'KTM Duke 390 2021',price:'OMR 1,400',details:'2021 · 15,000 km',location:'Muscat',featured:false},
  {image:'https://images.unsplash.com/photo-1580310614729-ccd69652491d?auto=format&fit=crop&w=400&q=80',title:'Suzuki V-Strom 650',price:'OMR 2,200',details:'2022 · 12,000 km',location:'Salalah',featured:true},
]
const acCooling = [
  {image:'https://images.unsplash.com/photo-1585338107529-13afc25806f9?auto=format&fit=crop&w=400&q=80',title:'LG Split AC 1.5 Ton',price:'OMR 120',details:'Used · Inverter · Cooling',location:'Muscat',featured:false},
  {image:'https://images.unsplash.com/photo-1631545806609-21aff52a107e?auto=format&fit=crop&w=400&q=80',title:'Samsung Window AC 2 Ton',price:'OMR 80',details:'Used · Good Condition',location:'Sohar',featured:true},
  {image:'https://images.unsplash.com/photo-1504284401750-1b81d8be30e4?auto=format&fit=crop&w=400&q=80',title:'Portable AC Unit',price:'OMR 95',details:'Used · 12,000 BTU',location:'Muscat',featured:false},
  {image:'https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=400&q=80',title:'Tower Fan with Remote',price:'OMR 18',details:'New · Oscillating',location:'Salalah',featured:false},
]
const computers = [
  {image:'https://images.unsplash.com/photo-1588620242551-0cdef5bdfb6a?auto=format&fit=crop&w=400&q=80',title:'MacBook Air M2',price:'OMR 320',details:'Used · 8GB · 256GB',location:'Muscat',featured:true},
  {image:'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80',title:'Dell Inspiron 15',price:'OMR 130',details:'Used · i5 · 8GB · 512GB',location:'Sohar',featured:false},
  {image:'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=400&q=80',title:'HP All-in-One PC',price:'OMR 180',details:'Used · i7 · 16GB · 1TB',location:'Muscat',featured:false},
  {image:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80',title:'LG Monitor 27" 4K',price:'OMR 85',details:'Used · IPS · HDR',location:'Muscat',featured:true},
]




function OmanHero(){return(
  <div className="w-full bg-white"><div className="mx-auto max-w-[1232px] py-4 px-4">
    <div className="rounded-xl overflow-hidden flex items-center justify-between bg-gradient-to-r from-[#FFC107] to-[#FFD54F] px-8 py-6">
      <div><h2 className="text-[24px] font-bold text-gray-900 mb-1">Hot Deals</h2><p className="text-[14px] text-gray-800">Find the best offers in Oman</p></div>
      <div className="text-right"><span className="bg-[#DE1F26] text-white font-bold text-[13px] px-4 py-2 rounded cursor-pointer">FOR RENT</span><p className="text-[12px] text-gray-700 mt-1 font-medium">Check them out!</p></div>
    </div>
  </div></div>
)}

function AllCategories(){return(
  <section className="bg-white py-6 border-b border-gray-200">
    <div className="mx-auto max-w-[1232px] px-4">
      <h2 className="text-[18px] font-bold text-gray-900 mb-4">All Categories</h2>
      <div className="flex flex-wrap gap-3">
        {categoriesData.map(cat=>(<a key={cat.heading} href="#" className="flex items-center gap-2 px-4 py-3 bg-[#FFF9C4] rounded-full text-[13px] font-semibold text-gray-800 hover:bg-[#FFE082] transition-colors">
          <span className="text-[16px]">{categoryIcons[cat.heading]||'📦'}</span>{cat.heading}
        </a>))}
      </div>
    </div>
  </section>
)}

export default function OmanPage(){return(
  <div className="min-h-screen bg-[#F5F5F5] font-sans">
    <CountryNavbar country="Oman" cities={omanCities} categoriesData={categoriesData} homeHref="/oman" />
    <OmanHero/>
    <AllCategories/>
    <main className="pb-8 pt-4">
      <ListingSection title="Cars for Sale" listings={carsSale} url="#"/>
      <ListingSection title="Apartments & Villas for Rent" listings={aptRent} url="#"/>
      <ListingSection title="Mobile Phones" listings={mobilePhones} url="#"/>
      <ListingSection title="Apartments & Villas for Sale" listings={aptSale} url="#"/>
      <ListingSection title="Motorcycles & ATVs" listings={motorcycles} url="#"/>
      <ListingSection title="AC, Cooling & Heating" listings={acCooling} url="#"/>
      <ListingSection title="Laptops, Tablets, Computers" listings={computers} url="#"/>
    </main>
    <AppDownload/>
    <Footer/>
  </div>
)}
