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
      },
      colors: {
        'gold': '#EAC96F',
        'peach-yellow': '#FDCD9D'
      }
    },
    backgroundImage: {
      'custom-fade': `linear-gradient(
                      to right,
                      rgba(78, 78, 84, 0) 0%, 
                      #ADADBA 45%, 
                      rgba(78, 78, 84, 0) 99%
                      )`,

      'gold-gradient': `linear-gradient(
                        90deg,
                        #DBB346 0%,
                        #FFE7A7 36%,
                        #FFCF4B 57%,
                        #FFF4D1 77%,
                        #E4B73D 100%
                      )`,
      'mint-gradient': `linear-gradient(
          to bottom,
          #E8FFE0 0%,
          #EEFFC9 46%,
          #77A587 100%
        )`,
      'mint-gradient-t': `linear-gradient(
          to top,
          #E8FFE0 0%,
          #EEFFC9 46%,
          #77A587 100%
        )`,
      'pink-purple-gradient': `linear-gradient(
          to bottom,
          #FF89DF 0%,
          #2C0F25 100%
        )`,
      'lime-gradient': 'linear-gradient(to bottom, #F8FFBA 0%, #ECFF4F 42%, #D0E050 100%)',
      'emerald-dark': 'linear-gradient(90deg, #152B29 0%, #134C3C 47%, #152B29 100%)',
      'peach-yellow-gradient': 'linear-gradient(to bottom right, #FDCD9D, #F7EF82)',
    }
  },
  plugins: [],
};
