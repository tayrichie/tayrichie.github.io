import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled.a`
    display: inline-block;
    color: var(--colors-accent);

    &:hover,
    &:active {
        color: var(--colors-contrast);
    }
`;

const StyledRouterLink = styled(Link)`
    display: inline-block;
    color: var(--colors-accent);

    &:hover,
    &:active {
        color: var(--colors-contrast);
    }
`;

export { StyledLink, StyledRouterLink };
