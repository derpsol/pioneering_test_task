import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Link,
  Tooltip
} from "@mui/material";
import { themes } from "../../theme/CommonStyle";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaThumbsUp,
} from "react-icons/fa";

const menuItems = [
  {
    name: "Page 1",
    icon: <FaThumbsUp />,
    to: "/#/firstpage",
  },
  {
    name: "Page 2",
    icon: <FaThumbsUp />,
    to: "/#/secondpage",
  },
];

function SideBar() {
  const [small, setSmall] = useState(Boolean);
  return (
    <Box
      width={small ? "80px" : "200px"}
      sx={(theme) => ({
        backgroundColor: themes['light'].background.header,
        height: "calc(100vh - 80px)",
        borderTopRightRadius: "16px",
        borderBottomRightRadius: "16px",
        opacity: "0.8",
        transition: "0.3s ease-in",
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
      <Box mt="20px" textAlign="center">
        {menuItems.map((item, index) => {
          return (
            <Box>
              {small ? (
                <Tooltip title={item.name} placement='top'>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: themes.light.background.button,
                      minWidth: "0px",
                      mt: "12px",
                      px: "8px",
                      py: small ? "2px" : "6px",
                    }}
                    key={index}
                  >
                    <Link
                      href={item.to}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "24px",
                        color: themes['light'].text.button,
                        textDecoration: "none",
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Box mr={small ? "0px" : "8px"}>{item.icon}</Box>
                      {small ? (
                        ""
                      ) : (
                        <Typography textTransform="uppercase" fontSize="24px">
                          {item.name}
                        </Typography>
                      )}
                    </Link>
                  </Button>
                </Tooltip>
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: themes['light'].background.button,
                    minWidth: "0px",
                    mt: "12px",
                    px: "8px",
                    py: small ? "2px" : "6px",
                  }}
                  key={index}
                >
                  <Link
                    href={item.to}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "24px",
                      color: themes['light'].text.button,
                      textDecoration: "none",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Box mr={small ? "0px" : "8px"}>{item.icon}</Box>
                    {small ? (
                      ""
                    ) : (
                      <Typography textTransform="uppercase" fontSize="24px">
                        {item.name}
                      </Typography>
                    )}
                  </Link>
                </Button>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default SideBar;
