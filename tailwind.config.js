/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        vietnam: ['"Be Vietnam Pro"', 'sans-serif'],
        chakra: ['"Chakra Petch"', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      }
    },
    backgroundImage: {
      'custom-fade': 'linear-gradient(to right, rgba(78, 78, 84, 0) 0%, #ADADBA 45%, rgba(78, 78, 84, 0) 99%)',
    }
  },
  plugins: [],
};
