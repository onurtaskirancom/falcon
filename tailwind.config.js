/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'light': 'white',
        'dark': '#1a202c',
      },
      textColor: {
        'light': '#1a202c',
        'dark': 'white',
      },
    },
  },
  plugins: [],
};
