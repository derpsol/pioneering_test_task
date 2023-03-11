import React from "react";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeText {
    third?: string;
    footer?: string;
  }
  interface TypeBackground {
    main?: string;
    transparent?: string;
  }
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const enum mode {'dark', 'light'};
  const theme = createTheme({
    palette: {
      background: {
        main: mode.light ? "#808080" : '#c0c0c0',
        default: mode.light ? "cc0000": '#f0f8ff',
        paper: mode.light ? "#cecece" : 'white',
        transparent: mode.light ? "white" : '#008080',
      },
      text: {
        primary: mode.light ? "#ff0" : '#2f4f4f',
        secondary: mode.light ? "white" : '#800080',
        third: mode.light ? "#2f4f4f" : '#696969',
        footer: mode.light ? "#000000" : 'white',
      },
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
