import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header className="bg-red-600">
        <div className="container mx-auto flex justify-between">
          <nav className="flex">
            <NavLink
              to="/"
              className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold rock3D tracking-widest"
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className="inlien-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            >
              About
            </NavLink>
            <NavLink
              to="blog"
              className="inlien-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            >
              Squirrelly Blog
            </NavLink>
            <NavLink
              to="projects"
              className="inlien-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            >
              Projects
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
