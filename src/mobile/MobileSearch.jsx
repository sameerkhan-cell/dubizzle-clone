import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Search } from 'lucide-react'
import MobileBottomNav from './MobileBottomNav'

const filterTabs = [
  'All', 'Motors', 'Jobs', 'Classifieds', 'Property for Sale', 'Property for Rent', 'New Projects', 'Community'
]

const recentSearches = [
  { term: 'home furniture priced at 5000 aed', category: 'Classifieds', count: '19 Ads' },
  { term: 'home furniture priced at 5000 aed', category: 'Furniture, Home & Garden', count: '19 Ads' },
  { term: 'home furniture priced at 3000 aed', category: 'Furniture, Home & Garden', count: '7 Ads' },
  { term: 'sensors', category: 'Electronics', count: '259 Ads' },
  { term: 'stylish white color furniture under aed 3000', category: 'Furniture, Home & Garden', count: '5 Ads' },
  { term: 'iphone 14 pro max', category: 'Mobile Phones & Tablets', count: '236 Ads' },
]

const relatedSearches = [
  'home furniture priced at 2000 aed',
  'furniture',
  'furniture under 10k aed'
]

export default function MobileSearch() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('All')

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingBottom: 80, fontFamily: "'Inter', sans-serif" }}>
      
      {/* ── Top Bar ── */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        gap: 12,
        borderBottom: '1px solid #E0E0E0'
      }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', padding: 0 }}>
          <ArrowLeft size={20} color="#333" />
        </button>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <input 
            type="text" 
            placeholder="Search for anything" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              fontSize: 15,
              color: '#333'
            }}
            autoFocus
          />
        </div>
        <Search size={20} color="#888" />
      </header>

      {/* ── Filter Tabs ── */}
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        padding: '12px 16px',
        gap: 8,
        borderBottom: '1px solid #E0E0E0',
        scrollSnapType: 'x mandatory',
      }} className="scrollbar-hide">
        {filterTabs.map(tab => {
          const isAll = tab === 'All';
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                whiteSpace: 'nowrap',
                padding: isAll ? '0' : '6px 12px',
                width: isAll ? 32 : 'auto',
                height: isAll ? 32 : 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: isAll ? '50%' : 20,
                border: `1px solid ${activeTab === tab ? '#E8001C' : '#E0E0E0'}`,
                background: activeTab === tab ? '#fff' : '#fff', // The screenshot shows a white background with a red border for the active tab
                color: activeTab === tab ? '#E8001C' : '#444',
                fontSize: 12,
                fontWeight: 600,
                flexShrink: 0
              }}
            >
              {tab}
            </button>
          )
        })}
      </div>

      {/* ── Recent / Suggested Searches ── */}
      <div>
        {recentSearches.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px',
            borderBottom: '1px solid #F0F0F0',
            cursor: 'pointer'
          }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#222', margin: '0 0 2px' }}>
                {item.term}
              </p>
              <p style={{ fontSize: 11, color: '#888', margin: 0 }}>
                {item.category}
              </p>
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#1A73E8' }}>
              {item.count}
            </span>
          </div>
        ))}
      </div>

      {/* ── Related Searches ── */}
      <div style={{ padding: '16px' }}>
        <p style={{ fontSize: 11, color: '#888', marginBottom: 12 }}>Related Searches</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {relatedSearches.map(term => (
            <span key={term} style={{
              background: '#F5F5F5',
              padding: '6px 12px',
              borderRadius: 4,
              fontSize: 12,
              color: '#333',
              fontWeight: 500
            }}>
              {term}
            </span>
          ))}
        </div>
      </div>

      {/* ── Bottom Nav ── */}
      <MobileBottomNav />
    </div>
  )
}
