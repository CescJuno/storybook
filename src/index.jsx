import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector('#root'),
);
