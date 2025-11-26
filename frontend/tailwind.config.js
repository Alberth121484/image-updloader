/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3662E3',
        'primary-light': '#C2DAF9',
        'dark-bg': '#121826',
        'dark-card': '#212936',
        'dark-border': '#4D5562',
        'light-border': '#E5E7EB',
        'light-bg': '#F9FAFB',
        'light-card': '#FFFFFF',
        'text-dark': '#121826',
        'text-light': '#F9FAFB',
        'text-muted': '#4D5562',
        'overlay': 'rgba(249, 250, 251, 0.8)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.625rem', { lineHeight: '1' }],
        'sm': ['0.75rem', { lineHeight: '1.25' }],
        'base': ['0.875rem', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
}