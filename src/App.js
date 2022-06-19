import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles import
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// component import 
import Home from "./routes/Home";
import DevTest from "./routes/DevTest";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/devtest" element={<DevTest />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
