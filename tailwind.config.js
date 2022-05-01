module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '306': '19.125rem'
      },
      colors: {
        orange: '#FF6B00',
        darkgray: '#434343',
        lightgray: 'E5E5E5'
      }
    },
    spacing: {
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '20px',
      '6': '24px',
      '7': '34px',
      '8': '70px'
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    fontSize: {
      'xl': '3.875rem',
    }
  },
  plugins: [],
}