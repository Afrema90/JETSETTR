import React from 'react';
import "./Auth.css";
import Logo from "../../images/Jetsettr (1).png";

const Auth = () => {
    return (
    <div className="auth">
            <div className="auth__container">
                <img src={Logo} alt="" />
                <div className="JetSETTER">
                <h1>Auth</h1>
            </div>
        </div>
        <LogIn/>
        </div>
    );
};

function LogIn() {
    return (
        <form>
        <div className="login">
            <div className="login__container">
                <h1>Log In</h1>
            </div>
            <input
                type="text"
                placeholder="Username" 
            className="infoInput"
            name="username"
            />
        </div><div>
                <input
                    type="password"
                    className='login__input'
                    placeholder="Password"
                   
            name="password"
        />
        </div>
        <div>
                <span style={{ fontSize: "12px" }}>
                    Don't forget to login</span>
           <button className="login__button">Login</button>
            </div>
        </form>
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





   
