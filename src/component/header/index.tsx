import {
    Box,
    Typography
} from '@mui/material';

function Header() {
  return (
    <Box 
      height='80px'
      display='flex'
      alignItems='center'
      pl='12px'
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
      })}
      boxShadow='2px 4px gray'
    >
      <Typography
        fontFamily='Arial'
        fontSize='36px'
        sx={(theme) => ({
          color: theme.palette.text.primary
        })}
      >
        Pioneering ProgrammersTest App
      </Typography>
    </Box>
  );
}

export default Header;