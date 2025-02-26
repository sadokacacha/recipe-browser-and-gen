module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3A8C55',  // Main green
          light: '#5DA575',
        },
        secondary: {
          DEFAULT: '#FF7F50',  // Coral orange
          light: '#FF9F7D',
        },
        background: '#F9FAFB', // Off-white
      }
    },
  },
  plugins: [],
}