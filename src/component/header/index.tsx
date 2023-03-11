import {
    Box,
    Typography
} from '@mui/material';
import { themes } from '../../theme/CommonStyle';

function Header() {
  return (
    <Box 
      height='80px'
      display='flex'
      alignItems='center'
      pl='12px'
      sx={(theme) => ({
        backgroundColor: themes['light'].background.header,
      })}
      boxShadow='2px 4px gray'
    >
      <Typography
        fontFamily='Arial'
        fontSize='36px'
        sx={(theme) => ({
          color: themes['light'].text.header,
        })}
      >
        Pioneering ProgrammersTest App
      </Typography>
    </Box>
  );
}

export default Header;