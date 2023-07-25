/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "376px",
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        filmUrl:
          "url(https://images.pexels.com/photos/3056056/pexels-photo-3056056.jpeg?cs=srgb&dl=pexels-collis-3056056.jpg&fm=jpg)",
      },
      // backgroundImage: {
      //   "backdrop-film":
      //     "url('https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg')",
      // },

      colors: {
        bgColour1: "#FFC700",
        bgColour2: "#FFEFB5",
        bgColour3: "#8f00ff",
      },
    },
  },
  plugins: [],
};
