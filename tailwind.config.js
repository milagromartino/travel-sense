/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/index.html","./public/user.html", "./src/**/*.{html, js}"],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
        'yosemite': "url('../img/yosemite.jpg')",
        'LA': "url('../img/LA.jpg')",
        'seattle': "url('../img/seattle.jpg')",
        'new_york': "url('../img/new_york.jpg')",
        'norway': "url('../img/norway.jpg')",
        'sydney-cut': "url('../img/sydney-cut.jpg')",
        'iceland': "url('../img/iceland.jpg')",
        'miami': "url('../img/miami.jpg')",
        'marriott-myrtle-beach': "url('../img/marriott-myrtle-beach.jpg')",
        'beverly-hills': "url('../img/beverly-hills.jpg')",
        'switzerland': "url('../img/switzerland.jpg')",
        'bali': "url('../img/bali.jpg')",
        'norway': "url('../img/norway.jpg')",
        'chicago': "url('../img/chicago.jpg')",
        'europe': "url('../img/europe.jpg')",
        'iceland': "url('../img/iceland.jpg')",
        'rome': "url('../img/rome.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
      }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
      },
      fontFamily:{
        Montserrat:['Montserrat', 'sans-serif']
      }
    },
    variants:{
      width:["responsive", "hover", "focus"],
      extend:{},
    }
  },
  plugins: [],
}

