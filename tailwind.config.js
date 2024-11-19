/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      san: ["Roboto", "Padauk", "sans-serif"],
    },
    extend: {
      fontFamily: {
        // san: ['Roboto', 'Padauk', 'sans-serif'],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
