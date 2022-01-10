import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  About,
  BlogList,
  BlogSingle,
  Home,
  Projects,
} from "./components/index";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:slug" element={<BlogSingle />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </NavBar>
    </Router>
  );
}

export default App;
