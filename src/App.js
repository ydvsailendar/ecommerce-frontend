import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Copyright from './Footer';
import Header from './Header';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});
export default function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <Copyright />
      </div>
    </ApolloProvider>
  );
}
