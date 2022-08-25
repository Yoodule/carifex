/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
				sans: ["Manrope", ...defaultTheme.fontFamily.sans]
      },
    },
  },

  plugins: [],
}