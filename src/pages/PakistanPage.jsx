import { useState } from 'react'
import ListingSection from '../components/ListingSection'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'
import PostAdModal from '../components/PostAdModal'

const pakistanCities = ['Karachi','Lahore','Islamabad','Rawalpindi','Faisalabad','Multan','Peshawar','Quetta']

const categoriesData = [
  { heading:'Vehicles', items:[{label:'Cars'},{label:'Cars on Installment'},{label:'Car Accessories'},{label:'Spare Parts'},{label:'Buses & Vans'},{label:'Rickshaws'},{label:'Tractors'}] },
  { heading:'Properties', items:[{label:'Houses for Sale'},{label:'Apartments for Sale'},{label:'Plots & Land'},{label:'Houses for Rent'},{label:'Apartments for Rent'},{label:'Commercial'}] },
  { heading:'Mobiles & Tablets', items:[{label:'Mobile Phones'},{label:'Tablets'},{label:'Accessories'}] },
  { heading:'Electronics & Appliances', items:[{label:'Computers & Laptops'},{label:'TV - Video - Audio'},{label:'Cameras & Accessories'},{label:'Games & Entertainment'}] },
  { heading:'Home & Garden', items:[{label:'Furniture'},{label:'Home Décor'},{label:'Garden'},{label:'Kitchen'}] },
  { heading:'Fashion & Beauty', items:[{label:'Clothing'},{label:'Footwear'},{label:'Jewelry'},{label:'Watches'}] },
  { heading:'Jobs', items:[{label:'Online'},{label:'Marketing'},{label:'IT & Telecom'},{label:'Education'},{label:'Medical'}] },
  { heading:'Services', items:[{label:'Architecture & Interior Design'},{label:'Car Rental'},{label:'Domestic Help'},{label:'Event Services'}] },
  { heading:'Kids', items:[{label:'Kids Clothing'},{label:'Toys'},{label:'Prams & Walkers'},{label:'Baby Gear'}] },
  { heading:'Animals', items:[{label:'Pets'},{label:'Hens & Aseel'},{label:'Cattle'},{label:'Horses'},{label:'Other Animals'}] },
  { heading:'Books & Sports', items:[{label:'Books & Magazines'},{label:'Sports Equipment'},{label:'Musical Instruments'}] },
  { heading:'Business & Industrial', items:[{label:'Manufacturing'},{label:'Trade'},{label:'Construction'},{label:'Agriculture'}] },
]
const categoryIcons = {'Vehicles':'🚗','Properties':'🏠','Mobiles & Tablets':'📱','Electronics & Appliances':'💻','Home & Garden':'🛋️','Fashion & Beauty':'👗','Jobs':'💼','Services':'🔧','Kids':'🍼','Animals':'🐾','Books & Sports':'📚','Business & Industrial':'🏭'}

/* Listings */
const propertiesSale = [
  {image:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',title:'5 Marla House DHA Phase 5',price:'PKR 2.5 Crore',details:'3 Beds · 3 Baths · 5 Marla',location:'DHA Phase 5, Lahore',featured:true},
  {image:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80',title:'10 Marla House Bahria Town',price:'PKR 3.8 Crore',details:'5 Beds · 4 Baths · 10 Marla',location:'Bahria Town, Islamabad',featured:false},
  {image:'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=400&q=80',title:'Plot in DHA Phase 6',price:'PKR 1.2 Crore',details:'5 Marla · Residential Plot',location:'DHA Phase 6, Lahore',featured:false},
  {image:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',title:'3 Bed Apartment Clifton',price:'PKR 4.5 Crore',details:'3 Beds · 3 Baths · 2000 sqft',location:'Clifton, Karachi',featured:true},
]
const propertiesRent = [
  {image:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80',title:'3 Bed in Gulberg',price:'PKR 85,000/mo',details:'3 Beds · 2 Baths · Furnished',location:'Gulberg, Lahore',featured:true},
  {image:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',title:'2 Bed in F-10',price:'PKR 60,000/mo',details:'2 Beds · 1 Bath · F-10',location:'F-10, Islamabad',featured:false},
  {image:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400&q=80',title:'Office in Blue Area',price:'PKR 120,000/mo',details:'1200 sqft · Furnished',location:'Blue Area, Islamabad',featured:false},
  {image:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80',title:'Portion in DHA Phase 2',price:'PKR 45,000/mo',details:'2 Beds · Ground Floor',location:'DHA Phase 2, Karachi',featured:true},
]
const carsSale = [
  {image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=400&q=80',title:'Toyota Corolla GLi 2022',price:'PKR 52 Lacs',details:'2022 · 25,000 km · Auto',location:'Lahore',featured:true},
  {image:'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80',title:'Honda Civic 2023',price:'PKR 72 Lacs',details:'2023 · 15,000 km · Auto',location:'Islamabad',featured:false},
  {image:'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=400&q=80',title:'Suzuki Alto VXR 2024',price:'PKR 28 Lacs',details:'2024 · 5,000 km · Manual',location:'Karachi',featured:false},
  {image:'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80',title:'Kia Sportage Alpha 2023',price:'PKR 85 Lacs',details:'2023 · 20,000 km · Auto',location:'Lahore',featured:true},
]
const carAccessories = [
  {image:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=400&q=80',title:'Android Head Unit 9"',price:'PKR 18,000',details:'New · GPS · CarPlay',location:'Lahore',featured:true},
  {image:'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=400&q=80',title:'Seat Covers Full Set',price:'PKR 5,500',details:'New · Leather · Universal',location:'Karachi',featured:false},
  {image:'https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&w=400&q=80',title:'HID Lights Kit H4',price:'PKR 3,500',details:'New · 6000K · Pair',location:'Rawalpindi',featured:false},
  {image:'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=400&q=80',title:'Alloy Rims 15"',price:'PKR 45,000',details:'Used · Set of 4',location:'Lahore',featured:false},
]
const mobilePhones = [
  {image:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=400&q=80',title:'iPhone 14 Pro Max 256GB',price:'PKR 320,000',details:'Used · 256GB · Space Black',location:'Lahore',featured:true},
  {image:'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80',title:'Samsung S23 Ultra',price:'PKR 230,000',details:'Used · 256GB · Green',location:'Karachi',featured:false},
  {image:'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=400&q=80',title:'Infinix Note 40 Pro',price:'PKR 55,000',details:'New · 256GB · Gold',location:'Islamabad',featured:false},
  {image:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80',title:'OPPO Reno 12 Pro',price:'PKR 85,000',details:'New · 256GB · Black',location:'Lahore',featured:true},
]
const mobileAccessories = [
  {image:'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80',title:'AirPods 3rd Gen',price:'PKR 28,000',details:'New · MagSafe Case',location:'Lahore',featured:false},
  {image:'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=400&q=80',title:'Phone Cases Wholesale',price:'PKR 500',details:'New · 50 pcs · Mixed',location:'Karachi',featured:false},
  {image:'https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&w=400&q=80',title:'Wireless Charger Pad',price:'PKR 2,500',details:'New · 15W · Qi',location:'Islamabad',featured:true},
  {image:'https://images.unsplash.com/photo-1625723044792-44de16ccb4e8?auto=format&fit=crop&w=400&q=80',title:'Power Bank 30000mAh',price:'PKR 4,500',details:'New · Baseus · PD 65W',location:'Lahore',featured:false},
]
const tvAudio = [
  {image:'https://images.unsplash.com/photo-1593359677879-a4bb92f4834a?auto=format&fit=crop&w=400&q=80',title:'TCL 55" 4K Smart TV',price:'PKR 85,000',details:'New · Android TV · HDR',location:'Lahore',featured:true},
  {image:'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=400&q=80',title:'Samsung 32" LED',price:'PKR 32,000',details:'New · HD · USB',location:'Karachi',featured:false},
  {image:'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=400&q=80',title:'JBL Flip 6 Speaker',price:'PKR 22,000',details:'New · Waterproof · Blue',location:'Islamabad',featured:false},
  {image:'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=400&q=80',title:'Sony Headphones WH-1000XM5',price:'PKR 55,000',details:'Used · Like New · ANC',location:'Lahore',featured:true},
]
const computers = [
  {image:'https://images.unsplash.com/photo-1588620242551-0cdef5bdfb6a?auto=format&fit=crop&w=400&q=80',title:'Dell Inspiron 15 i5 12th',price:'PKR 95,000',details:'Used · 8GB · 512GB SSD',location:'Lahore',featured:true},
  {image:'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80',title:'Gaming PC RTX 3060',price:'PKR 180,000',details:'Used · i5 12400F · 16GB',location:'Karachi',featured:false},
  {image:'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=400&q=80',title:'HP ProBook 450 G8',price:'PKR 72,000',details:'Used · i5 11th · 8GB',location:'Islamabad',featured:false},
  {image:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80',title:'Office 365 License',price:'PKR 3,500',details:'New · 1 Year · 5 Users',location:'Rawalpindi',featured:true},
]


function PakistanNavbar({ onPostAd }) {
  const [search, setSearch] = useState('')
  const [locationOpen, setLocationOpen] = useState(false)
  const [locationSearch, setLocationSearch] = useState('')
  const [catsOpen, setCatsOpen] = useState(false)
  const filteredCities = pakistanCities.filter(c => c.toLowerCase().includes(locationSearch.toLowerCase()))
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto max-w-[1232px] px-4 flex items-center gap-3 h-[60px]">
        <a href="/en/" className="shrink-0 mr-2 flex flex-col leading-none">
          <svg fill="none" viewBox="0 0 64 35" className="h-[34px] w-auto" aria-label="Logo"><path fill="#212223" d="M37.04 33.28c.13.06.32.09.45.09.37 0 .6-.12.78-.52l.3-.71-2.2-5.43h1.06l1.68 4.21 1.68-4.2h1.08l-2.65 6.38c-.34.85-.93 1.15-1.7 1.16a2.9 2.9 0 0 1-.63-.08l.15-.9zm-2.3-1.2v-7.4h1v7.4h-1zm-3.57 0v-5.37h1v.87a2.28 2.28 0 0 1 1.75-.95v1l-.34-.02c-.5 0-1.18.38-1.41.78v3.73h-1zM24.8 29.4c0-1.56 1.12-2.82 2.68-2.82 1.61 0 2.61 1.26 2.61 2.9v.25h-4.24c.08.9.74 1.66 1.82 1.66.57 0 1.2-.22 1.6-.63l.46.65c-.54.53-1.3.8-2.16.8a2.68 2.68 0 0 1-2.78-2.82zm2.68-2c-1.07 0-1.6.87-1.64 1.6h3.28c-.03-.7-.5-1.6-1.64-1.6zm-4.77 4.68V28.5c0-.62-.27-1.03-.93-1.03-.54 0-1.08.38-1.33.77v3.84h-1V28.5c0-.62-.27-1.03-.95-1.03-.52 0-1.04.4-1.3.78v3.83h-1v-5.37h1v.8c.22-.33.93-.89 1.73-.89.8 0 1.29.42 1.45 1 .31-.5 1.02-1 1.81-1 1 0 1.52.55 1.52 1.62v3.88h-1zm-10.1 0v-5.37h1v.87a2.28 2.28 0 0 1 1.76-.95v1l-.34-.02c-.5 0-1.18.38-1.41.78v3.73h-1zm-3.8.13c-1.63 0-2.67-1.26-2.67-2.82 0-1.54 1.04-2.8 2.7-2.8 1.68 0 2.72 1.26 2.72 2.8 0 1.56-1.04 2.82-2.7 2.82zm.04-.9c1.07 0 1.66-.89 1.66-1.92 0-1-.6-1.92-1.66-1.92-1.07 0-1.67.9-1.67 1.92s.6 1.93 1.67 1.93zm-5.25.77V27.6h-.9v-.88h.88v-.35c0-1.16.68-1.8 1.64-1.8.34 0 .64.07.88.2l-.24.74a.95.95 0 0 0-.48-.1c-.5 0-.8.34-.8.99v.35h1.1v.88h-1.1v4.5h-1z"/><path fill="#212223" fillRule="evenodd" d="M55.25 33.54h-2.38V23.51l2.38.03v10.04zm-3.23-5a4.13 4.13 0 1 1-8.26 0 4.13 4.13 0 0 1 8.26 0zm-2.88 0a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zm12.14-2.5H59.7l-.92.91-.93-.92h-1.58v1.6l.91.92-.9.9v1.6h1.59l.9-.9.91.9h1.61v-1.6l-.9-.9.9-.92v-1.6z" clipRule="evenodd"/><g fillRule="evenodd" clipRule="evenodd"><path fill="#212223" d="M42.3 11.9c-.33.25-.54.6-.9 1.06a54.45 54.45 0 0 0-2.36 3.3c-.4.6-.78 1.12-1.1 1.75h4.45v1.78h-6.9v-1.4c.32-.47.57-1 .93-1.56l1.12-1.7c.38-.57.77-1.14 1.14-1.65.38-.52.72-.95 1-1.37h-3.97v-1.78h6.58v1.53zm8.13 0a40.84 40.84 0 0 0-1.97 2.58c-.4.56-.8 1.16-1.21 1.77-.4.6-.77 1.13-1.1 1.76h4.38v1.78h-6.78v-1.4c.31-.47.55-1 .9-1.56a92.92 92.92 0 0 1 2.26-3.35l1-1.37h-3.95v-1.78h6.47v1.53zm3.87-5.93h-.03c-.34 0-1.82.27-2.16.6V19.8h2.18V5.97zm7.53 8.17c0-.32-.05-.58-.13-.85a1.8 1.8 0 0 0-.37-.74 1.74 1.74 0 0 0-1.43-.64 1.94 1.94 0 0 0-1.52.7 3.12 3.12 0 0 0-.6 1.49h4.05zm-6.3.98c0-.83.1-1.55.35-2.18.25-.62.58-1.14.98-1.56a4.33 4.33 0 0 1 3.02-1.25c1.3 0 2.3.4 3.03 1.2.73.81 1.1 2.01 1.1 3.6a9.37 9.37 0 0 1 0 .78l-6.2.03c.05.86.32 1.38.8 1.8.47.4 1.15.63 2.05.63a6.75 6.75 0 0 0 2.48-.44l.3 1.8a6.93 6.93 0 0 1-2.1.5 7.2 7.2 0 0 1-3.1-.31 4.01 4.01 0 0 1-2.39-2.58 6.26 6.26 0 0 1-.28-1.97zm-39.24-4.75v4.93c0 1-.13 1.73-.42 2.17-.3.43-.8.64-1.52.64-.73 0-1.22-.21-1.5-.64-.3-.44-.43-1.16-.43-2.17v-4.93h-2.2v5.28c0 .63.07 1.22.21 1.75a3.03 3.03 0 0 0 1.87 2.28c.5.2 1.3.32 2.06.32s1.56-.1 2.07-.32a3.04 3.04 0 0 0 1.87-2.28 7.4 7.4 0 0 0 .18-1.75v-5.28h-2.2zM2.23 15.05c0-.92.18-1.66.55-2.2.36-.54.94-.8 1.73-.8a3.05 3.05 0 0 1 1.75.51V18l-.58.1c-.25.02-.54.03-.9.03a2.3 2.3 0 0 1-1.87-.82 3.43 3.43 0 0 1-.68-2.26m-1.9 2.08a4.1 4.1 0 0 0 2.45 2.55c.6.23 1.26.34 2 .34a12.55 12.55 0 0 0 3.68-.52V5.97c-.36 0-1.85.27-2.18.6l-.02 4.11a4.21 4.21 0 0 0-2.12-.52c-.65 0-1.24.12-1.76.36a3.4 3.4 0 0 0-1.3 1c-.35.43-.62.95-.8 1.56a6.84 6.84 0 0 0 .05 4.05zm25.47.18c-.45.55-1.07.82-1.88.82a7.33 7.33 0 0 1-1.47-.14v-5.43a3.4 3.4 0 0 1 1.76-.52c.8 0 1.37.27 1.74.81.36.54.54 1.28.54 2.2 0 .96-.22 1.72-.68 2.26m2.63-4.23a4.62 4.62 0 0 0-.8-1.56 3.47 3.47 0 0 0-1.3-1 4.27 4.27 0 0 0-1.77-.35c-.44 0-.84.05-1.2.16-.37.1-.71.23-.92.36V5.97h-.03c-.34 0-1.82.27-2.16.6V19.5a12.6 12.6 0 0 0 3.68.52c.74 0 1.4-.1 2-.34a4.1 4.1 0 0 0 2.45-2.55 6.84 6.84 0 0 0 .05-4.06m3.53-2.7s-1.01 0-1.3.18c-.35.22-.56.53-.56.92 0 .37.12 3.35.17 3.64.05.29.35.1.48.83.13.75.43 3.9.5 3.98.12.12.61.2.73.2.1 0 .6-.08.67-.2.08-.07.4-3.23.52-3.98.12-.74.42-.54.46-.83.05-.3.17-3.27.17-3.64 0-.4-.2-.7-.56-.92a3.74 3.74 0 0 0-1.3-.18h-.05m1.32-1.67a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"/><path fill="#DE1F26" d="M31.3 4.05c.67-.55 1.68-1.56 1.68-2.34 0-1.17-.62-1.7-.62-1.7s.27.92-1.87 2.9C28.65 4.64 28.9 6.2 28.9 6.3c.1.95.49 2.06 1.2 2.52a2.78 2.78 0 0 1-.46-1.45c0-.15-.14-1.73 1.7-3.27"/><path fill="#DE1F26" d="M34.8 7.46c-.03-.93-.33-1.01-.68-1.84-.5-1.34.35-2.49-.58-3.9-.29 1.8-1.64 2.33-2.62 3.5-.76.9-.97 2.07-.6 2.9a1.8 1.8 0 1 1 3.19 1.56c.85-.3 1.33-1.32 1.3-2.22z"/></g></svg>
          <span className="text-[9px] text-gray-400 mt-[-2px] ml-[2px]">formerly <span className="font-bold text-[#F7941D]">OI</span><span className="font-bold text-[#DE1F26]">X</span></span>
        </a>
        <div className="flex-1" />
        <div className="relative shrink-0">
          <div onClick={() => { setLocationOpen(!locationOpen); setCatsOpen(false) }} className="flex items-center gap-1.5 border border-gray-300 rounded-md px-3 py-2 cursor-pointer hover:border-gray-400 transition h-[38px] select-none">
            <svg className="w-4 h-4 text-[#DE1F26]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
            <span className="text-[14px] text-gray-800 min-w-[60px]">Pakistan</span>
            <svg className={`w-4 h-4 text-gray-500 transition-transform ${locationOpen?'rotate-180':''}`} viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
          </div>
          {locationOpen && (<div className="absolute top-[44px] left-0 w-[280px] bg-white border border-gray-200 rounded-md shadow-xl z-50 overflow-hidden">
            <div className="px-3 py-2 border-b border-gray-100"><input type="text" placeholder="Search location" value={locationSearch} onChange={e=>setLocationSearch(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 text-[13px] outline-none" autoFocus/></div>
            <div className="px-4 py-2 cursor-pointer hover:bg-gray-50"><span className="text-[14px] font-medium text-[#DE1F26]">See ads in all Pakistan</span></div>
            <div className="max-h-[220px] overflow-y-auto">{filteredCities.map(city=>(<div key={city} onClick={()=>setLocationOpen(false)} className="flex items-center justify-between px-4 py-2.5 cursor-pointer hover:bg-gray-50 border-t border-gray-100"><span className="text-[14px] text-gray-800">{city}</span></div>))}</div>
          </div>)}
        </div>
        <div className="flex items-center flex-1 max-w-[500px] border border-gray-300 rounded-md overflow-hidden h-[38px]">
          <input type="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Find Cars, Mobile Phones and more..." className="flex-1 px-4 text-[14px] text-gray-700 placeholder-gray-400 outline-none bg-white h-full"/>
          <button className="bg-[#DE1F26] hover:bg-[#c01a20] transition-colors px-4 h-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024" className="fill-white"><path d="M448 725.33c-152.92 0-277.33-124.41-277.33-277.33S295.08 170.67 448 170.67 725.33 295.08 725.33 448 600.92 725.33 448 725.33zm436.44 98.78v.02L732.52 672.19c48.77-61.78 78.15-139.54 78.15-224.19 0-199.98-162.7-362.67-362.67-362.67S85.33 248.03 85.33 448c0 199.98 162.69 362.67 362.67 362.67 84.63 0 162.41-29.38 224.17-78.15l206.14 206.15h60.36v-60.33l-54.23-54.23z"/></svg></button>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a href="/" className="text-[14px] font-medium text-gray-700 hover:text-[#DE1F26]">اردو</a>
          <a href="/login" className="text-[14px] font-semibold text-gray-800 hover:text-[#DE1F26] px-1">Login</a>
          <button onClick={onPostAd} className="bg-[#DE1F26] hover:bg-[#c01a20] text-white text-[14px] font-bold px-4 py-2 rounded whitespace-nowrap">Post Your Ad</button>
        </div>
      </div>
      <div className="border-t border-gray-100 bg-white"><div className="mx-auto max-w-[1232px] px-4 relative">
        <div onClick={()=>{setCatsOpen(!catsOpen);setLocationOpen(false)}} className="inline-flex items-center gap-1.5 py-2 text-[13px] font-medium text-gray-700 cursor-pointer hover:text-[#DE1F26] select-none"><span>All categories</span><svg className={`w-4 h-4 transition-transform ${catsOpen?'rotate-180':''}`} viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg></div>
        {catsOpen && (<div className="absolute top-full left-0 w-[900px] bg-white border border-gray-200 rounded-b-md shadow-2xl z-50 p-6"><div className="grid grid-cols-4 gap-6">{categoriesData.map(cat=>(<div key={cat.heading}><span className="block text-[13px] font-bold text-gray-800 mb-2">{cat.heading}</span><ul className="flex flex-col gap-1">{cat.items.map(i=>(<li key={i.label}><a href="#" className="text-[12px] text-gray-600 hover:text-[#DE1F26] hover:underline">{i.label}</a></li>))}</ul></div>))}</div></div>)}
      </div></div>
    </header>
  )
}
function PakistanHero(){return(<div className="w-full bg-white"><div className="mx-auto max-w-[1232px]"><img alt="Dubizzle Pakistan" className="w-full object-cover" src="https://olx-bh-production.s3.eu-west-1.amazonaws.com/image/3469172/890b6212da0a4d289af89ddd4316afa4" style={{maxHeight:'200px'}}/></div></div>)}
function PopularCategories(){return(<section className="bg-white py-6 border-b border-gray-200"><div className="mx-auto max-w-[1232px] px-4"><h2 className="text-[18px] font-bold text-gray-900 mb-4">Popular Categories</h2><div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">{categoriesData.map(cat=>(<div key={cat.heading}><a href="#" className="flex items-center gap-2 text-[13px] font-bold text-gray-800 hover:text-[#DE1F26] mb-1.5"><span>{categoryIcons[cat.heading]||'📦'}</span><span>{cat.heading}</span></a><ul className="flex flex-col gap-0.5 pl-6">{cat.items.slice(0,3).map(i=>(<li key={i.label}><a href="#" className="text-[12px] text-gray-600 hover:text-[#DE1F26]">{i.label}</a></li>))}{cat.items.length>3&&<li><a href="#" className="text-[12px] text-[#DE1F26] font-medium">All in {cat.heading} ›</a></li>}</ul></div>))}</div></div></section>)}
const popularSearches=[{heading:'Properties For Sale',links:['Houses in Lahore','Apartments in Karachi','Plots in Islamabad','Villas in Bahria Town']},{heading:'Properties For Rent',links:['Houses in Karachi','Flats in Islamabad','Portions in Lahore','Offices in Blue Area']},{heading:'Cars For Sale',links:['Used Cars in Pakistan','Toyota Corolla','Honda Civic','Kia Sportage']},{heading:'Jobs',links:['IT Jobs in Islamabad','Marketing Jobs in Lahore','Teaching Jobs','Customer Service']}]
function PopularSearches(){return(<section className="bg-white py-10 border-t border-gray-200"><div className="mx-auto max-w-[1232px] px-4"><h2 className="mb-6 text-[20px] font-bold text-gray-900">Popular Searches</h2><div className="grid grid-cols-2 gap-8 md:grid-cols-4">{popularSearches.map(col=>(<div key={col.heading}><h3 className="mb-3 text-[13px] font-bold text-gray-700 uppercase tracking-wide">{col.heading}</h3><ul className="flex flex-col gap-1.5">{col.links.map(l=>(<li key={l}><a href="#" className="text-[13px] text-[#146AA8] hover:underline hover:text-[#DE1F26]">{l}</a></li>))}</ul></div>))}</div></div></section>)}
export default function PakistanPage(){
  const [modalOpen, setModalOpen] = useState(false)
  return(<div className="min-h-screen bg-[#F5F5F5] font-sans">
    <PakistanNavbar onPostAd={()=>setModalOpen(true)}/>
    <PakistanHero/><PopularCategories/>
    <main className="pb-8 pt-4">
      <ListingSection title="Properties for Sale" listings={propertiesSale} url="#"/>
      <ListingSection title="Properties for Rent" listings={propertiesRent} url="#"/>
      <ListingSection title="Cars for Sale" listings={carsSale} url="#"/>
      <ListingSection title="Car Accessories" listings={carAccessories} url="#"/>
      <ListingSection title="Mobile Phones" listings={mobilePhones} url="#"/>
      <ListingSection title="Mobile Accessories" listings={mobileAccessories} url="#"/>
      <ListingSection title="TV - Audio - Video" listings={tvAudio} url="#"/>
      <ListingSection title="Computers - Tablets" listings={computers} url="#"/>
    </main>
    <PopularSearches/><AppDownload/><Footer/>
    <PostAdModal isOpen={modalOpen} onClose={()=>setModalOpen(false)}/>
  </div>)}






