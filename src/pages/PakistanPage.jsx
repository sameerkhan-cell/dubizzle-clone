import ListingSection from '../components/ListingSection'
import CountryNavbar from '../components/CountryNavbar'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'

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


function PakistanHero(){return(
  <div className="w-full bg-[#DE1F26]">
    <div className="mx-auto max-w-[1232px] py-6 px-4 flex items-center justify-between">
      <div><p className="text-white/80 text-[13px] mb-1">Don't dream it, drive it!</p><h2 className="text-white font-bold text-[20px]">Find it on dubizzle</h2></div>
      <a href="#" className="bg-white text-[#DE1F26] font-bold text-[13px] px-5 py-2.5 rounded hover:bg-gray-100 transition-colors">Browse cars now!</a>
    </div>
  </div>
)}

function PopularCategories(){return(
  <section className="bg-white py-6 border-b border-gray-200">
    <div className="mx-auto max-w-[1232px] px-4">
      <h2 className="text-[18px] font-bold text-gray-900 mb-4">Popular Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categoriesData.map(cat=>(
          <div key={cat.heading}>
            <a href="#" className="flex items-center gap-2 text-[13px] font-bold text-gray-800 hover:text-[#DE1F26] mb-1.5"><span>{categoryIcons[cat.heading]||'📦'}</span><span>{cat.heading}</span></a>
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

export default function PakistanPage(){return(
  <div className="min-h-screen bg-[#F5F5F5] font-sans">
    <CountryNavbar country="Pakistan" cities={pakistanCities} categoriesData={categoriesData} langLabel="اردو" homeHref="/pakistan" />
    <PakistanHero/>
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
    <AppDownload/>
    <Footer/>
  </div>
)}
