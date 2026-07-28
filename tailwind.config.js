/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#2a2a2a',
        brand: {
          DEFAULT: '#c4df34',
          light: '#C3FF1F',
          dark: '#9fb824',
        },
      },
      screens: {
        xs: '390px',
      },
    },
  },
  plugins: [],
}
