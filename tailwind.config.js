const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        6: '6px'
      },
      colors: {
        'cyan': colors.cyan,
        'emerald': colors.emerald,
        'lime':colors.lime,
        'orange':colors.orange,
        'zinc':colors.zinc,
        'rose':colors.rose,
        'slate':colors.slate

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}