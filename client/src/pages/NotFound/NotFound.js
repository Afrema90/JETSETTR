import Logo from "../../images/Jetsettr.png";
 import React from "react";

const NotFound = () => {
    return (
    <>
    <div className="NotFound">
    <div className="Whoops"> 
           <h2>404 Not Found</h2>
           <p>Whoops! Looks like that page doesn't exist, sorry!</p> 
             </div>
             <div>
                <img className="mainlogo" src={Logo} alt="jetsettr-logo" />
            </div> 
        </div>
        </>
    );
};

export default NotFound;