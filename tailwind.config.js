/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        irs: {
          gold: '#C9A84C',
          'gold-light': '#E8C97A',
          'gold-dark': '#9A7A2E',
          green: '#1B4332',
          'green-mid': '#2D6A4F',
          'green-light': '#40916C',
          black: '#0A0A0A',
          'off-black': '#111418',
          dark: '#161B22',
          mid: '#1F2937',
          white: '#F8F6F1',
          grey: '#9CA3AF',
          'light-grey': '#E5E1D8',
          accent: '#D4AF37',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Barlow', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
      },
      animation: {
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
        'ticker-scroll': 'tickerScroll 30s linear infinite',
        'map-pulse': 'mapPulse 2s ease-in-out infinite',
      },
      keyframes: {
        scrollPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        tickerScroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        mapPulse: {
          '0%, 100%': { opacity: '0.8', r: '6' },
          '50%': { opacity: '1', r: '8' },
        },
      },
    },
  },
  plugins: [],
}
