/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'custom-blue': '#96cde1',
        'custom-gray-light': '#a2aaad',
        'custom-gray-dark': '#a1a6a9',
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },

  },
  plugins: [],
}

