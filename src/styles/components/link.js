import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled.a`
    display: inline-block;
    color: ${(props) => props.theme.accent};

    &:hover,
    &:active {
        color: ${(props) => props.theme.contrast};
    }
`;

const StyledRouterLink = styled(Link)`
    display: inline-block;
    color: ${(props) => props.theme.accent};

    &:hover,
    &:active {
        color: ${(props) => props.theme.contrast};
    }
`;

export { StyledLink, StyledRouterLink };
