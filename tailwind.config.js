/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FDE600",
        secondary: "#191c1e",
      },
    },
  },
  plugins: [require("daisyui")],
};
