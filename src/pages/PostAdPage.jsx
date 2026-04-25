import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

/* ─── Icons ─── */
function CarIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e8192c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H12c-.6 0-1.2.3-1.6.8L8 10s-2.7.6-4.5 1.1c-.8.2-1.5 1-1.5 1.9v3c0 .6.4 1 1 1h2"/>
      <circle cx="7" cy="17" r="2"/>
      <circle cx="17" cy="17" r="2"/>
      <path d="M14 10h-4"/>
    </svg>
  )
}

function ShirtIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e8192c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
      <path d="M12 2L10 6 12 10 14 6 12 2z"/>
      <path d="M12 10v12"/>
      <path d="M12 2v4"/>
    </svg>
  )
}

function HouseSaleIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e8192c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <path d="M9 22V12h6v10"/>
      <rect x="14" y="6" width="6" height="4" rx="1"/>
    </svg>
  )
}

function HouseRentIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e8192c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01"/>
      <path d="M16 6h.01"/>
      <path d="M12 6h.01"/>
      <path d="M12 10h.01"/>
      <path d="M12 14h.01"/>
      <path d="M16 10h.01"/>
      <path d="M16 14h.01"/>
      <path d="M8 10h.01"/>
      <path d="M8 14h.01"/>
    </svg>
  )
}

function CommunityIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e8192c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}

function SofaIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e8192c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2"/>
      <path d="M2 16v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4"/>
      <path d="M2 16h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z"/>
      <path d="M6 16v5"/>
      <path d="M18 16v5"/>
    </svg>
  )
}

/* ─── Styles ─── */
const styles = {
  container: {
    minHeight: '100vh',
    background: '#fafafa',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    background: '#fff',
    borderBottom: '1px solid #eaeaea',
    padding: '16px 24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 32,
    objectFit: 'contain',
  },
  content: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
  },
  card: {
    background: '#fff',
    borderRadius: 16,
    width: '100%',
    maxWidth: 640,
    padding: '40px 32px',
    boxShadow: '0 8px 48px rgba(0,0,0,0.06)',
  },
  categoryCard: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', padding: '32px 16px',
    background: '#fff', border: '1.5px solid #eaeaea',
    borderRadius: 12, cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    transition: 'all 0.2s',
  },
  control: {
    width: '100%', padding: '11px 14px',
    border: '1.5px solid #e5e5e5', borderRadius: 8,
    fontFamily: 'inherit', fontSize: 14, color: '#222',
    outline: 'none', background: '#fff',
    boxSizing: 'border-box',
  },
  fieldErr: {
    margin: '4px 0 0', fontSize: 12, color: '#e8192c',
    display: 'flex', alignItems: 'center', gap: 4,
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
  },
  doneBtn: {
    padding: '12px 32px', background: '#e8192c',
    color: '#fff', border: 'none', borderRadius: 8,
    fontFamily: 'inherit', fontSize: 15, fontWeight: 600,
    cursor: 'pointer', transition: 'background 0.15s',
  },
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

export default function PostAdPage() {
  const [step, setStep] = useState(1) // 1=Category, 2=Form, 3=Success
  const [selectedCategory, setSelectedCategory] = useState('')
  const [previews, setPreviews] = useState([])
  const fileRef = useRef(null)
  const navigate = useNavigate()

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 10)
    files.forEach((file) => {
      const reader = new FileReader()
      reader.onload = (ev) =>
        setPreviews((prev) => [...prev, ev.target.result].slice(0, 10))
      reader.readAsDataURL(file)
    })
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src="https://logos-world.net/wp-content/uploads/2022/05/Dubizzle-Logo.png" alt="Dubizzle" style={styles.logo} />
      </header>

      <main style={styles.content}>
        <div style={styles.card}>
          {step === 1 && (
            <CategoryStep
              onSelect={(cat) => {
                setSelectedCategory(cat)
                setStep(2)
              }}
            />
          )}
          {step === 2 && (
            <PostAdStep
              initialCategory={selectedCategory}
              previews={previews}
              fileRef={fileRef}
              onImageChange={handleImageChange}
              removePreview={(i) => setPreviews((p) => p.filter((_, idx) => idx !== i))}
              onSubmit={() => setStep(3)}
            />
          )}
          {step === 3 && <SuccessStep onClose={() => navigate('/')} />}
        </div>
      </main>
    </div>
  )
}

function CategoryStep({ onSelect }) {
  const categories = [
    { name: 'Motors', icon: <CarIcon /> },
    { name: 'Jobs', icon: <ShirtIcon /> },
    { name: 'Property for Sale', icon: <HouseSaleIcon /> },
    { name: 'Property for Rent', icon: <HouseRentIcon /> },
    { name: 'Community', icon: <CommunityIcon /> },
    { name: 'Classifieds', icon: <SofaIcon /> },
  ]

  return (
    <div style={{ textAlign: 'center', margin: '0 -10px' }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111', marginBottom: 8 }}>Hello, what are you listing today?</h2>
      <p style={{ fontSize: 15, color: '#444', marginBottom: 32 }}>Select the area that best suits your ad</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {categories.map(c => (
          <div
            key={c.name}
            onClick={() => onSelect(c.name)}
            style={styles.categoryCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.1)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.borderColor = '#e8192c'
              e.currentTarget.querySelector('span').style.color = '#e8192c'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = '#eaeaea'
              e.currentTarget.querySelector('span').style.color = '#222'
            }}
          >
            <div style={{ marginBottom: 12 }}>{c.icon}</div>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#222', lineHeight: 1.2, transition: 'color 0.2s' }}>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PostAdStep({ initialCategory, previews, fileRef, onImageChange, removePreview, onSubmit }) {
  const [form, setForm] = useState({ category: initialCategory || '', title: '', description: '', price: '', city: '', condition: '' })
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
    if (Object.keys(e).length === 0) {
      console.log("Final Ad Payload:", {
        ...form,
        imagesCount: previews.length
      })
      onSubmit()
    }
  }

  const ctrl = (field) => ({
    style: { ...styles.control, borderColor: errors[field] ? '#e8192c' : '#e5e5e5', background: errors[field] ? '#fff5f5' : '#fff' }
  })

  return (
    <>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Place your ad</h2>
      <p style={{ fontSize: 14, color: '#666', marginBottom: 24 }}>
        Fill in the details below to post your ad
      </p>

      <FormGroup label="Category" required>
        <select value={form.category} onChange={e => set('category', e.target.value)} {...ctrl('category')}>
          <option value="">Select a category</option>
          {['Motors', 'Jobs', 'Property for Sale', 'Property for Rent', 'Community', 'Classifieds',
            'Mobile Phones', 'Electronics', 'Furniture & Garden', 'Sports Equipment', 'Rooms for Rent'].map(c => (
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
