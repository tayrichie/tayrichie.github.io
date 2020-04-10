import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import ResumeCard from "./ResumeCard";
import ResumeTags from "./ResumeTags";

export default class Experience extends Component {
  render() {
    const comfortable = [
      "HTML5",
      "CSS3",
      "Javascript",
      "Sass",
      "Node.js",
      "Yarn",
      "NPM",
      "Webpack",
      "Git",
      "GitHub",
      "Grunt/Gulp",
      "Typescript",
      "Parcel",
      "Storybook",
      "React",
    ];
    const inProgress = [
      "Angular",
      "C#",
      "WCAG Guidelines",
      "CSS Animation",
      "Vue.js",
    ];
    const related = [
      "VS Code",
      "JIRA",
      "Microsoft Office",
      "Adobe Creative Suite",
      "Sketch",
      "Figma",
    ];

    return (
      <ResumeSection title="Experience">
        <ResumeCard title="Comfortable With">
          <ResumeTags list={comfortable} />
        </ResumeCard>
        <ResumeCard title="In Progress">
          <ResumeTags list={inProgress} />
        </ResumeCard>
        <ResumeCard title="Related">
          <ResumeTags list={related} />
        </ResumeCard>
      </ResumeSection>
    );
  }
}
