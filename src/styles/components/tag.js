import styled from "styled-components";

const StyledTag = styled.li`
    display: inline-block;
    padding: 0.5em;
    border: 2px solid ${(props) => props.theme.accent};
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.background};
    font-size: 0.675rem;
    text-transform: uppercase;
    font-weight: bold;

    &:not(:last-child) {
        margin-right: 0.5em;
        margin-bottom: 0.5em;
    }

    @media print {
        background: ${(props) => props.theme.white};
        color: ${(props) => props.theme.black};
    }
`;

export default StyledTag;
