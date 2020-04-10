import React, { Component } from "react";

export default class ResumeCard extends Component {
  render(props) {
    return (
      <div className="resume-card">
        <div className="resume-card-title">
          <h3>{this.props.title}</h3>
          {(this.props.subtitle || this.props.titleNotes) && (
            <p>
              <strong>{this.props.subtitle}</strong>{" "}
              {this.props.subtitle && this.props.titleNotes && "/"}{" "}
              {this.props.titleNotes}
            </p>
          )}
        </div>
        <div className="resume-card-body">{this.props.children}</div>
      </div>
    );
  }
}
