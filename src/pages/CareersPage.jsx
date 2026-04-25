import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import dubaiOffice1 from '../assets/dubai-office/dubai-1.png'
import dubaiOffice2 from '../assets/dubai-office/dubai-2.png'
import dubaiOffice3 from '../assets/dubai-office/dubai-3.png'
import dubaiOffice4 from '../assets/dubai-office/dubai-4.png'
import dubaiOffice5 from '../assets/dubai-office/dubai-5.png'
import dubaiOffice6 from '../assets/dubai-office/dubai-6.png'
import dubaiOffice7 from '../assets/dubai-office/dubai-7.png'
import dubaiOffice8 from '../assets/dubai-office/dubai-8.png'
import dubaiOffice9 from '../assets/dubai-office/dubai-9.png'
import dubaiOffice10 from '../assets/dubai-office/dubai-10.png'
import dubaiOffice11 from '../assets/dubai-office/dubai-11.png'
import karachiOffice1 from '../assets/karachi-office/karachi-1.png'
import karachiOffice2 from '../assets/karachi-office/karachi-2.png'
import karachiOffice3 from '../assets/karachi-office/karachi-3.png'
import jordanOfficeLeft from '../assets/jordan-office/jordan-left.png'
import jordanOfficeMiddleStack from '../assets/jordan-office/jordan-middle-top.png'
import jordanOfficeRight from '../assets/jordan-office/jordan-right.png'
import jamesPanel from '../assets/testimonials/james-panel.png'
import kristinePanel from '../assets/testimonials/kristine-panel.png'
import nataliePanel from '../assets/testimonials/natalie-panel.png'

const RED = '#e8132d'
const LIGHT_GRAY = '#f5f5f5'
const TEXT_DARK = '#333333'

const jobs = [
  { id: 'job-1', title: 'Sales Executive - Inside Sales - Property Monitor', workplace: 'On-site', locationCity: 'Dubai', locationDetail: 'Dubai, United Arab Emirates', department: 'UAE, Property Monitor', workType: 'Full time' },
  { id: 'job-2', title: 'Sales Administration Officer', workplace: 'On-site', locationCity: 'Dubai', locationDetail: 'Dubai, United Arab Emirates', department: 'UAE, Property Monitor', workType: 'Full time' },
  { id: 'job-3', title: 'Field Validation Executive', workplace: 'On-site', locationCity: 'Dubai', locationDetail: 'Dubai, United Arab Emirates', department: 'UAE, VAS C2C', workType: 'Full time' },
  { id: 'job-4', title: 'Purchaser (Car Buyer) - Abu Dhabi', workplace: 'On-site', locationCity: 'Abu Dhabi', locationDetail: 'Abu Dhabi, United Arab E...', department: 'UAE, Dubizzle Cars', workType: 'Full time' },
  { id: 'job-5', title: 'Purchaser (Car Buyer) - Abu Dhabi', workplace: 'On-site', locationCity: 'Abu Dhabi', locationDetail: 'Abu Dhabi, United Arab E...', department: 'UAE, Dubizzle Cars', workType: 'Full time' },
  { id: 'job-6', title: 'Purchaser (Car Buyer)', workplace: 'On-site', locationCity: 'Dubai', locationDetail: 'Dubai, United Arab Emirates', department: 'UAE, Dubizzle Cars', workType: 'Full time' },
  { id: 'job-7', title: 'Financial Controller', workplace: 'On-site', locationCity: 'Riyadh', locationDetail: 'Riyadh Province, Saudi Arabia', department: 'Bayut KSA', workType: '' },
  { id: 'job-8', title: 'Commercial Analyst', workplace: 'On-site', locationCity: 'Dubai', locationDetail: 'Dubai, United Arab Emirates', department: 'UAE, Business Intelligence', workType: 'Full time' },
  { id: 'job-9', title: 'Vehicle Inspector', workplace: 'On-site', locationCity: 'Abu Dhabi', locationDetail: 'Abu Dhabi, United Arab E...', department: 'UAE, Dubizzle Cars', workType: 'Full time' },
  { id: 'job-10', title: 'Senior Software Engineer - Backend', workplace: 'On-site', locationCity: 'Karachi', locationDetail: 'Sindh, Pakistan', department: 'Technology - dubizzle labs', workType: 'Full time' },
  { id: 'job-11', title: 'Engineering Team Lead', workplace: 'On-site', locationCity: 'Karachi', locationDetail: 'Sindh, Pakistan', department: 'Technology - dubizzle labs', workType: 'Full time' },
  { id: 'job-12', title: 'Product Designer', workplace: 'On-site', locationCity: 'Dubai', locationDetail: 'Dubai, United Arab Emirates', department: 'UAE, Product Design', workType: 'Full time' },
  { id: 'job-13', title: 'QA Engineer', workplace: 'On-site', locationCity: 'Karachi', locationDetail: 'Sindh, Pakistan', department: 'Technology - dubizzle labs', workType: 'Full time' },
  { id: 'job-14', title: 'Senior Data Analyst', workplace: 'On-site', locationCity: 'Riyadh', locationDetail: 'Riyadh Province, Saudi Arabia', department: 'Bayut KSA', workType: 'Full time' },
  { id: 'job-15', title: 'Business Development Executive', workplace: 'On-site', locationCity: 'Dubai', locationDetail: 'Dubai, United Arab Emirates', department: 'UAE, Growth', workType: 'Full time' },
  { id: 'job-16', title: 'Customer Support Specialist', workplace: 'On-site', locationCity: 'Abu Dhabi', locationDetail: 'Abu Dhabi, United Arab Emirates', department: 'UAE, Customer Experience', workType: 'Full time' },
]

const stats = [
  { key: 'users', label: 'Average number of users per month for Bayut & dubizzle', target: 50, suffix: 'M' },
  { key: 'employees', label: 'Employees across our offices', target: 2000, suffix: '+' },
  { key: 'nationalities', label: 'Nationalities working with us', target: 60, suffix: '+' },
  { key: 'offices', label: 'Offices across UAE, KSA, Oman, Pakistan, Egypt & Jordan', target: 9, suffix: '' },
]

const testimonialPanels = [
  {
    src: kristinePanel,
    alt: 'Kristine del Rosario testimonial panel',
  },
  {
    src: jamesPanel,
    alt: 'James Jary testimonial panel',
  },
  {
    src: nataliePanel,
    alt: 'Natalie Wong testimonial panel',
  },
]

const dubaiOfficePhotos = [
  { id: 'dubai-1', src: dubaiOffice1 },
  { id: 'dubai-2', src: dubaiOffice2 },
  { id: 'dubai-3', src: dubaiOffice3 },
  { id: 'dubai-4', src: dubaiOffice4 },
  { id: 'dubai-5', src: dubaiOffice5 },
  { id: 'dubai-6', src: dubaiOffice6 },
  { id: 'dubai-7', src: dubaiOffice7 },
  { id: 'dubai-8', src: dubaiOffice8 },
  { id: 'dubai-9', src: dubaiOffice9 },
  { id: 'dubai-10', src: dubaiOffice10 },
  { id: 'dubai-11', src: dubaiOffice11 },
]

const karachiOfficePhotos = [
  { id: 'karachi-1', src: karachiOffice1 },
  { id: 'karachi-2', src: karachiOffice2 },
  { id: 'karachi-3', src: karachiOffice3 },
]

const officeLocations = [
  {
    name: 'UAE Office - One Central',
    address: 'The Offices 5, One Central, Dubai, United Arab Emirates',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.6226707193!2d55.27228!3d25.197349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sOne%20Central%20Dubai!2s25.197349%2C%2055.272280!5e0!3m2!1sen!2s!4v1713607400000',
  },
  {
    name: 'UAE Office - Dubai Design District',
    address: 'Building 3, Dubai Design District, Dubai, United Arab Emirates',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.7485!2d55.14565!3d25.16165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sDubai%20Design%20District!2s25.161650%2C%2055.145650!5e0!3m2!1sen!2s!4v1713607400000',
  },
  {
    name: 'UAE Office - Dubai CommerCity',
    address: 'Building B1, Dubai CommerCity, Dubai, United Arab Emirates',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.2542!2d55.2336!3d25.101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sDubai%20CommerCity!2s25.101%2C%2055.2336!5e0!3m2!1sen!2s!4v1713607400000',
  },
  {
    name: 'UAE Office - Abu Dhabi',
    address: 'dubizzle Cars Hub, Musaffah, Abu Dhabi, United Arab Emirates',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.8542!2d54.47623!3d24.35622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sMusaffah%20Abu%20Dhabi!2s24.356220%2C%2054.476230!5e0!3m2!1sen!2s!4v1713607400000',
  },
  {
    name: 'Pakistan Office',
    address: 'Syedna Tahir Saifuddin Memorial Building, Civil Lines Kashmir Mujahid Colony, Karachi, Pakistan',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d67.15546194999999!3d25.193202399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sKarachi%20Pakistan!2s24.862462%2C%2067.009396!5e0!3m2!1sen!2s!4v1713607400000',
  },
  {
    name: 'Jordan Office',
    address: 'Princess Basmah Street, Amman, Jordan',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13500.123!2d35.93!3d31.945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sAmman%20Jordan!2s31.945%2C%2035.93!5e0!3m2!1sen!2s!4v1713607400000',
  },
  {
    name: 'Saudi Office - Riyadh',
    address: 'Bayut Office, Olaya Street, Al Worood, Opposite Abaya Mall, Riyadh, KSA',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48000.123!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sRiyadh%20Saudi%20Arabia!2s24.7136%2C%2046.6753!5e0!3m2!1sen!2s!4v1713607400000',
  },
  {
    name: 'Saudi Office - Jeddah',
    address: 'Tower B, Bayut KSA, Zahran Business Center, Jeddah, KSA',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38000.456!2d39.2375!3d21.5433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sJeddah%20Saudi%20Arabia!2s21.5433%2C%2039.2375!5e0!3m2!1sen!2s!4v1713607400000',
  },
]

function useCountUpStats() {
  const [values, setValues] = useState(stats.map(() => 0))
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (!ref.current) return undefined
    const section = ref.current
    const duration = 2000
    const stepTime = 16
    const totalSteps = Math.ceil(duration / stepTime)

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return
        started.current = true
        observer.disconnect()

        stats.forEach((item, index) => {
          let step = 0
          const interval = setInterval(() => {
            step += 1
            const progress = Math.min(step / totalSteps, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const nextValue = item.target * eased
            setValues((prev) => {
              const copy = [...prev]
              copy[index] = item.target >= 1000 ? Math.round(nextValue) : Number(nextValue.toFixed(0))
              return copy
            })
            if (progress >= 1) clearInterval(interval)
          }, stepTime)
        })
      },
      { threshold: 0.3 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return { ref, values }
}

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [workplaceFilter, setWorkplaceFilter] = useState('All')
  const [locationFilter, setLocationFilter] = useState('All')
  const [departmentFilter, setDepartmentFilter] = useState('All')
  const [workTypeFilter, setWorkTypeFilter] = useState('All')
  const [visibleJobs, setVisibleJobs] = useState(11)
  const [openFilter, setOpenFilter] = useState('')
  const [locationSearch, setLocationSearch] = useState('')
  const [departmentSearch, setDepartmentSearch] = useState('')
  const filtersRef = useRef(null)
  const { ref: statsRef, values: statValues } = useCountUpStats()

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const query = searchTerm.trim().toLowerCase()
      const matchesSearch = query.length === 0
        || job.title.toLowerCase().includes(query)
        || `${job.locationCity}, ${job.locationDetail}`.toLowerCase().includes(query)
        || job.department.toLowerCase().includes(query)
      const matchesWorkplace = workplaceFilter === 'All' || job.workplace === workplaceFilter
      const matchesLocation = locationFilter === 'All' || job.locationCity === locationFilter
      const matchesDepartment = departmentFilter === 'All' || job.department === departmentFilter
      const matchesWorkType = workTypeFilter === 'All' || job.workType === workTypeFilter
      return matchesSearch && matchesWorkplace && matchesLocation && matchesDepartment && matchesWorkType
    })
  }, [searchTerm, workplaceFilter, locationFilter, departmentFilter, workTypeFilter])

  const workplaceOptions = useMemo(() => ['All', 'On-site', 'Remote'], [])
  const locationOptions = useMemo(() => ['All', ...new Set(jobs.map((job) => job.locationCity))], [])
  const departmentOptions = useMemo(() => ['All', ...new Set(jobs.map((job) => job.department))], [])
  const workTypeOptions = useMemo(() => ['All', 'Full time', 'Contract', 'Other'], [])
  const filteredLocationOptions = useMemo(
    () => locationOptions.filter((option) => option === 'All' || option.toLowerCase().includes(locationSearch.toLowerCase())),
    [locationOptions, locationSearch],
  )
  const filteredDepartmentOptions = useMemo(
    () => departmentOptions.filter((option) => option === 'All' || option.toLowerCase().includes(departmentSearch.toLowerCase())),
    [departmentOptions, departmentSearch],
  )

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisibleJobs(11)
  }, [searchTerm, workplaceFilter, locationFilter, departmentFilter, workTypeFilter])

  const isExpandedJobsList = visibleJobs >= filteredJobs.length

  useEffect(() => {
    const closeDropdownOnOutsideClick = (event) => {
      if (!filtersRef.current || filtersRef.current.contains(event.target)) return
      setOpenFilter('')
    }
    document.addEventListener('mousedown', closeDropdownOnOutsideClick)
    return () => document.removeEventListener('mousedown', closeDropdownOnOutsideClick)
  }, [])

  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="careers-hero-content container">
          <p className="hero-part-of">Part of</p>
          <img
            src="https://workable-application-form.s3.amazonaws.com/advanced/production/5f7f0b3bff324c80f16cf81f/275028c3-32ba-9f9f-bf18-bab181ab2c70"
            alt="Bayut | dubizzle"
            style={{ width: 320, maxWidth: '100%', height: 'auto', maxHeight: 120, minHeight: 40 }}
          />
          <div className="hero-jobs-wrap">
            <a href="#jobs" className="hero-view-btn">
              View jobs
            </a>
          </div>
        </div>
      </section>

      <section className="section about-us-details">
        <div className="container">
          <h2 className="section-heading">About Us</h2>
          <p className="about-line about-highlight">
            The Arab World&apos;s only Homegrown Unicorn Business - Where Technology meets Innovation to Solve Local
            Challenges
          </p>
          <p className="about-line">
            As iconic homegrown brands with a strong presence across the seven emirates in the UAE, Bayut & Dubizzle
            connect millions of users, delivering the ultimate online search experience. Whether you&apos;re searching for
            property, motors, jobs, or any other classifieds, Bayut & Dubizzle have you covered! Proud members of the
            Dubizzle Group, our parent company has a strong reputation for invigorating economies in emerging markets
            worldwide.
          </p>
          <p className="about-line">
            At Bayut & dubizzle, we firmly believe that it&apos;s our people who make us special! We are a passionate and
            inspired group of individuals who enjoy building valuable products to make everyone&apos;s lives easier and
            better. We&apos;re humble but confident, irreverent, and able to laugh at ourselves, but above all, we are here
            to build the best online classifieds platform the Middle East has ever seen!
          </p>
          <p className="about-line">
            Join us at Bayut & Dubizzle and be part of a dynamic team that&apos;s shaping the digital landscape of the
            Middle East!
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-heading">Navigating with Core Values</h2>
          <div className="two-col">
            <img
              src="https://d2y4rc9q318ytb.cloudfront.net/accounts/5d76fbb5-ef6d-42cf-9465-0f0f079ada42/540x350/1761468073391-205e94fc.png"
              alt="Bayut Dubizzle team core values"
              style={{ borderRadius: '6px', objectFit: 'cover', width: '100%', height: 'auto' }}
            />
            <div className="section-copy">
              Empowered by our core values of honesty, innovation, and ownership, disruption is ingrained in our DNA
              at Bayut &amp; Dubizzle. We&apos;re committed to excellence, driven by a passion for innovation and a
              dedication to integrity. Our vibrant culture celebrates and embraces the differences that make each of
              us unique.
            </div>
          </div>
        </div>
      </section>

      <section className="section community-section" ref={statsRef}>
        <div className="container">
          <h2 className="section-heading">Our Community</h2>
          <div className="stats-grid">
            {stats.map((item, idx) => (
              <article key={item.key} className="stat-card">
                <h3>
                  {statValues[idx]}
                  {item.suffix}
                </h3>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-heading">Building a Sustainable Future Together!</h2>
          <div className="two-col">
            <div className="section-copy">
              <p style={{ marginBottom: '16px' }}>
                At Bayut dubizzle, sustainability isn&apos;t just a goal, it&apos;s a way of life.
              </p>
              <p style={{ marginBottom: '16px' }}>
                We&apos;re proud to align ourselves with the WHO and the UN Sustainable Development Goals. From
                well-being, to sustainability and environmental goals, we actively engage in various initiatives such
                as Earth Hour, beach clean-ups, blood donation drives, recycling campaigns, mental health seminars,
                etc.
              </p>
              <p>
                At Bayut dubizzle, we believe that by embracing sustainability, we can make a real difference in our
                communities and the world. Join us in making a positive impact!
              </p>
            </div>
            <img
              src="https://d2y4rc9q318ytb.cloudfront.net/accounts/5d76fbb5-ef6d-42cf-9465-0f0f079ada42/540x350/1761468073446-8e43120.png"
              alt="Bayut dubizzle sustainability team"
              style={{ borderRadius: '6px', objectFit: 'cover', width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>


      <section className="section">
        <div className="container">
          <h2 className="section-heading">Our Strength is in Our Diversity</h2>
          <p className="diversity-copy diversity-intro">
            Diversity isn&apos;t just a buzzword at Bayut &amp; dubizzle.
          </p>
          <p className="diversity-copy">
            Our global family spans 63 countries, bringing together diverse cultures. With team members fluent in over
            50 languages, including sign language, communication and understanding are at the heart of what we do. Our
            dynamic workforce spans 4 generations, from Baby Boomers to Gen Z, creating a rich blend of knowledge and
            insight. Gender equality is a key focus for us. With 27% of managerial and 19% of leadership roles held by
            women, this is only the start to our journey of empowering women in the workplace.
          </p>
          <p className="diversity-copy">
            Join us at Bayut Dubizzle, where diversity isn&apos;t just celebrated; it&apos;s embraced, respected, and valued.
          </p>
          <div className="video-embed-wrap">
            <iframe
              src="https://player.vimeo.com/video/939432729"
              title="Video section"
              className="video-embed-iframe"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-heading">Employee Testimonials</h2>
          <p className="testimonials-subtitle">Hear from our diverse workforce!</p>
          <div className="testimonials-image-grid">
            {testimonialPanels.map((panel, idx) => (
              <div key={panel.src} className="testimonial-image-panel">
                <img src={panel.src} alt={panel.alt} loading={idx === 0 ? 'eager' : 'lazy'} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dubai-office-section">
        <div className="container">
          <h2 className="section-heading">Our Dubai Office</h2>
          <div className="photo-grid dubai-photo-grid">
            {dubaiOfficePhotos.map((photo) => (
              <article key={photo.id} className="dubai-photo-card">
                <img src={photo.src} alt={photo.id} loading="lazy" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-heading">Our Karachi Office</h2>
          <div className="photo-grid cols-3">
            {karachiOfficePhotos.map((photo) => (
              <img key={photo.id} src={photo.src} alt={photo.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section jordan-office-section">
        <div className="container">
          <h2 className="section-heading">Our Jordan Office</h2>
          <div className="jordan-gallery">
            <figure className="jordan-fig jordan-side-left">
              <img
                src={jordanOfficeLeft}
                alt="Bayut team lounge area at the Jordan office"
                loading="lazy"
              />
            </figure>
            <figure className="jordan-fig jordan-center-top">
              <img
                src={jordanOfficeMiddleStack}
                alt="Bayut Jordan office team group photo"
                loading="lazy"
              />
            </figure>
            <figure className="jordan-fig jordan-side-right">
              <img
                src={jordanOfficeRight}
                alt="Jordan office team with Bayut, dubizzle and EMPG branded photo frame"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      <section id="jobs" className="section section-jobs">
        <div className="container">
          <div className="jobs-inner">
            <h2 className="section-heading">Work with us</h2>
            <p className="work-copy">
              We are always on the lookout for enthusiastic and driven people to join the Dubizzle Group family in the
              UAE! If you do not see a position that is a match, send in your CV for future openings at
              bayutdubizzle@jobs.workablemail.com
            </p>

            <div className="jobs-search-wrap">
              <span className="jobs-search-icon" aria-hidden="true">⌕</span>
              <input
                type="text"
                className="jobs-search-input"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="jobs-filters-grid" ref={filtersRef}>
              <div className="jobs-filter">
                <button type="button" className="jobs-filter-trigger" onClick={() => setOpenFilter((prev) => (prev === 'workplace' ? '' : 'workplace'))}>
                  {workplaceFilter === 'All' ? 'Workplace type' : workplaceFilter}
                  <span className={`jobs-filter-arrow ${openFilter === 'workplace' ? 'open' : ''}`}>⌃</span>
                </button>
                {openFilter === 'workplace' && (
                  <div className="jobs-filter-menu">
                    {workplaceOptions.map((option) => (
                      <button
                        type="button"
                        key={option}
                        className={`jobs-filter-item ${workplaceFilter === option ? 'active' : ''}`}
                        onClick={() => {
                          setWorkplaceFilter(option)
                          setOpenFilter('')
                        }}
                      >
                        {option === 'All' ? 'Workplace type' : option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="jobs-filter">
                <button type="button" className="jobs-filter-trigger" onClick={() => setOpenFilter((prev) => (prev === 'location' ? '' : 'location'))}>
                  {locationFilter === 'All' ? 'Location' : locationFilter}
                  <span className={`jobs-filter-arrow ${openFilter === 'location' ? 'open' : ''}`}>⌃</span>
                </button>
                {openFilter === 'location' && (
                  <div className="jobs-filter-menu jobs-filter-menu-searchable">
                    <div className="jobs-filter-search-wrap">
                      <span className="jobs-filter-search-icon">⌕</span>
                      <input
                        className="jobs-filter-search-input"
                        placeholder="Search"
                        value={locationSearch}
                        onChange={(e) => setLocationSearch(e.target.value)}
                      />
                    </div>
                    <div className="jobs-filter-scroll">
                      {filteredLocationOptions.map((option) => (
                        <button
                          type="button"
                          key={option}
                          className={`jobs-filter-item ${locationFilter === option ? 'active' : ''}`}
                          onClick={() => {
                            setLocationFilter(option)
                            setOpenFilter('')
                          }}
                        >
                          {option === 'All' ? 'Location' : option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="jobs-filter">
                <button type="button" className="jobs-filter-trigger" onClick={() => setOpenFilter((prev) => (prev === 'department' ? '' : 'department'))}>
                  {departmentFilter === 'All' ? 'Department' : departmentFilter}
                  <span className={`jobs-filter-arrow ${openFilter === 'department' ? 'open' : ''}`}>⌃</span>
                </button>
                {openFilter === 'department' && (
                  <div className="jobs-filter-menu jobs-filter-menu-searchable">
                    <div className="jobs-filter-search-wrap">
                      <span className="jobs-filter-search-icon">⌕</span>
                      <input
                        className="jobs-filter-search-input"
                        placeholder="Search"
                        value={departmentSearch}
                        onChange={(e) => setDepartmentSearch(e.target.value)}
                      />
                    </div>
                    <div className="jobs-filter-scroll">
                      {filteredDepartmentOptions.map((option) => (
                        <button
                          type="button"
                          key={option}
                          className={`jobs-filter-item ${departmentFilter === option ? 'active' : ''}`}
                          onClick={() => {
                            setDepartmentFilter(option)
                            setOpenFilter('')
                          }}
                        >
                          {option === 'All' ? 'Department' : option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="jobs-filter">
                <button type="button" className="jobs-filter-trigger" onClick={() => setOpenFilter((prev) => (prev === 'workType' ? '' : 'workType'))}>
                  {workTypeFilter === 'All' ? 'Work type' : workTypeFilter}
                  <span className={`jobs-filter-arrow ${openFilter === 'workType' ? 'open' : ''}`}>⌃</span>
                </button>
                {openFilter === 'workType' && (
                  <div className="jobs-filter-menu">
                    {workTypeOptions.map((option) => (
                      <button
                        type="button"
                        key={option}
                        className={`jobs-filter-item ${workTypeFilter === option ? 'active' : ''}`}
                        onClick={() => {
                          setWorkTypeFilter(option)
                          setOpenFilter('')
                        }}
                      >
                        {option === 'All' ? 'Work type' : option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="jobs-list">
              {filteredJobs.slice(0, visibleJobs).map((job) => (
                <article key={job.id} className="job-row">
                  <a href="#" className="job-title-link">{job.title}</a>
                  <p className="job-workplace">{job.workplace}</p>
                  <p className="job-location-text">
                    <strong>{job.locationCity}</strong>, {job.locationDetail}
                  </p>
                  <p className="job-department-text">{job.department}</p>
                  <p className="job-type-text">{job.workType}</p>
                </article>
              ))}
              {filteredJobs.length === 0 && (
                <p className="no-results">No matching roles found yet. Try broadening the search or clearing filters.</p>
              )}
            </div>

            {filteredJobs.length > 11 && (
              <div className="show-more-wrap">
                <button
                  type="button"
                  className="show-more-btn"
                  onClick={() => setVisibleJobs(isExpandedJobsList ? 11 : filteredJobs.length)}
                >
                  {isExpandedJobsList ? 'Show less' : 'Show more'}
                </button>
              </div>
            )}

            <div className="jobs-email-strip">
              <p>bayutdubizzle@jobs.workablemail.com</p>
              <a href="mailto:bayutdubizzle@jobs.workablemail.com" className="jobs-email-btn">
                Email my resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section presence-section">
        <div className="container">
          <h2 className="section-heading">Our Presence</h2>
          <div className="presence-rows">
            {officeLocations.map((office, idx) => {
              const isOddRow = idx % 2 === 0
              const infoBox = (
                <div key={`info-${office.name}`} className="presence-info-box">
                  <h3 className="presence-office-name">{office.name}</h3>
                  <p className="presence-office-address">{office.address}</p>
                </div>
              )
              const mapBox = (
                <iframe
                  key={`map-${office.name}`}
                  className="presence-map-iframe"
                  src={office.mapUrl}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )
              return (
                <div key={office.name} className="presence-row">
                  {isOddRow ? infoBox : mapBox}
                  {isOddRow ? mapBox : infoBox}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section socials-section">
        <div className="container socials-sections-wrap">
          {['Bayut Socials', 'dubizzle Socials'].map((title) => (
            <div key={title} className="social-block">
              <p className="social-label">{title}</p>
              <div className="social-icons-row">
                <a href="https://www.facebook.com/dubizzle" className="social-icon-btn facebook" aria-label={`${title} Facebook`} target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://x.com/dubizzle" className="social-icon-btn x-twitter" aria-label={`${title} X`} target="_blank" rel="noopener noreferrer">
                  <FaXTwitter />
                </a>
                <a href="https://www.linkedin.com/company/dubizzle-com/" className="social-icon-btn linkedin" aria-label={`${title} LinkedIn`} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/dubizzle" className="social-icon-btn instagram" aria-label={`${title} Instagram`} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.youtube.com/user/Dubizzle" className="social-icon-btn youtube" aria-label={`${title} YouTube`} target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="container socials-divider" />
        <div className="container socials-footer-links">
          <Link to="/" className="utility-link view-website-link">
            View website
          </Link>
          <a href="#" className="utility-link help-link">
            Help <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="container socials-bottom-bar">
          <span>Powered by</span>
          <span className="power-brand">Workable</span>
          <span>|</span>
          <Link to="/terms" className="footer-small-link">Terms of Use</Link>
          <span>|</span>
          <Link to="/legal-hub" className="footer-small-link">Legal Hub</Link>
          <span>|</span>
          <a href="#" className="footer-small-link">Cookie settings</a>
          <span>|</span>
          <a href="#" className="footer-small-link">Accessibility <span aria-hidden="true">↗</span></a>
        </div>
      </section>


      <style>{`
        .careers-page {
          color: ${TEXT_DARK};
          background: #ffffff;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .container-fluid {
          width: 100%;
        }
        .section {
          padding: 60px 0;
        }
        .section-compact {
          padding: 0;
        }
        .section-heading {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 40px;
          font-weight: 700;
        }
        .careers-hero {
          position: relative;
          height: 55vh;
          min-height: 380px;
          max-height: 520px;
          overflow: hidden;
          background-image: url('https://d2y4rc9q318ytb.cloudfront.net/accounts/5d76fbb5-ef6d-42cf-9465-0f0f079ada42/1761468073358-24b45b87.png');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .careers-hero-content {
          position: relative;
          z-index: 2;
          color: #ffffff;
          text-align: center;
          max-width: 900px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .hero-part-of {
          color: #d6d6d6;
          font-size: 0.82rem;
          margin: 0 0 2px;
          letter-spacing: 0.01em;
        }
        .hero-jobs-wrap {
          margin-top: 16px;
          display: flex;
          justify-content: center;
          width: 100%;
        }
        .hero-view-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #ec0000;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          width: 110px;
          height: 44px;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          line-height: 1;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .hero-view-btn:hover {
          background: #c0111f;
          transform: translateY(-1px);
        }
        .hero-corner-badge {
          position: absolute;
          z-index: 2;
          display: block;
          object-fit: contain;
        }
        .hero-corner-badge-top {
          top: 0;
          right: 0;
          width: clamp(60px, 7vw, 90px);
          height: auto;
        }
        .hero-corner-badge-bottom {
          left: 0;
          bottom: 0;
          width: clamp(48px, 5.5vw, 70px);
          height: auto;
        }
        .careers-hero-content h1 {
          font-size: 2.1rem;
        }
        .careers-hero-content p {
          max-width: 760px;
          line-height: 1.6;
          font-size: 1rem;
        }
        .about-us-details {
          background: #f1f1f1;
        }
        .about-line {
          max-width: 900px;
          margin: 0 auto 24px;
          text-align: center;
          line-height: 1.8;
          color: #555555;
          font-size: 1.05rem;
        }
        .about-highlight {
          font-weight: 600;
          color: #4a4a4a;
        }
        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: center;
        }
        .two-col img,
        .full-banner-image,
        .photo-grid img {
          width: 100%;
          height: auto;
          display: block;
        }
        .section-copy {
          font-size: 1rem;
          line-height: 1.8;
        }
        .community-section {
          background: ${LIGHT_GRAY};
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .stat-card {
          background: #ffffff;
          padding: 24px 18px;
          text-align: center;
        }
        .stat-card h3 {
          font-size: 2.4rem;
          color: #1a1a2e;
          margin-bottom: 10px;
          font-weight: 700;
        }
        .stat-card p {
          line-height: 1.5;
          color: #555555;
          font-size: 0.95rem;
        }
        .diversity-copy {
          line-height: 1.8;
          text-align: center;
          max-width: 980px;
          margin: 0 auto 16px;
          color: #555555;
          font-size: 1.05rem;
        }
        .diversity-intro {
          font-weight: 600;
          color: #4a4a4a;
          margin-bottom: 20px;
        }
        .video-embed-wrap {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          margin-top: 32px;
          border-radius: 0;
          overflow: hidden;
          background: #000;
        }
        .video-embed-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
        .testimonials-section {
          background: #ffffff;
          font-family: Inter, "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        .testimonials-section .section-heading {
          color: #2f2f2f;
          font-size: 2.35rem;
          font-weight: 800;
          margin-bottom: 12px;
        }
        .testimonials-subtitle {
          text-align: center;
          color: #9a9a9a;
          font-size: 1rem;
          margin: 0 0 52px;
          font-weight: 400;
        }
        .testimonials-image-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 34px;
          align-items: start;
        }
        .testimonial-image-panel img {
          width: 100%;
          height: auto;
          display: block;
        }
        .photo-grid {
          display: grid;
          gap: 10px;
        }
        .dubai-office-section .section-heading {
          margin-bottom: 22px;
        }
        .dubai-photo-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }
        .dubai-photo-card {
          border-radius: 0;
          overflow: hidden;
          background: #ffffff;
          box-shadow: none;
          transition: none;
        }
        .dubai-photo-card img {
          width: 100%;
          aspect-ratio: 4 / 3;
          height: auto;
          object-fit: cover;
          display: block;
        }
        .jordan-office-section .section-heading {
          margin-bottom: 22px;
        }
        .jordan-gallery {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          align-items: stretch;
        }
        .jordan-fig {
          margin: 0;
          border-radius: 10px;
          overflow: hidden;
          background: #ececec;
        }
        .jordan-fig > img {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
        }
        .jordan-side-left {
          grid-column: 1;
        }
        .jordan-center-top {
          grid-column: 2;
        }
        .jordan-side-right {
          grid-column: 3;
        }
        .cols-4 {
          grid-template-columns: repeat(4, 1fr);
        }
        .cols-3 {
          grid-template-columns: repeat(3, 1fr);
        }
        .cols-2 {
          grid-template-columns: repeat(2, 1fr);
        }
        .section-jobs {
          background: #ffffff;
          font-family: Inter, "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        .jobs-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .section-jobs .section-heading {
          font-size: 36px;
          font-weight: 800;
          color: #333333;
          margin-bottom: 18px;
        }
        .work-copy {
          text-align: center;
          max-width: 950px;
          margin: 0 auto 30px;
          line-height: 1.65;
          color: #6c6c6c;
          font-size: 15px;
        }
        .jobs-search-wrap {
          position: relative;
          margin-bottom: 16px;
        }
        .jobs-search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #9e9e9e;
          font-size: 16px;
          pointer-events: none;
        }
        .jobs-search-input {
          width: 100%;
          border: 1px solid #dddddd;
          border-radius: 6px;
          padding: 12px 16px 12px 34px;
          font-size: 15px;
          outline: none;
        }
        .jobs-search-input:focus {
          border-color: #bdbdbd;
        }
        .jobs-filters-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 14px;
          position: relative;
          z-index: 4;
        }
        .jobs-filter {
          position: relative;
        }
        .jobs-filter-trigger {
          width: 100%;
          border: 1px solid #dddddd;
          border-radius: 6px;
          padding: 10px 12px;
          text-align: left;
          color: #7c7c7c;
          background: #ffffff;
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          outline: none;
        }
        .jobs-filter-arrow {
          color: #777777;
          font-size: 14px;
          transform: rotate(0deg);
          transition: transform 0.2s ease;
        }
        .jobs-filter-arrow.open {
          transform: rotate(180deg);
        }
        .jobs-filter-menu {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: #ffffff;
          border: 1px solid #d8d8d8;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(10, 10, 10, 0.12);
          z-index: 12;
        }
        .jobs-filter-menu-searchable {
          padding: 10px;
        }
        .jobs-filter-search-wrap {
          position: relative;
          margin-bottom: 10px;
        }
        .jobs-filter-search-icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #8d8d8d;
          font-size: 14px;
        }
        .jobs-filter-search-input {
          width: 100%;
          border: 1px solid #bfc4cb;
          border-radius: 8px;
          padding: 9px 12px 9px 30px;
          font-size: 15px;
          outline: none;
        }
        .jobs-filter-scroll {
          max-height: 214px;
          overflow-y: auto;
        }
        .jobs-filter-item {
          width: 100%;
          border: none;
          background: #ffffff;
          text-align: left;
          padding: 12px 14px;
          font-size: 15px;
          color: #4c4f57;
          cursor: pointer;
        }
        .jobs-filter-item:hover {
          background: #f8f8f8;
        }
        .jobs-filter-item.active {
          background: #fffde8;
          color: #1f2430;
        }
        .jobs-list {
          width: 100%;
          border-top: 1px solid #eeeeee;
        }
        .job-row {
          display: grid;
          grid-template-columns: 2.3fr 0.95fr 1.9fr 1.9fr 0.9fr;
          gap: 12px;
          align-items: center;
          padding: 18px 0;
          border-bottom: 1px solid #eeeeee;
          transition: background-color 0.2s ease;
        }
        .job-row:hover {
          background: #fafafa;
        }
        .job-title-link {
          color: #c0392b;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          line-height: 1.35;
        }
        .job-title-link:hover {
          text-decoration: underline;
        }
        .job-workplace {
          margin: 0;
          color: #353535;
          font-weight: 700;
          font-size: 15px;
        }
        .job-location-text,
        .job-department-text,
        .job-type-text {
          margin: 0;
          color: #666666;
          font-size: 15px;
          line-height: 1.35;
        }
        .job-location-text strong {
          color: #4b4b4b;
          font-weight: 700;
        }
        .show-more-wrap {
          display: flex;
          justify-content: center;
          margin-top: 24px;
          margin-bottom: 24px;
        }
        .show-more-btn {
          border: none;
          background: #e8132d;
          color: #ffffff;
          border-radius: 8px;
          padding: 10px 24px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 140px;
        }
        .show-more-btn:hover {
          background: #c71026;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(232, 19, 45, 0.25);
        }
        .jobs-email-strip {
          margin-top: 32px;
          padding-top: 32px;
          border-top: 1px solid #eaeaea;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .jobs-email-strip p {
          margin: 0;
          color: #4a4a4a;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.4;
        }
        .jobs-email-btn {
          text-decoration: none;
          border: none;
          background: #e8132d;
          color: #ffffff;
          border-radius: 8px;
          padding: 10px 24px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 140px;
        }
        .jobs-email-btn:hover {
          background: #c71026;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(232, 19, 45, 0.25);
        }
        .no-results {
          color: #6b7280;
          text-align: center;
          padding: 32px 0;
          font-size: 1rem;
          background: #f8fafc;
          border-radius: 12px;
          margin-top: 16px;
        }
        .socials-section {
          padding: 3rem 0 2rem;
          background: #ffffff;
        }
        .socials-sections-wrap {
          display: grid;
          gap: 60px;
          justify-items: center;
        }
        .social-block {
          width: 100%;
          max-width: 720px;
          text-align: center;
        }
        .social-label {
          margin: 0 0 24px;
          color: #9b9b9b;
          font-size: 15px;
          font-weight: 400;
          letter-spacing: 0.01em;
        }
        .social-icons-row {
          display: flex;
          justify-content: center;
          gap: 28px;
          flex-wrap: wrap;
        }
        .social-icon-btn {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          flex-shrink: 0;
          font-size: 24px;
        }
        /* Facebook - No background, just blue icon */
        .social-icon-btn.facebook {
          background: transparent;
          color: #1877f2;
        }
        .social-icon-btn.facebook:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(24, 119, 242, 0.15);
        }
        /* X (Twitter) - Black circle background, white icon */
        .social-icon-btn.x-twitter {
          background: #000000;
          color: #ffffff;
          border-radius: 50%;
        }
        .social-icon-btn.x-twitter:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }
        /* LinkedIn - Blue rounded square, white icon */
        .social-icon-btn.linkedin {
          background: #0a66c2;
          color: #ffffff;
          border-radius: 8px;
        }
        .social-icon-btn.linkedin:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(10, 102, 194, 0.25);
        }
        /* Instagram - Orange gradient border outline, no fill */
        .social-icon-btn.instagram {
          background: transparent;
          color: #e1306c;
          border: 2.5px solid;
          border-image: linear-gradient(135deg, #f77737 0%, #e1306c 100%) 1;
          border-radius: 10px;
        }
        .social-icon-btn.instagram:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(225, 48, 108, 0.15);
        }
        /* YouTube - Red filled rounded rectangle, white icon */
        .social-icon-btn.youtube {
          background: #ff0000;
          color: #ffffff;
          border-radius: 8px;
        }
        .social-icon-btn.youtube:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 0, 0, 0.25);
        }
        .socials-divider {
          height: 1px;
          margin: 32px auto;
          background: #e0e0e0;
          width: 100%;
          max-width: 880px;
        }
        .socials-footer-links {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin: 20px auto 0;
        }
        .utility-link {
          font-size: 14px;
          color: #6b7280;
          text-decoration: none;
          font-weight: 500;
        }
        .view-website-link {
          color: #c0392b;
        }
        .help-link {
          color: #6b7280;
        }
        .help-link span {
          margin-left: 6px;
          font-size: 14px;
        }
        .socials-bottom-bar {
          margin: 18px auto 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 10px;
          padding: 16px 0;
          background: #f5f5f5;
          color: #6b7280;
          font-size: 13px;
        }
        .socials-bottom-bar span,
        .socials-bottom-bar a {
          color: inherit;
          text-decoration: none;
          font-weight: 400;
        }
        .power-brand {
          color: #c0392b;
          font-weight: 700;
          margin: 0 4px;
        }
        .footer-small-link {
          color: #6b7280;
          font-weight: 500;
        }
        .footer-small-link span {
          margin-left: 4px;
        }
        .presence-section {
          padding: 60px 0;
          background: #ffffff;
        }
        .presence-section .container {
          max-width: 1080px;
          margin: 0 auto;
        }
        .presence-section .section-heading {
          font-size: 2rem;
          margin-bottom: 32px;
          letter-spacing: 0.01em;
        }
        .presence-rows {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .presence-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 220px;
          gap: 0;
          border-bottom: 1px solid rgba(58, 63, 82, 0.08);
        }
        .presence-row:last-child {
          border-bottom: none;
        }
        .presence-info-box {
          background: #3a3f52;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 1.6rem 1.75rem;
          min-height: 220px;
        }
        .presence-office-name {
          margin: 0 0 10px;
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
        }
        .presence-office-address {
          margin: 0;
          font-size: 0.95rem;
          color: #d0d0d0;
          line-height: 1.7;
          max-width: 100%;
        }
        .presence-map-iframe {
          width: 100% !important;
          height: 220px !important;
          border: none !important;
          display: block;
        }
        @media (max-width: 768px) {
          .presence-row {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .presence-info-box {
            min-height: 190px;
          }
          .presence-map-iframe {
            height: 220px !important;
          }
        }
        .careers-footer {
          border-top: 1px solid #eeeeee;
          padding: 28px 0 36px;
          text-align: center;
        }
        .video-modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 99;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .video-dialog {
          width: min(900px, 95vw);
          background: #111111;
          padding: 16px;
          position: relative;
        }
        .close-modal {
          position: absolute;
          right: 8px;
          top: 8px;
          width: 36px;
          height: 36px;
          border: none;
          background: #ffffff;
          cursor: pointer;
        }
        .video-frame {
          width: 100%;
          height: auto;
          display: block;
        }

        @media (max-width: 768px) {
          .section {
            padding: 48px 0;
          }
          .section-heading {
            font-size: 1.75rem;
            margin-bottom: 28px;
          }
          .two-col {
            grid-template-columns: 1fr;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonials-image-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .dubai-photo-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .dubai-photo-card img {
            aspect-ratio: 4 / 3;
            height: auto;
          }
          .jordan-gallery {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .jordan-side-left,
          .jordan-center-top,
          .jordan-side-right {
            grid-column: 1;
            min-height: 0;
          }
          .cols-4 {
            grid-template-columns: repeat(3, 1fr);
          }
          .cols-3 {
            grid-template-columns: repeat(3, 1fr);
          }
          .cols-2 {
            grid-template-columns: repeat(2, 1fr);
          }
          .presence-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .jobs-filters-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 480px) {
          .careers-hero {
            min-height: 460px;
          }
          .hero-corner-badge-top {
            width: 72px;
            height: 108px;
            right: 8px;
            top: 10px;
          }
          .hero-corner-badge-bottom {
            width: 58px;
            height: 58px;
            bottom: 8px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonials-image-grid {
            grid-template-columns: 1fr;
          }
          .dubai-photo-grid {
            grid-template-columns: 1fr;
          }
          .dubai-photo-card img {
            aspect-ratio: 4 / 3;
            height: auto;
          }
          .cols-4,
          .cols-3,
          .cols-2 {
            grid-template-columns: repeat(2, 1fr);
          }
          .presence-grid {
            grid-template-columns: 1fr;
          }
          .section-jobs .section-heading {
            font-size: 2rem;
          }
          .work-copy {
            margin-bottom: 20px;
          }
          .jobs-filters-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .job-row {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 14px 0;
          }
          .job-workplace,
          .job-department-text,
          .job-type-text {
            display: none;
          }
          .job-location-text {
            font-size: 14px;
          }
          .jobs-email-strip {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 16px;
            margin-top: 24px;
            padding-top: 24px;
          }
          .jobs-email-strip p {
            font-size: 16px;
          }
          .jobs-email-btn {
            width: 100%;
            font-size: 16px;
            padding: 14px 20px;
          }
          .show-more-btn {
            width: 100%;
          }
          .banner-dark h3 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  )
}
