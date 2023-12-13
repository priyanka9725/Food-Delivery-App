import React from "react";
import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Router,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}