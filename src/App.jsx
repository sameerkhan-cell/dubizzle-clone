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


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dubai" element={<DubaiPage />} />
      <Route path="/abu-dhabi" element={<AbuDhabiPage />} />
      <Route path="/city/sharjah" element={<SharjahPage />} />
      <Route path="/city/ajman" element={<AjmanPage />} />
      <Route path="/city/al-ain" element={<AlAinPage />} />
      <Route path="/city/ras-al-khaimah" element={<RasAlKhaimahPage />} />
      <Route path="/city/fujairah" element={<FujairahPage />} />
      <Route path="/city/umm-al-quwain" element={<UmmAlQuwainPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/advertising" element={<AdvertisingPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/legal-hub" element={<LegalHub />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/help" element={<HelpCenterPage />} />
      <Route path="/egypt" element={<EgyptPage />} />
      <Route path="/bahrain" element={<BahrainPage />} />
    </Routes>
  )
}