import React, { Component } from "react";
import { StyledH2 } from "../../styles/base/typography";

export default class ResumeSection extends Component {
    render(props) {
        return (
            <>
                <StyledH2>{this.props.title}</StyledH2>

                {this.props.children}
            </>
        );
    }
}
