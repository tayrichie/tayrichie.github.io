import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import ResumeCard from "./ResumeCard";

export default class Experience extends Component {
  render() {
    return (
      <ResumeSection id="education" title="Education">
        <ResumeCard
          title="University of Tennessee at Chattanooga"
          subtitle="Chattanooga, TN"
          titleNotes="Graduated May 2014"
        ></ResumeCard>
      </ResumeSection>
    );
  }
}
