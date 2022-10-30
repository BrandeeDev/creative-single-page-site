/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        com:['Commissioner', 'sans-serif'],
},
      backgroundImage:{
        naming_gradient:'linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, #000000 100%);',
          hero_tablet_gradient:'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.0001) 100%);',
      }
    },
  },
  plugins: [],
}
