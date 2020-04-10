import React, { Component } from "react";
import Experience from "./Resume/Experience";
import Education from "./Resume/Education";
import Skills from "./Resume/Skills";
import Contact from "./Resume/Contact";
import Nav from "./Nav";

export default class ResumeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-title">
          <h1>My Resume</h1>
        </div>
        <Nav />
        <div className="card-body">
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </div>
      </div>
    );
  }
}
