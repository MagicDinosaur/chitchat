import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { logout } from "../actions/auth";

class NavBar extends Component {
  render() {
    return (
     <h1> NAR BAR</h1>
    );
  }
}

export default connect(({ isAuthUser }) => ({ isAuthUser }), { logout })(
  NavBar
);