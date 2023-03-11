import {
    Box,
    Typography
} from '@mui/material';
import { themes } from '../../theme/CommonStyle';
import { useVariable } from '../../hooks/customHook';

function Header() {
  const theme = useVariable(false);
  
  return (
    <Box 
      height='80px'
      display='flex'
      alignItems='center'
      pl='12px'
      sx={{
        backgroundColor: theme === 'light' ? themes['light'].background.header : themes['dark'].background.header,
      }}
      boxShadow='2px 4px gray'
    >
      <Typography
        fontFamily='Arial'
        fontSize='36px'
        sx={{
          color: theme === 'light' ? themes['light'].text.header : themes['dark'].text.header,
        }}
      >
        Pioneering ProgrammersTest App
      </Typography>
    </Box>
  );
}

export default Header;