import { useState, useEffect, useRef } from 'react'

/* ─────────────────────────────────────────────
   PostAdModal
   Props:
     isOpen  : boolean
     onClose : () => void
   Steps: 1=Login  2=Phone  3=PostAd  4=Success
───────────────────────────────────────────── */

export default function PostAdModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [phone, setPhone] = useState('')
  const [previews, setPreviews] = useState([])
  const [visible, setVisible] = useState(false)
  const fileRef = useRef(null)

  /* animate in/out */
  useEffect(() => {
    if (isOpen) {
      setStep(1)
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
          padding: step === 4 ? '40px 28px' : '32px 28px 28px',
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

        {/* Step dots */}
        {step !== 4 && (
          <div style={styles.stepRow}>
            {[1, 2, 3].map((s) => (
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

        {step === 1 && <LoginStep onNext={() => setStep(2)} />}
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

/* ─── Step 1: Login ─── */
function LoginStep({ onNext }) {
  return (
    <>
      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <div style={{ fontSize: 28 }}>🔥</div>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: -0.5 }}>
          du<span style={{ color: '#e8192c' }}>b</span>izzle
        </div>
        <div style={{ fontSize: 11, color: '#aaa' }}>formerly OLX</div>
      </div>

      <h2 style={styles.h2}>Login into your Dubizzle<br />account</h2>

      {/* Google */}
      <button style={styles.socialBtn} onClick={onNext}>
        <GoogleIcon />
        Login with Google
      </button>

      {/* Facebook */}
      <button style={styles.socialBtn} onClick={onNext}>
        <FacebookIcon />
        Login with Facebook
      </button>

      <div style={styles.orDivider}>
        <div style={styles.divLine} /><span>OR</span><div style={styles.divLine} />
      </div>

      {/* Email */}
      <button style={styles.emailBtn} onClick={onNext}>
        <EmailIcon />
        Login with Email
      </button>

      <div style={styles.signupLink}>New to Dubizzle? Create an account</div>
    </>
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
  return (
    <>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Place your ad</h2>
      <p style={{ fontSize: 13, color: '#666', marginBottom: 20 }}>
        Fill in the details below to post your ad
      </p>

      <FormGroup label="Category" required>
        <select style={styles.control}>
          <option value="">Select a category</option>
          {['Mobile Phones', 'Vehicles', 'Property for Rent', 'Property for Sale',
            'Electronics', 'Furniture & Garden', 'Jobs', 'Sports Equipment', 'Rooms for Rent'].map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </FormGroup>

      <FormGroup label="Ad Title" required>
        <input style={styles.control} type="text" placeholder="e.g. iPhone 15 Pro Max 256GB" />
      </FormGroup>

      <FormGroup label="Description" required>
        <textarea
          style={{ ...styles.control, resize: 'vertical', minHeight: 90 }}
          placeholder="Describe condition, features, reason for selling…"
        />
      </FormGroup>

      <FormGroup label="Price (AED)" required>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={styles.currencyBadge}>AED</div>
          <input style={{ ...styles.control, flex: 1 }} type="number" placeholder="0" />
        </div>
      </FormGroup>

      <div style={{ display: 'flex', gap: 12 }}>
        <FormGroup label="City" required style={{ flex: 1 }}>
          <select style={styles.control}>
            <option value="">Select city</option>
            {['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah'].map(c => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </FormGroup>
        <FormGroup label="Condition" style={{ flex: 1 }}>
          <select style={styles.control}>
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
        onClick={onSubmit}
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
}