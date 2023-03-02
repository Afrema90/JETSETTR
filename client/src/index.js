//Import basic dependencies
import React from "react";
import ReactDOM from "react-dom";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//Import each JSX component for the routes
import Home from "./pages/Home/Home.jsx";
import App from "./App";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/Auth/SignUp"


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
     <RouterProvider router={router}/>
  </React.StrictMode>,
 
  document.getElementById("root")
);
