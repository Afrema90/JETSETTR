import React from 'react';
import "./app.css";
import Auth from "./pages/Auth/Auth.jsx";
import "./pages/Auth/Auth.css"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Logo from "./images/Jetsettr.png";
import Home from "./pages/Home/Home.jsx";
import "./pages/Home/Home.css";
import Profile from "./pages/Profile/Profile";


// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

function App() {
 
  return (
    <>
    <div className="App">
    <Auth /> 
    </div></>
  );
}

export default App;

