import React from "react";
import Experience from "../components/Resume/Experience";
import Education from "../components/Resume/Education";
import Skills from "../components/Resume/Skills";
import Contact from "../components/Resume/Contact";
import Nav from "../components/Nav";
import DocumentTitle from "react-document-title";
import { StyledH1 } from "../styles/base/typography";
import { Wrapper } from "../styles/components/app";

export default function ResumeCard() {
    return (
        <DocumentTitle title="Taylor Richards' Resume">
            <Wrapper>
                <StyledH1 tabIndex="-1">Taylor's Resume</StyledH1>

                <Nav />

                <Experience />
                <Education />
                <Skills />
                <Contact />
            </Wrapper>
        </DocumentTitle>
    );
}
