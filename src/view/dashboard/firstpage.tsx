import {
    Box,
    Typography,
    Button,
    TextField,
} from '@mui/material';

function FirstPage() {

  return (
    <Box display='flex' width='100%' mt='4px'>
      <Box width='60%' textAlign='center'>
        <Button>
          
        </Button>
      </Box>
      <TextField 
        sx={{
          width: '40%',
          borderColor: 'black',
          '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            height: "calc(100vh - 118px)",
            border: '1px solid black',
            borderRadius: '4px',
          }
        }}
      />
    </Box>
  );
}

export default FirstPage;
