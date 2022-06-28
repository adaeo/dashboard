import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";

// styles import
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// component import
import Navigation from "./components/Navigation";

// route import
import Home from "./routes/Home";
import DevTest from "./routes/DevTest";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devtest" element={<DevTest />} />
      </Routes>
    </div>
  );
}

export default App;
