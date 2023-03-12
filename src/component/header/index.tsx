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
    >
      <Typography
        fontFamily='Arial'
        sx={(theme) => ({
          color: theme.palette.text.primary,
          fontSize: {xs: '24px', sm: '36px', md: '44px'}
        })}
      >
        Pioneering ProgrammersTest App
      </Typography>
    </Box>
  );
}

export default Header;