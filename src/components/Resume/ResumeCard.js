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
              {this.props.titleNotes && (
                <span className="resume-card-note">
                  {this.props.titleNotes}
                </span>
              )}
            </p>
          )}
        </div>
        <p className="resume-card-body">{this.props.children}</p>
      </div>
    );
  }
}
