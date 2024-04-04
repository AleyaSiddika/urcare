/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary-50": "#FFF5E5",
        "primary-100": "#FFE0BF",
        "primary-200": "#FFCC99",
        "primary-300": "#FFB573",
        "primary-400": "#FFA04D",
        "primary-500": "#FF8B26",
        "primary-600": "#F27A15",
        "primary-700": "#E66904",
        "primary-800": "#D45800",
        "primary-900": "#C34700",
        "secondary-100": "#FFE5F0",
        "secondary-200": "#FFBFE0",
        "secondary-300": "#FF99D1",
        "secondary-400": "#FF73C1",
        "secondary-500": "#FF4DAC",
        "secondary-600": "#F57A91",
        "secondary-700": "#F47676",
        white: "#FFFFFF",
        black: "#0F0F0F",
        link: "#8A2BE2", // Purple color
        success: "#4ADF00",
        warning: "#FFA900",
        error: "#FD0C0F",
      },
    },
  },
  plugins: [],
};
