// tailwind.config.js
const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      amber: colors.amber,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      trueGray: colors.trueGray,
      warmGray: colors.warmGray,
      orange: colors.orange,
      purple: colors.purple,
      lime: colors.lime,
      emerald: colors.emerald,
      teal: colors.teal,
      // cyan: colors.cyan,
      sky: colors.sky,
      white: colors.white,
      indigo: colors.indigo,
      violet: colors.violet,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      td: {
        blue: 'hsl(220, 98%, 61%)',
        linear1: 'hsl(192, 100%, 67%)',
        linear2: 'hsl(280, 87%, 65%)',
        grayVeryLightBlue: 'hsl(236, 33%, 92%)',
        lt: {
          gray: {
            veryLight: 'hsl(0, 0%, 98%)',
            lightBlue: 'hsl(233, 11%, 84%)',
            darkBlue: 'hsl(236, 9%, 61%)',
            veryDarkBlue: 'hsl(235, 19%, 35%)'
          }
        },
        dt: {
          gray: {
            lightBlue:'hsl(234, 39%, 85%)',
            darkBlue:'hsl(234, 11%, 52%)',
            veryDarkBlue:'hsl(233, 14%, 35%)',
            veryDarkBlue2:'hsl(237, 14%, 26%)'
          },
          veryDarkBlue: 'hsl(235, 21%, 11%)',
          veryDarkBlueDesur: 'hsl(235, 24%, 19%)',
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}