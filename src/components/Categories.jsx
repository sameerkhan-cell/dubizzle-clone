import {
  Car,
  Home,
  Building2,
  Package,
  Briefcase,
  Users,
  Factory,
  Tv2,
  Armchair,
  Smartphone,
} from 'lucide-react'

const categories = [
  {
    title: 'Motors',
    icon: Car,
    colorClass: 'text-dubizzle-red',
    bgClass: 'bg-red-50',
    links: [
      { label: 'Used Cars' },
      { label: 'Rental Cars' },
      { label: 'New Cars', badge: 'NEW' },
      { label: 'Export Cars' },
      { label: 'Auto Accessories & Parts' },
    ],
    allLink: 'All in Motors',
  },
  {
    title: 'Property for Rent',
    icon: Home,
    colorClass: 'text-green-600',
    bgClass: 'bg-green-50',
    links: [
      { label: 'Residential' },
      { label: 'Commercial' },
      { label: 'Rooms For Rent' },
      { label: 'Monthly Short Term' },
    ],
    allLink: 'All in Property for Rent',
  },
  {
    title: 'Property for Sale',
    icon: Building2,
    colorClass: 'text-green-600',
    bgClass: 'bg-green-50',
    links: [
      { label: 'Residential' },
      { label: 'Commercial' },
      { label: 'New Projects' },
      { label: 'Off-Plan' },
    ],
    allLink: 'All in Property for Sale',
  },
  {
    title: 'Classifieds',
    icon: Package,
    colorClass: 'text-blue-600',
    bgClass: 'bg-blue-50',
    links: [
      { label: 'Electronics' },
      { label: 'Computers & Networking' },
      { label: 'Clothing & Accessories' },
      { label: 'Jewelry & Watches' },
    ],
    allLink: 'All in Classifieds',
  },
  {
    title: 'Jobs',
    icon: Briefcase,
    colorClass: 'text-blue-600',
    bgClass: 'bg-blue-50',
    links: [
      { label: 'Accounting/Finance' },
      { label: 'Engineering' },
      { label: 'Sales/Business Dev.' },
      { label: 'Secretarial/Front Office' },
    ],
    allLink: 'All in Jobs',
  },
  {
    title: 'Community',
    icon: Users,
    colorClass: 'text-gray-600',
    bgClass: 'bg-gray-100',
    links: [
      { label: 'Freelancers' },
      { label: 'Home Maintenance' },
      { label: 'Other Services' },
      { label: 'Tutors & Classes' },
      { label: 'Manufacturing' },
    ],
    allLink: 'All in Community',
  },
  {
    title: 'Business & Industrial',
    icon: Factory,
    colorClass: 'text-gray-600',
    bgClass: 'bg-gray-100',
    links: [
      { label: 'Businesses for Sale' },
      { label: 'Construction' },
      { label: 'Food & Beverage' },
      { label: 'Industrial Supplies' },
    ],
    allLink: 'All in Business & Industrial',
  },
  {
    title: 'Home Appliances',
    icon: Tv2,
    colorClass: 'text-orange-500',
    bgClass: 'bg-orange-50',
    links: [
      { label: 'Kitchen Appliances' },
      { label: 'Small Appliances' },
      { label: 'AC & Heating' },
      { label: 'Washers & Dryers' },
    ],
    allLink: 'All in Home Appliances',
  },
  {
    title: 'Furniture, Home & Garden',
    icon: Armchair,
    colorClass: 'text-orange-500',
    bgClass: 'bg-orange-50',
    links: [
      { label: 'Living Room' },
      { label: 'Bedroom' },
      { label: 'Outdoor' },
      { label: 'Home Decor' },
    ],
    allLink: 'All in Furniture, Home & Garden',
  },
  {
    title: 'Mobile Phones & Tablets',
    icon: Smartphone,
    colorClass: 'text-purple-600',
    bgClass: 'bg-purple-50',
    links: [
      { label: 'Mobile Phones' },
      { label: 'Tablets' },
      { label: 'Accessories' },
      { label: 'Other Mobile' },
    ],
    allLink: 'All in Mobile Phones',
  },
]

export default function Categories() {
  return (
    <section className="bg-gradient-to-b from-[#f2f6fa] to-white py-10">
      <div className="mx-auto max-w-[1232px] px-4">
        <h2 className="mb-6 text-[22px] font-bold text-dubizzle-dark">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.title} className="flex flex-col">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-[32px] w-[32px] items-center justify-center rounded-lg ${category.bgClass} ${category.colorClass}`}
                  >
                    <Icon size={18} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[14px] font-bold text-dubizzle-dark">
                    {category.title}
                  </h3>
                </div>

                <ul className="mb-3 flex flex-1 flex-col gap-2">
                  {category.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-[13px] text-dubizzle-gray transition-colors hover:text-dubizzle-red"
                      >
                        {link.label}
                        {link.badge && (
                          <span className="rounded bg-gray-100 px-1 py-0.5 text-[10px] font-bold text-dubizzle-dark">
                            NEW
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-2">
                  <a
                    href="#"
                    className="text-[13px] font-bold text-[#146AA8] transition-colors hover:text-dubizzle-red"
                  >
                    {category.allLink} →
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
