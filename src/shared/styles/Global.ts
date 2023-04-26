import { globalCss } from "@/shared/config/stitches.config";

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
});
