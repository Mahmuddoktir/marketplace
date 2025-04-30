import React from "react";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Router from "./component/Router/Router";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
