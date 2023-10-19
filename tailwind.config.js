/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: '#3EA9F8',
        black:'#131313',
        gray:'#7A7A7A',
        'light-gray':'#C2C2C2',
        backgrey:'#F3F3F3;',
      },
      fontFamily:{
        primaryfont: ['Della Respira','serif' ],
        secondaryfont: ['DM Sans','sans-serif']
      },
      backgroundImage: {
        'skill-back-img': "url('/Images/Mask group.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}