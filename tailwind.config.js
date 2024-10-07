import { colors } from "@switchdreams/ui";
import switchUiPlugin from "@switchdreams/ui/dist/tailwind.plugin";

import viaColors from "./src/constants/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      curvature: {
        md: 0,
        full: 0,
      },
      fontWeight: {
        light: 300,
        thin: 100,
        extralight: 200,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      screens: {
        big: "1216px",
        "3xl": "1640px",
        "2sm": "375px",
        "3sm": "320px",
        "0.5sm": "400px",
      },
      colors: {
        ...colors,
        ...viaColors,
        checkbox: {
          primary: {
            border: viaColors.coolGray["300"],
            checked: viaColors.secondary["400"],
            hover: viaColors.secondary["25"],
          },
        },
      },
      fontFamily: {
        default: ["Red Hat Text", "sans-serif"],
        "red-hat-text": ['"Red Hat Text"', "sans-serif"],
        sora: ['"Sora"', "sans-serif"],
      },
    },
  },
  plugins: [switchUiPlugin],
}

