import React from "react";
import "./styles/styles.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import IntroCard from "./components/IntroCard";
import ResumeCard from "./components/ResumeCard";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <Switch>
            <Route path="/" exact>
              <IntroCard />
            </Route>
            <Route path="/resume">
              <ResumeCard />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
