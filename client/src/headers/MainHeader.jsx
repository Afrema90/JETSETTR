import React from 'react';
import Logo from "../images/Jetsettr.png";
import Auth from '../utils/auth';

// import { AppBar, Box, Toolbar, Typography} from '@mui/material';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <Box sx={{flexGrow: 1}}>
//       <AppBar position='static'>
//         <Toolbar>
//           <Typography variant="h5" component="div">
//             <Link to="/" style={{textDecoration: "none", color: "white"}}>Jetsettr</Link>
//           </Typography>
//           <Box alignItems="right" sx={{flexGrow:1, textAlign: "right"}}>
//             <Link to="/Login" style={{textDecoration: "none", color: "white", marginRight: "10px"}}>Login</Link>
//             <Link to="/Register" style={{textDecoration: "none", color: "white"}}>Register</Link>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }


function MainHeader() {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

    return (
      
      <header className="banner">
      <img className="bannerLogo" src={Logo} alt="jetsettr-logo"/>
      <div>
        {Auth.loggedIn() ? (
<>
<div className="navLinks">
<a className="navlink" href="/home">Home</a>
<a className="navlink"  href="/about">About</a>
<a className="navlink"  href="/profile">Profile</a>
<button className="navlink" onClick={logout}>Log Out</button></div>
</>
        ) : ( <>
        <div className="navLinks">
          <h2 className="welcomeMessage" >welcome to jetsettr</h2></div></>
        )}
      </div>
    </header>
    )
    };
  

// export default MainHeader;

export default MainHeader;