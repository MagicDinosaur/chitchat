
import './Login.css';
import React, {Component, useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {userPostFetch} from 'redux-actions';
function Login(props) {
  const [button, setButton] = useState(true);


  return (
  <div>
    <div className={button ? "container" : "container right-panel-active"} id="container">
   {/*Form dang ky*/}
  <div className="form-container sign-up-container">
    <form action="#">
      <h2>Create Account</h2>
      <span>or use your email for registration</span>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button >Sign Up</button>
    </form>
  </div>
{/*Form dang nhap*/}
  <div className="form-container sign-in-container">
    <form action="#">
      {/*<p>Testing time: {time} </p>*/}
      <h1>Sign in</h1>
      <span>Enjoy your endless fun</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a href="#">Forgot your password?</a>
      <button>Sign In</button>
    </form>
  </div>

{/*form welcome*/}
  <div className="overlay-container">
    <div className="overlay">
      <div className="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button className="ghost" id="signIn" onClick={() => setButton(true)}>Sign In</button>
      </div>
      <div className="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <button className="ghost" id="signUp" onClick={() =>setButton(false)}>Sign Up</button>
      </div>
    </div>
  </div>
</div>


  </div>
  );
}

export default Login;
