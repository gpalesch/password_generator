/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: '#261313',
        textColor: '#E7DADA',
      },
      fontFamily: {
        italiana: ['Italiana'],
        josefin: ['Josefin Slab']
      }
    }
  },
  plugins: [],
}