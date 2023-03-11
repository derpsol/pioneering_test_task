import { useState } from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaThumbsUp,
} from "react-icons/fa";

const menuItems = [
  {
    name: "Page 1",
    icon: <FaThumbsUp />,
    to: "/page1",
  },
  {
    name: "Page 2",
    icon: <FaThumbsUp />,
    to: "page2",
  },
];

function SideBar() {
  const [small, setSmall] = useState(false);
  return (
    <Box
      width={small ? "80px" : "200px"}
      sx={(theme) => ({
        backgroundColor: theme.palette.background.main,
        height: "calc(100vh - 80px)",
        borderTopRightRadius: "16px",
        borderBottomRightRadius: "16px",
        opacity: "0.8",
        transition: '0.3s ease-in'
      })}
      paddingX="20px"
    >
      <Button
        sx={{
          mt: "20px",
          minWidth: "0px",
          fontSize: "32px",
          display: "flex",
          width: "100%",
          justifyContent: "right",
          "&:hover": {
            cursor: "pointer",
          },
          color: "white",
        }}
        onClick={() => {
          small ? setSmall(false) : setSmall(true);
        }}
      >
        {small ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
      </Button>
      <Box mt="20px" textAlign='center'>
        {menuItems.map((item, index) => {
          return (
            <Button
              sx={(theme) => ({
                backgroundColor: theme.palette.background.default,
                minWidth: '0px'
              })}
              key={index}
            >
              <Link
                sx={(theme) => ({
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "24px",
                  color: theme.palette.text.secondary,
                  mt: "12px",
                  textDecoration: "none",
                  "&:hover": {
                    cursor: "pointer",
                  },
                })}
              >
                <Box mr="8px">{item.icon}</Box>
                {small ? (
                  ""
                ) : (
                  <Typography textTransform="uppercase" fontSize="24px">
                    {item.name}
                  </Typography>
                )}
              </Link>
            </Button>
          );
        })}
      </Box>
    </Box>
  );
}

export default SideBar;
