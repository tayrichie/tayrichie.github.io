import styled from "styled-components";

const StyledH1 = styled.h1`
    display: block;
    margin: 0;
    color: ${(props) => props.theme.contrast};
    line-height: 1.2;
    font-size: 3rem;
`;

const StyledH2 = styled.h2`
    color: ${(props) => props.theme.contrast};
    margin-top: 0;
    /* border-bottom: 1px solid ${(props) => props.theme.border}; */
    font-size: 1.75rem;
`;

const StyledH3 = styled.h3`
    color: ${(props) => props.theme.accent};
    margin-bottom: 0;

    & + p {
        margin-top: 0.3em;
    }
`;

export { StyledH1, StyledH2, StyledH3 };
