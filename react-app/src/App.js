import React, { Component, useState } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar.js";
import Form from "./Form.js";
import Home from "./Home.js";
import About from "./About.js";
function App() {
  const [toggle, setToggle] = useState(0);
  const [toggle2, setToggle2] = useState(0);
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home toggle={toggle} setToggle={setToggle} />}
          />
          <Route path="about" element={<About />} />
          <Route path="*" element={<h1> Error 404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
