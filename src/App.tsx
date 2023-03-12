import React from "react";

import { Box } from "@mui/material";
import Header from "./component/header";
import SideBar from "./component/sidebar";
import { Route, Routes } from "react-router-dom";
import FirstPage from "./view/dashboard/firstpage";
import SecondPage from "./view/dashboard/secondpage";

import ThemeProvider from "./theme";
import { SettingsProvider } from "./hook/SettingContext";

function App() {
  return (
    <SettingsProvider>
      <ThemeProvider>
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
    </SettingsProvider>
  );
}

export default App;
