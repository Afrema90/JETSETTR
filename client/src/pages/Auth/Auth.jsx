import "./Auth.css";
import Logo from "../../images/Jetsettr.png";
 import React, { useState } from "react";
// import { AuthContext } from "../../context/authContext";
// import { gql } from "graphql-tag";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

const AuthorizationMain = () => {
    return (
    <div className="auth"> 
    
             <div className="logo__container"> 
             <div className="welcome"> 
             </div>
                <img className="mainlogo" src={Logo} alt="jetsettr-logo" />
            </div> 
        <LogIn/>
    
        </div>
    );
};

function LogIn(props) {
 

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse = await login({
          variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  

  // const context = useContext(AuthContext);
  // const navigate = useNavigate();
  // const [errors, setErrors] = useState([]);

  // function loginUserCallback() {
  //   console.log("Callback hit");
  //   loginUser();
  // }

  // const { onChange, onSubmit, values } = useForm(loginUserCallback, {
  //   email: "",
  //   password: "",
  // });

  // const [loginUser] = useMutation(LOGIN_USER, {
  //   update(_, { data: { loginUser: userData } }) {
  //     context.login(userData);
  //     document.location.replace("/");
  //   },
  //   onError({ graphQLErrors }) {
  //     setErrors(graphQLErrors);
  //   },
  //   variables: { loginInput: values },
  // });

    return (
        <><div className="login">
        <form className="loginForm" onSubmit={handleFormSubmit}>
                <h1>Log In</h1>
            <input
                type="email"
                placeholder="Email" 
            className="infoInput"
            name="email"
            onChange={handleChange}/>
                <input
                    type="password"
                    className='infoInput'
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}/>
       {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
                <span style={{ fontSize: "14px" }}>
                    Don't forget to login</span>
           <button className="login__button" type="submit">Login</button>
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

export default AuthorizationMain;




   
