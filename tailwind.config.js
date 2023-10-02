/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sen: "Sen",
        WorkSans: "Work Sans",
        Sora: "Sora",
      },
      borderRadius: {
        "my-lg": "8px",
      },
    },
  },
  plugins: [],
};
