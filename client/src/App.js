import React from 'react';
//Import each JSX component for the routes + necessary assets
import Home from "./pages/Home/Home.jsx";
import "./pages/Home/Home.css";
import AuthorizationMain from "./pages/Auth/Auth";
import "./pages/Auth/Auth.css"
import "./app.css";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/Auth/SignUp";
import "./pages/Home/Home.css";
import MainHeader from './headers/MainHeader';
import MainFooter from './footers/MainFooter';
import NotFound from './pages/NotFound/NotFound';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      
<MainHeader/>
<div>
            <Routes>
              <Route 
                path="/Home" 
                element={<Home />} 
              />
              <Route 
                path="/" 
                element={<AuthorizationMain />} 
              />
              <Route 
                path="/SignUp" 
                element={<SignUp />} 
              />
              <Route 
                path="/Profile" 
                element={<Profile />} 
              />
              <Route
                path="*" 
                element={<NotFound />} 
              />
            </Routes>
        </div>
        <MainFooter/>
      </Router>
    </ApolloProvider>
  );
}

export default App;
