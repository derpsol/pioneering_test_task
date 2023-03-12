/* eslint-disable */ 

import { Box, Typography, Button, Link, Tooltip } from "@mui/material";
import { useState } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaThumbsUp,
} from "react-icons/fa";
import { useSettingsContext } from "../../hook/SettingContext";

const menuItems = [
  {
    name: "Page 1",
    icon: <FaThumbsUp />,
    to: "/",
  },
  {
    name: "Page 2",
    icon: <FaThumbsUp />,
    to: "/secondpage",
  },
];

function SideBar() {
  const { statusMode, onToggleStatusMode } = useSettingsContext();
  const [newUrl, setNewUrl] = useState('');
  const openInNewTab = (to: string) => {
    window.open(to, '_blank', 'noreferrer');
  };
  const openInCurrentTab = (to: string) => {
    window.open(to, '_self', 'noreferrer');
  }
  const handleClick = (e: any, to: string) => {
    console.log('handle click');
    if (e.type == 'click') {
      openInCurrentTab(to);
    } else if (e.type == 'contextmenu') {
      openInNewTab(to);
    }
  };

  return (
    <Box
      width={statusMode === "collapse" ? "80px" : "200px"}
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
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
        onClick={() => {onToggleStatusMode()}}
      >
        {statusMode === "collapse" ? (
          <FaAngleDoubleRight />
        ) : (
          <FaAngleDoubleLeft />
        )}
      </Button>
      <Box mt="20px" textAlign="center">
        {menuItems.map((item, index) => {
          return (
            <Box key={index}>
              {statusMode === "collapse" ? (
                <Tooltip title={item.name} placement="top">
                  <Button
                    variant="contained"
                    sx={(theme) => ({
                      backgroundColor: theme.palette.background.light,
                      minWidth: "0px",
                      mt: "12px",
                      px: "8px",
                      py: "2px",
                    })}
                    key={index}
                    onClick={(e) => {handleClick(e, item.to); }}
                    onContextMenu={(e) => {handleClick(e, item.to); }}
                  >
                    <Link
                      sx={(theme) => ({
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "24px",
                        color: theme.palette.text.info,
                        textDecoration: "none",
                        "&:hover": {
                          cursor: "pointer",
                        },
                      })}
                    ><Box mr="8px">{item.icon}</Box></Link>
                  </Button>
                </Tooltip>
              ) : (
                <Button
                  variant="contained"
                  sx={(theme) => ({
                    backgroundColor: theme.palette.background.light,
                    minWidth: "0px",
                    mt: "12px",
                    px: "8px",
                    py: "6px",
                  })}
                  onClick={(e) => {handleClick(e, item.to); }}
                  onContextMenu={(e) => {handleClick(e, item.to); }}
                  key={index}
                >
                  <Link
                    sx={(theme) => ({
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "24px",
                      color: theme.palette.text.info,
                      textDecoration: "none",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    })}
                  >
                    <Box mr="8px">{item.icon}</Box>
                    <Typography textTransform="uppercase" fontSize="24px">
                      {item.name}
                    </Typography>
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
