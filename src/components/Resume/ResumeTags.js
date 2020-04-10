import React, { Component } from "react";

export default class ResumeTags extends Component {
  render() {
    return (
      <ul className="resume-tags">
        {this.props.list &&
          this.props.list.map((item, i) => (
            <li className="resume-tag" key={i}>
              {item}
            </li>
          ))}
      </ul>
    );
  }
}
