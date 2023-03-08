//Import basic dependencies
import React from "react";
import ReactDOM from "react-dom";
import client from'./ApolloClient';
import { ApolloProvider } from '@apollo/react-hooks';
import { AuthProvider } from './context/authContext'

// import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import App from './App';
import './app.css';

ReactDOM.render(
  <AuthProvider>
  <ApolloProvider client={client}>
  <React.StrictMode>
    <MainHeader/>
        <App/>
        <MainFooter/>
  </React.StrictMode>
  </ApolloProvider>
  </AuthProvider>,
 
  document.getElementById("root")
);
