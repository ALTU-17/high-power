/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        asphalt: '#14161A',
        panel: '#1D2024',
        steel: '#2B2E33',
        hazard: '#FF6A13',
        crimson: '#C81E3A',
        chrome: '#C7CDD4',
        paper: '#F2EFEA'
      },
      fontFamily: {
        display: ['var(--font-oswald)'],
        body: ['var(--font-work-sans)'],
        mono: ['var(--font-space-mono)']
      },
      backgroundImage: {
        'hazard-stripes':
          'repeating-linear-gradient(135deg, #FF6A13, #FF6A13 14px, #14161A 14px, #14161A 28px)',
        'blueprint-grid':
          'linear-gradient(rgba(199,205,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(199,205,212,0.06) 1px, transparent 1px)'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.55)' },
          '70%': { boxShadow: '0 0 0 14px rgba(37,211,102,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0)' }
        }
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        pulseRing: 'pulseRing 2s infinite'
      }
    }
  },
  plugins: []
};
