import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient , InMemoryCache , ApolloProvider } from '@apollo/client';

import App from './App';


const client = new ApolloClient({
  uri:"https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clg7ys4tq1l7801uk6s4m349v/master" ,
  cache : new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);


