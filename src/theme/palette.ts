declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
    light: string;
    dark: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
  interface TypeText {
    success: string;
    info: string;
  }
}

export default function palette(themeMode: 'light' | 'dark') {
  const light = {
    mode: 'light',
    text: {
      primary: "#ff0",
      secondary: "white",
      info: "#2f4f4f",
      success: "#000000",
    },
    background: {
      paper: "#808080",
      light: "#cc0000",
      neutral: "#cecece",
      dark: "white",
    },
  } as const;

  const dark = {
    mode: 'dark',
    text: {
      primary: "#2f4f4f",
      seconday: "#800080",
      info: "#696969",
      success: "white",
    },
    background: {
      paper: "#c0c0c0",
      light: "#f0f8ff",
      neutral: "white",
      dark: "#008080",
    },
  } as const;

  return themeMode === 'light' ? light : dark;
}
