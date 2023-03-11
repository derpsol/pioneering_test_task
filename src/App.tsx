import { Box, createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import Header from "./component/header";
import SideBar from "./component/sidebar";
import { Route, Routes } from "react-router-dom";
import FirstPage from "./view/dashboard/firstpage";
import SecondPage from "./view/dashboard/secondpage";
import React from "react";
import getDesignTokens from "./theme";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box>
          <Header />
          <Box display="flex">
            <SideBar />
            <Routes>
              <Route path="/firstpage" element={<FirstPage />} />
              <Route path="/secondpage" element={<SecondPage />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
