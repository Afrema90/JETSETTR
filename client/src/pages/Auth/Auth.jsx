import React from 'react';
import "./Auth.css";
import Logo from "../../images/Jetsettr.png";


const Auth = () => {
    return (
    <div className="auth"> 
    
             <div className="logo__container"> 
             <div className="welcome"> 
             <p className="welcomeMessage">Welcome!</p>
             </div>
                <img className="mainlogo" src={Logo} alt="jetsettr-logo" />
            </div> 
        <LogIn/>
    
        </div>
    );
};

function LogIn() {
    return (
        <><div className="login">
        <form className="loginForm">
                <h1>Log In</h1>
            <input
                type="text"
                placeholder="Username" 
            className="infoInput"
            name="username"/>
                <input
                    type="password"
                    className='infoInput'
                    placeholder="Password"
                    name="password"/>
       
                <span style={{ fontSize: "14px" }}>
                    Don't forget to login</span>
           <button className="login__button">Login</button>
             </form>
           <div className="signUpBox">
            <p>Don't have an account?</p>
<a href="/SignUp">Sign Up</a>
</div></div></>
    );
};

// function SignUp() {
//     return (
//         <form className="signup">
//             <div className="signup__container">
//                 <h1>Sign Up</h1>
//             </div>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 className='infoInput'
//                 name="firstname" />
//             <input
//                 type="text"
//                 placeholder="Last Name"
//                 className='infoInput'
//                 name="lastname" />
//         <input
//                 type="text"
//                 className='infoInput'
//                 placeholder="username"
//                 name="username" />
//             <span style={{fontSize: "12px"}}>Already have an account?</span>
//         <button className="signup__button">Sign Up</button>
//         </form>
//     );
// }

export default Auth;




   
