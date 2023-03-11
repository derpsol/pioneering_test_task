import { PaletteMode } from "@mui/material";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            main: "#808080",
            default: "cc0000",
            paper: "#cecece",
            transparent: "white",
          },
          text: {
            primary: "#ff0",
            secondary: "white",
            third: "#2f4f4f",
            footer: "#000000",
          },
        }
      : {
          background: {
            main: "#c0c0c0",
            default: "#f0f8ff",
            paper: "white",
            transparent: "#008080",
          },
          text: {
            primary: "#2f4f4f",
            secondary: "#800080",
            third: "#696969",
            footer: "white",
          },
        }),
  },
});

export default getDesignTokens;