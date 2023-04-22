import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#020063',
      dark: '#00D082',
    },
    secondary: {
      main: '#94C120',
    },
    text: {
      primary: '#222222',
    },

  },
  typography: {
    body1: {
      // fontFamily: 'Roboto',
      textTransform: 'none',
    },
    h2: {
      // fontFamily: 'Roboto',
      fontWeight: 'bold',
      textAlign: 'center',
      textShadow: '0px 6px 14px rgba(24, 39, 75, 0.12)',
    },
    h3: {
      // fontFamily: 'Roboto',

    },
    h4: {
      // fontFamily: 'Roboto',
      fontWeight: 'bold',
      color: '#333333',
    },
    h5: {
      // fontFamily: 'Roboto',

    },
    h6: {
      // fontFamily: 'Roboto',
      // textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    subtitle1: {
      color: '#d3d3d3',
    },
  },
});

export default theme;
