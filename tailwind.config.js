/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    screens: {
      'xm': {'max': '480px'}, //superior a 768px

      'sm': {'max': '640px'}, //superior a 768px

      'md': {'max': '768px'}, //superiores a 970px

      'lg': {'max': '1024px'} //superiores a 1200px
      
      //'laptop': {'max': '1050px'},
      // => @media (min-width: 1500px) { ... }
    },

    backgroundImage: {
      blur: 'url(/src/assets/blur-background.png)'
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43'
        },   
        blue: {
          500: '#81D8F7'
        },
        orange: {
          500: '#FBA94C'
        }, 
        red: {
          500: '#F75A68'
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      }
    },
  },
  plugins: [],
}
