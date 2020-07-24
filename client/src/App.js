import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}

        <Link to="/login">Login</Link>

        <Link to="/protected">Protected Page</Link>

        <Switch>

          <PrivateRoute exact path="/protected">
            <BubblePage/>
          </PrivateRoute>

          <Route path="/login" component={Login}/>{" "}

          <Route component={Login}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
