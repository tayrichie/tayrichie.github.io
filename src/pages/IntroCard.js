import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import { StyledH1 } from "../styles/base/typography";
import { StyledLink, StyledRouterLink } from "../styles/components/link";
import { Wrapper } from "../styles/components/app";

export default class IntroCard extends Component {
    render() {
        return (
            <DocumentTitle title="About Taylor Richards">
                <Wrapper>
                    <StyledH1 tabIndex="-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 375 65"
                        >
                            <defs />
                            <text
                                className="svg-fill"
                                fillRule="evenodd"
                                fontFamily="Arima Madurai"
                                fontSize="58"
                                fontWeight="bold"
                                transform="translate(-40 -111)"
                            >
                                <tspan x="39.038201" y="158">
                                    Hi, I’m Taylor
                                </tspan>
                            </text>
                        </svg>
                    </StyledH1>

                    <p>
                        I'm a developer consultant working remotely for{" "}
                        <StyledLink
                            href="https://www.deque.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Deque Systems
                        </StyledLink>{" "}
                        from Chattanooga, Tennessee. In the past five years,
                        I've gone from strictly front-end development to a mix
                        of front and back-end technologies, with a focus on
                        accessibilty for all users.
                    </p>
                    <p>
                        Read my{" "}
                        <StyledRouterLink to="/resume">Resume</StyledRouterLink>{" "}
                        to learn more about my work experience.
                    </p>
                    <p>
                        You can find me on{" "}
                        <StyledLink
                            href="https://www.github.com/tayrichie"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </StyledLink>
                        {", "}
                        <StyledLink
                            href="https://twitter.com/_tayrichie"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </StyledLink>
                        {", "}
                        or{" "}
                        <StyledLink
                            href="https://www.linkedin.com/in/tayrminda/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </StyledLink>
                        .
                    </p>
                </Wrapper>
            </DocumentTitle>
        );
    }
}
