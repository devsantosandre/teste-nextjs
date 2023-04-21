import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#00D082',
      dark: '#00D082',
    },
    secondary: {
      main: '#94C120',
    },
    text: {
      primary: '#000',
    },

  },
  typography: {
    body1: {
      fontFamily: '__Roboto_0653ff',
      textTransform: 'none',
    },
    h2: {
      fontFamily: '__Roboto_0653ff',
      fontWeight: 'bold',
      textAlign: 'center',
      textShadow: '0px 6px 14px rgba(24, 39, 75, 0.12)',
    },
    h3: {
      fontFamily: '__Roboto_0653ff',

    },
    h4: {
      fontFamily: '__Roboto_0653ff',
      fontWeight: 'bold',
      color: '#333333',
    },
    h5: {
      fontFamily: '__Roboto_0653ff',

    },
    h6: {
      fontFamily: '__Roboto_0653ff',
      // textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    subtitle1: {
      color: '#d3d3d3',
    },
  },
});

export default theme;
