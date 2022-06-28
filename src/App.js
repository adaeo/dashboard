import React from "react";
import { Link, Routes, Route, HashRouter } from "react-router-dom";

// styles import
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// component import
import Home from "./routes/Home";
import DevTest from "./routes/DevTest";

function App() {
  return (
    <HashRouter basename="/">
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      </div>
    </HashRouter>
  );
}

export default App;
