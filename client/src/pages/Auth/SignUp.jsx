import React from 'react';
import './SignUp.css';

function SignUp() {
    return (
        <form className="signup">
            <div className="signup__container">
                <h1>Sign Up</h1>
            </div>
            <input
                type="text"
                placeholder="First Name"
                className='infoInput'
                name="firstname" />
            <input
                type="text"
                placeholder="Last Name"
                className='infoInput'
                name="lastname" />
        <input
                type="text"
                className='infoInput'
                placeholder="username"
                name="username" />
            <span style={{fontSize: "12px"}}>Already have an account?</span>
        <button className="signup__button">Sign Up</button>
        </form>
    );
}


export default SignUp;

