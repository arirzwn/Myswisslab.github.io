/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}',
    "./public/css/**/*.{css }",],
  theme: {
    extend: {
      colors: {
        primary: '#35CAA4',
      },
      fontFamily: {
        'curvsive': ['Forum', 'cursive;'],
      },
      listStyleImage: {
        checkmark: 'url("/public/assets/check.svg")',
      },
    },
  },
  plugins: [],
}
