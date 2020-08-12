import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import ResumeCard from "./ResumeCard";

export default class Experience extends Component {
  render() {
    return (
      <ResumeSection id="contact" title="Contact Me">
        <ResumeCard title="" subtitle="" titleNotes="">
          Find me on{" "}
          <a
            href="https://www.github.com/tayrichie"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          {", "}
          <a
            href="https://twitter.com/_tayrichie"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          {", "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/tayrminda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </ResumeCard>
      </ResumeSection>
    );
  }
}
