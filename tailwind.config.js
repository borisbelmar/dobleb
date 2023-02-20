/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#28bf65',
          '50': '#f0fdf4',
          '100': '#ddfbe8',
          '200': '#bdf5d3',
          '300': '#8aebb0',
          '400': '#55da8a',
          '500': '#28bf65',
          '600': '#1b9e4f',
          '700': '#197c41',
          '800': '#196237',
          '900': '#16512f'
        },
        'dark-primary': {
          DEFAULT: '#176e3a',
          '50': '#9cf2b6',
          '100': '#88f1af',
          '200': '#68e89b',
          '300': '#35de79',
          '400': '#24a355',
          '500': '#176e3a',
          '600': '#0c4b25',
          '700': '#082b16',
          '800': '#05140b',
          '900': '#010402'
        },
        secondary: {
          DEFAULT: '#12abc8',
          '50': '#edfdfe',
          '100': '#d2f7fb',
          '200': '#aaeef7',
          '300': '#6fe0f1',
          '400': '#4ed0e7',
          '500': '#12abc8',
          '600': '#1288a8',
          '700': '#156e89',
          '800': '#1a5970',
          '900': '#1a4b5f'
        },
        'dark-secondary': {
          DEFAULT: '#08505e',
          '50': '#7deff7',
          '100': '#61e4f5',
          '200': '#40d9ed',
          '300': '#15bcd5',
          '400': '#127587',
          '500': '#08505e',
          '600': '#06313c',
          '700': '#061c23',
          '800': '#040d11',
          '900': '#010304'
      }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
}
