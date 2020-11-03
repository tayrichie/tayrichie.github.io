import styled from "styled-components";

const StyledTag = styled.li`
    display: inline-block;
    padding: 0.5em;
    border: 2px solid var(--colors-primary);
    background: var(--colors-primary);
    color: var(--colors-background);
    font-size: 0.675rem;
    text-transform: uppercase;
    font-weight: bold;

    &:not(:last-child) {
        margin-right: 0.5em;
        margin-bottom: 0.5em;
    }

    @media print {
        background: var(--colors-white);
        color: var(--colors-black);
    }
`;

export default StyledTag;
