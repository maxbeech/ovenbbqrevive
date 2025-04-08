/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff4ed',
          100: '#ffe6d5',
          200: '#ffc9ab',
          300: '#ffa478',
          400: '#ff7441',
          500: '#fb5a25',
          600: '#e94212',
          700: '#c2320e',
          800: '#a02b12',
          900: '#832811',
          950: '#461207',
        },
        secondary: {
          50: '#fffdfa',
          100: '#fffaf5',
          200: '#ffecdc',
          300: '#fff2e8',
          400: '#ffe8d5',
          500: '#ffdcc1',
          600: '#eecfb5',
          700: '#ddbda5',
          800: '#cca48b',
          900: '#b58c70',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'custom': '1rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 