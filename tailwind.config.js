/** @type {import('tailwindcss').Config} */
const colorPalette = {
  green: {
    900: "#002C2A",
    800: "#003F3E",
    700: "#005351",
    600: "#007A77",
    500: "#00AFA5",
    400: "#00CCB1",
    300: "#00E6C7",
    200: "#7FF2E3",
    100: "#CCEBE9",
    50: "#d2fcfa",
  },
  grey: {
    900: "#1D252E",
    800: "#28313D",
    700: "#3C4A5B",
    600: "#50637A",
    500: "#647C99",
    400: "#8396AD",
    300: "#A2B0C1",
    200: "#C1CAD6",
    100: "#DAE0E6",
    50: "#F7F7F7",
  },
  blue: {
    900: "#07233F",
    800: "#0A2F54",
    700: "#0F467E",
    600: "#145EA8",
    500: "#1976D2",
    400: "#2C8AE6",
    300: "#4F9DEA",
    200: "#A3C8ED",
    100: "#CAE2F9",
    50: "#EDF5FD",
  },
  purple: {
    900: "#220531",
    800: "#450A62",
    700: "#570D7B",
    600: "#680F94",
    500: "#AE1AF7",
    400: "#BE47F8",
    300: "#CE75FA",
    200: "#DEA3FB",
    100: "#F1D8FE",
    50: "#FEFDFF",
  },
  orange: {
    900: "#332012",
    800: "#664125",
    700: "#996238",
    600: "#CC834B",
    500: "#FFA45E",
    400: "#FFAD6E",
    300: "#FFBF8E",
    200: "#FFD1AE",
    100: "#FFE3CE",
    50: "#FFF5EE",
  },
  red: {
    900: "#461323",
    800: "#76203B",
    700: "#A52D52",
    600: "#D43A6A",
    500: "#EC4176",
    400: "#ED5483",
    300: "#F17A9F",
    200: "#F5A0BA",
    100: "#F9C6D5",
    50: "#FDECF1",
  },
  black: "#1D252E",
  white: "#FFFFFF",
};
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      spacing: {
        header: "4rem",
      },

      colors: {
        ...colorPalette,
        primary: colorPalette.green,
        secondary: colorPalette.grey,
      },
      fontFamily: {
        sans: ["Barlow"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
