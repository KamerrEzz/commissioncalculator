/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        wewak: {
          50: "#fdf3f4",
          100: "#fbe8eb",
          200: "#f6d5da",
          300: "#ea9daa",
          400: "#e58799",
          500: "#d75c77",
          600: "#c13d60",
          700: "#a22e4f",
          800: "#882947",
          900: "#752642",
          950: "#411020",
        },
        "fuchsia-pink": {
          50: "#fcf7fc",
          100: "#f7eff8",
          200: "#f0def0",
          300: "#e4c3e4",
          400: "#d39fd3",
          500: "#b66bb5",
          600: "#9f5a9c",
          700: "#834880",
          800: "#6c3c69",
          900: "#5a3557",
          950: "#381a36",
        },
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"]
      }
    },
  },
  plugins: [],
};
