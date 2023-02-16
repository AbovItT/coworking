/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'mainColor': '#4169e1',
      },
      fontFamily: {
        'montserrat': "montserrat",
        'montserrat-bold': "montserrat-bold",
        'montserrat-extrabold': "montserrat-extrabold",
        'montserrat-extralight': "montserrat-extralight",
        'montserrat-light': "montserrat-light",
        'montserrat-medium': "montserrat-medium",
        'montserrat-semibold': "montserrat-semibold",
        'montserrat-thin': "montserrat-thin",
      },
    },
  },
  plugins: [],
}
