/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode:"class",
  theme: {
    screens: {
      mobile: "0",
      desktop: "1020px",
    },
    extend: {
      colors: {
        "black--golestan": "#2b2b2b",
        "gray--golestan": "#AFB2B4",
        "darkgray--golestan": "#58595B",
        "lightgray--golestan": "#898989",
        "darkred--golestan": "#ED1C24",
        "red--golestan": "#FF0000",
      },
    },
  },
  plugins: [],
};
