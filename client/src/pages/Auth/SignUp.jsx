import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";
import "./SignUp.css";

function SignUp(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const password = formState.password;
    const confirm = formState.confirmPassword;

    if (password !== confirm) {
      alert("Passwords must match.");
    } else {
      try {
        const mutationResponse = await addUser({
          variables: {
            username: formState.username,
            email: formState.email,
            password: formState.password,
          },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
        window.location.assign("/Home");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <div className="backBtn">
        <a className="backLink" href="/">
          Go Back
        </a>
      </div>
      <form className="signup__container" onSubmit={handleFormSubmit}>
        <div className="signupTitle">
          <p>Want to connect with travelers like yourself?</p>
          <h1>Sign Up to JetSettr</h1>
        </div>

        {/* <input
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
      /> */}
        <input
          type="text"
          className="infoInput"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />

        <input
          type="text"
          className="infoInput"
          placeholder="Email Address"
          name="email"
          onChange={handleChange}
        />

        <input
          type="text"
          className="infoInput"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />

        <input
          type="text"
          className="infoInput"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={handleChange}
        />
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <button id="signUpBtn" className="signUpBtn" type="submit">
          Sign Me Up
        </button>
      </form>
    </>
  );
}

export default SignUp;
