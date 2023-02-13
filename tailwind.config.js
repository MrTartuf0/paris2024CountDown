/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      'primary': '#D7C378',
      'secondary': '#2a2a2a',
      'background': '#1b1b1b'
    },
    extend: {
      
    },
  },
  plugins: [],
}