const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        heading: [...defaultTheme.fontFamily.sans],
      },
      colors: {
        base: '#007CF0',
        blue: {
          100: '#E6EFFC',
          200: '#C0D6F7',
          300: '#99BDF2',
          400: '#4D8CE9',
          500: '#015ADF',
          600: '#0151C9',
          700: '#013686',
          800: '#002964',
          900: '#001B43',
        },
      },
    },
  },
  variants: {
    borderStyle: ['responsive', 'hover', 'focus'],
  },
  plugins: [require('@tailwindcss/typography')],
}
