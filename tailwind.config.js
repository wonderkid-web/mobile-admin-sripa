/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        "Tajawal": ["TajawalRegular", "sans-serif"],
        "Tajawal-Light": ["TajawalLight", "sans-serif"],
        "Tajawal-Bold": ["TajawalBold", "sans-serif"],
        "Quran": ["Quran", "TajawalLight"]
      },
      colors:{
        "primary": "#20665c",
        "secondary": "#30665c"
      }
    },
  },
  plugins: [],
}