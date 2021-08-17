import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
    render() {
      return (
        <header>
          <div className="links">
            <NavLink exact to="/">
              All The Animals
            </NavLink>
            <NavLink to="/animals/:id">Animal Profile</NavLink>
            <NavLink to="/create">Add To Da Pack</NavLink>
          </div>
        </header>
      );
    }
  }
  
  export default Header;
  