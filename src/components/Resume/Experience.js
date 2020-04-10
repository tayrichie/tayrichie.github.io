import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import ResumeCard from "./ResumeCard";

export default class Experience extends Component {
  render() {
    return (
      <ResumeSection title="Experience">
        <ResumeCard
          title="Developer Consultant"
          subtitle="Deque Systems"
          titleNotes="May 2019 - Present"
        ></ResumeCard>
        <ResumeCard
          title="Front-end Developer"
          subtitle="Adage Technologies"
          titleNotes="Jan 2018 - May 2019"
        ></ResumeCard>
        <ResumeCard
          title="Front-end Developer"
          subtitle="Maycreate"
          titleNotes="Jul 2015 - Dec 2017"
        ></ResumeCard>
      </ResumeSection>
    );
  }
}
