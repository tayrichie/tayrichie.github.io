import styled from "styled-components";

const StyledApp = styled.div`
    background: var(--colors-background);
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
        font-family: var(--type-serif);
    }

    strong {
        font-family: var(--type-serif);
    }

    div,
    p {
        color: var(--colors-text);
        font-family: var(--type-sansSerif);
    }

    svg {
        fill: var(--colors-contrast);
        letter-spacing: -3px;
    }

    @media print {
        min-height: auto;
        padding: 1rem;
        background: var(--colors-white);

        div,
        p {
            color: var(--colors-black);
        }
    }
`;

const Wrapper = styled.div`
    max-width: var(--width-maxWidth);
`;

export { StyledApp, Wrapper };
