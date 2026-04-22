import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import PostAdModal from '../components/PostAdModal'

/* ─── Sidebar nav items ─── */
const sidebarLinks = [
  { id: 'terms-of-use',                      label: 'Terms of Use' },
  { id: 'additional-terms-property',         label: 'Additional Terms – Property' },
  { id: 'additional-terms-motors',           label: 'Additional Terms – Motors' },
  { id: 'additional-terms-jobs',             label: 'Additional Terms – Jobs' },
  { id: 'additional-terms-holiday-homes',    label: 'Additional Terms – Holiday Homes' },
  { id: 'additional-terms-vba',              label: 'Additional Terms – Verified Business Account' },
  { id: 'acceptable-use-policy',             label: 'Acceptable Use Policy' },
  { id: 'vehicle-inspection-terms',          label: 'Vehicle Inspection Terms and Conditions' },
  { id: 'vehicle-auction-terms',             label: 'Vehicle Auction Terms and Conditions' },
  { id: 'vehicle-intermediary-terms',        label: 'Vehicle Intermediary Services Terms and Conditions' },
  { id: 'vehicle-evaluation-terms',          label: 'Vehicle Evaluation Terms and Conditions' },
]

/* ─── ChevronRight icon ─── */
const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

/* ─── Section heading helper ─── */
function SectionHeading({ id, children }) {
  return (
    <h2
      id={id}
      style={{
        fontSize: 20,
        fontWeight: 700,
        color: '#1a1a1a',
        margin: '0 0 16px',
        paddingTop: 8,
        borderBottom: '2px solid #E8001C',
        paddingBottom: 8,
        scrollMarginTop: 80,
      }}
    >
      {children}
    </h2>
  )
}

function SubHeading({ children }) {
  return (
    <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', margin: '20px 0 8px' }}>
      {children}
    </h3>
  )
}

function P({ children, style }) {
  return (
    <p style={{ fontSize: 14, color: '#444', lineHeight: 1.75, margin: '0 0 12px', ...style }}>
      {children}
    </p>
  )
}

function OL({ children, type = '1', style }) {
  return (
    <ol type={type} style={{ fontSize: 14, color: '#444', lineHeight: 1.75, margin: '0 0 12px', paddingLeft: 24, ...style }}>
      {children}
    </ol>
  )
}

function UL({ children }) {
  return (
    <ul style={{ fontSize: 14, color: '#444', lineHeight: 1.75, margin: '0 0 12px', paddingLeft: 24 }}>
      {children}
    </ul>
  )
}

function LI({ children }) {
  return <li style={{ marginBottom: 6 }}>{children}</li>
}

function A({ href, children }) {
  return (
    <a
      href={href}
      style={{ color: '#0066CC', textDecoration: 'none' }}
      onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
      onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════ */
export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('terms-of-use')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)  // ← PostAdModal state
  const contentRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = sidebarLinks.map(l => document.getElementById(l.id)).filter(Boolean)
      const scrollY = window.scrollY + 100
      let current = sidebarLinks[0].id
      for (const el of sections) {
        if (el.offsetTop <= scrollY) current = el.id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 76
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setMobileNavOpen(false)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff', fontFamily: "'Segoe UI', Arial, sans-serif" }}>

      {/* ── Header ── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', height: 56,
        borderBottom: '1px solid #e0e0e0', background: '#fff',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      }}>
        <Link to="/" aria-label="dubizzle home">
          <Logo width={110} height={26} />
        </Link>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          style={{
            background: '#e00718', color: '#fff', border: 'none',
            borderRadius: 8, padding: '8px 16px',
            fontWeight: 800, fontSize: 11, cursor: 'pointer',
            letterSpacing: 0.5, textTransform: 'uppercase',
          }}
        >
          Place Your Ad
        </button>
      </header>

      {/* ── Page title banner ── */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)',
        padding: '36px 40px',
      }}>
        <div style={{ maxWidth: 1232, margin: '0 auto' }}>
          <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700, color: '#fff' }}>Terms of Use</h1>
          <p style={{ margin: '8px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
            Last updated: 1 January 2024
          </p>
        </div>
      </div>

      {/* ── Body: sidebar + content ── */}
      <div style={{ flex: 1, maxWidth: 1232, margin: '0 auto', width: '100%', padding: '40px 40px', boxSizing: 'border-box' }}>
        <div className="terms-layout" style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>

          {/* ── LEFT SIDEBAR ── */}
          <aside className="terms-sidebar" style={{
            width: 260, flexShrink: 0,
            position: 'sticky', top: 72,
            maxHeight: 'calc(100vh - 96px)',
            overflowY: 'auto',
            border: '1px solid #e8e8e8',
            borderRadius: 10,
            padding: '16px 0',
            background: '#fafafa',
          }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: 1, padding: '0 16px 10px', margin: 0 }}>
              On This Page
            </p>
            <nav>
              {sidebarLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    width: '100%', textAlign: 'left',
                    padding: '8px 16px',
                    background: activeSection === link.id ? '#fff1f2' : 'transparent',
                    border: 'none',
                    borderLeft: activeSection === link.id ? '3px solid #E8001C' : '3px solid transparent',
                    cursor: 'pointer',
                    fontSize: 13,
                    color: activeSection === link.id ? '#E8001C' : '#444',
                    fontWeight: activeSection === link.id ? 600 : 400,
                    lineHeight: 1.4,
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => { if (activeSection !== link.id) e.currentTarget.style.background = '#f5f5f5' }}
                  onMouseLeave={e => { if (activeSection !== link.id) e.currentTarget.style.background = 'transparent' }}
                >
                  {activeSection === link.id && <span style={{ flexShrink: 0, color: '#E8001C' }}><ChevronRight /></span>}
                  {link.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* ── MAIN CONTENT ── */}
          <main ref={contentRef} style={{ flex: 1, minWidth: 0 }}>

            {/* ─── 1. TERMS OF USE ─── */}
            <section style={{ marginBottom: 48 }}>
              <SectionHeading id="terms-of-use">Terms of Use</SectionHeading>
              <P>Welcome to dubizzle. Please read these Terms of Use carefully before using the dubizzle website or mobile applications (collectively, the "<strong>Platform</strong>"). These Terms of Use apply to all users of the Platform.</P>
              <P>By accessing or using the Platform, you agree to be bound by these Terms of Use and our <Link to="/legal-hub" style={{ color: '#0066CC', textDecoration: 'none' }} onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')} onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}>Privacy Policy</Link>, which is incorporated herein by reference. If you do not agree to these Terms of Use, please do not use the Platform.</P>
              <SubHeading>1. Who We Are</SubHeading>
              <P>The Platform is operated by Dubizzle Limited, a company incorporated in the UAE. References to "<strong>dubizzle</strong>", "<strong>we</strong>", "<strong>us</strong>" or "<strong>our</strong>" in these Terms of Use are references to Dubizzle Limited.</P>
              <SubHeading>2. Your Use of the Platform</SubHeading>
              <P>You may use the Platform only if you can form a binding contract with dubizzle, and only in compliance with these Terms of Use and all applicable laws. When you create your dubizzle account and subsequently use the Platform, you represent and warrant that:</P>
              <OL>
                <LI>you are at least 18 years of age;</LI>
                <LI>you have the right, authority, and capacity to enter into these Terms of Use and to abide by all of the terms and conditions set out here;</LI>
                <LI>you will use the Platform in a manner consistent with any and all applicable laws and regulations;</LI>
                <LI>all information you provide to us is complete, current and accurate; and</LI>
                <LI>you will maintain the accuracy of such information.</LI>
              </OL>
              <SubHeading>3. Your Account</SubHeading>
              <P>To access certain features of the Platform, you must register for an account. When you register for an account, you may be required to provide us with some information about yourself, such as your name, email address, or other contact information.</P>
              <P>You are responsible for keeping your account credentials secure. You must notify us immediately of any unauthorised use of your account. dubizzle will not be liable for any losses caused by any unauthorised use of your account.</P>
              <SubHeading>4. Content and Listings</SubHeading>
              <P>The Platform allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("<strong>Content</strong>"). You are responsible for the Content that you post to the Platform, including its legality, reliability, and appropriateness.</P>
              <P>By posting Content to the Platform, you grant us the right and licence to use, modify, perform, display, reproduce, and distribute such Content on and through the Platform. You retain any and all of your rights to any Content you submit, post or display on or through the Platform.</P>
              <P>You represent and warrant that:</P>
              <OL type="a">
                <LI>the Content is yours (you own it) or you have the right to use it and grant us the rights and licence as provided in these Terms;</LI>
                <LI>the posting of your Content on or through the Platform does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity; and</LI>
                <LI>the Content does not contain material that is false, intentionally misleading, or defamatory; and does not violate any law or regulation.</LI>
              </OL>
              <SubHeading>5. Prohibited Activities</SubHeading>
              <P>You may not use the Platform for any purpose that is unlawful or prohibited by these Terms. You agree not to:</P>
              <UL>
                <LI>post any Content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libellous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable;</LI>
                <LI>impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity;</LI>
                <LI>post any unsolicited or unauthorised advertising, promotional materials, "junk mail," "spam," "chain letters," "pyramid schemes," or any other form of solicitation;</LI>
                <LI>post any material that contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment;</LI>
                <LI>engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Platform;</LI>
                <LI>use the Platform in any manner that could disable, overburden, damage, or impair the site or servers or networks connected to the Platform;</LI>
                <LI>use any robot, spider or other automatic device, process or means to access the Platform for any purpose, including monitoring or copying any of the material on the Platform;</LI>
                <LI>collect or harvest any personally identifiable information, including account names, from the Platform.</LI>
              </UL>
              <SubHeading>6. Fees and Payment</SubHeading>
              <P>Some features of the Platform may be subject to payment of fees. You agree to pay all applicable fees for any features or services you purchase. All fees are stated in UAE Dirhams (AED) unless otherwise indicated. Fees are non-refundable unless otherwise stated.</P>
              <P>dubizzle reserves the right to change its fees at any time with reasonable notice. Continued use of the Platform after a fee change constitutes your agreement to the new fee structure.</P>
              <SubHeading>7. Intellectual Property</SubHeading>
              <P>The Platform and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of dubizzle and its licensors. The Platform is protected by copyright, trademark, and other laws of the UAE and foreign countries.</P>
              <P>Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of dubizzle.</P>
              <SubHeading>8. Third-Party Links</SubHeading>
              <P>The Platform may contain links to third-party websites or services that are not owned or controlled by dubizzle. dubizzle has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services.</P>
              <P>We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.</P>
              <SubHeading>9. Disclaimer of Warranties</SubHeading>
              <P>The Platform is provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, either express or implied, including without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement. dubizzle does not warrant that the Platform will function uninterrupted, secure or available at any particular time or location, or that any errors or defects will be corrected.</P>
              <SubHeading>10. Limitation of Liability</SubHeading>
              <P>To the maximum extent permitted by applicable law, in no event shall dubizzle, its affiliates, directors, employees, agents, suppliers or licensors be liable for any indirect, punitive, incidental, special, consequential or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data or other intangible losses, arising out of or relating to the use of, or inability to use, the Platform.</P>
              <SubHeading>11. Indemnification</SubHeading>
              <P>You agree to defend, indemnify and hold harmless dubizzle and its licensees and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of:</P>
              <OL type="a">
                <LI>your use of and access to the Platform;</LI>
                <LI>your violation of any term of these Terms of Use;</LI>
                <LI>your violation of any third party right, including without limitation any copyright, property, or privacy right; or</LI>
                <LI>any claim that your Content caused damage to a third party.</LI>
              </OL>
              <SubHeading>12. Governing Law</SubHeading>
              <P>These Terms of Use shall be governed and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions. Any disputes arising under these Terms of Use shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.</P>
              <SubHeading>13. Changes to Terms</SubHeading>
              <P>We reserve the right, at our sole discretion, to modify or replace these Terms of Use at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</P>
              <P>By continuing to access or use our Platform after those revisions become effective, you agree to be bound by the revised terms.</P>
              <SubHeading>14. Contact Us</SubHeading>
              <P>If you have any questions about these Terms of Use, please contact us at <A href="mailto:support@dubizzle.com">support@dubizzle.com</A>.</P>
            </section>

            {/* ─── 2. ADDITIONAL TERMS – PROPERTY ─── */}
            <section style={{ marginBottom: 48 }}>
              <SectionHeading id="additional-terms-property">Additional Terms – Property</SectionHeading>
              <P>These additional terms apply to all users who list or search for property on the Platform, in addition to the general Terms of Use above.</P>
              <SubHeading>1. Property Listings</SubHeading>
              <P>All property listings must:</P>
              <UL>
                <LI>be for real properties located in the UAE;</LI>
                <LI>include accurate and up-to-date information including price, location, size and number of bedrooms;</LI>
                <LI>be posted only by the property owner or an authorised real estate agent;</LI>
                <LI>comply with all applicable UAE real estate laws and regulations, including RERA regulations where applicable.</LI>
              </UL>
              <SubHeading>2. Real Estate Agents</SubHeading>
              <P>Real estate agents who post listings on the Platform represent and warrant that they hold a valid and current licence from the relevant regulatory authority (such as RERA in Dubai) and that they are authorised by the property owner to list the property.</P>
              <SubHeading>3. Off-Plan Properties</SubHeading>
              <P>Listings for off-plan properties must clearly indicate that the property is off-plan and include the expected completion date and developer details. Off-plan listings must comply with all applicable laws and regulations including any requirements set by RERA or equivalent authorities.</P>
              <SubHeading>4. Prohibited Property Listings</SubHeading>
              <P>The following types of listings are not permitted on the Platform:</P>
              <UL>
                <LI>properties not located in the UAE;</LI>
                <LI>duplicate listings for the same property;</LI>
                <LI>listings with misleading or inaccurate information;</LI>
                <LI>listings that violate any applicable law or regulation.</LI>
              </UL>
            </section>

            {/* ─── 3. ADDITIONAL TERMS – MOTORS ─── */}
            <section style={{ marginBottom: 48 }}>
              <SectionHeading id="additional-terms-motors">Additional Terms – Motors</SectionHeading>
              <P>These additional terms apply to all users who list or search for vehicles on the Platform, in addition to the general Terms of Use above.</P>
              <SubHeading>1. Vehicle Listings</SubHeading>
              <UL>
                <LI>be for vehicles physically located in the UAE;</LI>
                <LI>include accurate information including make, model, year, mileage, and price;</LI>
                <LI>only be posted by the vehicle owner or an authorised dealer;</LI>
                <LI>comply with all applicable UAE motor vehicle laws and regulations.</LI>
              </UL>
              <SubHeading>2. Vehicle Dealers</SubHeading>
              <P>Vehicle dealers posting listings on the Platform represent and warrant that they hold all required licences and permits to operate as a vehicle dealer in the UAE.</P>
              <SubHeading>3. Prohibited Vehicle Listings</SubHeading>
              <UL>
                <LI>vehicles with altered or tampered odometers;</LI>
                <LI>stolen vehicles;</LI>
                <LI>vehicles that do not comply with UAE safety standards;</LI>
                <LI>duplicate listings for the same vehicle.</LI>
              </UL>
            </section>

            {/* ─── 4. ADDITIONAL TERMS – JOBS ─── */}
            <section style={{ marginBottom: 48 }}>
              <SectionHeading id="additional-terms-jobs">Additional Terms – Jobs</SectionHeading>
              <P>These additional terms apply to all employers and job seekers who use the jobs section of the Platform, in addition to the general Terms of Use above.</P>
              <SubHeading>1. Job Listings</SubHeading>
              <UL>
                <LI>be for genuine employment opportunities;</LI>
                <LI>include accurate job descriptions, requirements, and compensation;</LI>
                <LI>comply with all applicable UAE labour laws and regulations;</LI>
                <LI>not discriminate on unlawful grounds.</LI>
              </UL>
              <SubHeading>2. Prohibited Job Listings</SubHeading>
              <UL>
                <LI>listings for jobs that do not exist;</LI>
                <LI>listings that require payment from job seekers;</LI>
                <LI>listings that violate UAE labour laws;</LI>
                <LI>listings for activities that are illegal under UAE law.</LI>
              </UL>
            </section>

            {/* ─── 5. ADDITIONAL TERMS – HOLIDAY HOMES ─── */}
            <section style={{ marginBottom: 48 }}>
              <SectionHeading id="additional-terms-holiday-homes">Additional Terms – Holiday Homes</SectionHeading>
              <P>These additional terms apply to all users who list or book holiday homes on the Platform, in addition to the general Terms of Use above.</P>
              <SubHeading>1. Holiday Home Listings</SubHeading>
              <UL>
                <LI>be for properties located in the UAE that are permitted to be rented on a short-term basis;</LI>
                <LI>comply with the Dubai Tourism Commerce and Marketing (DTCM) regulations and all other applicable regulations;</LI>
                <LI>include accurate descriptions and photographs of the property;</LI>
                <LI>clearly state the rental price per night and any additional fees.</LI>
              </UL>
              <SubHeading>2. Licencing Requirements</SubHeading>
              <P>Hosts who list holiday homes must hold a valid holiday home licence issued by the relevant authority (such as DTCM in Dubai). dubizzle reserves the right to request proof of such licence at any time.</P>
            </section>

            {/* ─── 6. ADDITIONAL TERMS – VERIFIED BUSINESS ACCOUNT ─── */}
            <section style={{ marginBottom: 48 }}>
              <SectionHeading id="additional-terms-vba">Additional Terms – Verified Business Account</SectionHeading>
              <P>These additional terms apply to businesses that operate a Verified Business Account on the Platform, in addition to the general Terms of Use above.</P>
              <SubHeading>1. Eligibility</SubHeading>
              <UL>
                <LI>be a legally registered business in the UAE;</LI>
                <LI>hold all required licences and permits to operate your business;</LI>
                <LI>provide accurate and up-to-date business information.</LI>
              </UL>
              <SubHeading>2. Verification Process</SubHeading>
              <P>dubizzle will verify your business information before granting a Verified Business Account. We may request additional documentation at any time. dubizzle reserves the right to revoke a Verified Business Account at any time if we determine that the account holder does not meet the eligibility requirements.</P>
            </section>

            {/* ─── 7. ACCEPTABLE USE POLICY ─── */}
            <section style={{ marginBottom: 48 }}>
              <SectionHeading id="acceptable-use-policy">Acceptable Use Policy</SectionHeading>
              <P>This Acceptable Use Policy sets out the acceptable and unacceptable uses of the Platform. It applies to all users of the Platform in addition to the general Terms of Use.</P>
              <SubHeading>1. Acceptable Uses</SubHeading>
              <UL>
                <LI>buy and sell goods and services legally;</LI>
                <LI>search for and apply for jobs;</LI>
                <LI>list and search for properties;</LI>
                <LI>list and purchase vehicles;</LI>
                <LI>communicate with other users in connection with legitimate transactions.</LI>
              </UL>
              <SubHeading>2. Unacceptable Uses</SubHeading>
              <UL>
                <LI>sell or promote illegal goods or services;</LI>
                <LI>conduct fraudulent activities;</LI>
                <LI>harass, threaten, or intimidate other users;</LI>
                <LI>infringe the intellectual property rights of others;</LI>
                <LI>collect personal data from other users without their consent;</LI>
                <LI>post false, misleading or deceptive content;</LI>
                <LI>circumvent any security or access controls of the Platform;</LI>
                <LI>use the Platform for any commercial purpose other than as expressly permitted by these Terms.</LI>
              </UL>
            </section>

            {/* ─── 8. VEHICLE INSPECTION TERMS ─── */}
            <section style={{ marginBottom: 48 }}>
              <SectionHeading id="vehicle-inspection-terms">Vehicle Inspection Terms and Conditions</SectionHeading>
              <P>These terms and conditions govern the vehicle inspection service provided by dubizzle or its authorised partners.</P>
              <SubHeading>1. Service Description</SubHeading>
              <P>The vehicle inspection service provides a physical inspection of a vehicle by a qualified inspector. The inspection report provides information about the condition of the vehicle at the time of inspection. It is not a guarantee of the vehicle's condition or future performance.</P>
              <SubHeading>2. Booking an Inspection</SubHeading>
              <P>To book a vehicle inspection, you must provide accurate details about the vehicle including its make, model, year and location. dubizzle will arrange for an inspector to inspect the vehicle at the agreed time and location.</P>
              <SubHeading>3. Fees</SubHeading>
              <P>Fees for the vehicle inspection service are as displayed on the Platform at the time of booking. Fees are payable in advance and are non-refundable unless we are unable to carry out the inspection for reasons within our control.</P>
              <SubHeading>4. Limitation of Liability</SubHeading>
              <P>The inspection report is provided for information purposes only and does not constitute a warranty or guarantee of the vehicle's condition. dubizzle and its inspection partners shall not be liable for any inaccuracies in the inspection report.</P>
            </section>

            {/* ─── 9. VEHICLE AUCTION TERMS ─── */}
            <section style={{ marginBottom: 48 }}>
              <SectionHeading id="vehicle-auction-terms">Vehicle Auction Terms and Conditions</SectionHeading>
              <P>These terms and conditions govern the vehicle auction services provided on or through the Platform.</P>
              <SubHeading>1. Participation</SubHeading>
              <P>To participate in a vehicle auction, you must register and be approved by dubizzle. dubizzle reserves the right to refuse participation in any auction at its sole discretion.</P>
              <SubHeading>2. Bidding</SubHeading>
              <P>All bids are binding. By placing a bid, you are making a legally binding offer to purchase the vehicle at the bid price. The highest bidder at the close of the auction will be required to complete the purchase.</P>
              <SubHeading>3. Payment</SubHeading>
              <P>Successful bidders must complete payment within the timeframe specified at the time of auction. Failure to complete payment may result in a penalty and suspension from future auctions.</P>
              <SubHeading>4. Condition of Vehicles</SubHeading>
              <P>All vehicles are sold "as is" unless otherwise stated. dubizzle makes no warranties as to the condition of vehicles sold through auction. It is the responsibility of potential buyers to inspect vehicles prior to bidding.</P>
            </section>

            {/* ─── 10. VEHICLE INTERMEDIARY SERVICES ─── */}
            <section style={{ marginBottom: 48 }}>
              <SectionHeading id="vehicle-intermediary-terms">Vehicle Intermediary Services Terms and Conditions</SectionHeading>
              <P>These terms and conditions govern the vehicle intermediary services provided by dubizzle, where dubizzle acts as an intermediary to facilitate the sale of vehicles between buyers and sellers.</P>
              <SubHeading>1. Service Description</SubHeading>
              <P>The vehicle intermediary service assists sellers in listing their vehicles and connects them with potential buyers. dubizzle does not take ownership of any vehicle and is not a party to any sale transaction.</P>
              <SubHeading>2. Seller Obligations</SubHeading>
              <UL>
                <LI>provide accurate and complete information about their vehicle;</LI>
                <LI>make the vehicle available for inspection upon request;</LI>
                <LI>complete any agreed sale in a timely manner;</LI>
                <LI>transfer valid title to the buyer upon completion of the sale.</LI>
              </UL>
              <SubHeading>3. Fees</SubHeading>
              <P>dubizzle charges a service fee for the vehicle intermediary service. The fee is as displayed on the Platform at the time of listing and is payable upon successful completion of a sale.</P>
            </section>

            {/* ─── 11. VEHICLE EVALUATION TERMS ─── */}
            <section style={{ marginBottom: 48 }}>
              <SectionHeading id="vehicle-evaluation-terms">Vehicle Evaluation Terms and Conditions</SectionHeading>
              <P>These terms and conditions govern the vehicle evaluation (valuation) service provided by dubizzle.</P>
              <SubHeading>1. Service Description</SubHeading>
              <P>The vehicle evaluation service provides an estimated market value for a vehicle based on information provided by the user and market data. The evaluation is not a guarantee of the value at which the vehicle can be sold.</P>
              <SubHeading>2. Accuracy</SubHeading>
              <P>dubizzle makes reasonable efforts to provide accurate evaluations but does not guarantee the accuracy of any evaluation. The actual sale price of a vehicle may differ from the evaluated value depending on market conditions, the condition of the vehicle, and other factors.</P>
              <SubHeading>3. No Warranty</SubHeading>
              <P>The vehicle evaluation is provided for informational purposes only and does not constitute an offer to purchase the vehicle at the evaluated price. dubizzle shall not be liable for any losses incurred as a result of relying on a vehicle evaluation.</P>
              <SubHeading>4. Contact</SubHeading>
              <P>For any questions about these Terms and Conditions, please contact us at <A href="mailto:support@dubizzle.com">support@dubizzle.com</A>.</P>
            </section>

          </main>
        </div>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .terms-layout { flex-direction: column !important; }
          .terms-sidebar { width: 100% !important; position: static !important; max-height: none !important; }
        }
        @media (max-width: 600px) {
          .terms-layout { padding: 24px 20px !important; }
        }
      `}</style>

      {/* ── Post Ad Modal ── */}
      <PostAdModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

    </div>
  )
}