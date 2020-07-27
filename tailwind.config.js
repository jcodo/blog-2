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
        orange: {
          100: '#FCF2EF',
          200: '#F8DED6',
          300: '#F4CABD',
          400: '#EBA28C',
          500: '#E37A5B',
          600: '#CC6E52',
          700: '#884937',
          800: '#663729',
          900: '#44251B',
        },
        pinkyred: {
          100: '#FDEDEE',
          200: '#F9D2D5',
          300: '#F5B6BB',
          400: '#EE8089',
          500: '#E74956',
          600: '#D0424D',
          700: '#8B2C34',
          800: '#682127',
          900: '#45161A',
        },
      },
    },
  },
  variants: {
    borderStyle: ['responsive', 'hover', 'focus'],
  },
  plugins: [require('@tailwindcss/typography')],
}
