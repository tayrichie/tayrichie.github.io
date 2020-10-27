import React from "react";
import styled from "styled-components";
import StyledButton from "../styles/components/button";

const StyledThemeSwitcher = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;

export default function ThemeSwitcher(props) {
    return (
        <StyledThemeSwitcher>
            <StyledButton id="light" onClick={props.toggleTheme}>
                Light
            </StyledButton>
            <StyledButton id="dark" onClick={props.toggleTheme}>
                Dark
            </StyledButton>
            <StyledButton id="party" onClick={props.toggleTheme}>
                Party
            </StyledButton>
        </StyledThemeSwitcher>
    );
}
