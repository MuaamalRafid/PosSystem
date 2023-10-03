/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        MainColor: "#111315",
        SecondryColor: "#2d2d2d",
        white: "#ffffff",
        Menu: {
          1: "#cfdddb",
          2: "#e4cded",
          3: "#c2dbe9",
          4: "#c9caef",
          5: "#fac1d9",
          6: "#e5dade",
          7: "#f1c8d0",
          8: "#c2e9dd",
        },
        red: "#e24949",
      },
    },
  },
  plugins: [],
};

