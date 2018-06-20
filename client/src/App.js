import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import List from "./pages/List";
import Details from "./pages/Details";
import NavBar from "./pages/navbar";



const App = () => (
  // Parent most component is always Router in App.js when we're using React Router
  //  Router requires a single child, so we wrap everything in a single empty div
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/list" component={List} />
        <Route exact path="/todo/:id" component={Details} />
        </div>
    </Router>
)

export default App;
