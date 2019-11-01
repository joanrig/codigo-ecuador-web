import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink exact activeClassName="active" to="/about">
        About
      </NavLink>
      <NavLink exact activeClassName="active" to="/activities">
        Activities
      </NavLink>
      <NavLink exact activeClassName="active" to="/blog">
        Blog
      </NavLink>
      <NavLink exact activeClassName="active" to="/donate">
        Donate
      </NavLink>
    </div>
  );
};

export default Navbar;
