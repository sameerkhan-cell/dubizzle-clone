import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DubaiPage from './pages/DubaiPage'
import AbuDhabiPage from './pages/AbuDhabiPage'
import SharjahPage from './pages/SharjahPage'
import AjmanPage from './pages/AjmanPage'
import AlAinPage from './pages/AlAinPage'
import RasAlKhaimahPage from './pages/RasAlKhaimahPage'
import FujairahPage from './pages/FujairahPage'
import UmmAlQuwainPage from './pages/UmmAlQuwainPage'
import AboutUs from './pages/AboutUs'
import AdvertisingPage from './pages/AdvertisingPage'
import CareersPage from './pages/CareersPage'
import LegalHub from './components/LegalHub'
import ContactUs from './components/ContactUs'
import TermsPage from './pages/TermsPage'
import HelpCenterPage from './pages/HelpCenterPage'
import EgyptPage from './pages/EgyptPage'
import BahrainPage from './pages/BahrainPage'
import JordanPage from './pages/JordanPage'
import KuwaitPage from './pages/KuwaitPage'
import OmanPage from './pages/OmanPage'
import PakistanPage from './pages/PakistanPage'

/* ── Mobile layout (additive — zero impact on desktop) ── */
import ResponsivePage from './mobile/ResponsivePage'
import MobileHome from './mobile/MobileHome'


export default function App() {
  return (
    <Routes>
      {/* Homepage — renders LandingPage on all devices */}
      <Route path="/" element={<LandingPage />} />

      {/* UAE city pages: mobile → MobileHome, desktop → existing page */}
      <Route path="/dubai" element={<ResponsivePage desktop={<DubaiPage />} mobile={<MobileHome city="Dubai" />} />} />
      <Route path="/abu-dhabi" element={<ResponsivePage desktop={<AbuDhabiPage />} mobile={<MobileHome city="Abu Dhabi" />} />} />
      <Route path="/city/sharjah" element={<ResponsivePage desktop={<SharjahPage />} mobile={<MobileHome city="Sharjah" />} />} />
      <Route path="/city/ajman" element={<ResponsivePage desktop={<AjmanPage />} mobile={<MobileHome city="Ajman" />} />} />
      <Route path="/city/al-ain" element={<ResponsivePage desktop={<AlAinPage />} mobile={<MobileHome city="Al Ain" />} />} />
      <Route path="/city/ras-al-khaimah" element={<ResponsivePage desktop={<RasAlKhaimahPage />} mobile={<MobileHome city="Ras Al Khaimah" />} />} />
      <Route path="/city/fujairah" element={<ResponsivePage desktop={<FujairahPage />} mobile={<MobileHome city="Fujairah" />} />} />
      <Route path="/city/umm-al-quwain" element={<ResponsivePage desktop={<UmmAlQuwainPage />} mobile={<MobileHome city="Umm Al Quwain" />} />} />

      {/* Country pages: mobile → MobileHome, desktop → country page */}
      <Route path="/egypt" element={<ResponsivePage desktop={<EgyptPage />} mobile={<MobileHome city="Egypt" />} />} />
      <Route path="/bahrain" element={<ResponsivePage desktop={<BahrainPage />} mobile={<MobileHome city="Bahrain" />} />} />
      <Route path="/jordan" element={<ResponsivePage desktop={<JordanPage />} mobile={<MobileHome city="Jordan" />} />} />
      <Route path="/kuwait" element={<ResponsivePage desktop={<KuwaitPage />} mobile={<MobileHome city="Kuwait" />} />} />
      <Route path="/oman" element={<ResponsivePage desktop={<OmanPage />} mobile={<MobileHome city="Oman" />} />} />
      <Route path="/pakistan" element={<ResponsivePage desktop={<PakistanPage />} mobile={<MobileHome city="Pakistan" />} />} />

      {/* Info pages: no mobile override, existing code untouched */}
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/advertising" element={<AdvertisingPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/legal-hub" element={<LegalHub />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/help" element={<HelpCenterPage />} />
    </Routes>
  )
}