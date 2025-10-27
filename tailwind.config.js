/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d0d10",
        neon: "#1db9e6"
      },
      boxShadow: {
        neon: "0 8px 30px rgba(29,185,230,0.12), 0 2px 6px rgba(29,185,230,0.08)"
      }
    },
  },
  plugins: [],
};
