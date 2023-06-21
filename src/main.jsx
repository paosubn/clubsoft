import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
    palette: {
      primary: {
        main: "#30413b",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });
  

ReactDOM.createRoot(document.getElementById('root')).render(
    
 <BrowserRouter>
  <CssBaseline />
    <ThemeProvider theme={theme}>
    <App/>
    </ThemeProvider>
 </BrowserRouter>
)
