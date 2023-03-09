import React from 'react';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//Import each JSX component for the routes + necessary assets
// import Logo from "./images/Jetsettr.png";
import Home from "./pages/Home/Home.jsx";
import "./pages/Home/Home.css";
import Auth from "./pages/Auth/Auth.jsx";
import "./pages/Auth/Auth.css"
import "./app.css";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/Auth/SignUp.jsx";
import "./pages/Home/Home.css";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Auth/>,
  // },
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/",
    element: <Profile/>,
  },
  {
    path: "/SignUp",
    element: <SignUp/>,
  },
])

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });




function App() {
 
  return (
    <>
  
    <div className="App">
<RouterProvider router={router}/>
    </div>
  
  </>
  );
}

export default App;