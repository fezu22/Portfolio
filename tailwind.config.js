/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        red: {
          primary: '#C0152A',
          dark: '#8B0F1E',
          light: 'rgba(192,21,42,0.08)',
        },
        gold: {
          primary: '#D4A017',
          light: '#F5D060',
          shine: '#FFE88A',
          soft: 'rgba(212,160,23,0.1)',
        },
        pink: {
          soft: '#FFF0F3',
          mid: '#FFD6DF',
          base: '#FFB6C1',
        },
      },
      animation: {
        morph: 'morph 8s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        'float-delay': 'float 3s 1.5s ease-in-out infinite',
        pulse2: 'pulse2 2s infinite',
        'fade-up': 'fadeUp 0.8s ease both',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 60% 40% / 50% 60% 40% 50%' },
          '25%': { borderRadius: '40% 60% 40% 60% / 60% 40% 60% 40%' },
          '50%': { borderRadius: '50% 50% 60% 40% / 40% 50% 50% 60%' },
          '75%': { borderRadius: '60% 40% 50% 50% / 55% 45% 55% 45%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulse2: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.5)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
