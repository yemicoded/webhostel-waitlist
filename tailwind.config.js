/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#023047",
        purple: "#CDB4DB",
      },
      colors: {
        primary: "#023047",
        purple: "#CDB4DB",
      },
      fontFamily: {
        garamond: ["EB Garamond", "serif"],
        manrope: ['Manrope', "sans-serif"],
        dmsans:['DM Sans', "sans-serif"],
      },
    },
  },
  plugins: [],
};
