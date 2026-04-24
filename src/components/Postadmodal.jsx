import { useState, useEffect, useRef } from 'react'

/* ─────────────────────────────────────────────
   PostAdModal
   Props:
     isOpen  : boolean
     onClose : () => void
   Steps: 1=Login  2=Phone  3=PostAd  4=Success
───────────────────────────────────────────── */

export default function PostAdModal({ isOpen, onClose }) {
  const [step, setStep] = useState(2)
  const [phone, setPhone] = useState('')
  const [previews, setPreviews] = useState([])
  const [visible, setVisible] = useState(false)
  const fileRef = useRef(null)

  /* animate in/out */
  useEffect(() => {
    if (isOpen) {
      setStep(2)
      setPhone('')
      setPreviews([])
      requestAnimationFrame(() => setVisible(true))
    } else {
      setVisible(false)
    }
  }, [isOpen])

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleClose()
  }

  const handleClose = () => {
    setVisible(false)
    setTimeout(() => onClose(), 200)
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 10)
    files.forEach((file) => {
      const reader = new FileReader()
      reader.onload = (ev) =>
        setPreviews((prev) => [...prev, ev.target.result].slice(0, 10))
      reader.readAsDataURL(file)
    })
  }

  if (!isOpen) return null

  return (
    <div
      onClick={handleOverlayClick}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.45)',
        backdropFilter: 'blur(2px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.2s',
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: 16,
          width: '100%',
          maxWidth: step === 3 ? 520 : 400,
          padding: step === 4 ? '40px 28px' : '28px 28px 24px',
          position: 'relative',
          boxShadow: '0 8px 48px rgba(0,0,0,0.18)',
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.25s cubic-bezier(.34,1.56,.64,1), opacity 0.2s',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* Close button */}
        {step !== 4 && (
          <button onClick={handleClose} style={styles.closeBtn}>✕</button>
        )}

        {/* Step dots - 2 steps: Phone + Post Ad */}
        {step !== 4 && (
          <div style={styles.stepRow}>
            {[2, 3].map((s) => (
              <div
                key={s}
                style={{
                  ...styles.dot,
                  background: s === step ? '#e8192c' : s < step ? 'rgba(232,25,44,0.35)' : '#e5e5e5',
                  width: s === step ? 22 : 8,
                  borderRadius: s === step ? 4 : '50%',
                }}
              />
            ))}
          </div>
        )}

        {step === 2 && (
          <PhoneStep
            phone={phone}
            setPhone={setPhone}
            onNext={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <PostAdStep
            previews={previews}
            fileRef={fileRef}
            onImageChange={handleImageChange}
            removePreview={(i) => setPreviews((p) => p.filter((_, idx) => idx !== i))}
            onSubmit={() => setStep(4)}
          />
        )}
        {step === 4 && <SuccessStep onClose={handleClose} />}
      </div>
    </div>
  )
}

/* ─── Step 1: Login (matches LoginPage design) ─── */
function LoginStep({ onNext }) {
  const [tab, setTab] = useState('login')

  // Login state
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPass, setLoginPass] = useState('')
  const [showLoginPass, setShowLoginPass] = useState(false)
  const [loginErrors, setLoginErrors] = useState({})
  const [loginSubmitted, setLoginSubmitted] = useState(false)

  // Signup state
  const [signupName, setSignupName] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPass, setSignupPass] = useState('')
  const [signupConfirm, setSignupConfirm] = useState('')
  const [showSignupPass, setShowSignupPass] = useState(false)
  const [signupErrors, setSignupErrors] = useState({})
  const [signupSubmitted, setSignupSubmitted] = useState(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  function validateLogin() {
    const e = {}
    if (!loginEmail.trim()) e.email = 'Email is required'
    else if (!emailRegex.test(loginEmail)) e.email = 'Enter a valid email address'
    if (!loginPass) e.pass = 'Password is required'
    else if (loginPass.length < 6) e.pass = 'Min. 6 characters'
    return e
  }

  function validateSignup() {
    const e = {}
    if (!signupName.trim()) e.name = 'Full name is required'
    if (!signupEmail.trim()) e.email = 'Email is required'
    else if (!emailRegex.test(signupEmail)) e.email = 'Enter a valid email address'
    if (!signupPass) e.pass = 'Password is required'
    else if (signupPass.length < 6) e.pass = 'Min. 6 characters'
    if (!signupConfirm) e.confirm = 'Please confirm your password'
    else if (signupConfirm !== signupPass) e.confirm = 'Passwords do not match'
    return e
  }

  function handleLoginSubmit(ev) {
    ev.preventDefault()
    setLoginSubmitted(true)
    const e = validateLogin()
    setLoginErrors(e)
    if (Object.keys(e).length === 0) onNext()
  }

  function handleSignupSubmit(ev) {
    ev.preventDefault()
    setSignupSubmitted(true)
    const e = validateSignup()
    setSignupErrors(e)
    if (Object.keys(e).length === 0) onNext()
  }

  function handleLoginChange(field, val) {
    if (field === 'email') setLoginEmail(val)
    if (field === 'pass') setLoginPass(val)
    if (loginSubmitted) setLoginErrors(validateLogin())
  }

  function handleSignupChange(field, val) {
    if (field === 'name') setSignupName(val)
    if (field === 'email') setSignupEmail(val)
    if (field === 'pass') setSignupPass(val)
    if (field === 'confirm') setSignupConfirm(val)
    if (signupSubmitted) setSignupErrors(validateSignup())
  }

  const inp = (err) => ({
    padding: '11px 14px', width: '100%', border: `1.5px solid ${err ? '#e8192c' : '#e5e5e5'}`,
    borderRadius: 8, fontFamily: 'inherit', fontSize: 14, color: '#222', outline: 'none',
    background: err ? '#fff5f5' : '#fff', boxSizing: 'border-box', transition: 'border-color 0.15s',
  })
  const fieldErr = (msg) => msg ? <p style={{ margin: '4px 0 0', fontSize: 11, color: '#e8192c' }}>⚠ {msg}</p> : null

  return (
    <>
      {/* Tab bar */}
      <div style={{ display: 'flex', borderBottom: '1.5px solid #f0f0f0', marginBottom: 20 }}>
        {['login', 'signup'].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            flex: 1, padding: '10px 0', background: 'none', border: 'none',
            borderBottom: tab === t ? '2px solid #e8192c' : '2px solid transparent',
            color: tab === t ? '#e8192c' : '#aaa', fontFamily: 'inherit',
            fontSize: 14, fontWeight: 700, cursor: 'pointer', transition: 'all 0.15s',
          }}>
            {t === 'login' ? 'Log In' : 'Sign Up'}
          </button>
        ))}
      </div>

      {/* Social buttons */}
      <button style={styles.socialBtn} onClick={onNext}>
        <GoogleIcon />{tab === 'login' ? 'Continue with Google' : 'Sign up with Google'}
      </button>
      <button style={styles.socialBtn} onClick={onNext}>
        <FacebookIcon />{tab === 'login' ? 'Continue with Facebook' : 'Sign up with Facebook'}
      </button>
      <div style={styles.orDivider}><div style={styles.divLine}/><span>OR</span><div style={styles.divLine}/></div>

      {/* LOGIN FORM */}
      {tab === 'login' && (
        <form onSubmit={handleLoginSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#444', marginBottom: 5 }}>Email address</label>
            <input type="email" value={loginEmail} onChange={e => handleLoginChange('email', e.target.value)}
              placeholder="you@example.com" style={inp(loginErrors.email)} />
            {fieldErr(loginErrors.email)}
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#444', marginBottom: 5 }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input type={showLoginPass ? 'text' : 'password'} value={loginPass}
                onChange={e => handleLoginChange('pass', e.target.value)}
                placeholder="Min. 6 characters" style={{ ...inp(loginErrors.pass), paddingRight: 40 }} />
              <button type="button" onClick={() => setShowLoginPass(v => !v)}
                style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                <EyeIcon show={showLoginPass} />
              </button>
            </div>
            {fieldErr(loginErrors.pass)}
          </div>
          <button type="submit" style={{ ...styles.submitBtn, background: '#e8192c', color: '#fff', cursor: 'pointer', marginTop: 4 }}>
            Log In
          </button>
        </form>
      )}

      {/* SIGNUP FORM */}
      {tab === 'signup' && (
        <form onSubmit={handleSignupSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#444', marginBottom: 5 }}>Full name</label>
            <input type="text" value={signupName} onChange={e => handleSignupChange('name', e.target.value)}
              placeholder="Your full name" style={inp(signupErrors.name)} />
            {fieldErr(signupErrors.name)}
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#444', marginBottom: 5 }}>Email address</label>
            <input type="email" value={signupEmail} onChange={e => handleSignupChange('email', e.target.value)}
              placeholder="you@example.com" style={inp(signupErrors.email)} />
            {fieldErr(signupErrors.email)}
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#444', marginBottom: 5 }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input type={showSignupPass ? 'text' : 'password'} value={signupPass}
                onChange={e => handleSignupChange('pass', e.target.value)}
                placeholder="Min. 6 characters" style={{ ...inp(signupErrors.pass), paddingRight: 40 }} />
              <button type="button" onClick={() => setShowSignupPass(v => !v)}
                style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                <EyeIcon show={showSignupPass} />
              </button>
            </div>
            {fieldErr(signupErrors.pass)}
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#444', marginBottom: 5 }}>Confirm password</label>
            <input type="password" value={signupConfirm} onChange={e => handleSignupChange('confirm', e.target.value)}
              placeholder="Re-enter your password" style={inp(signupErrors.confirm)} />
            {fieldErr(signupErrors.confirm)}
          </div>
          <button type="submit" style={{ ...styles.submitBtn, background: '#e8192c', color: '#fff', cursor: 'pointer', marginTop: 4 }}>
            Create Account
          </button>
        </form>
      )}

      <p style={{ textAlign: 'center', marginTop: 16, fontSize: 12, color: '#888' }}>
        {tab === 'login'
          ? <span>Don't have an account? <button onClick={() => setTab('signup')} style={{ background: 'none', border: 'none', color: '#e8192c', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: 12 }}>Sign Up</button></span>
          : <span>Already have an account? <button onClick={() => setTab('login')} style={{ background: 'none', border: 'none', color: '#e8192c', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: 12 }}>Log In</button></span>
        }
      </p>
    </>
  )
}

function EyeIcon({ show }) {
  return show ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
  )
}


/* ─── Step 2: Phone ─── */
function PhoneStep({ phone, setPhone, onNext }) {
  const valid = phone.replace(/\D/g, '').length >= 9
  return (
    <>
      <h2 style={{ ...styles.h2, textAlign: 'left', marginBottom: 12 }}>Enter phone number</h2>
      <p style={styles.phonDesc}>
        You don't have a phone number set on your profile.<br />
        To post your ad, please enter and verify your{' '}
        <strong>phone number</strong> — we'll add it to your{' '}
        <strong>Dubizzle account.</strong>
      </p>

      <label style={styles.inputLabel}>Phone number</label>
      <div style={styles.phoneRow}>
        <div style={styles.phoneFlag}>
          <span style={{ fontSize: 18 }}>🇦🇪</span>
          <span style={{ fontSize: 13, fontWeight: 500 }}>+971</span>
        </div>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
          style={styles.phoneInput}
        />
      </div>

      <button
        onClick={valid ? onNext : undefined}
        style={{
          ...styles.submitBtn,
          background: valid ? '#e8192c' : '#e5e5e5',
          color: valid ? '#fff' : '#aaa',
          cursor: valid ? 'pointer' : 'not-allowed',
        }}
      >
        Submit
      </button>
    </>
  )
}

/* ─── Step 3: Post Ad ─── */
function PostAdStep({ previews, fileRef, onImageChange, removePreview, onSubmit }) {
  const [form, setForm] = useState({ category: '', title: '', description: '', price: '', city: '', condition: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function validate(f) {
    const e = {}
    if (!f.category) e.category = 'Please select a category'
    if (!f.title.trim()) e.title = 'Ad title is required'
    else if (f.title.trim().length < 5) e.title = 'Title must be at least 5 characters'
    if (!f.description.trim()) e.description = 'Description is required'
    else if (f.description.trim().length < 10) e.description = 'Description must be at least 10 characters'
    if (!f.price) e.price = 'Price is required'
    else if (isNaN(f.price) || Number(f.price) < 0) e.price = 'Enter a valid price'
    if (!f.city) e.city = 'Please select a city'
    return e
  }

  function set(field, val) {
    const next = { ...form, [field]: val }
    setForm(next)
    if (submitted) setErrors(validate(next))
  }

  function handleSubmit() {
    setSubmitted(true)
    const e = validate(form)
    setErrors(e)
    if (Object.keys(e).length === 0) onSubmit()
  }

  const ctrl = (field) => ({
    style: { ...styles.control, borderColor: errors[field] ? '#e8192c' : '#e5e5e5', background: errors[field] ? '#fff5f5' : '#fff' }
  })

  return (
    <>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Place your ad</h2>
      <p style={{ fontSize: 13, color: '#666', marginBottom: 20 }}>
        Fill in the details below to post your ad
      </p>

      <FormGroup label="Category" required>
        <select value={form.category} onChange={e => set('category', e.target.value)} {...ctrl('category')}>
          <option value="">Select a category</option>
          {['Mobile Phones', 'Vehicles', 'Property for Rent', 'Property for Sale',
            'Electronics', 'Furniture & Garden', 'Jobs', 'Sports Equipment', 'Rooms for Rent'].map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>
        {errors.category && <p style={styles.fieldErr}>⚠ {errors.category}</p>}
      </FormGroup>

      <FormGroup label="Ad Title" required>
        <input value={form.title} onChange={e => set('title', e.target.value)} style={{ ...styles.control, borderColor: errors.title ? '#e8192c' : '#e5e5e5', background: errors.title ? '#fff5f5' : '#fff' }} type="text" placeholder="e.g. iPhone 15 Pro Max 256GB" />
        {errors.title && <p style={styles.fieldErr}>⚠ {errors.title}</p>}
      </FormGroup>

      <FormGroup label="Description" required>
        <textarea
          value={form.description}
          onChange={e => set('description', e.target.value)}
          style={{ ...styles.control, resize: 'vertical', minHeight: 90, borderColor: errors.description ? '#e8192c' : '#e5e5e5', background: errors.description ? '#fff5f5' : '#fff' }}
          placeholder="Describe condition, features, reason for selling…"
        />
        {errors.description && <p style={styles.fieldErr}>⚠ {errors.description}</p>}
      </FormGroup>

      <FormGroup label="Price (AED)" required>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={styles.currencyBadge}>AED</div>
          <div style={{ flex: 1 }}>
            <input value={form.price} onChange={e => set('price', e.target.value)} style={{ ...styles.control, borderColor: errors.price ? '#e8192c' : '#e5e5e5', background: errors.price ? '#fff5f5' : '#fff' }} type="number" placeholder="0" />
            {errors.price && <p style={styles.fieldErr}>⚠ {errors.price}</p>}
          </div>
        </div>
      </FormGroup>

      <div style={{ display: 'flex', gap: 12 }}>
        <FormGroup label="City" required style={{ flex: 1 }}>
          <select value={form.city} onChange={e => set('city', e.target.value)} style={{ ...styles.control, borderColor: errors.city ? '#e8192c' : '#e5e5e5', background: errors.city ? '#fff5f5' : '#fff' }}>
            <option value="">Select city</option>
            {['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah'].map(c => (
              <option key={c}>{c}</option>
            ))}
          </select>
          {errors.city && <p style={styles.fieldErr}>⚠ {errors.city}</p>}
        </FormGroup>
        <FormGroup label="Condition" style={{ flex: 1 }}>
          <select value={form.condition} onChange={e => set('condition', e.target.value)} style={styles.control}>
            <option value="">Select</option>
            {['New', 'Like New', 'Good', 'Fair', 'For Parts'].map(c => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </FormGroup>
      </div>

      <FormGroup label="Photos">
        <div
          onClick={() => fileRef.current?.click()}
          style={styles.uploadZone}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#e8192c'
            e.currentTarget.style.background = '#fff0f1'
            e.currentTarget.style.color = '#e8192c'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#e5e5e5'
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#aaa'
          }}
        >
          <div style={{ fontSize: 26, marginBottom: 4 }}>📷</div>
          <p style={{ fontSize: 13 }}>Tap to add photos</p>
          <span style={{ fontSize: 11, color: '#aaa' }}>Up to 10 · JPG, PNG</span>
        </div>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          onChange={onImageChange}
        />
        {previews.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
            {previews.map((src, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <img src={src} alt="" style={styles.thumb} />
                <button
                  onClick={() => removePreview(i)}
                  style={styles.removeThumb}
                >✕</button>
              </div>
            ))}
          </div>
        )}
      </FormGroup>

      <button
        onClick={handleSubmit}
        style={styles.postBtn}
        onMouseEnter={e => e.currentTarget.style.background = '#c41424'}
        onMouseLeave={e => e.currentTarget.style.background = '#e8192c'}
      >
        Post Ad
      </button>
    </>
  )
}


/* ─── Step 4: Success ─── */
function SuccessStep({ onClose }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={styles.successIcon}>✅</div>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Ad Posted!</h2>
      <p style={{ color: '#666', fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
        Your ad is live and will be seen by thousands of buyers.<br />
        We'll notify you when someone contacts you.
      </p>
      <button
        onClick={onClose}
        style={styles.doneBtn}
        onMouseEnter={e => e.currentTarget.style.background = '#c41424'}
        onMouseLeave={e => e.currentTarget.style.background = '#e8192c'}
      >
        Done
      </button>
    </div>
  )
}

/* ─── Helpers ─── */
function FormGroup({ label, required, children, style }) {
  return (
    <div style={{ marginBottom: 14, ...style }}>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 5, color: '#222' }}>
        {label} {required && <span style={{ color: '#e8192c' }}>*</span>}
      </label>
      {children}
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8192c" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

/* ─── Styles ─── */
const styles = {
  closeBtn: {
    position: 'absolute', top: 14, right: 14,
    background: '#f2f2f2', border: 'none',
    width: 32, height: 32, borderRadius: '50%',
    cursor: 'pointer', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    color: '#666', fontSize: 16,
  },
  stepRow: {
    display: 'flex', gap: 6, justifyContent: 'center',
    marginBottom: 22, transition: 'all 0.2s',
  },
  dot: {
    height: 8, transition: 'all 0.2s',
  },
  h2: {
    fontSize: 20, fontWeight: 700,
    textAlign: 'center', marginBottom: 24, lineHeight: 1.3,
  },
  socialBtn: {
    width: '100%', display: 'flex', alignItems: 'center',
    justifyContent: 'center', gap: 10, padding: '12px',
    border: '1.5px solid #e5e5e5', borderRadius: 8,
    background: '#fff', fontFamily: 'inherit',
    fontSize: 14, fontWeight: 500, color: '#222',
    cursor: 'pointer', marginBottom: 10,
  },
  orDivider: {
    display: 'flex', alignItems: 'center', gap: 12,
    margin: '14px 0', color: '#aaa', fontSize: 13,
  },
  divLine: { flex: 1, height: 1, background: '#e5e5e5' },
  emailBtn: {
    width: '100%', display: 'flex', alignItems: 'center',
    justifyContent: 'center', gap: 10, padding: '12px',
    border: '1.5px solid #e8192c', borderRadius: 8,
    background: '#fff', fontFamily: 'inherit',
    fontSize: 14, fontWeight: 500, color: '#e8192c',
    cursor: 'pointer',
  },
  signupLink: {
    textAlign: 'center', marginTop: 20,
    fontSize: 13, color: '#e8192c',
    fontWeight: 600, cursor: 'pointer',
  },
  phonDesc: {
    fontSize: 14, color: '#666', lineHeight: 1.6, marginBottom: 20,
  },
  inputLabel: {
    display: 'block', fontSize: 13, fontWeight: 600,
    color: '#222', marginBottom: 6,
  },
  phoneRow: {
    display: 'flex', border: '1.5px solid #e5e5e5',
    borderRadius: 8, overflow: 'hidden',
  },
  phoneFlag: {
    display: 'flex', alignItems: 'center', gap: 6,
    padding: '0 12px', background: '#f9f9f9',
    borderRight: '1px solid #e5e5e5',
    fontSize: 13, fontWeight: 500,
    whiteSpace: 'nowrap',
  },
  phoneInput: {
    flex: 1, border: 'none', outline: 'none',
    padding: '12px 14px', fontFamily: 'inherit',
    fontSize: 14, color: '#222', background: 'transparent',
  },
  submitBtn: {
    width: '100%', marginTop: 18, padding: 13,
    border: 'none', borderRadius: 8, fontFamily: 'inherit',
    fontSize: 15, fontWeight: 600, transition: 'all 0.15s',
  },
  control: {
    width: '100%', padding: '11px 14px',
    border: '1.5px solid #e5e5e5', borderRadius: 8,
    fontFamily: 'inherit', fontSize: 14, color: '#222',
    outline: 'none', background: '#fff',
    boxSizing: 'border-box',
  },
  currencyBadge: {
    padding: '11px 14px', border: '1.5px solid #e5e5e5',
    borderRadius: 8, fontSize: 14, fontWeight: 600,
    color: '#666', background: '#f9f9f9',
    display: 'flex', alignItems: 'center',
  },
  uploadZone: {
    border: '2px dashed #e5e5e5', borderRadius: 8,
    padding: '22px', textAlign: 'center',
    cursor: 'pointer', color: '#aaa',
    transition: 'all 0.15s',
  },
  thumb: {
    width: 72, height: 72, borderRadius: 6,
    objectFit: 'cover', border: '1.5px solid #e5e5e5',
  },
  removeThumb: {
    position: 'absolute', top: -6, right: -6,
    width: 18, height: 18, background: '#e8192c',
    color: '#fff', borderRadius: '50%', border: 'none',
    cursor: 'pointer', fontSize: 10,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  postBtn: {
    width: '100%', padding: 14, background: '#e8192c',
    color: '#fff', border: 'none', borderRadius: 8,
    fontFamily: 'inherit', fontSize: 15, fontWeight: 700,
    cursor: 'pointer', marginTop: 8, transition: 'background 0.15s',
    letterSpacing: 0.2,
  },
  successIcon: {
    width: 72, height: 72, background: '#e8f8ef',
    borderRadius: '50%', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    fontSize: 36, margin: '0 auto 18px',
    animation: 'pop 0.4s cubic-bezier(.34,1.56,.64,1)',
  },
  doneBtn: {
    padding: '12px 32px', background: '#e8192c',
    color: '#fff', border: 'none', borderRadius: 8,
    fontFamily: 'inherit', fontSize: 15, fontWeight: 600,
    cursor: 'pointer', transition: 'background 0.15s',
  },
  fieldErr: {
    margin: '4px 0 0', fontSize: 12, color: '#e8192c',
    display: 'flex', alignItems: 'center', gap: 4,
  },
}