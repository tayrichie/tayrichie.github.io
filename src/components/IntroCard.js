import React, { Component } from "react";
import { Link } from "react-router-dom";
import DocumentTitle from "react-document-title";

export default class IntroCard extends Component {
  render() {
    return (
      <DocumentTitle title="About Taylor Richards">
        <div className="card intro-card">
          <div className="card-title">
            <h1>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 59">
                <defs/>
                <text fill="#000" fill-rule="evenodd" font-family="PlayfairDisplay-Regular_Bold, Playfair Display" font-size="60" font-weight="bold" transform="translate(-40 -111)">
                  <tspan x="39.038201" y="158">hi, i’m taylor</tspan>
                </text>
              </svg>
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
            </p>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
