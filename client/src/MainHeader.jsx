import React from 'react';
import Logo from "./images/Jetsettr.png";

function MainHeader() {
    return (
      <> 
      <header className="banner">
      <img className="bannerLogo" src={Logo} alt="jetsettr-logo"/>
    </header>
      </>
    )
    };
  

export default MainHeader;