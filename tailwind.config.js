/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        main: ["Roboto"],
        header: ["Nunito"],
        "main-semibold": ["RobotoSemiBold"],
      },
      rotate: {
        '270': '270deg',
      }
    },
  },
  plugins: [],
}
