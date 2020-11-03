import React, { Component } from "react";
import styled from "styled-components";
import { StyledH3 } from "../../styles/base/typography";

const StyledResumeCardTitle = styled.div`
    strong {
        color: ${(props) => props.theme.accent};
        font-family: ${(props) => props.theme.serif};
    }

    span {
        font-family: ${(props) => props.theme.serif};
    }
`;

const StyledResumeCardBody = styled.div`
    font-size: 0.8rem;
    margin-top: 0;
`;

const ResumeH3 = styled(StyledH3)`
    &:not(:first-child) {
        margin-top: 0;
    }
`;

export default class ResumeCard extends Component {
    render(props) {
        return (
            <section>
                <ResumeH3>{this.props.title}</ResumeH3>
                {(this.props.subtitle || this.props.titleNotes) && (
                    <StyledResumeCardTitle>
                        <strong>{this.props.subtitle}</strong>{" "}
                        {this.props.subtitle && this.props.titleNotes && "/"}{" "}
                        {this.props.titleNotes && (
                            <span>{this.props.titleNotes}</span>
                        )}
                    </StyledResumeCardTitle>
                )}
                <StyledResumeCardBody>
                    {this.props.children}
                </StyledResumeCardBody>
            </section>
        );
    }
}
