/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D1117",
        secondary: "#161B22",
        neonCyan: "#00D4FF",
        neonPink: "#FF007A",
      },
    },
  },
  plugins: [],
};
