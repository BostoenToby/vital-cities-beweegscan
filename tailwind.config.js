module.exports = {
  content: ['**/*.{tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
    screens: {
      'mobile': {'max': '576px'},
      'tabletportrait': {'max': '768px'},
      'tabletlandscape': {'max': '992px'},
      'desktop': {'max': '1280px'}
    },
    colors: {
      neutral: '#F8FAFC',
      gray: '#475569',
      pink: '#e7358b',
      lightPink: '#EEE3FF',
      lightxPink: '#F7F2FF',
      purple: '#492784',
      mediumPurple: '#613F9D',
      lightPurple: '#8262BA',
      green: '#02866C',
      lightGreen: '#EAFAF7',
      yellow: '#f2c123',
      white: '#ffffff',
      black: '#000000',
      dark: '#121729',
      lightRed: '#F6C4D3',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
