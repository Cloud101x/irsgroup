/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        irs: {
          gold: '#D6B25E',
          'gold-light': '#F0D48A',
          'gold-dark': '#A67B2A',
          green: '#123B34',
          'green-mid': '#1D5A4D',
          'green-light': '#3FA67B',
          black: '#06111C',
          'off-black': '#0A1624',
          dark: '#0E1D2E',
          mid: '#173147',
          white: '#F7F3EB',
          grey: '#97A6B8',
          'light-grey': '#E6DED0',
          ink: '#08131F',
          surface: '#101C2B',
          mist: '#DDE6F2',
        },
      },
      fontFamily: {
        serif: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
        'ticker': 'ticker 34s linear infinite',
        'map-pulse': 'mapPulse 2s ease-in-out infinite',
        float: 'float 12s ease-in-out infinite',
      },
      keyframes: {
        scrollPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        mapPulse: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' },
        },
      },
    },
  },
  plugins: [],
}
