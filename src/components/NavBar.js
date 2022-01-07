import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header>
        <div>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="blog">Squirrelly Blog</NavLink>
            <NavLink to="projects">Projects</NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
