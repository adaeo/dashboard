import React from "react";
import { Link, Routes, Route } from "react-router-dom";

// styles import
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// component import
import Home from "./routes/Home";
import DevTest from "./routes/DevTest";

function App() {
  return (
    <div>
      <Routes>
        <Link to="/">Home</Link>
        <Link to="/devtest">DevTest</Link>
        <Route path="/" element={<Home />} />
        <Route path="/devtest" element={<DevTest />} />
      </Routes>
    </div>
  );
}

export default App;
