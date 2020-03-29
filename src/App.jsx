import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { HOME } from "./constants/routes";
import Home from "./containers/Home";

const App = () => (
  <Router>
    <Switch>
      <Route exact path={HOME} component={Home} />}
    </Switch>
  </Router>
);

export default App;
