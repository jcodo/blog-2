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
        green: {
          100: '#F2FDF8',
          200: '#DEFAED',
          300: '#CBF7E1',
          400: '#A3F1CB',
          500: '#7CEBB5',
          600: '#70D4A3',
          700: '#4A8D6D',
          800: '#386A51',
          900: '#254736',
        },
      },
    },
  },
  variants: {
    borderStyle: ['responsive', 'hover', 'focus'],
  },
  plugins: [require('@tailwindcss/typography')],
}
