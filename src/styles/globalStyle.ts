import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    fontFamily: '"Roboto", sans-serif',
  },
  body: {
    background:
      "linear-gradient(180deg, rgba(48, 16, 255, 0.5) 0%, rgba(100, 115, 255, 0.5) 100%)",
  },
});
