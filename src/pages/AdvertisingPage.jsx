import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import Logo from '../components/Logo'

function DealersIcon() {
  return (
    <svg viewBox="0 0 47 47" className="h-[47px] w-[47px]" aria-hidden="true">
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g transform="translate(-1 -1)" strokeWidth="3">
          <g id="sport-48px-outline_steering-wheel" transform="translate(2 2)">
            <path
              d="M5.520226,21.6635342 C12.509779,24.8634968 17.6637368,31.3784562 19.1031823,39.1605835"
              id="Shape"
              stroke="#E00000"
            />
            <path
              d="M39.4797745,21.6635342 C32.4902191,24.8634968 27.3362637,31.3784562 25.8968182,39.1605835"
              id="Shape"
              stroke="#E00000"
            />
            <path
              d="M6.5893621,16.5 C6.5893621,16.5 14.5630226,15.5 22.5002613,15.5 C30.4374905,15.5 38.4108238,16.5 38.4108238,16.5"
              id="Shape"
              stroke="#E00000"
            />
            <circle id="Oval" stroke="#626465" cx="22.5" cy="22.5" r="22" />
            <circle id="Oval" stroke="#626465" cx="22.5" cy="22.5" r="17" />
            <circle id="Oval" stroke="#626465" cx="22.5" cy="24.5" r="4" />
          </g>
        </g>
      </g>
    </svg>
  )
}

function AdvertisersIcon() {
  return (
    <svg viewBox="0 0 193.33 187.24" className="h-[47px] w-[47px]" aria-hidden="true">
      <g id="advertising">
        <line
          x1="133.16"
          y1="61.36"
          x2="93.62"
          y2="93.62"
          fill="none"
          stroke="#626465"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="12"
        />
        <polyline
          points="133.24 60.19 134.79 36.73 165.26 10.04 168.22 29.16"
          fill="none"
          stroke="#626465"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="12"
        />
        <polyline
          points="133.24 60.14 156.7 61.83 187.33 35.33 168.8 29.77"
          fill="none"
          stroke="#626465"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="12"
        />
        <path
          d="M182.65,75.09a88.63,88.63,0,0,1,3.92,26.84A87.62,87.62,0,1,1,100.91,12.4a89.24,89.24,0,0,1,37.26,9.31"
          transform="translate(-5.35 -6.38)"
          fill="none"
          stroke="#626465"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="12"
        />
        <path
          d="M144.37,86.53A47.42,47.42,0,1,1,99.18,52.48a48.83,48.83,0,0,1,22.15,5.6"
          transform="translate(-5.35 -6.38)"
          fill="none"
          stroke="#ed1c24"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="12"
        />
      </g>
    </svg>
  )
}

function PropertyAgentsIcon() {
  return (
    <svg viewBox="0 0 43 47" className="h-[47px] w-[43px]" aria-hidden="true">
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g transform="translate(-88 0)" strokeWidth="3">
          <g id="Feature">
            <g id="Icon" transform="translate(85 0)">
              <g id="Shapes" transform="translate(4 1)">
                <polyline
                  id="Shape"
                  stroke="#626465"
                  points="28.5 20.5 28.5 10.5 24.5 10.5 24.5 4.5 16.5 4.5 16.5 10.5 12.5 10.5 12.5 26.5"
                />
                <path d="M12.5,44.5 L28.5,44.5" id="Shape" stroke="#626465" />
                <path d="M20.5,0.5 L20.5,4.5" id="Shape" stroke="#626465" />
                <rect id="Rectangle-path" stroke="#626465" x="0.5" y="26.5" width="16" height="18" />
                <rect id="Rectangle-path" stroke="#626465" x="24.5" y="20.5" width="16" height="24" />
                <path d="M30.5,26.5 L34.5,26.5" id="Shape" stroke="#E00000" />
                <path d="M30.5,32.5 L34.5,32.5" id="Shape" stroke="#E00000" />
                <path d="M30.5,38.5 L34.5,38.5" id="Shape" stroke="#E00000" />
                <path d="M6.5,32.5 L10.5,32.5" id="Shape" stroke="#E00000" />
                <path d="M6.5,38.5 L10.5,38.5" id="Shape" stroke="#E00000" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

const topLinks = ['Blog', 'About', 'Help', 'عربي']
const businessLinks = ['Car Dealers', 'Advertisers']

const businessCards = [
  {
    title: 'For car dealers',
    description: 'Robust listing plans with smart add-ons to turbocharge your car sales.',
    cta: 'Learn more',
    disabled: false,
    Icon: DealersIcon,
  },
  {
    title: 'For advertisers',
    description: "Connect with UAE's largest online audience with our bespoke advertising solutions.",
    cta: 'Learn more',
    disabled: false,
    Icon: AdvertisersIcon,
  },
  {
    title: 'For property agents',
    description: 'Versatile plans & premium products to boost your property leads.',
    cta: 'Coming soon',
    disabled: true,
    Icon: PropertyAgentsIcon,
  },
]

const stats = [
  {
    value: '4.1M',
    // numeric target (millions), suffix appended after formatting
    target: 4.1,
    decimals: 1,
    suffix: 'M',
    title: 'Monthly active users',
    description: 'People from the UAE and beyond come to buy and sell anything.',
  },
  {
    value: '163M',
    target: 163,
    decimals: 0,
    suffix: 'M',
    title: 'Monthly page views',
    description: 'The sheer volume of content on dubizzle means endless opportunities.',
  },
  {
    value: '640K+',
    target: 640,
    decimals: 0,
    suffix: 'K+',
    title: 'Monthly unique buyers',
    description: 'Buyers are attracted to high selection, and dubizzle offers just that.',
  },
]

const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About us', to: '/about-us' },
      { label: 'Careers', to: '/careers' },
      { label: 'Terms of use', href: '#' },
      { label: 'Terms & conditions', href: '#' },
      { label: 'Privacy policy', href: '#' },
    ],
  },
  {
    title: 'UAE',
    links: [
      { label: 'Dubai', to: '/dubai' },
      { label: 'Abu Dhabi', to: '/abu-dhabi' },
      { label: 'Ras al Khaimah', to: '/city/ras-al-khaimah' },
      { label: 'Sharjah', to: '/city/sharjah' },
      { label: 'Fujairah', to: '/city/fujairah' },
      { label: 'Ajman', to: '/city/ajman' },
      { label: 'Umm al Quwain', to: '/city/umm-al-quwain' },
      { label: 'Al Ain', to: '/city/al-ain' },
    ],
  },
  {
    title: 'Get Social',
    links: [
      { label: 'Facebook', href: 'https://www.facebook.com/dubizzle' },
      { label: 'Twitter', href: 'https://x.com/dubizzle' },
      { label: 'Youtube', href: 'https://www.youtube.com/user/Dubizzle' },
      { label: 'Instagram', href: 'https://www.instagram.com/dubizzle' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/dubizzle-com/' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
]

function StatsSection() {
  // displayed values start at '0' for each stat
  const [displayValues, setDisplayValues] = useState(stats.map(() => '0'))
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          observer.disconnect()

          const duration = 2000 // ms
          const interval = 16  // ms per frame
          const steps = duration / interval

          stats.forEach((stat, idx) => {
            let step = 0
            const timer = setInterval(() => {
              step++
              const progress = step / steps
              // ease-out: decelerate toward the end
              const eased = 1 - Math.pow(1 - progress, 3)
              const current = stat.target * eased
              const formatted =
                stat.decimals > 0
                  ? current.toFixed(stat.decimals)
                  : Math.round(current).toString()
              setDisplayValues((prev) => {
                const next = [...prev]
                next[idx] = formatted + stat.suffix
                return next
              })
              if (step >= steps) {
                clearInterval(timer)
                // ensure final value is exact
                setDisplayValues((prev) => {
                  const next = [...prev]
                  next[idx] = stat.value
                  return next
                })
              }
            }, interval)
          })
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#F5F5F5] px-5 py-[60px]">
      <div className="mx-auto max-w-[1232px]">
        <h2 className="mb-8 text-center text-[28px] font-bold text-[#222]">
          We are the UAE&apos;s favorite classifieds
        </h2>
        <div className="grid gap-0 md:grid-cols-3">
          {stats.map((item, idx) => (
            <div
              key={item.value}
              className="flex min-h-[220px] flex-col items-center justify-center border-2 border-[#E8202A] bg-white px-6 py-8 text-center"
            >
              <p className="mb-3 text-[56px] font-bold leading-none text-[#333]">{displayValues[idx]}</p>
              <p className="mb-4 text-[14px] font-semibold text-[#555]">{item.title}</p>
              <p className="max-w-[280px] text-[14px] leading-[1.5] text-[#666]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', business: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#E8202A]">
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mb-2 text-[20px] font-bold text-[#222]">Thank you!</h3>
        <p className="text-[14px] text-[#666]">We'll be in touch with you shortly.</p>
      </div>
    )
  }

  const inputClass =
    'w-full rounded border border-[#D8D8D8] bg-white px-3 py-2 text-[13px] text-[#222] placeholder-[#AAAAAA] outline-none focus:border-[#E8202A] transition-colors'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-[12px] font-semibold text-[#444]">Full name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1 block text-[12px] font-semibold text-[#444]">Email address *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-[12px] font-semibold text-[#444]">Phone number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+971 XX XXX XXXX"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1 block text-[12px] font-semibold text-[#444]">Business type *</label>
          <div className="relative">
            <select
              name="business"
              required
              value={form.business}
              onChange={handleChange}
              className={`${inputClass} appearance-none pr-8`}
            >
              <option value="">Select a type</option>
              <option value="car-dealer">Car Dealer</option>
              <option value="advertiser">Advertiser</option>
              <option value="property-agent">Property Agent</option>
              <option value="other">Other</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#888]" />
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-[12px] font-semibold text-[#444]">Message *</label>
        <textarea
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us how we can help you..."
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="mt-1 h-[42px] w-full rounded bg-[#E8202A] text-[14px] font-bold text-white transition-colors hover:bg-[#c91d25]"
      >
        Send message
      </button>
    </form>
  )
}

export default function AdvertisingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#222]">
      <header className="border-b border-[#E6E6E6] bg-white">
        <div className="mx-auto flex h-[76px] max-w-[1232px] items-center justify-between px-5">
          <Link to="/" aria-label="dubizzle home">
            <Logo width={115} height={27} />
          </Link>
          <div className="flex flex-col items-end justify-center">
            {/* topbar_container */}
            <nav
              aria-label="Top links"
              className="mb-2 flex items-center divide-x divide-[#E6E6E6] text-[10px] leading-none text-[#444]"
            >
              {topLinks.map((item) => (
                <a key={item} href="#" className="px-4 py-1 hover:text-[#E8202A]">
                  {item}
                </a>
              ))}
            </nav>

            {/* header_right_start */}
            <nav
              aria-label="Business links"
              className="flex items-center divide-x divide-[#E6E6E6] text-[14px] leading-none text-[#222]"
            >
              {businessLinks.map((item) => (
                <a key={item} href="#" className="px-6 py-1 hover:text-[#E8202A]">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1232px] px-5 pt-4 text-[12px] text-[#8A8A8A]">Home</div>

      <main className="pb-0">
        <section className="relative mt-4 h-[350px] overflow-hidden bg-black">
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400"
            aria-label="dubizzle business hero video"
          >
            <source
              src="https://business.dubizzle.com/wp-content/themes/hub2/assets/video/dubizzle-hub-main-video.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-white">
            <h1 className="mb-3 text-[36px] font-bold leading-tight">dubizzle for business</h1>
            <p className="max-w-[500px] text-[14px] leading-[1.5]">
              We leverage our amazing traffic, excellent reach and professional tools to help car dealers,
              property agents, and advertisers in the UAE grow their business.
            </p>
          </div>
        </section>

        <section className="bg-white px-5 py-[56px]">
          <div className="mx-auto grid max-w-[1232px] gap-10 md:grid-cols-3">
            {businessCards.map(({ title, description, cta, disabled, Icon }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center text-[#787878]">
                  <Icon size={44} strokeWidth={1.7} />
                </div>
                <h3 className="mb-3 text-[18px] font-bold leading-tight text-[#222]">{title}</h3>
                <p className="mb-5 max-w-[320px] text-[13px] leading-[1.6] text-[#666]">{description}</p>
                <button
                  type="button"
                  disabled={disabled}
                  className={`h-[38px] min-w-[122px] rounded-[4px] px-5 text-[14px] font-bold transition-colors ${
                    disabled
                      ? 'cursor-not-allowed bg-[#ECECEC] text-[#B8B8B8]'
                      : 'bg-[#E8202A] text-white hover:bg-[#c91d25]'
                  }`}
                >
                  {cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        <StatsSection />

        <section className="bg-white px-5 py-[60px]">
          <div className="mx-auto max-w-[1232px] border-2 border-[#E8202A] p-4 md:p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-[#F5F5F5] p-6 md:p-8">
                <h3 className="mb-5 text-[24px] font-bold text-[#222]">Tell us about you...</h3>
                <p className="mb-4 text-[14px] leading-[1.6] text-[#444]">
                  Whether you want to promote real estate, cars, or simply looking for new customers for your
                  business, reach out and tell us what you&apos;re after. We&apos;ll find a way to help!
                </p>
                <p className="mb-4 text-[14px] leading-[1.6] text-[#444]">
                  There&apos;s a reason thousands of businesses in the UAE already trust us.
                </p>
                <p className="text-[13px] italic leading-[1.6] text-[#666]">
                  Note: please use this form to submit business inquiries only. If you have other inquiries, please
                  email us at <span className="text-[#E8202A]">info@dubizzle.com</span>
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#F2F3F5] px-5 py-10">
        <div className="mx-auto max-w-[1232px]">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="mb-2 text-[14px] font-bold text-[#333]">{column.title}</h4>
                <ul className="space-y-1">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.to ? (
                        <Link to={link.to} className="text-[13px] text-[#00A39B] hover:underline">
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href ?? '#'}
                          className="text-[13px] text-[#00A39B] hover:underline"
                          target={link.href && link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href && link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-2">
            <div className="flex items-end gap-1">
              <Logo width={108} height={25} />
              <span className="text-[18px] font-bold text-[#E8202A]">group</span>
            </div>
            <p className="text-[12px] text-[#8A8A8A]">UAE&apos;s favourite Unicorn</p>
            <p className="text-[12px] text-[#8A8A8A]">© dubizzle.com 2026, All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

