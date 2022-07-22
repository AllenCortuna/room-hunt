/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#A5DB73",
        'secondary': "#F5F4EE",
        'white': "#FEFFFF",
        'black': "#2D2F35",
        'green': "#00B360",
      },
      
    },
  },
  plugins: [],
}
