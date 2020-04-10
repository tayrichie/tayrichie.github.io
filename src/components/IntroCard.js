import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class IntroCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-title">
          <h1>
            Hi, I'm Taylor <span role="img">👋</span>
          </h1>
        </div>
        <div className="card-body">
          <p>
            I'm a web developer working remotely from Chattanooga, Tennessee for{" "}
            <a
              href="https://www.deque.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deque Systems
            </a>
            . In the past four years, I've gone from strictly front-end
            development to a mix of front and back-end technologies, with a
            focus on accessibilty for all users.
          </p>
          <p>
            My <Link to="/resume">Resume</Link> can tell you more about my work
            experience and skillset.
          </p>
          <p>
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
            , too.
          </p>
        </div>
      </div>
    );
  }
}
