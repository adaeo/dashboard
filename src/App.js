import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

// styles import
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// component import
import Home from "./routes/Home";
import DevTest from "./routes/DevTest";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/devtest">
            <DevTest />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
