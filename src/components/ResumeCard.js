import React, { useEffect } from "react";
import Experience from "./Resume/Experience";
import Education from "./Resume/Education";
import Skills from "./Resume/Skills";
import Contact from "./Resume/Contact";
import Nav from "./Nav";
import DocumentTitle from "react-document-title";

export default function ResumeCard() {
  useEffect(() => {
    document.querySelector("#resume-title").focus();
  });

  return (
    <DocumentTitle title="Taylor Richards' Resume">
      <div className="resume-body card card-large">
        <div className="card-title">
          <h1 id="resume-title">Taylor's Resume</h1>
        </div>
        <Nav />
        <div className="card-body">
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </div>
      </div>
    </DocumentTitle>
  );
}
