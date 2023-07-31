/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul': '#091FE1',
        'blanco': '#FAFAFA',
        'negro' : '#424242',
        'gris' : '#A5A5A5',
        'bgVerde':'linear-gradient(180deg, #73F4A7 1.31%, #156A8E 100%)'
      },
      backgroundImage: {
        'encabezado': "url('./public/encabezado.png')",
        'encabezadoBg' : "linear-gradient(180deg, #73F4A7 1.31%, #156A8E 100%)"
      }
    },
  },
  plugins: [],
}