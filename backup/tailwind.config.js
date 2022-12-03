/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      spacing: {
        '420': '420px'
      },
      minWidth: {
        '300': '300px',
        '400': '400px'
      },
      gridTemplateColumns: {
        'main_md': '1fr 300px',
        'main_lg': '200px 1fr 300px'
      },
      colors: {
        primary: '#efc',
        secondary: '#000'
      },
      screens: {
        'xs': '420px',
      },
      borderRadius: {
        none: '0',
        small: '0.25',
        default: '0.5rem',
      },
      fontFamily: {
        sans: [
          'Cabin',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}