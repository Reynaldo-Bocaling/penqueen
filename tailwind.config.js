/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Sigmar One", "sans-serif"],
        extra: ["Matemasie", "sans-serif"],
      },
      backgroundColor: {
        "dark-purple": "#5200bd",
      },
      colors: {
        "dark-purple": "#5200bd",
      },
      fontSize: {
        "10xl": "9rem",
        "11xl": "10rem",
        "12xl": "12rem",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
