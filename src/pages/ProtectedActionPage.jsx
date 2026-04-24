import { useLocation, Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'

// Same icon components used in LoginPage
function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" style={{ marginRight: 12 }}>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2" style={{ marginRight: 12 }}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000" style={{ marginRight: 12 }}>
      <path d="M16.36 12.42c-.02-2.88 2.36-4.26 2.47-4.32-1.34-1.96-3.42-2.22-4.16-2.26-1.78-.18-3.48 1.05-4.4 1.05-.9 0-2.3-1.03-3.77-1-1.93.03-3.7 1.13-4.7 2.86-2.03 3.51-.52 8.7 1.45 11.53 1 1.44 2.15 3.03 3.73 2.97 1.52-.05 2.1-.98 3.93-.98 1.81 0 2.35.98 3.93.95 1.63-.03 2.63-1.46 3.6-2.89.96-1.41 1.36-2.78 1.4-2.85-.03-.02-2.61-1-2.63-3.96h-.01zM14.61 5.37c.83-1.02 1.4-2.44 1.25-3.87-1.23.05-2.71.82-3.56 1.83-.68.8-1.33 2.24-1.15 3.65 1.38.1 2.63-.6 3.46-1.61z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#e8192c" style={{ marginRight: 12 }}>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  )
}

function Illustration({ type }) {
  if (type === 'favourites') {
    return (
      <div className="relative mx-auto w-[160px] h-[160px] mb-8 flex items-center justify-center">
        {/* Background clouds and leaves */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160" fill="none">
          <path d="M40 70c-5 0-10 5-10 12s5 12 10 12h80c5 0 10-5 10-12s-5-12-10-12H40z" fill="#f0f4f8" opacity="0.6"/>
          <path d="M50 50c-4 0-8 4-8 10s4 10 8 10h60c4 0 8-4 8-10s-4-10-8-10H50z" fill="#f0f4f8" opacity="0.4"/>
          <path d="M45 95c-2-2-5-2-7 0-2 2-2 5 0 7l10 10c2 2 5 2 7 0 2-2 2-5 0-7l-10-10z" fill="#a8e6cf" opacity="0.8"/>
          <path d="M115 95c2-2 5-2 7 0 2 2 2 5 0 7l-10 10c-2 2-5 2-7 0-2-2-2-5 0-7l10-10z" fill="#a8e6cf" opacity="0.8"/>
        </svg>
        {/* Card */}
        <div className="relative z-10 w-[70px] h-[95px] bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex flex-col gap-2">
          <div className="w-full h-[35px] bg-[#f0f2f5] rounded flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#cbd5e1"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          </div>
          <div className="w-[80%] h-1.5 bg-[#e2e8f0] rounded"></div>
          <div className="w-[60%] h-1.5 bg-[#e2e8f0] rounded"></div>
          <div className="mt-auto w-full h-3 bg-[#f1f5f9] rounded flex items-center px-1">
            <div className="w-1/2 h-1 bg-[#e2e8f0] rounded"></div>
          </div>
        </div>
        {/* Heart */}
        <div className="absolute top-8 right-[30px] z-20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#e8192c">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </div>
    )
  }
  
  // Generic illustration for others
  return (
    <div className="relative mx-auto w-[160px] h-[160px] mb-8 flex items-center justify-center">
      <div className="w-[70px] h-[95px] bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex flex-col gap-2">
        <div className="w-full h-[35px] bg-[#f0f2f5] rounded flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#cbd5e1"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
        </div>
        <div className="w-[80%] h-1.5 bg-[#e2e8f0] rounded"></div>
        <div className="w-[60%] h-1.5 bg-[#e2e8f0] rounded"></div>
        <div className="mt-auto w-full h-3 bg-[#f1f5f9] rounded flex items-center px-1">
          <div className="w-1/2 h-1 bg-[#e2e8f0] rounded"></div>
        </div>
      </div>
    </div>
  )
}

export default function ProtectedActionPage() {
  const location = useLocation()
  const navigate = useNavigate()
  
  // Determine text based on route
  const path = location.pathname
  let actionType = 'favourites'
  let title = 'Log in to favorite an ad'
  
  if (path === '/notifications') {
    actionType = 'notifications'
    title = 'Log in to view notifications'
  } else if (path === '/chats') {
    actionType = 'chats'
    title = 'Log in to view your chats'
  } else if (path === '/my-ads') {
    actionType = 'my-ads'
    title = 'Log in to view your ads'
  }

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 h-[64px] flex items-center justify-center bg-white sticky top-0 z-50">
        <Link to="/">
          <Logo width={120} height={28} />
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center pt-16 px-4">
        
        <Illustration type={actionType} />

        <h1 className="text-[22px] font-bold text-[#222] mb-10 text-center">
          {title}
        </h1>

        <div className="w-full max-w-[360px] flex flex-col gap-3">
          <button onClick={handleLogin} className="flex items-center justify-center w-full h-[48px] border border-[#d1d5db] rounded-md bg-white hover:bg-gray-50 transition-colors text-[14px] font-semibold text-[#4b4b4b]">
            <FacebookIcon /> Continue with Facebook
          </button>
          
          <button onClick={handleLogin} className="flex items-center justify-center w-full h-[48px] border border-[#d1d5db] rounded-md bg-white hover:bg-gray-50 transition-colors text-[14px] font-semibold text-[#4b4b4b]">
            <GoogleIcon /> Continue with Google
          </button>

          <button onClick={handleLogin} className="flex items-center justify-center w-full h-[48px] border border-[#d1d5db] rounded-md bg-white hover:bg-gray-50 transition-colors text-[14px] font-semibold text-[#4b4b4b]">
            <AppleIcon /> Continue with Apple
          </button>

          <button onClick={handleLogin} className="flex items-center justify-center w-full h-[48px] border border-[#d1d5db] rounded-md bg-white hover:bg-gray-50 transition-colors text-[14px] font-semibold text-[#4b4b4b]">
            <EmailIcon /> Continue with Email
          </button>

          <div className="text-center mt-3">
            <Link to="/login" className="text-[13px] font-bold text-[#e8192c] hover:underline">
              Don't have an account? Create one
            </Link>
          </div>
        </div>

      </main>

      {/* Footer text */}
      <footer className="py-8 text-center text-[12px] text-[#888] px-4">
        By signing up I agree to the <a href="/terms" className="text-[#1a73e8] hover:underline">Terms and Conditions</a> and<br/>
        <a href="/terms" className="text-[#1a73e8] hover:underline">Privacy Policy</a>
      </footer>
    </div>
  )
}
