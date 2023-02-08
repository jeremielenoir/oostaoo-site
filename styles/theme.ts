import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    button: {
      variant: '',
    },
  },
  palette: {
    primary: {
      main: '#3edac6',
      contrastText: '#fff',
    },
    secondary: {
      main: '#0d76a8',
      contrastText: '#fff',
    },
  },
});

export default theme;
