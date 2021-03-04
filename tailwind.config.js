// tailwind.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      blue: colors.blue,
      gray: colors.blueGray,
      green: colors.emerald,
      red: colors.red,
      white: colors.white,
    },
    extend: {
      colors: {
        'karns-blue': '#114a96',
      },
      fontFamily: {
        sans: ['Inter'],
      },
    },
  },
  variants: {
    extend: {},
  },
  /* eslint-disable-next-line global-require */
  plugins: [require('@tailwindcss/forms')],
};
