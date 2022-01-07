import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, BlogList, BlogSingle, Home, Projects } from "./pages";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:slug" element={<BlogSingle />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
