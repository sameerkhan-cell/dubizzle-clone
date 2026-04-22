import ListingSection from '../components/ListingSection'
import CountryNavbar from '../components/CountryNavbar'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'

const jordanCities = ['Amman','Zarqa','Irbid','Aqaba','Madaba','Salt','Jerash','Mafraq']

const categoriesData = [
  { heading:'Vehicles', items:[{label:'Cars for Sale'},{label:'Cars for Rent'},{label:'Car Accessories'},{label:'Motorcycles'},{label:'Trucks & Buses'},{label:'Spare Parts'}] },
  { heading:'Properties', items:[{label:'Properties for Sale'},{label:'Properties for Rent'},{label:'Commercial'}] },
  { heading:'Mobiles & Tablets', items:[{label:'Mobile Phones'},{label:'Mobile Accessories'},{label:'Tablets'}] },
  { heading:'Electronics & Appliances', items:[{label:'TV - Audio - Video'},{label:'Computers - Tablets'},{label:'Video Games'},{label:'Home Appliances'}] },
  { heading:'Home & Garden', items:[{label:'Furniture'},{label:'Decoration'},{label:'Garden'},{label:'Kitchenware'}] },
  { heading:'Fashion & Beauty', items:[{label:'Clothing'},{label:'Jewelry & Watches'},{label:'Health & Beauty'}] },
  { heading:'Jobs', items:[{label:'Accounting'},{label:'Engineering'},{label:'IT & Telecom'},{label:'Sales'},{label:'Education'}] },
  { heading:'Services', items:[{label:'Domestic Services'},{label:'Business Services'},{label:'Car Repairs'},{label:'Movers'}] },
  { heading:'Kids & Babies', items:[{label:'Clothes'},{label:'Toys'},{label:'Cribs & Strollers'}] },
  { heading:'Sporting Goods', items:[{label:'Sporting Goods'},{label:'Bikes'},{label:'Outdoor Equipment'}] },
  { heading:'Pets', items:[{label:'Cats'},{label:'Dogs'},{label:'Birds'},{label:'Other Pets'}] },
  { heading:'Business & Industrial', items:[{label:'Heavy Equipment'},{label:'Medical Equipment'},{label:'Restaurant Equipment'}] },
]

const categoryIcons = {'Vehicles':'🚗','Properties':'🏠','Mobiles & Tablets':'📱','Electronics & Appliances':'💻','Home & Garden':'🛋️','Fashion & Beauty':'👗','Jobs':'💼','Services':'🔧','Kids & Babies':'🍼','Sporting Goods':'🚴','Pets':'🐾','Business & Industrial':'🏭'}

/* Listing Data */
const propertiesSale = [
  {image:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',title:'3 Bed Apartment in Abdoun',price:'JOD 85,000',details:'3 Beds · 2 Baths · 180 m²',location:'Abdoun, Amman',featured:true},
  {image:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80',title:'Villa in Dabouq',price:'JOD 320,000',details:'5 Beds · 4 Baths · 450 m²',location:'Dabouq, Amman',featured:false},
  {image:'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=400&q=80',title:'Land in Marj Al Hamam',price:'JOD 45,000',details:'500 m² · Residential',location:'Marj Al Hamam, Amman',featured:false},
  {image:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',title:'Penthouse in Sweifieh',price:'JOD 150,000',details:'4 Beds · 3 Baths · Rooftop',location:'Sweifieh, Amman',featured:true},
]
const propertiesRent = [
  {image:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80',title:'Furnished Apartment – Jabal Amman',price:'JOD 450/mo',details:'2 Beds · 1 Bath · Furnished',location:'Jabal Amman',featured:true},
  {image:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',title:'Studio in Sweifieh',price:'JOD 250/mo',details:'Studio · 1 Bath · 45 m²',location:'Sweifieh, Amman',featured:false},
  {image:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400&q=80',title:'Office Space – Shmeisani',price:'JOD 600/mo',details:'Office · 80 m²',location:'Shmeisani, Amman',featured:false},
  {image:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80',title:'3 Bed Villa in Abdoun',price:'JOD 900/mo',details:'3 Beds · Garden · Parking',location:'Abdoun, Amman',featured:true},
]
const carsSale = [
  {image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=400&q=80',title:'BMW 520i 2022',price:'JOD 32,000',details:'2022 · 25,000 km · Auto',location:'Amman',featured:true},
  {image:'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80',title:'Hyundai Tucson 2020',price:'JOD 18,500',details:'2020 · 60,000 km · Auto',location:'Zarqa',featured:false},
  {image:'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=400&q=80',title:'Toyota Camry 2019',price:'JOD 16,000',details:'2019 · 80,000 km · Auto',location:'Irbid',featured:false},
  {image:'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80',title:'Kia Sportage 2023',price:'JOD 24,500',details:'2023 · 12,000 km · Auto',location:'Amman',featured:true},
]
const carAccessories = [
  {image:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=400&q=80',title:'Dash Cam 4K',price:'JOD 35',details:'New · 4K · Night Vision',location:'Amman',featured:false},
  {image:'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=400&q=80',title:'Car Seat Covers Set',price:'JOD 25',details:'Universal · Leather',location:'Zarqa',featured:false},
  {image:'https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&w=400&q=80',title:'LED Headlight Bulbs H7',price:'JOD 18',details:'New · 6000K · Pair',location:'Amman',featured:true},
  {image:'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=400&q=80',title:'Alloy Wheels 17"',price:'JOD 200',details:'Set of 4 · Used',location:'Irbid',featured:false},
]
const mobilePhones = [
  {image:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=400&q=80',title:'iPhone 15 Pro Max 256GB',price:'JOD 650',details:'Used · 256GB · Natural Ti',location:'Amman',featured:true},
  {image:'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80',title:'Samsung Galaxy S24 Ultra',price:'JOD 520',details:'Used · 512GB · Titanium',location:'Amman',featured:false},
  {image:'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=400&q=80',title:'Xiaomi 14 Ultra',price:'JOD 380',details:'New · 512GB · Black',location:'Zarqa',featured:false},
  {image:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80',title:'iPad Air M2 128GB',price:'JOD 350',details:'Used · Like New · Blue',location:'Amman',featured:true},
]
const mobileAccessories = [
  {image:'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80',title:'AirPods Pro 2nd Gen',price:'JOD 65',details:'Used · With Case',location:'Amman',featured:false},
  {image:'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=400&q=80',title:'Phone Cases Bundle',price:'JOD 5',details:'New · iPhone 15 Pro',location:'Zarqa',featured:false},
  {image:'https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&w=400&q=80',title:'Samsung Wireless Charger',price:'JOD 15',details:'New · 15W Fast Charge',location:'Amman',featured:true},
  {image:'https://images.unsplash.com/photo-1625723044792-44de16ccb4e8?auto=format&fit=crop&w=400&q=80',title:'Power Bank 20000mAh',price:'JOD 12',details:'New · Anker · USB-C',location:'Irbid',featured:false},
]
const tvAudio = [
  {image:'https://images.unsplash.com/photo-1593359677879-a4bb92f4834a?auto=format&fit=crop&w=400&q=80',title:'LG 55" Smart TV 4K',price:'JOD 220',details:'Used · 55 inch · WebOS',location:'Amman',featured:true},
  {image:'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=400&q=80',title:'Samsung 43" Crystal UHD',price:'JOD 180',details:'New · 43 inch · 2024',location:'Zarqa',featured:false},
  {image:'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=400&q=80',title:'JBL Charge 5 Speaker',price:'JOD 45',details:'Used · Bluetooth · Black',location:'Amman',featured:false},
  {image:'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=400&q=80',title:'Sony Home Theater System',price:'JOD 120',details:'Used · 5.1 Channel',location:'Irbid',featured:true},
]
const computers = [
  {image:'https://images.unsplash.com/photo-1588620242551-0cdef5bdfb6a?auto=format&fit=crop&w=400&q=80',title:'MacBook Air M2 256GB',price:'JOD 580',details:'Used · Like New · Space Gray',location:'Amman',featured:true},
  {image:'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80',title:'Gaming PC RTX 4060',price:'JOD 450',details:'Used · i7 · 32GB RAM',location:'Amman',featured:false},
  {image:'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=400&q=80',title:'HP Pavilion 15 Laptop',price:'JOD 200',details:'Used · i5 · 8GB · 256GB',location:'Zarqa',featured:false},
  {image:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80',title:'Dell Monitor 27" 4K',price:'JOD 150',details:'Used · IPS · USB-C',location:'Amman',featured:true},
]

/* Hero */
function JordanHero(){return(
  <div className="w-full bg-[#DE1F26]">
    <div className="mx-auto max-w-[1232px] py-8 px-4 text-center">
      <p className="text-white/80 text-[14px] mb-2">OLX Jordan is now</p>
      <h1 className="text-white font-bold text-[28px] mb-1">dubizzle</h1>
      <p className="text-white font-semibold text-[16px]">Jordan</p>
    </div>
  </div>
)}

/* Popular Categories */
function PopularCategories(){return(
  <section className="bg-white py-6 border-b border-gray-200">
    <div className="mx-auto max-w-[1232px] px-4">
      <h2 className="text-[18px] font-bold text-gray-900 mb-4">Popular Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categoriesData.map(cat=>(
          <div key={cat.heading}>
            <a href="#" className="flex items-center gap-2 text-[13px] font-bold text-gray-800 hover:text-[#DE1F26] mb-1.5">
              <span>{categoryIcons[cat.heading]||'📦'}</span><span>{cat.heading}</span>
            </a>
            <ul className="flex flex-col gap-0.5 pl-6">
              {cat.items.slice(0,3).map(i=>(<li key={i.label}><a href="#" className="text-[12px] text-gray-600 hover:text-[#DE1F26]">{i.label}</a></li>))}
              {cat.items.length>3&&<li><a href="#" className="text-[12px] text-[#DE1F26] font-medium">All in {cat.heading} ›</a></li>}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

/* Popular Searches */
const popularSearches = [
  {heading:'Properties For Sale',links:['Apartments in Amman','Villas in Abdoun','Land in Irbid','Duplex in Sweifieh']},
  {heading:'Properties For Rent',links:['Apartments in Amman','Studios in Jabal Amman','Offices in Shmeisani','Furnished Flats']},
  {heading:'Cars For Sale',links:['Used Cars in Jordan','Toyota in Amman','Hyundai in Amman','BMW in Jordan']},
  {heading:'Jobs',links:['IT Jobs in Jordan','Sales Jobs in Amman','Engineering Jobs','Part-Time Jobs']},
]

function PopularSearches(){return(
  <section className="bg-white py-10 border-t border-gray-200">
    <div className="mx-auto max-w-[1232px] px-4">
      <h2 className="mb-6 text-[20px] font-bold text-gray-900">Popular Searches</h2>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {popularSearches.map(col=>(
          <div key={col.heading}>
            <h3 className="mb-3 text-[13px] font-bold text-gray-700 uppercase tracking-wide">{col.heading}</h3>
            <ul className="flex flex-col gap-1.5">{col.links.map(l=>(<li key={l}><a href="#" className="text-[13px] text-[#146AA8] hover:underline hover:text-[#DE1F26]">{l}</a></li>))}</ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

export default function JordanPage(){return(
  <div className="min-h-screen bg-[#F5F5F5] font-sans">
    <CountryNavbar country="Jordan" cities={jordanCities} categoriesData={categoriesData} homeHref="/jordan" />
    <JordanHero/>
    <PopularCategories/>
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
    <PopularSearches/>
    <AppDownload/>
    <Footer/>
  </div>
)}
