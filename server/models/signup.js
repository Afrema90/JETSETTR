import React, { Component } from "react";
//import { Link } from "react-router-dom";
//mport { connect } from "react-redux";
//import { signup } from "../actions";
import "./SignUp.css";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state.email, this.state.password);
  };

  render() {
    return (
      <>
        <a className="backBtn" href="/">
          Go Back
        </a>
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

          <span className="ahaa" style={{ fontSize: "22px" }}>
            Already have an account?
          </span>
          <button className="signup__button">Sign Me Up</button>
        </form>
      </>
    );
  }
}

export default SignUp;
