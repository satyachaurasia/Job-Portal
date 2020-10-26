import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './Components/Header'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import  { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';

const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
  cache: new InMemoryCache()
});


function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Header/>
        
        <ApolloProvider client={client}>
          <BaseRouter />
        </ApolloProvider>
      </Router>

    </>
  );
}

export default App;
