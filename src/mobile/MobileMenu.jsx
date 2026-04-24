import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Heart, 
  List, 
  Bookmark, 
  MapPin, 
  Languages, 
  Globe, 
  Info, 
  Phone, 
  Scale, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react'
import MobileBottomNav from './MobileBottomNav'

const cities = [
  'All Cities (UAE)',
  'Abu Dhabi',
  'Ajman',
  'Al Ain',
  'Dubai',
  'Fujairah',
  'Ras al Khaimah',
  'Sharjah',
  'Umm al Quwain'
]

export default function MobileMenu() {
  const navigate = useNavigate()
  const [cityExpanded, setCityExpanded] = useState(false)
  const [selectedCity, setSelectedCity] = useState('Dubai')

  const handleAuthClick = () => {
    navigate('/login')
  }

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingBottom: 80, fontFamily: "'Inter', sans-serif" }}>
      
      {/* ── Profile Header ── */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px 16px',
        borderBottom: '1px solid #F0F0F0',
        background: '#FAFAFA',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decorative elements */}
        <div style={{ position: 'absolute', top: 20, left: 40, width: 60, height: 20, background: '#F0F0F0', borderRadius: 10, opacity: 0.5 }}></div>
        <div style={{ position: 'absolute', top: 50, right: 30, width: 80, height: 25, background: '#F0F0F0', borderRadius: 12, opacity: 0.5 }}></div>

        {/* Avatar Card */}
        <div style={{
          background: '#fff',
          borderRadius: 8,
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          padding: '24px 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 120,
          marginBottom: 20,
          border: '1px solid #F0F0F0',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            width: 48,
            height: 48,
            background: '#E0E0E0',
            borderRadius: '50%',
            marginBottom: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            {/* Simple generic avatar SVG */}
            <svg viewBox="0 0 24 24" fill="#888" width="32" height="32">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <div style={{ width: '80%', height: 6, background: '#E0E0E0', borderRadius: 3, marginBottom: 6 }}></div>
          <div style={{ width: '60%', height: 6, background: '#E0E0E0', borderRadius: 3 }}></div>
        </div>

        <button 
          onClick={handleAuthClick}
          style={{
            background: '#222',
            color: '#fff',
            border: 'none',
            padding: '12px 32px',
            borderRadius: 4,
            fontSize: 14,
            fontWeight: 700,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          Log In Or Sign Up
        </button>
      </div>

      {/* ── Quick Action Buttons ── */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        padding: '20px 16px',
        borderBottom: '1px solid #F0F0F0'
      }}>
        <button 
          onClick={handleAuthClick}
          style={{
            flex: '1 1 calc(50% - 6px)',
            background: '#F0F6FF',
            border: '1px solid #E0EDFF',
            borderRadius: 8,
            padding: '16px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            color: '#1A73E8'
          }}
        >
          <Heart size={20} />
          <span style={{ fontSize: 13, fontWeight: 600 }}>Favorites</span>
        </button>

        <button 
          onClick={handleAuthClick}
          style={{
            flex: '1 1 calc(50% - 6px)',
            background: '#F0F6FF',
            border: '1px solid #E0EDFF',
            borderRadius: 8,
            padding: '16px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            color: '#1A73E8'
          }}
        >
          <List size={20} />
          <span style={{ fontSize: 13, fontWeight: 600 }}>My Ads</span>
        </button>

        <button 
          onClick={handleAuthClick}
          style={{
            flex: '1 1 calc(50% - 6px)',
            background: '#F0F6FF',
            border: '1px solid #E0EDFF',
            borderRadius: 8,
            padding: '16px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            color: '#1A73E8'
          }}
        >
          <Bookmark size={20} />
          <span style={{ fontSize: 13, fontWeight: 600 }}>My Searches</span>
        </button>
      </div>

      {/* ── Menu List ── */}
      <div style={{ padding: '8px 0' }}>
        
        {/* City Dropdown */}
        <div>
          <button 
            onClick={() => setCityExpanded(!cityExpanded)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px',
              background: '#fff',
              border: 'none',
              borderBottom: cityExpanded ? 'none' : '1px solid #F5F5F5'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <MapPin size={20} color="#444" />
              <span style={{ fontSize: 14, color: '#222', fontWeight: 500 }}>City</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 13, color: '#888' }}>{selectedCity}</span>
              {cityExpanded ? <ChevronUp size={16} color="#888" /> : <ChevronDown size={16} color="#888" />}
            </div>
          </button>

          {/* Expanded City List */}
          {cityExpanded && (
            <div style={{ background: '#FAFAFA', borderBottom: '1px solid #F5F5F5', padding: '8px 0' }}>
              {cities.map(city => (
                <button
                  key={city}
                  onClick={() => {
                    setSelectedCity(city)
                    setCityExpanded(false)
                  }}
                  style={{
                    width: '100%',
                    padding: '12px 20px 12px 56px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    fontSize: 13,
                    color: city === selectedCity ? '#1A73E8' : '#222',
                    fontWeight: city === selectedCity ? 600 : 400
                  }}
                >
                  {city}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Standard Menu Items */}
        <MenuItem icon={Languages} label="Language" rightText="العربية" />
        <MenuItem icon={Globe} label="Full Site" onClick={() => navigate('/')} />
        <MenuItem icon={Info} label="Help" onClick={() => navigate('/help')} />
        <MenuItem icon={Phone} label="Call Us" onClick={() => navigate('/contact-us')} />
        <MenuItem icon={Scale} label="Legal Hub" onClick={() => navigate('/legal-hub')} />
        
      </div>

      <MobileBottomNav />
    </div>
  )
}

function MenuItem({ icon: Icon, label, rightText, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      background: '#fff',
      border: 'none',
      borderBottom: '1px solid #F5F5F5'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Icon size={20} color="#444" />
        <span style={{ fontSize: 14, color: '#222', fontWeight: 500 }}>{label}</span>
      </div>
      {rightText && (
        <span style={{ fontSize: 14, color: '#888', fontWeight: 600 }}>{rightText}</span>
      )}
    </button>
  )
}
