import React, { Component } from "react";

export default class ResumeSection extends Component {
  render(props) {
    return (
      <div id={this.props.id} className="resume-card-wrapper">
        <div className="resume-card-title">
          <h2>{this.props.title}</h2>
        </div>
        <div className="resume-card-body">{this.props.children}</div>
      </div>
    );
  }
}
