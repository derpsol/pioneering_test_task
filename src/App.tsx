import { Box } from "@mui/material";
import Header from "./component/header";
import SideBar from "./component/sidebar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box>
      <Header />
      <Box display="flex">
        <SideBar />
        <Routes>
          <Route path="/page1" />
          <Route path="/page2" />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
