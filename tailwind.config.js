/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#B405FE",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        }
      },
      fontFamily: {
        body: ["Nunito"]
      },
      fontSize: {
        mammoth: "2rem",
      }

    },
  },
  plugins: [],
}
