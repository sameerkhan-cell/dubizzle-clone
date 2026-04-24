import { Search, Briefcase, Clock, MapPin, Plus, FileText, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AppDownload from '../components/AppDownload'
import { getProductsByCategory } from '../data/mockProducts'

const jobCategories = [
  { title: 'Sales / Business Develop...', count: '137+ Jobs', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80' },
  { title: 'Accounting / Finance', count: '59+ Jobs', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80' },
  { title: 'Secretarial / Front Office', count: '61+ Jobs', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
  { title: 'Manufacturing / Wareho...', count: '57+ Jobs', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80' },
]

const qualifications = [
  { title: 'High School', count: '240+ Jobs', icon: FileText },
  { title: 'Bachelors Degree', count: '217+ Jobs', icon: FileText },
  { title: 'Masters Degree', count: '11+ Jobs', icon: FileText },
  { title: 'PhD', count: '1+ Jobs', icon: FileText },
]

const jobTypes = [
  { title: 'Full Time', count: '878+ Jobs', icon: Clock },
  { title: 'Part Time', count: '19+ Jobs', icon: Clock },
  { title: 'Contract', count: '18+ Jobs', icon: Clock },
  { title: 'Remote', count: '31+ Jobs', icon: Clock },
]

const companies = [
  { name: 'E A I Decoration Design & Fit out LLC', image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=150&q=80' },
  { name: 'RTC 1 Employment Solutions', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=150&q=80' },
  { name: 'almina', image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=150&q=80' },
  { name: 'MILESTONE HOMES REAL ESTATE BROKER', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=150&q=80' },
  { name: 'dubizzle', image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=150&q=80' },
  { name: 'Bayut', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=150&q=80' },
]

export default function JobsPage() {
  const popularJobs = getProductsByCategory('job')

  return (
    <div className="min-h-screen bg-white font-sans text-dubizzle-dark">
      <Navbar city="Dubai" />

      {/* Hero Section */}
      <div className="max-w-[1232px] mx-auto px-4 pt-6 pb-8">
        <div className="relative w-full h-[240px] rounded-2xl overflow-hidden bg-dubizzle-red flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-multiply opacity-60"></div>
          
          <button className="absolute top-4 right-4 bg-white text-dubizzle-dark px-4 py-1.5 rounded-full text-[13px] font-bold z-20 hover:bg-gray-100 transition-colors">
            I am a Recruiter
          </button>

          <div className="relative z-10 w-full max-w-[600px] px-4 flex flex-col items-center">
            <h1 className="text-white text-[28px] sm:text-[36px] font-bold text-center mb-6">
              Job hunting made easy with dubizzle
            </h1>
            
            <div className="w-full relative">
              <input 
                type="text" 
                placeholder="Search for jobs" 
                className="w-full bg-white rounded py-3.5 pl-4 pr-12 text-[15px] outline-none placeholder:text-gray-400"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-dubizzle-red transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1232px] mx-auto px-4">
        
        {/* Popular Jobs */}
        <section className="mb-12">
          <h2 className="text-[20px] font-bold text-[#222] mb-6">Popular Jobs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularJobs.map((job) => (
              <div key={job.id} className="border border-gray-200 rounded-lg p-5 cursor-pointer hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-[#f5f5f5] rounded flex items-center justify-center mb-4">
                  <Briefcase size={20} className="text-gray-500" />
                </div>
                <div className="text-[12px] font-bold text-[#1a73e8] mb-1">{job.seller?.name || 'Confidential'}</div>
                <h3 className="font-bold text-[15px] text-[#222] mb-3 line-clamp-1">{job.title}</h3>
                
                <div className="flex flex-col gap-2 text-[13px] text-gray-600">
                  <div className="flex items-center gap-2"><Clock size={16} /> {job.details}</div>
                  <div className="flex items-center gap-2"><Briefcase size={16} /> {job.price}</div>
                  <div className="flex items-center gap-2"><MapPin size={16} /> {job.location}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jobs By Category */}
        <section className="mb-12">
          <h2 className="text-[20px] font-bold text-[#222] mb-6">Jobs By Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {jobCategories.map((cat, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow group">
                <div className="h-[120px] w-full overflow-hidden">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[15px] text-[#222] mb-1 line-clamp-1">{cat.title}</h3>
                  <p className="text-[13px] text-gray-500">{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <button className="text-[#1a73e8] text-[13px] font-bold hover:underline flex items-center gap-1">
              View More Categories <ChevronRight size={16} />
            </button>
          </div>
        </section>

        {/* Jobs By Qualification */}
        <section className="mb-12">
          <h2 className="text-[20px] font-bold text-[#222] mb-6">Jobs By Qualification in Dubai</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {qualifications.map((qual, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition-shadow hover:border-dubizzle-red">
                <qual.icon size={28} className="text-[#1a73e8] mb-3" />
                <h3 className="font-bold text-[15px] text-[#222] mb-1">{qual.title}</h3>
                <p className="text-[13px] text-gray-500">{qual.count}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Jobs By Type */}
        <section className="mb-12">
          <h2 className="text-[20px] font-bold text-[#222] mb-6">Jobs By Type in Dubai</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {jobTypes.map((type, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition-shadow hover:border-dubizzle-red">
                <type.icon size={28} className="text-[#1a73e8] mb-3" />
                <h3 className="font-bold text-[15px] text-[#222] mb-1">{type.title}</h3>
                <p className="text-[13px] text-gray-500">{type.count}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Companies */}
        <section className="mb-12">
          <h2 className="text-[20px] font-bold text-[#222] mb-6">Featured Companies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {companies.map((comp, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-full aspect-square border border-gray-200 rounded-lg overflow-hidden flex items-center justify-center p-2 hover:shadow-md transition-shadow cursor-pointer">
                  <img src={comp.image} alt={comp.name} className="max-w-full max-h-full object-contain" />
                </div>
                <h3 className="text-[12px] font-bold text-[#222] text-center line-clamp-2 leading-tight">{comp.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* CV Banner */}
        <section className="mb-16">
          <div className="bg-[#f2f6fc] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="relative z-10 max-w-[600px]">
              <h2 className="text-[22px] font-bold text-[#222] mb-4">80% of the recruiters hire candidates with CV</h2>
              <p className="text-[14px] text-[#444] mb-4">Here are some reasons why you should upload a CV to your profile:-</p>
              <ul className="text-[14px] text-[#444] font-semibold space-y-3 mb-6">
                <li>1) Boost your chances of getting ahead of other candidates</li>
                <li>2) Enable recruiters to easily view your contact details</li>
                <li>3) Showcase your professional accomplishments</li>
              </ul>
              <button className="border border-dubizzle-red text-dubizzle-red bg-white px-8 py-2 rounded font-bold text-[14px] hover:bg-red-50 transition-colors">
                Upload CV
              </button>
            </div>
            
            <div className="relative z-10 w-[200px] h-[200px] shrink-0">
              <div className="absolute inset-0 bg-blue-100 rounded-full opacity-50 transform translate-x-4 -translate-y-4"></div>
              <div className="relative bg-white w-full h-full rounded-xl shadow-lg border border-gray-100 p-4 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
                <div className="w-24 h-2 bg-gray-200 rounded mb-2"></div>
                <div className="w-16 h-2 bg-gray-200 rounded mb-4"></div>
                <div className="w-20 h-4 bg-red-100 rounded text-red-500 text-[8px] flex items-center justify-center font-bold">PDF / DOC</div>
                
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-dubizzle-red rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                  <Plus size={20} />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  )
}
