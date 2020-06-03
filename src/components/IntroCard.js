import React, { Component } from "react";
import { Link } from "react-router-dom";
import DocumentTitle from "react-document-title";

export default class IntroCard extends Component {
  render() {
    return (
      <DocumentTitle title="About Taylor Richards">
        <div className="card">
          <div className="card-title">
            <h1>
              Hi, I'm Taylor{" "}
              <span className="emoji" role="img" aria-label="wave emoji">
                👋
              </span>
            </h1>
          </div>
          <div className="card-body">
            <p>
              I'm a developer consultant working remotely for{" "}
              <a
                href="https://www.deque.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deque Systems
              </a>{" "}
              from Chattanooga, Tennessee. In the past five years, I've gone
              from strictly front-end development to a mix of front and back-end
              technologies, with a focus on accessibilty for all users.
            </p>
            <p>
              Read my <Link to="/resume">Resume</Link> to learn more about my
              work experience.
            </p>
            <p>
              You can find me on{" "}
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
              , too.
            </p>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
