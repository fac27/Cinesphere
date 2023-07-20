/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        filmUrl:
          "url(https://images.pexels.com/photos/3056056/pexels-photo-3056056.jpeg?cs=srgb&dl=pexels-collis-3056056.jpg&fm=jpg)",
      },

      colors: {
        bgColour1: "#FFC700",
        bgColour2: "#FFEFB5",
      },
    },
  },
  plugins: [],
};
