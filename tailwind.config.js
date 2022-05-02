module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8257e6'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
