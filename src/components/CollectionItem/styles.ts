import { styled } from "@stitches/react";

export const Container = styled("button", {
  display: "flex",
  variants: {
    model: {
      true: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "150px",
        height: "150px",
      },
      false: {
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
        width: "250px",
        height: "150px",
      },
    },
  },
  background: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer",
});

export const Icon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 80,
  height: 80,
  cursor: "pointer",
  variants: {
    add: {
      true: {
        background:
          "linear-gradient(180deg, rgba(208, 207, 206, 0.15) 0%, rgba(0, 0, 0, 0.144) 194%)",
      },
      false: {
        background: "linear-gradient(180deg, #FCEA2B 0%, #F1B31C 100%)",
      },
    },
  },
  borderRadius: "30px",

  svg: {
    fontSize: "40px",
  },

  "&:hover": {
    transform: "scale(1.05)",
  },
});

export const TextBox = styled("div", {
  display: "flex",
  flexDirection: "column",

  justifyContent: "center",
  variants: {
    model: {
      true: {
        alignItems: "center",
      },
      false: {
        alignItems: "start",
      },
    },
  },
  
  marginTop: "5%",
});

export const Title = styled("p", {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#fff",
});

export const CreatedUserText = styled("span", {
  color: "#a9a9a9",
  fontSize: "12px",
  fontWeight: "bold",
});
