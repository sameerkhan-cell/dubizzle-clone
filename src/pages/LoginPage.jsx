import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'

function GoogleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function EyeIcon({ show }) {
  return show ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
  )
}

function FieldError({ msg }) {
  if (!msg) return null
  return <p className="text-[12px] text-[#e8192c] mt-1 flex items-center gap-1"><span>⚠</span>{msg}</p>
}

export default function LoginPage() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('login') // 'login' | 'signup'

  // Login form state
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPass, setLoginPass] = useState('')
  const [showLoginPass, setShowLoginPass] = useState(false)
  const [loginErrors, setLoginErrors] = useState({})
  const [loginSubmitted, setLoginSubmitted] = useState(false)

  // Signup form state
  const [signupName, setSignupName] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPass, setSignupPass] = useState('')
  const [signupConfirm, setSignupConfirm] = useState('')
  const [showSignupPass, setShowSignupPass] = useState(false)
  const [signupErrors, setSignupErrors] = useState({})
  const [signupSubmitted, setSignupSubmitted] = useState(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  function validateLogin() {
    const errs = {}
    if (!loginEmail.trim()) errs.email = 'Email is required'
    else if (!emailRegex.test(loginEmail)) errs.email = 'Enter a valid email address'
    if (!loginPass) errs.pass = 'Password is required'
    else if (loginPass.length < 6) errs.pass = 'Password must be at least 6 characters'
    return errs
  }

  function validateSignup() {
    const errs = {}
    if (!signupName.trim()) errs.name = 'Full name is required'
    if (!signupEmail.trim()) errs.email = 'Email is required'
    else if (!emailRegex.test(signupEmail)) errs.email = 'Enter a valid email address'
    if (!signupPass) errs.pass = 'Password is required'
    else if (signupPass.length < 6) errs.pass = 'Password must be at least 6 characters'
    if (!signupConfirm) errs.confirm = 'Please confirm your password'
    else if (signupConfirm !== signupPass) errs.confirm = 'Passwords do not match'
    return errs
  }

  function handleLoginSubmit(e) {
    e.preventDefault()
    setLoginSubmitted(true)
    const errs = validateLogin()
    setLoginErrors(errs)
    if (Object.keys(errs).length === 0) {
      navigate('/')
    }
  }

  function handleSignupSubmit(e) {
    e.preventDefault()
    setSignupSubmitted(true)
    const errs = validateSignup()
    setSignupErrors(errs)
    if (Object.keys(errs).length === 0) {
      navigate('/')
    }
  }

  function handleLoginChange(field, val) {
    if (field === 'email') setLoginEmail(val)
    if (field === 'pass') setLoginPass(val)
    if (loginSubmitted) {
      const errs = validateLogin()
      setLoginErrors(errs)
    }
  }

  function handleSignupChange(field, val) {
    if (field === 'name') setSignupName(val)
    if (field === 'email') setSignupEmail(val)
    if (field === 'pass') setSignupPass(val)
    if (field === 'confirm') setSignupConfirm(val)
    if (signupSubmitted) {
      const errs = validateSignup()
      setSignupErrors(errs)
    }
  }

  const inputBase = "w-full px-4 py-3 border-[1.5px] rounded-xl text-[14px] text-[#222] outline-none transition-colors font-sans"
  const inputOk = "border-[#e5e5e5] focus:border-[#e8192c]"
  const inputErr = "border-[#e8192c] bg-[#fff5f5]"

  return (
    <div className="min-h-screen bg-[#f2f2f2] flex flex-col items-center justify-center p-4 font-sans text-[#222]">
      <Link to="/" className="mb-8 hover:opacity-80 transition-opacity">
        <Logo width={160} height={38} />
      </Link>

      <div className="bg-white rounded-2xl w-full max-w-[420px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden">
        {/* Tab bar */}
        <div className="flex border-b border-[#f0f0f0]">
          {['login','signup'].map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`flex-1 py-4 text-[15px] font-bold transition-colors ${tab===t ? 'text-[#e8192c] border-b-2 border-[#e8192c]' : 'text-[#aaa] hover:text-[#555]'}`}>
              {t === 'login' ? 'Log In' : 'Sign Up'}
            </button>
          ))}
        </div>

        <div className="p-8">
          {/* Social buttons */}
          <div className="flex flex-col gap-3 mb-5">
            <button className="w-full flex items-center justify-center gap-3 p-3.5 border-[1.5px] border-[#e5e5e5] rounded-xl bg-white text-[14px] font-semibold text-[#333] hover:bg-gray-50 transition-colors">
              <GoogleIcon />{tab === 'login' ? 'Continue with Google' : 'Sign up with Google'}
            </button>
            <button className="w-full flex items-center justify-center gap-3 p-3.5 border-[1.5px] border-[#e5e5e5] rounded-xl bg-white text-[14px] font-semibold text-[#333] hover:bg-gray-50 transition-colors">
              <FacebookIcon />{tab === 'login' ? 'Continue with Facebook' : 'Sign up with Facebook'}
            </button>
          </div>

          <div className="flex items-center gap-3 mb-5 text-[#aaa] text-[13px] font-medium">
            <div className="flex-1 h-px bg-[#e5e5e5]" /><span>OR</span><div className="flex-1 h-px bg-[#e5e5e5]" />
          </div>

          {/* ── LOGIN FORM ── */}
          {tab === 'login' && (
            <form onSubmit={handleLoginSubmit} noValidate className="flex flex-col gap-4">
              <div>
                <label className="block text-[13px] font-semibold text-[#444] mb-1.5">Email address</label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={e => handleLoginChange('email', e.target.value)}
                  placeholder="you@example.com"
                  className={`${inputBase} ${loginErrors.email ? inputErr : inputOk}`}
                />
                <FieldError msg={loginErrors.email} />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#444] mb-1.5">Password</label>
                <div className="relative">
                  <input
                    type={showLoginPass ? 'text' : 'password'}
                    value={loginPass}
                    onChange={e => handleLoginChange('pass', e.target.value)}
                    placeholder="Min. 6 characters"
                    className={`${inputBase} pr-11 ${loginErrors.pass ? inputErr : inputOk}`}
                  />
                  <button type="button" onClick={() => setShowLoginPass(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1">
                    <EyeIcon show={showLoginPass} />
                  </button>
                </div>
                <FieldError msg={loginErrors.pass} />
              </div>
              <div className="text-right"><a href="#" className="text-[13px] text-[#e8192c] font-semibold hover:underline">Forgot password?</a></div>
              <button type="submit"
                className="w-full py-3.5 bg-[#e8192c] hover:bg-[#c41424] text-white text-[15px] font-bold rounded-xl transition-colors">
                Log In
              </button>
            </form>
          )}

          {/* ── SIGNUP FORM ── */}
          {tab === 'signup' && (
            <form onSubmit={handleSignupSubmit} noValidate className="flex flex-col gap-4">
              <div>
                <label className="block text-[13px] font-semibold text-[#444] mb-1.5">Full name</label>
                <input
                  type="text"
                  value={signupName}
                  onChange={e => handleSignupChange('name', e.target.value)}
                  placeholder="Your full name"
                  className={`${inputBase} ${signupErrors.name ? inputErr : inputOk}`}
                />
                <FieldError msg={signupErrors.name} />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#444] mb-1.5">Email address</label>
                <input
                  type="email"
                  value={signupEmail}
                  onChange={e => handleSignupChange('email', e.target.value)}
                  placeholder="you@example.com"
                  className={`${inputBase} ${signupErrors.email ? inputErr : inputOk}`}
                />
                <FieldError msg={signupErrors.email} />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#444] mb-1.5">Password</label>
                <div className="relative">
                  <input
                    type={showSignupPass ? 'text' : 'password'}
                    value={signupPass}
                    onChange={e => handleSignupChange('pass', e.target.value)}
                    placeholder="Min. 6 characters"
                    className={`${inputBase} pr-11 ${signupErrors.pass ? inputErr : inputOk}`}
                  />
                  <button type="button" onClick={() => setShowSignupPass(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1">
                    <EyeIcon show={showSignupPass} />
                  </button>
                </div>
                <FieldError msg={signupErrors.pass} />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#444] mb-1.5">Confirm password</label>
                <input
                  type="password"
                  value={signupConfirm}
                  onChange={e => handleSignupChange('confirm', e.target.value)}
                  placeholder="Re-enter your password"
                  className={`${inputBase} ${signupErrors.confirm ? inputErr : inputOk}`}
                />
                <FieldError msg={signupErrors.confirm} />
              </div>
              <button type="submit"
                className="w-full py-3.5 bg-[#e8192c] hover:bg-[#c41424] text-white text-[15px] font-bold rounded-xl transition-colors mt-1">
                Create Account
              </button>
            </form>
          )}

          <p className="text-center mt-6 text-[13px] text-[#888]">
            {tab === 'login'
              ? <span>Don't have an account? <button onClick={() => setTab('signup')} className="text-[#e8192c] font-bold hover:underline">Sign Up</button></span>
              : <span>Already have an account? <button onClick={() => setTab('login')} className="text-[#e8192c] font-bold hover:underline">Log In</button></span>
            }
          </p>
        </div>
      </div>

      <div className="mt-6 text-center text-[#888] text-[12px]">
        By continuing, you agree to our{' '}
        <Link to="/terms" className="text-[#555] font-semibold hover:underline">Terms of Use</Link> and{' '}
        <Link to="/privacy" className="text-[#555] font-semibold hover:underline">Privacy Policy</Link>.
      </div>
    </div>
  )
}
