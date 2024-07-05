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
        italiana: ['Italiana', 'serif'],
        josefin: ['Josefin Slab', 'serif']
      },
      fontSize: {
        'vw-5': '5vw',
        'vw-10': '10vw',
        'vw-15': '15vw',
        'clamp-22-39': 'clamp(22.75px, 7.15vw, 39px)',
        'clamp-31-50': 'clamp(31.75px, 9.95vw, 50px)',
      }
    }
  },
  plugins: [],
}