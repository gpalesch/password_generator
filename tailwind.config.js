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
        'clamp-22-36': 'clamp(22.75px, 7.15vw, 36.5px)',
        'clamp-31-51': 'clamp(31.75px, 9.95vw, 51px)',
      },
      height: {
        '6vw': '6vw',
        '8vw': '8vw',
        '9.5vw': '9.5vw',
        '14vw': '14vw',
        'clamp-14-24': 'clamp(14px, 4.4vw, 24.8px)',
      },
      width: {
        '14.85vw': '14.85vw',
      },
      maxWidth: {
        'custom-410': '410px'
      },
      margin: {
        'clamp-27-60': 'clamp(27px, 8.05vw, 60px)',
        'clamp-10-20': 'clamp(10px, 3.8vw, 20px)',
        'clamp-4-6': 'clamp(4px, 1.15vw, 6px)',
        'clamp-11-30': 'clamp(11.5px, 4.75vw, 30px)',
      },
    },
  },
  plugins: [],
}