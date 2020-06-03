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
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/tayrminda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
          <br />
          <br />
          <div className="disclaimer">
            Icons from{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.flaticon.com
            </a>
            .
          </div>
        </ResumeCard>
      </ResumeSection>
    );
  }
}
