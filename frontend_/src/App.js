
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import React, {Fragment}  from "react";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";

import reducer from "./reducers/auth";
import { createStore } from "redux";

// import NavBar from "./components/Nav";

import AuthRoute from "./components/AuthRoute";

import HomePage from "./components/Screen/Home.js";
import LoginPage from "./components/User/Forms/Login.js";

import { appMiddleware } from "./middleware/app";
import { apiMiddleware } from "./middleware/core";
// import MyAccount from "./pages/MyAccount";
import Login from "./components/User/Forms/Login";
import SignUp from "./components/User/Forms/Signup";
import 'bootstrap/dist/css/bootstrap.css';
const createStoreWithMiddleware = applyMiddleware(
  appMiddleware,
  apiMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducer);

function App() {
  return (
    <div className="App">
        <Provider store={store}>
      <Router>
        {/*<NavBar />*/}
        <div className="container">
          <Routes >
            <AuthRoute path="/home" render={HomePage} type="private" />
            <AuthRoute path="/login" type="guest">
              <LoginPage />
            </AuthRoute>
            <AuthRoute path="/chat" type="private">
              {/*<MyAccount />*/}
                <h1>Chat Screen</h1>
            </AuthRoute>
            <Route path="/" render={LoginPage} />
          </Routes>
        </div>
      </Router>
    <Router>
      <Fragment>

      </Fragment>
    </Router>
    </Provider>
    </div>
  );
}

export default App;
