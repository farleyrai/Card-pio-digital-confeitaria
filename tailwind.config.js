/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      boxShadow: {
        glow: "0 0 35px rgba(103, 255, 126, 0.12)",
      },
    },
  },
  plugins: [],
};