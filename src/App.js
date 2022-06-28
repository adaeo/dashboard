import React from "react";
import { Routes, Route } from "react-router-dom";

// styles import
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// component import
import Navigation from "./components/Navigation";

// route import
import Home from "./routes/Home";
import DevTest from "./routes/DevTest";
import Route404 from "./routes/Route404";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="*" element={<Route404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/devtest" element={<DevTest />} />
      </Routes>
    </div>
  );
}

export default App;
