import { Box, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useSettingsContext } from "../../hook/SettingContext";

function FirstPage() {
  const [textContent, setTextContent] = useState([""]);
  const [buttonContent, setButtonContent] = useState([""]);
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const { themeMode, onToggleMode } = useSettingsContext();

  const buttonStyle = (theme: any) => ({
    bgcolor: theme.palette.background.light,
    color: theme.palette.text.info,
    textTransform: "none",
    fontFamily: "Arial",
    fontSize: "24px",
    mt: "20px",
    border: "1px solid black",
    '&.Mui-disabled': {
      color: theme.palette.text.info,
    },
  })
  
  const toggleModeClicked = () => {
    onToggleMode();
    let date = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let second = new Date().getSeconds();
    let minute = new Date().getMinutes();
    let hour = new Date().getHours();

    let tmpText =
      themeMode === "light"
        ? `${month}/${date}/${year} ${hour}:${minute}:${second} Theme was set to Dark`
        : `${month}/${date}/${year} ${hour}:${minute}:${second} Theme was set to Light`;
    setTextContent([tmpText, ...textContent]);
  };

  const messageClicked = () => {
    setTextContent([message, ...textContent]);
    setMessage("");
  };

  const buttonClicked = (index: number) => {
    let buttonMessage = `Button [${index}] clicked`;
    setTextContent([buttonMessage, ...textContent]);
  };

  const addButtonClicked = () => {
    setCount(count + 1);
    setButtonContent([...buttonContent, `Add Button ${count + 1}`]);
    setTextContent([`Button ${count + 1} Added`, ...textContent]);
  };

  return (
    <Box
      display="flex"
      width="100%"
      sx={{
        flexDirection: { xs: 'column', md: 'row' }
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={(theme) => ({
          backgroundColor: theme.palette.background.neutral,
          width: {xs: '100%', md: '60%' }
        })}
      >
        <Button
          variant="contained"
          sx={buttonStyle}
          onClick={() => {
            toggleModeClicked();
          }}
        >
          {themeMode === "light" ? "Set Dark Theme" : "Set Light Theme"}
        </Button>
        <Box
          display="flex"
          mt="20px"
          sx={{
            flexDirection: {xs: 'column', sm: 'row'}
          }}
        >
          <Button
            variant="contained"
            sx={buttonStyle}
            onClick={() => {
              messageClicked();
            }}
            disabled={message === "" ? true : false}
          >
            Send Message
          </Button>
          <TextField
            value={message}
            sx={(theme) => ({
              mt: '20px',
              ml: '12px',
              input: {
                color: theme.palette.text.info,
              },
              '& .css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input': {
                border: '1px solid black',
                borderRadius: '4px',
              }
            })}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Button
            variant="contained"
            sx={buttonStyle}
            onClick={() => {
              addButtonClicked();
            }}
          >
            Add Button
          </Button>
          {buttonContent.map((content, index) => {
            if (index === 0) return '';
            return (
              <Button
                variant="contained"
                sx={buttonStyle}
                onClick={() => {
                  buttonClicked(index);
                }}
                key={index}
              >
                {content}
              </Button>
            );
          })}
        </Box>
      </Box>
      <Box
        borderRadius="4px"
        border="1px solid black"
        textAlign="center"
        borderColor="black"
        height="calc(100vh - 80px)"
        overflow='hidden'
        sx={(theme) => ({
          backgroundColor: theme.palette.background.dark,
          width: {xs: '100%', md: '40%'},
          mt: {xs: '20px', md: "0px" },
        })}
      >
        {textContent.map((content, index) => (
          <Typography
            color={(theme) => theme.palette.text.success}
            key={index}
          >
            {content}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default FirstPage;
