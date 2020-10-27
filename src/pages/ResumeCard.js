import React, { useEffect } from "react";
import Experience from "../components/Resume/Experience";
import Education from "../components/Resume/Education";
import Skills from "../components/Resume/Skills";
import Contact from "../components/Resume/Contact";
import Nav from "../components/Nav";
import DocumentTitle from "react-document-title";
import { StyledH1 } from "../styles/base/typography";

export default function ResumeCard() {
    useEffect(() => {
        document.querySelector("#resume-title").focus();
    });

    return (
        <DocumentTitle title="Taylor Richards' Resume">
            <div className="card">
                <div className="card-title">
                    <StyledH1 id="resume-title">Taylor's Resume</StyledH1>
                </div>
                <Nav />
                <div className="card-body">
                    <Experience />
                    <Education />
                    <Skills />
                    <Contact />
                </div>
            </div>
        </DocumentTitle>
    );
}
