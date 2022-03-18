import { createTheme, Theme as MuiTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: red,
    background: {
      default: '#121212', // As per MD specs
    },
  },
});

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
}
