import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient , InMemoryCache , ApolloProvider } from '@apollo/client';

import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

const theme=createTheme({
  palette :{

    primary :{
      main :"#000000"
    },
    secondary : {
  main:"#ffff"
    }
  }
})
const client = new ApolloClient({
  uri:process.env.REACT_APP_GRAPHCMS_URI ,
  cache : new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
        <App />
        </BrowserRouter>
   
    </ThemeProvider>
  </ApolloProvider>
);


