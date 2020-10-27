import React, { Component } from "react";
import { StyledH3 } from "../../styles/base/typography";

export default class ResumeCard extends Component {
    render(props) {
        return (
            <div className="resume-card">
                <div className="resume-card-title">
                    <StyledH3>{this.props.title}</StyledH3>
                    {(this.props.subtitle || this.props.titleNotes) && (
                        <p>
                            <strong>{this.props.subtitle}</strong>{" "}
                            {this.props.subtitle &&
                                this.props.titleNotes &&
                                "/"}{" "}
                            {this.props.titleNotes && (
                                <span className="resume-card-note">
                                    {this.props.titleNotes}
                                </span>
                            )}
                        </p>
                    )}
                </div>
                <div className="resume-card-body">{this.props.children}</div>
            </div>
        );
    }
}
