import ListingSection from '../components/ListingSection'
import CountryNavbar from '../components/CountryNavbar'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'

const kuwaitCities = ['Kuwait City','Hawalli','Salmiya','Farwaniya','Jahra','Ahmadi','Mangaf','Mahboula']

const categoriesData = [
  { heading:'Vehicles', items:[{label:'Cars for Sale'},{label:'Cars for Rent'},{label:'Car Accessories'},{label:'Motorcycles'},{label:'Boats'},{label:'Spare Parts'}] },
  { heading:'Properties', items:[{label:'Properties for Sale'},{label:'Properties for Rent'},{label:'Commercial'}] },
  { heading:'Mobiles & Tablets', items:[{label:'Mobile Phones'},{label:'Mobile Accessories'},{label:'Tablets'}] },
  { heading:'Electronics & Appliances', items:[{label:'TV - Audio - Video'},{label:'Computers - Tablets'},{label:'Video Games'},{label:'Home Appliances'}] },
  { heading:'Home & Garden', items:[{label:'Furniture'},{label:'Decoration'},{label:'Garden'},{label:'Kitchenware'}] },
  { heading:'Fashion & Beauty', items:[{label:'Clothing'},{label:'Jewelry & Watches'},{label:'Health & Beauty'}] },
  { heading:'Jobs', items:[{label:'Accounting'},{label:'Engineering'},{label:'IT & Telecom'},{label:'Sales'},{label:'Hospitality'}] },
  { heading:'Services', items:[{label:'Domestic Services'},{label:'Business Services'},{label:'Car Repairs'},{label:'Movers'}] },
  { heading:'Kids & Babies', items:[{label:'Clothes'},{label:'Toys'},{label:'Cribs & Strollers'}] },
  { heading:'Sporting Goods', items:[{label:'Sporting Goods'},{label:'Bikes'},{label:'Outdoor Equipment'}] },
  { heading:'Pets', items:[{label:'Cats'},{label:'Dogs'},{label:'Birds'},{label:'Fish'}] },
  { heading:'Business & Industrial', items:[{label:'Heavy Equipment'},{label:'Medical Equipment'},{label:'Restaurant Equipment'}] },
]
const categoryIcons = {'Vehicles':'🚗','Properties':'🏠','Mobiles & Tablets':'📱','Electronics & Appliances':'💻','Home & Garden':'🛋️','Fashion & Beauty':'👗','Jobs':'💼','Services':'🔧','Kids & Babies':'🍼','Sporting Goods':'🚴','Pets':'🐾','Business & Industrial':'🏭'}

/* Listings */
const propertiesSale = [
  {image:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',title:'3 Bed Apartment in Salmiya',price:'KWD 95,000',details:'3 Beds · 2 Baths · 150 m²',location:'Salmiya, Hawalli',featured:true},
  {image:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80',title:'Villa in Mishref',price:'KWD 450,000',details:'5 Beds · 5 Baths · 600 m²',location:'Mishref, Hawalli',featured:false},
  {image:'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=400&q=80',title:'Commercial Office in Kuwait City',price:'KWD 120,000',details:'Office · 200 m² · Tower',location:'Kuwait City',featured:false},
  {image:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',title:'Penthouse in Sharq',price:'KWD 280,000',details:'4 Beds · Sea View · Luxury',location:'Sharq, Kuwait City',featured:true},
]
const propertiesRent = [
  {image:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80',title:'Furnished 2 Bed in Salmiya',price:'KWD 550/mo',details:'2 Beds · 2 Baths · Furnished',location:'Salmiya',featured:true},
  {image:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',title:'Studio in Hawalli',price:'KWD 250/mo',details:'Studio · 1 Bath · 40 m²',location:'Hawalli',featured:false},
  {image:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400&q=80',title:'Office in Kuwait City',price:'KWD 800/mo',details:'Office · 100 m²',location:'Kuwait City',featured:false},
  {image:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80',title:'3 Bed Villa in Jabriya',price:'KWD 1,200/mo',details:'3 Beds · Garden · Pool',location:'Jabriya, Hawalli',featured:true},
]
const carsSale = [
  {image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=400&q=80',title:'Mercedes GLE 450 2023',price:'KWD 22,000',details:'2023 · 15,000 km · Auto',location:'Salmiya',featured:true},
  {image:'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80',title:'Toyota Land Cruiser 2022',price:'KWD 18,500',details:'2022 · 40,000 km · V8',location:'Kuwait City',featured:false},
  {image:'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=400&q=80',title:'Lexus ES 350 2024',price:'KWD 14,000',details:'2024 · 5,000 km · Auto',location:'Farwaniya',featured:false},
  {image:'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80',title:'Chevrolet Tahoe 2025',price:'KWD 19,900',details:'New · 2025 · V8',location:'Ahmadi',featured:true},
]
const mobilePhones = [
  {image:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=400&q=80',title:'iPhone 15 Pro 256GB',price:'KWD 280',details:'Used · 256GB · Titanium',location:'Salmiya',featured:true},
  {image:'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80',title:'Samsung Galaxy S24 Ultra',price:'KWD 250',details:'Used · 512GB · Black',location:'Hawalli',featured:false},
  {image:'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=400&q=80',title:'Google Pixel 9 Pro',price:'KWD 200',details:'New · 256GB · Obsidian',location:'Kuwait City',featured:false},
  {image:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80',title:'iPad Pro M4 11"',price:'KWD 300',details:'Used · Like New · 256GB',location:'Salmiya',featured:true},
]
const carAccessories = [
  {image:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=400&q=80',title:'Dash Cam Front & Rear',price:'KWD 18',details:'New · 4K · WiFi',location:'Farwaniya',featured:false},
  {image:'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=400&q=80',title:'Custom Floor Mats',price:'KWD 15',details:'New · Premium · Set of 4',location:'Salmiya',featured:true},
  {image:'https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&w=400&q=80',title:'Car Wrap Service',price:'KWD 350',details:'Full Body · Matte Black',location:'Kuwait City',featured:false},
  {image:'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=400&q=80',title:'20" Alloy Wheels',price:'KWD 200',details:'Used · Set of 4 · Chrome',location:'Hawalli',featured:false},
]
const tvAudio = [
  {image:'https://images.unsplash.com/photo-1593359677879-a4bb92f4834a?auto=format&fit=crop&w=400&q=80',title:'Samsung 65" QLED 4K',price:'KWD 250',details:'Used · 65 inch · Smart',location:'Salmiya',featured:true},
  {image:'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=400&q=80',title:'LG OLED 55" C4',price:'KWD 350',details:'New · 55 inch · 2024',location:'Kuwait City',featured:false},
  {image:'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=400&q=80',title:'Sonos Soundbar',price:'KWD 80',details:'Used · Dolby Atmos',location:'Hawalli',featured:false},
  {image:'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=400&q=80',title:'Bose QC Ultra Headphones',price:'KWD 90',details:'Used · Like New',location:'Salmiya',featured:true},
]
const computers = [
  {image:'https://images.unsplash.com/photo-1588620242551-0cdef5bdfb6a?auto=format&fit=crop&w=400&q=80',title:'MacBook Pro M3 Pro 14"',price:'KWD 550',details:'Used · 18GB · 512GB',location:'Salmiya',featured:true},
  {image:'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80',title:'Gaming PC RTX 4070 Ti',price:'KWD 480',details:'Used · i9 · 64GB RAM',location:'Hawalli',featured:false},
  {image:'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=400&q=80',title:'Lenovo ThinkPad X1',price:'KWD 180',details:'Used · i7 · 16GB · 512GB',location:'Kuwait City',featured:false},
  {image:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80',title:'Apple iMac 24" M3',price:'KWD 420',details:'New · 16GB · 512GB',location:'Salmiya',featured:true},
]

/* Hero */
function KuwaitHero(){return(
  <div className="w-full bg-[#DE1F26]">
    <div className="mx-auto max-w-[1232px] py-8 px-4 text-center">
      <p className="text-white/80 text-[14px] mb-2">OLX Kuwait is now</p>
      <h1 className="text-white font-bold text-[28px] mb-1">dubizzle</h1>
      <p className="text-white font-semibold text-[16px]">Kuwait</p>
    </div>
  </div>
)}



const categoryIconsMap = categoryIcons
function PopularCategories(){return(
  <section className="bg-white py-6 border-b border-gray-200">
    <div className="mx-auto max-w-[1232px] px-4">
      <h2 className="text-[18px] font-bold text-gray-900 mb-4">Popular Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categoriesData.map(cat=>(
          <div key={cat.heading}>
            <a href="#" className="flex items-center gap-2 text-[13px] font-bold text-gray-800 hover:text-[#DE1F26] mb-1.5"><span>{categoryIconsMap[cat.heading]||'📦'}</span><span>{cat.heading}</span></a>
            <ul className="flex flex-col gap-0.5 pl-6">
              {cat.items.slice(0,3).map(i=>(<li key={i.label}><a href="#" className="text-[12px] text-gray-600 hover:text-[#DE1F26]">{i.label}</a></li>))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

const popularSearches = [
  {heading:'Properties For Sale',links:['Apartments in Kuwait City','Villas in Mishref','Land in Ahmadi','Commercial in Sharq']},
  {heading:'Properties For Rent',links:['Flats in Salmiya','Studios in Hawalli','Offices in Kuwait City','Furnished Apartments']},
  {heading:'Cars For Sale',links:['Used Cars in Kuwait','Toyota in Kuwait','Mercedes in Kuwait','Lexus in Kuwait']},
  {heading:'Jobs',links:['IT Jobs in Kuwait','Engineering Jobs','Accounting Jobs','Sales Jobs']},
]
function PopularSearches(){return(
  <section className="bg-white py-10 border-t border-gray-200">
    <div className="mx-auto max-w-[1232px] px-4">
      <h2 className="mb-6 text-[20px] font-bold text-gray-900">Popular Searches</h2>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">{popularSearches.map(col=>(<div key={col.heading}><h3 className="mb-3 text-[13px] font-bold text-gray-700 uppercase tracking-wide">{col.heading}</h3><ul className="flex flex-col gap-1.5">{col.links.map(l=>(<li key={l}><a href="#" className="text-[13px] text-[#146AA8] hover:underline hover:text-[#DE1F26]">{l}</a></li>))}</ul></div>))}</div>
    </div>
  </section>
)}

export default function KuwaitPage(){return(
  <div className="min-h-screen bg-[#F5F5F5] font-sans">
    <CountryNavbar country="Kuwait" cities={kuwaitCities} categoriesData={categoriesData} homeHref="/kuwait" />
    <KuwaitHero/>
    <PopularCategories/>
    <main className="pb-8 pt-4">
      <ListingSection title="Properties for Sale" listings={propertiesSale} url="#"/>
      <ListingSection title="Properties for Rent" listings={propertiesRent} url="#"/>
      <ListingSection title="Cars for Sale" listings={carsSale} url="#"/>
      <ListingSection title="Car Accessories" listings={carAccessories} url="#"/>
      <ListingSection title="Mobile Phones" listings={mobilePhones} url="#"/>
      <ListingSection title="TV - Audio - Video" listings={tvAudio} url="#"/>
      <ListingSection title="Computers - Tablets" listings={computers} url="#"/>
    </main>
    <PopularSearches/>
    <AppDownload/>
    <Footer/>
  </div>
)}
