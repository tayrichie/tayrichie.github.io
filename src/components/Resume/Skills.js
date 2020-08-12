import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import ResumeCard from "./ResumeCard";
import ResumeTags from "./ResumeTags";

export default class Skills extends Component {
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
      "Gatsby",
      "Vue.js",
    ];
    const inProgress = ["WCAG 2.0", "WCAG 2.1", "Angular", "C#"];
    const related = [
      "VS Code",
      "JIRA",
      "Microsoft Office",
      "Adobe CS",
      "Sketch",
      "Figma",
    ];

    return (
      <ResumeSection id="skills" title="Skills">
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
