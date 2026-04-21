const config = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dubizzle-red': '#E8001C',
        'dubizzle-bg': '#F5F5F5',
        'dubizzle-dark': '#333333',
        'dubizzle-gray': '#767676',
        'dubizzle-border': '#E0E0E0',
        'dubizzle-link': '#2f6f9f',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 4px rgba(0,0,0,0.08)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.12)',
        'header': '0 2px 8px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}

export default config