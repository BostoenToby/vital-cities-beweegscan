module.exports = {
  content: [
    '**/*.{tsx,html}'
  ],
  theme: {
    extend: {},
    colors: {
      'neutral': '#F8FAFC',
      'gray': '#475569',
      'pink': "#e7358b",
      'lightPink': '#EEE3FF',
      'purple': "#492784",
      'lightPurple': '#8262BA',
      'green': '#02866C',
      'lightGreen': '#EAFAF7',
      'yellow': '#f2c123',
      'white': '#ffffff',
      'black': '#000000',
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
