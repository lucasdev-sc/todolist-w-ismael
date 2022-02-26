import { styled } from "@stitches/react";

export const Input = styled("input", {
  background: "transparent",
  width: "90%",
  height: "45px",
  border: "1px solid #5D0CFF",
  borderRadius: "5px 0 0 5px",
  outline: "none",
  padding: "0 12px",
  color: "#fff",

  "&::placeholder": {
    color: "#fff",
    fontSize: "12px",
  },
});
