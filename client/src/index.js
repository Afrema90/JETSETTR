//Import basic dependencies
import React from "react";
import ReactDOM from "react-dom";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Logo from "./images/Jetsettr.png";
//Import each JSX component for the routes
import Home from "./pages/Home/Home.jsx";
import App from "./App";
import "./app.css";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/Auth/SignUp.jsx"


import "./pages/Home/Home.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/Profile",
    element: <Profile/>,
  },
  {
    path: "/SignUp",
    element: <SignUp/>,
  },
])


ReactDOM.render(
  <React.StrictMode>
    <header className="banner">
      <img className="bannerLogo" src={Logo} alt="jetsettr-logo"/>
    </header>
     <RouterProvider router={router}/>
     <footer>
      <p>Powered by Ama Frema, Raied Abdelgani, David Parker, Joe Labadia, and Rashad Spell.</p>
     </footer>
  </React.StrictMode>,
 
  document.getElementById("root")
);
