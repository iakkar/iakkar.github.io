/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",  // Explicitly include index.html
    "./js/**/*.{js,ts,jsx,tsx}",  // Include JavaScript files inside the js folder
    "./assets/**/*.{html,js,ts,jsx,tsx}", // Include any relevant files in assets
  ],
  theme: {
    screens: {
      'mobile': '10px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {},
  },
  plugins: [],
}

