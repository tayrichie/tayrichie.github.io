import styled from "styled-components";

const StyledApp = styled.div`
    background: ${(props) => props.theme.background};
    min-height: calc(100vh - 4em);
    display: flex;
    align-items: center;
    padding: 2em 5em;

    @media screen and (max-width: 1100px) {
        padding: 1em 3em;
    }

    @media screen and (max-width: 600px) {
        padding: 0.5em 0.5em;
    }

    div,
    p {
        color: ${(props) => props.theme.text};
        letter-spacing: 0.25px;
    }

    svg {
        fill: ${(props) => props.theme.contrast};
    }
`;

export default StyledApp;
