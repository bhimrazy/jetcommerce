const colors = require("tailwindcss/colors");
const { scale } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Menlo", ...defaultTheme.fontFamily.mono],
        source: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        "ubuntu-mono": ["Ubuntu Mono", ...defaultTheme.fontFamily.mono],
        system: defaultTheme.fontFamily.sans,
        flow: "Flow",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        teal: colors.teal,
        cyan: colors.cyan,
        gray: colors.coolGray,
        red: colors.red,
        violet: colors.violet,
        purple: colors.purple,
        yellow: colors.amber,
        blue: colors.blue,
      },
      zIndex: {
        '5': 5,
      },
      animation:{
        dropdown:'drop 0.1s'
      },
      keyframes:{
        drop:{
          '0%':{
            opacity: '0'
          },
          '100%':{
            opacity: '0.5'
            // transform:'translateY(0%)'
          },
          // '0% 100%':{
          //   animationTimingFunction:'cubic-bezier(.91,.91,.18,.78)'
          // }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};