/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        logoSpin: "logoSpin 0.5s ease-in-out",
      },
      keyframes: {
        logoSpin: {
          "0%": {
            transform: "rotate(0deg) scale(1)",
          },
          "25%": {
            transform: "rotate(20deg) scale(1)",
          },
          "50%": {
            transform: "rotate(-10deg) scale(1)",
          },
          "100%": {
            transform: "rotate(0deg) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
