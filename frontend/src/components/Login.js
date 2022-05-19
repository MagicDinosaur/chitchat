
import './Login.css';
import React, {Component, useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {userPostFetch} from 'redux-actions';
function Login(props) {
  const [time, setTime] = useState((new Date()).toString());


  useEffect(() => {
    const intervalId = setInterval(() =>{setTime((new Date()).toString())}
    , 1);
    return () => clearInterval(intervalId);
  }, []);


  return (
  <div>
    <div className="container" id="container">
  {/*    Form dang ky /}
  {/*<div className="form-container sign-up-container">*/}
  {/*  <form action="#">*/}
  {/*    <h1>Create Account</h1>*/}
  {/*    <span>or use your email for registration</span>*/}
  {/*    <input type="text" placeholder="Name" />*/}
  {/*    <input type="email" placeholder="Email" />*/}
  {/*    <input type="password" placeholder="Password" />*/}
  {/*    <button>Sign Up</button>*/}
  {/*  </form>*/}
  {/*</div>*/}

  <div className="form-container sign-in-container">
    <form action="#">
      <p>Testing time: {time} </p>
      <h1>Sign in</h1>
      <span>Enjoy your endless fun</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a href="#">Forgot your password?</a>
      <button>Sign In</button>
    </form>
  </div>


  <div className="overlay-container">
    <div className="overlay">
      <div className="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button className="ghost" id="signIn">Sign In</button>
      </div>
      <div className="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <button className="ghost" id="signUp">Sign Up</button>
      </div>
    </div>
  </div>
</div>


  </div>
  );
}

export default Login;
