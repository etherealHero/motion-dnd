/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // brown: {
        //   50: "#fdf8f6",
        //   100: "#f2e8e5",
        //   200: "#eaddd7",
        //   300: "#e0cec7",
        //   400: "#d2bab0",
        //   500: "#bfa094",
        //   600: "#a18072",
        //   700: "#977669",
        //   800: "#846358",
        //   900: "#43302b",
        // },
        accent: {
          light: "#8BA8F3",
          base: "#3450A1",
          dark: "#041955",
          ["dark-text"]: "#6E80B6",
          ["dark-checkbox"]: "#183588",
        },
        secondary: {
          base: "#EB06FF",
        },
      },
    },
  },
  plugins: [],
}
