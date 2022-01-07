import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:slug" element={<BlogSingle />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
