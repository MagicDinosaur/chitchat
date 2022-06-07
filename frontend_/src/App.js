
import './App.css';
import {BrowserRouter as Router , Link , Route , Routes} from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";

import reducer from "./reducer";
import { createStore } from "redux";

import NavBar from "./components/Nav";

import AuthRoute from "./components/AuthRoute";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";

import { appMiddleware } from "./middlewares/app";
import { apiMiddleware } from "./middlewares/core";
import MyAccount from "./pages/MyAccount";
import Login from "./components/User/Forms/Login";
import SignUp from "./components/User/Forms/Signup";
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">

    <Router>
      <div>

            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>

        </div>

    </Router>

    </div>
  );
}

export default App;
