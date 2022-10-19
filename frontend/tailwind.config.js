/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        inset: 'inset 0px 0px 42px rgba(14, 42, 71, 0.10)',
        hidebar: '0px 0px 100px 500px rgba(149, 157, 165, 0.5)',
      },
    },
  },
  plugins: [],
}
