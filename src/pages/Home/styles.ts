import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  height: "100vh",

  color: "#fff",

  overflow: "hidden",
});

export const BackgroundContainer = styled("div", {
  width: "100%",
  height: "90vh",
  padding: "52px 0",
});

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-around",
  width: "100%",

  svg: {
    cursor: "pointer",
  },

  "@media screen and (max-width: 1200px)": {
    svg: {
      fontSize: "32px",
    },
  },
  "@media screen and (max-width: 900px)": {
    fontSize: "28px",
  },
  "@media screen and (max-width: 730px)": {
    svg: {
      display: "none",
    },
  },
});

export const GreatText = styled("h1", {
  fontSize: "40px",

  "&::after": {
    content: "",
    display: "block",
    border: "2px solid #ff6a13",
    borderRadius: "10px",
    width: "110%",
  },

  "@media screen and (max-width: 1200px)": {
    fontSize: "32px",
  },
  "@media screen and (max-width: 900px)": {
    fontSize: "28px",
  },
  "@media screen and (max-width: 500px)": {
    fontSize: "18px",
  },
  "@media screen and (max-width: 300px)": {
    fontSize: "16px",
  },
});

export const CollectionContainer = styled("div", {
  height: "calc(100% - 100px)",
  width: "100%",

  display: "block",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  overflowY: "scroll",
  overflowX: "hidden",

  "&::-webkit-scrollbar": {
    width: 0,
    height: 0,
  },
});

export const CollectionTitle = styled("h1", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  margin: "28px 0",

  "@media screen and (max-width: 1200px)": {
    fontSize: "32px",
  },
  "@media screen and (max-width: 900px)": {
    fontSize: "28px",
  },
  "@media screen and (max-width: 500px)": {
    fontSize: "18px",
  },
  "@media screen and (max-width: 300px)": {
    fontSize: "16px",
  },
});

export const CollectionItems = styled("div", {
  display: "grid",

  alignItems: "center",
  justifyItems: "center",
  justifyContent: "center",
  width: "100%",

  marginBottom: "18px",
  variants: {
    grid: {
      true: {
        gridTemplateColumns: "repeat(5, 1fr)",
        // Response Grid

        "@media screen and (max-width: 1350px)": {
          gridTemplateColumns: "repeat(4, 1fr)",
        },
        "@media screen and (max-width: 1150px)": {
          gridTemplateColumns: "repeat(3, 1fr)",
        },
        "@media screen and (max-width: 870px)": {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        "@media screen and (max-width: 640px)": {
          gridTemplateColumns: "repeat(1, 1fr)",
        },
      },
      false: {
        gridTemplateColumns: "repeat(3, 1fr)",
        // Response Grid

        "@media screen and (max-width: 1350px)": {
          gridTemplateColumns: "repeat(3, 1fr)",
        },
        "@media screen and (max-width: 1150px)": {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        "@media screen and (max-width: 870px)": {
          gridTemplateColumns: "repeat(1, 1fr)",
        },
        "@media screen and (max-width: 720px)": {
          gridTemplateColumns: "repeat(1, 1fr)",
        },
      },
    },
  },
});

export const ButtonModal = styled("button", {
  outline: "none",
  height: "45px",
  borderRadius: "0 5px 5px 0",
  cursor: "pointer",

  variants: {
    color: {
      primary: {
        background: "linear-gradient(180deg, #5D0CFF 0%, #9B00FA 100%)",
        border: "none",
        width: "10%",
      },
      secondary: {
        background: "transparent",
        border: "2px solid #5D0CFF",
        color: "#fff",
        width: "14%",
        marginTop: "15%",
      },
    },
  },
});

export const ModalBox = styled("div", {
  display: "flex",
  flexDirection: "column",
});
export const InputBox = styled("div", {
  marginTop: "18px",
  display: "flex",
});
