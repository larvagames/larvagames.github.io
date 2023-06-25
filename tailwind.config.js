const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './**/*.html'
  ],

  theme: {
    extend: {
      colors: {
        'yellow': '#FFDE00',
      },
    },
  },

  plugins: [],
}