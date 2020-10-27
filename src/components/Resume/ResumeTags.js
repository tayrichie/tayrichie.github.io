import React, { Component } from "react";
import StyledTag from "../../styles/components/tag";
import styled from "styled-components";

const ResumeTagsList = styled.ul`
    padding: 0;
    margin: 0;
`;

export default class ResumeTags extends Component {
    render() {
        return (
            <ResumeTagsList>
                {this.props.list &&
                    this.props.list.map((item, i) => (
                        <StyledTag key={i}>{item}</StyledTag>
                    ))}
            </ResumeTagsList>
        );
    }
}
