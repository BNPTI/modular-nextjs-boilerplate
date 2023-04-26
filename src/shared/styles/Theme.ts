import { light } from "bnp-suit";

import { createTheme } from "@config/stitches.config";

export const defaultLightTheme = createTheme({
  ...light,
  colors: {
    "primary-800": "#3989D2",
    "primary-900": "#337ab7",
    "primary-hover": "#2a6698",
  },
  fonts: {
    body: "Lato, sans-serif",
    heading: "Montserrat, sans-serif",
  },
});
