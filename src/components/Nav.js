import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        <nav className="nav-body">
          <Link to="/" exact>
            About
          </Link>
        </nav>
      </div>
    );
  }
}
