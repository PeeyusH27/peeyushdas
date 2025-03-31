/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode using class strategy
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f3f4f6",
          dark: "#1a1a1a",
        },
        text: {
          light: "#111827",
          dark: "#f3f4f6",
        }
      }
    },
  },
  plugins: [],
}