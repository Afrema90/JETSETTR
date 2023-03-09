import React from 'react';
import Auth from '../utils/auth';

const LoggedInHeader = () => {

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };

      return (
        <> 
              <header className="banner">
              <img className="bannerLogo" src={Logo} alt="jetsettr-logo"/>
           </header>
              </>
      )
}