import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles import
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// component import 
import Home from "./routes/Home";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
