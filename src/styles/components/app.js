import styled from "styled-components";

const StyledApp = styled.div`
    background: ${(props) => props.theme.background};
    min-height: calc(100vh - 4em);
    display: flex;
    align-items: center;
    padding: 2em 5em;

    @media screen and (max-width: 1100px) {
        padding: 1em 3em;
        min-height: calc(100vh - 2em);
    }

    @media screen and (max-width: 600px) {
        padding: 3em 0.5em 0.5em;
        min-height: calc(100vh - 1em);
        display: block;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${(props) => props.theme.serif};
    }

    strong {
        font-family: ${(props) => props.theme.serif};
    }

    div,
    p {
        color: ${(props) => props.theme.text};
        font-family: ${(props) => props.theme.sansSerif};
    }

    svg {
        fill: ${(props) => props.theme.contrast};
        letter-spacing: -3px;
    }

    @media print {
        min-height: auto;
        padding: 1rem;
        background: ${(props) => props.theme.white};

        div,
        p {
            color: ${(props) => props.theme.black};
        }
    }
`;

const Wrapper = styled.div`
    max-width: ${(props) => props.theme.maxWidth};
`;

export { StyledApp, Wrapper };
