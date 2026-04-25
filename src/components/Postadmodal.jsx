import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

/* ─────────────────────────────────────────────
   PostAdModal
   Props:
     isOpen  : boolean
     onClose : () => void
   Steps: 1=Login  2=Phone  3=PostAd  4=Success
───────────────────────────────────────────── */

export default function PostAdModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [phoneData, setPhoneData] = useState({ code: '+971', number: '' })
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()

  /* animate in/out */
  useEffect(() => {
    if (isOpen) {
      setStep(1)
      setPhoneData({ code: '+971', number: '' })
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
          maxWidth: 440,
          padding: '40px 32px 32px',
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
        {step !== 5 && (
          <button onClick={handleClose} style={styles.closeBtn}>✕</button>
        )}

        {step === 1 && (
          <LoginStep onNext={() => setStep(2)} />
        )}
        {step === 2 && (
          <PhoneStep
            phoneData={phoneData}
            setPhoneData={setPhoneData}
            onNext={() => {
              handleClose();
              navigate('/place-an-ad');
            }}
          />
        )}
      </div>
    </div>
  )
}

/* ─── Step 1: Login ─── */
function LoginStep({ onNext }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: 24, display: 'inline-block', position: 'relative' }}>
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <rect x="35" y="20" width="30" height="40" rx="4" fill="#E8E8E8" />
          <rect x="40" y="28" width="20" height="4" rx="2" fill="#D1D1D1" />
          <rect x="40" y="36" width="20" height="4" rx="2" fill="#D1D1D1" />
          <rect x="40" y="44" width="20" height="4" rx="2" fill="#D1D1D1" />
          <rect x="40" y="52" width="20" height="4" rx="2" fill="#A8A8A8" />
          <circle cx="65" cy="20" r="8" fill="#e8192c" />
          <path d="M65 16v8M61 20h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 700, color: '#222', marginBottom: 28 }}>Log in to post an ad</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <button style={styles.loginOptionBtn} onClick={onNext}>
          <FacebookIcon /> Continue with Facebook
        </button>
        <button style={styles.loginOptionBtn} onClick={onNext}>
          <GoogleIcon /> Continue with Google
        </button>
        <button style={styles.loginOptionBtn} onClick={onNext}>
          <AppleIcon /> Continue with Apple
        </button>
        <button style={styles.loginOptionBtn} onClick={onNext}>
          <EmailIcon /> Continue with Email
        </button>
      </div>

      <p style={{ marginTop: 24, fontSize: 14 }}>
        <button style={{ background: 'none', border: 'none', color: '#e8192c', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
          Don't have an account? Create one
        </button>
      </p>
    </div>
  )
}

/* ─── Step 2: Phone ─── */
const countryCodes = [
  { code: '+971', flag: '🇦🇪', name: 'United Arab Emirates' },
  { code: '+92', flag: '🇵🇰', name: 'Pakistan' },
  { code: '+968', flag: '🇴🇲', name: 'Oman' },
  { code: '+965', flag: '🇰🇼', name: 'Kuwait' },
  { code: '+962', flag: '🇯🇴', name: 'Jordan' },
  { code: '+20', flag: '🇪🇬', name: 'Egypt' },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+974', flag: '🇶🇦', name: 'Qatar' },
  { code: '+973', flag: '🇧🇭', name: 'Bahrain' },
  { code: '+1', flag: '🇺🇸', name: 'United States' },
  { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: '+86', flag: '🇨🇳', name: 'China' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', flag: '🇫🇷', name: 'France' },
  { code: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: '+7', flag: '🇷🇺', name: 'Russia' },
  { code: '+27', flag: '🇿🇦', name: 'South Africa' },
  { code: '+82', flag: '🇰🇷', name: 'South Korea' },
  { code: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: '+90', flag: '🇹🇷', name: 'Turkey' }
];

function PhoneStep({ phoneData, setPhoneData, onNext }) {
  const [error, setError] = useState('');
  
  const numberOnly = phoneData.number.replace(/\D/g, '');
  const valid = numberOnly.length >= 7 && numberOnly.length <= 15;

  const handleSubmit = () => {
    if (!valid) {
      setError('Please enter a valid phone number (7-15 digits).');
      return;
    }
    setError('');
    onNext();
  };

  const selectedCountry = countryCodes.find(c => c.code === phoneData.code) || countryCodes[0];

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
      <div style={{ ...styles.phoneRow, borderColor: error ? '#e8192c' : '#e5e5e5', background: error ? '#fff5f5' : '#fff' }}>
        <div style={styles.phoneFlagWrapper}>
          <select
            value={phoneData.code}
            onChange={(e) => setPhoneData({ ...phoneData, code: e.target.value })}
            style={styles.phoneSelect}
          >
            {countryCodes.map((c, i) => (
              <option key={i} value={c.code}>
                {c.flag} {c.code} ({c.name})
              </option>
            ))}
          </select>
          <div style={styles.phoneFlagDisplay}>
            <span style={{ fontSize: 18 }}>{selectedCountry.flag}</span>
            <span style={{ fontSize: 13, fontWeight: 500 }}>{selectedCountry.code}</span>
            <span style={{ fontSize: 10, color: '#666', marginLeft: 4 }}>▼</span>
          </div>
        </div>
        <input
          type="tel"
          value={phoneData.number}
          onChange={(e) => {
            const onlyNums = e.target.value.replace(/\D/g, '');
            setPhoneData({ ...phoneData, number: onlyNums });
            if (error) setError('');
          }}
          placeholder="Enter phone number"
          style={styles.phoneInput}
        />
      </div>
      {error && <p style={styles.fieldErr}>⚠ {error}</p>}

      <button
        onClick={handleSubmit}
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

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path d="M16.82 15.65c-1.6 2.37-3.14 4.78-5.75 4.86-2.58.07-3.41-1.48-6.38-1.48-2.94 0-3.92 1.45-6.35 1.51-2.65.07-4.43-2.6-6.04-4.94C-.96 10.87.5 5.89 3.65 5.86c1.51-.02 2.87.99 3.82.99 1.01 0 2.65-1.22 4.48-1.04 1.9.18 3.51.91 4.5 2.34-3.83 2.15-3.16 7.42.37 7.5zm-3.55-11.83c1.02-1.25 1.7-2.98 1.51-4.72-1.5.06-3.26.97-4.32 2.22-.9.1-1.68 2.82-1.44 4.54 1.63.13 3.23-.8 4.25-2.04z" transform="translate(4, 2)" fill="#000"/>
    </svg>
  )
}

/* ─── Styles ─── */
const styles = {
  loginOptionBtn: {
    width: '100%', display: 'flex', alignItems: 'center',
    gap: 12, padding: '14px 20px',
    border: '1.5px solid #eaeaea', borderRadius: 8,
    background: '#fff', fontFamily: 'inherit',
    fontSize: 15, fontWeight: 500, color: '#444',
    cursor: 'pointer', transition: 'background 0.15s',
  },
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
  phoneFlagWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    background: '#f9f9f9',
    borderRight: '1px solid #e5e5e5',
  },
  phoneSelect: {
    position: 'absolute',
    inset: 0,
    opacity: 0,
    cursor: 'pointer',
    width: '100%',
  },
  phoneFlagDisplay: {
    display: 'flex', alignItems: 'center', gap: 6,
    padding: '0 12px',
    fontSize: 13, fontWeight: 500,
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
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