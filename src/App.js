import React from "react";
import "./styles/styles.scss";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import IntroCard from "./components/IntroCard";
import ResumeCard from "./components/ResumeCard";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <IntroCard />
          </Route>
          <Route path="/resume">
            <ResumeCard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
