/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': 'hsl(0, 0%, 100%)',
        'light-pink': 'hsl(275, 100%, 97%)',
        'grayish-purple': 'hsl(292, 16%, 49%)',
        'dark-purple': 'hsl(292, 42%, 14%)'
      },
      fontFamily: {
        'work': ['Work Sans', 'sans-serif']
      },
      backgroundImage: {
        'img-mobile': 'url(\'./assets/images/background-pattern-mobile.svg\')'
      },
      boxShadow: {
        'shadow': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;'
      }
    },
  },
  plugins: [],
}

