import { useState } from 'react'
import { Search } from 'lucide-react'

const searchTabs = ['All', 'Motors', 'Jobs', 'Classifieds', 'Property', 'New Projects', 'Community']

const cityConfig = {
  Dubai: {
    heading: 'The best place to buy your house, sell your car or find a job in Dubai',
    bg: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80",
    searchPlaceholder: 'Search for anything',
  },
  'Abu Dhabi': {
    heading: 'The best place to buy your house, sell your car or find a job in Abu Dhabi',
    bg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
    searchPlaceholder: 'Search for anything',
  },
  Sharjah: {
    heading: 'The best place to buy your house, sell your car or find a job in Sharjah',
    bg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
    searchPlaceholder: 'Search in Sharjah',
  },
  Ajman: {
    heading: 'The best place to buy your house, sell your car or find a job in Ajman',
    bg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
    searchPlaceholder: 'Search in Ajman',
  },
  'Al Ain': {
    heading: 'The best place to buy your house, sell your car or find a job in Al Ain',
    bg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
    searchPlaceholder: 'Search in Al Ain',
  },
  'Ras Al Khaimah': {
    heading: 'The best place to buy your house, sell your car or find a job in Ras Al Khaimah',
    bg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
    searchPlaceholder: 'Search in Ras Al Khaimah',
  },
  Fujairah: {
    heading: 'The best place to buy your house, sell your car or find a job in Fujairah',
    bg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
    searchPlaceholder: 'Search in Fujairah',
  },
  'Umm Al Quwain': {
    heading: 'The best place to buy your house, sell your car or find a job in Umm Al Quwain',
    bg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
    searchPlaceholder: 'Search in Umm Al Quwain',
  },
  Egypt: {
    heading: 'The best place to buy your home, sell your car or find a job in Egypt',
    bg: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&w=1600&q=80",
    searchPlaceholder: 'Search for anything in Egypt',
  },
}

export default function Hero({ city = 'Dubai' }) {
  const [activeSearchTab, setActiveSearchTab] = useState('All')
  const config = cityConfig[city] ?? cityConfig['Dubai']

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1232px] px-4 py-4 md:py-5">
        <div
          className="relative overflow-hidden rounded-md bg-cover bg-center px-4 py-4 md:rounded-lg md:px-8 md:py-5"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(38,48,61,0.45), rgba(38,48,61,0.62)), url('${config.bg}')`,
          }}
        >
          <h1 className="mx-auto mb-6 max-w-4xl text-center text-[20px] font-extrabold leading-snug text-white md:mb-7 md:text-[36px] md:leading-tight">
            {config.heading}
          </h1>

          <div className="mx-auto max-w-[900px] rounded-md bg-[rgba(32,32,32,0.6)] p-3 backdrop-blur-[2px]">
            <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-2 text-white/95">
              <span className="mr-2 text-[15px] font-semibold">Searching in</span>
              {searchTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveSearchTab(tab)}
                  className={`rounded-full px-3 py-1.5 text-[13px] font-bold transition-colors sm:px-2 sm:text-[11px] md:px-3 md:text-[12px] lg:px-3 lg:text-[13px] ${
                    activeSearchTab === tab
                      ? 'bg-dubizzle-red text-white'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2 md:flex-row">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder={config.searchPlaceholder}
                  className="h-[48px] w-full rounded-md border border-transparent bg-white px-4 pr-11 text-[15px] text-dubizzle-dark outline-none transition focus:border-dubizzle-red"
                />
                <Search
                  size={18}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-dubizzle-gray"
                  strokeWidth={2.2}
                />
              </div>
              <button
                type="button"
                className="h-[48px] w-fit shrink-0 rounded-md bg-dubizzle-red px-8 text-[16px] font-bold text-white transition-colors hover:bg-red-700 active:scale-[0.98]"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
