/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e6fbff',
          100: '#b3f5fd',
          200: '#80efff',
          300: '#4de9ff',
          400: '#1ae3ff',
          500: '#00C1EB',
          600: '#00a5c9',
          700: '#0088a8',
          800: '#006b86',
          900: '#004e64',
        },
        accent: {
          50: '#fff4ed',
          100: '#ffe3d4',
          200: '#ffc7a8',
          300: '#ffa672',
          400: '#ff8a4d',
          500: '#FF7836',
          600: '#e85e1f',
          700: '#c44a12',
          800: '#9a3a10',
          900: '#7a2f10',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
