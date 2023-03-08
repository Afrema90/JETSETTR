import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
<><div className="backBtn"><a className="backLink" href="/">Go Back</a></div>
<form className="signup__container">
      <div className="signupTitle">
        <p>Want to connect with travelers like yourself?</p>
        <h1>Sign Up to JetSettr</h1>
        </div>

      <input
        type="text"
        placeholder="First Name"
        className="infoInput"
        name="firstname"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="infoInput"
        name="lastname"
      />
      <input
        type="text"
        className="infoInput"
        placeholder="Username"
        name="username"
      />

      <input
        type="text"
        className="infoInput"
        placeholder="Email Address"
        name="email"
      />

      <input
        type="text"
        className="infoInput"
        placeholder="Password"
        name="password1"
      />

      <input
        type="text"
        className="infoInput"
        placeholder="Confirm Password"
        name="password2"
      />

      <span className="ahaa" style={{ fontSize: "22px" }}>Already have an account?</span>
      <button id="signUpBtn" className="signUpBtn">Sign Me Up</button>
    </form></>
  );
}

export default SignUp;
