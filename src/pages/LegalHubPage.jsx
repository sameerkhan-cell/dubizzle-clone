import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import PostAdModal from '../components/PostAdModal'
import { Search, Menu } from 'lucide-react'

const LegalHubPage = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header - matching original simple nav */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <Logo width={110} height={26} />
          </Link>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setModalOpen(true)}
              className="text-sm font-semibold text-dubizzle-red hover:text-red-600 px-4 py-2 border border-dubizzle-red rounded hover:bg-red-50 transition-colors"
            >
              Place your ad
            </button>
            <button className="md:hidden p-2">
              <Menu size={24} className="text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="legal-hub-hero bg-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 uppercase tracking-wide mb-4">Welcome to</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">dubizzle Legal Hub</h1>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Find legal information and resources for dubizzle products and services
              </p>
            </div>
            
            {/* Search */}
            <div className="max-w-md mx-auto">
              <form className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-dubizzle-red focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-dubizzle-red"
                >
                  <Search size={20} />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Legal Terms Columns */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="legal-hub-grid grid md:grid-cols-2 gap-12 items-start">
              {/* Legal Terms Column */}
              <div className="text-center md:text-left">
                <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto md:ml-0 mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">Terms</span>
                </div>
                <h2 id="h-legal-terms" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Legal Terms
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Terms you agree to when you use dubizzle
                </p>
                <ul className="space-y-3 text-lg">
                  <li><Link to="/terms" className="text-blue-600 hover:underline">Terms of Use</Link></li>
                  <li><Link to="/terms#additional-terms-property" className="text-blue-600 hover:underline">Additional Terms – Property</Link></li>
                  <li><Link to="/terms#additional-terms-motors" className="text-blue-600 hover:underline">Additional Terms – Motors</Link></li>
                  <li><Link to="/terms#additional-terms-jobs" className="text-blue-600 hover:underline">Additional Terms – Jobs</Link></li>
                  <li><Link to="/terms#additional-terms-holiday-homes" className="text-blue-600 hover:underline">Additional Terms – Holiday Homes</Link></li>
                  <li><Link to="/terms#additional-terms-vba" className="text-blue-600 hover:underline">Additional Terms – Verified Business Account</Link></li>
                  <li><Link to="/terms#acceptable-use-policy" className="text-blue-600 hover:underline">Acceptable Use Policy</Link></li>
                  <li><Link to="/terms#vehicle-inspection-terms" className="text-blue-600 hover:underline">Vehicle Inspection Terms and Conditions</Link></li>
                  <li><Link to="/terms#vehicle-auction-terms" className="text-blue-600 hover:underline">Vehicle Auction Terms and Conditions</Link></li>
                  <li><Link to="/terms#vehicle-intermediary-terms" className="text-blue-600 hover:underline">Vehicle Intermediary Services Terms and Conditions</Link></li>
                  <li><Link to="/terms#vehicle-evaluation-terms" className="text-blue-600 hover:underline">Vehicle Evaluation Terms and Conditions</Link></li>
                </ul>
              </div>


              {/* Privacy Column */}
              <div className="text-center md:text-left">
                <div className="w-20 h-20 bg-green-500 rounded-full mx-auto md:ml-0 mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">Privacy</span>
                </div>
                <h2 id="h-privacy-policy" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Privacy Policy
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Information about how we handle your personal Information
                </p>
                <ul className="space-y-3 text-lg">
                  <li><a href="https://www.dubizzle.com/legalhub/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Declaration Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              We're all about transparency and accountability.
            </h3>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              That's why we built this hub: to simplify access to the legal bits. Let's make buying and selling a seamless and enjoyable experience for everyone.
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Need to contact us?
            </h3>
            <p className="text-lg mb-4">
              For any questions about your use of our services, please email{' '}
              <a href="mailto:support@dubizzle.com" className="text-blue-600 hover:underline font-semibold">
                support@dubizzle.com
              </a>.
            </p>
            <p>
              For any questions relating to your privacy or our use of your personal information, please email{' '}
              <a href="mailto:privacy@dubizzle.com" className="text-blue-600 hover:underline font-semibold">
                privacy@dubizzle.com
              </a>.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* ── Post Ad Modal ── */}
      <PostAdModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <style>{`
        @media (max-width: 768px) {
          .legal-hub-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .legal-hub-hero h1 { font-size: 2.5rem !important; }
          .legal-hub-hero p.text-xl { font-size: 1rem !important; }
        }
      `}</style>
    </div>
  )
}

export default LegalHubPage

