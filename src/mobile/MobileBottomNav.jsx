import { useNavigate, useLocation } from 'react-router-dom'
import {
  Home,
  Search,
  PlusCircle,
  MessageCircle,
  User,
} from 'lucide-react'

const tabs = [
  { id: 'home',   label: 'Home',   icon: Home,           path: '/' },
  { id: 'search', label: 'Search', icon: Search,         path: '/mobile-search' },
  { id: 'add',    label: 'Place Ad', icon: PlusCircle,   path: '/login' },
  { id: 'chat',   label: 'Chat',   icon: MessageCircle,  path: '/login' },
  { id: 'menu',   label: 'Menu',   icon: User,           path: '/mobile-menu' },
]

export default function MobileBottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  let activeId = null;
  if (location.pathname === '/mobile-search') {
    activeId = 'search'
  } else if (location.pathname === '/mobile-menu') {
    activeId = 'menu'
  } else if (
    location.pathname === '/' ||
    location.pathname.startsWith('/dubai') ||
    location.pathname.startsWith('/abu-dhabi') ||
    location.pathname.startsWith('/city/') ||
    location.pathname.startsWith('/egypt') ||
    location.pathname.startsWith('/bahrain')
  ) {
    activeId = 'home'
  }

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: '#ffffff',
        borderTop: '1px solid #e5e5e5',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        height: 60,
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        boxShadow: '0 -2px 12px rgba(0,0,0,0.06)',
      }}
      aria-label="Mobile navigation"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isCenter = tab.id === 'add'
        const isActive = tab.id === activeId

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              if (tab.path) navigate(tab.path)
            }}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              padding: isCenter ? '0' : '6px 0 8px',
              position: 'relative',
            }}
            aria-label={tab.label}
          >
            {isCenter ? (
              /* ── Prominent center "Place Ad" button ── */
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: '50%',
                  background: '#E8001C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: -24,
                  marginBottom: 4,
                  boxShadow: '0 4px 14px rgba(232,0,28,0.35)',
                  border: '3px solid #fff'
                }}
              >
                <Icon size={24} color="#fff" strokeWidth={2.5} />
              </div>
            ) : (
              <Icon
                size={22}
                strokeWidth={1.8}
                color={isActive ? '#E8001C' : '#888888'}
                style={{ marginBottom: 4 }}
              />
            )}
            <span
              style={{
                fontSize: 10,
                fontWeight: isActive ? 700 : 500,
                color: isCenter ? '#E8001C' : isActive ? '#E8001C' : '#888888',
                lineHeight: 1,
              }}
            >
              {tab.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
