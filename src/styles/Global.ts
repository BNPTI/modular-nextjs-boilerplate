import { globalCss } from "@config/stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: "0px",
    padding: "0px",
    boxSizing: "border-box",
  },

  "html, body, p, span, button": {
    fontFamily: "$body",
  },

  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "$heading",
  },

  "@font-face": [
    {
      fontFamily: "Lato",
      fontWeight: 100,
      fontDisplay: "swap",
      src: "url(\"/fonts/Lato/Lato-Hairline.ttf\") format('truetype')",
    },
    {
      fontFamily: "Lato",
      fontWeight: 300,
      fontDisplay: "swap",
      src: "url(\"/fonts/Lato/Lato-Light.ttf\") format('truetype')",
    },
    {
      fontFamily: "Lato",
      fontWeight: 400,
      fontDisplay: "swap",
      src: "url(\"/fonts/Lato/Lato-Regular.ttf\") format('truetype')",
    },
    {
      fontFamily: "Lato",
      fontWeight: 500,
      fontDisplay: "swap",
      src: "url(\"/fonts/Lato/Lato-Medium.ttf\") format('truetype')",
    },
    {
      fontFamily: "Lato",
      fontWeight: 600,
      fontDisplay: "swap",
      src: "url(\"/fonts/Lato/Lato-Semibold.ttf\") format('truetype')",
    },
    {
      fontFamily: "Lato",
      fontWeight: 700,
      fontDisplay: "swap",
      src: "url(\"/fonts/Lato/Lato-Bold.ttf\") format('truetype')",
    },

    {
      fontFamily: "Lato",
      fontWeight: 900,
      fontDisplay: "swap",
      src: "url(\"/fonts/Lato/Lato-Heavy.ttf\") format('truetype')",
    },

    {
      fontFamily: "Montserrat",
      fontWeight: 100,
      fontDisplay: "swap",
      src: "url(\"/fonts/Montserrat/Montserrat-Thin.ttf\") format('truetype')",
    },

    {
      fontFamily: "Montserrat",
      fontWeight: 300,
      fontDisplay: "swap",
      src: "url(\"/fonts/Montserrat/Montserrat-Light.ttf\") format('truetype')",
    },
    {
      fontFamily: "Montserrat",
      fontWeight: 400,
      fontDisplay: "swap",
      src: "url(\"/fonts/Montserrat/Montserrat-Regular.ttf\") format('truetype')",
    },
    {
      fontFamily: "Montserrat",
      fontWeight: 500,
      fontDisplay: "swap",
      src: "url(\"/fonts/Montserrat/Montserrat-Medium.ttf\") format('truetype')",
    },
    {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontDisplay: "swap",
      src: "url(\"/fonts/Montserrat/Montserrat-SemiBold.ttf\") format('truetype')",
    },
    {
      fontFamily: "Montserrat",
      fontWeight: 700,
      fontDisplay: "swap",
      src: "url(\"/fonts/Montserrat/Montserrat-Bold.ttf\") format('truetype')",
    },
    {
      fontFamily: "Montserrat",
      fontWeight: 800,
      fontDisplay: "swap",
      src: "url(\"/fonts/Montserrat/Montserrat-ExtraBold.ttf\") format('truetype')",
    },
    {
      fontFamily: "Montserrat",
      fontWeight: 900,
      fontDisplay: "swap",
      src: "url(\"/fonts/Montserrat/Montserrat-Black.ttf\") format('truetype')",
    },
  ],
});
