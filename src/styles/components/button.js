import styled from "styled-components";

const StyledButton = styled.button`
    background: ${(props) => props.theme.accent};
    border-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.background};
    font-size: 0.85rem;

    &:hover,
    &:active {
        background: ${(props) => props.theme.contrast};
        border-color: ${(props) => props.theme.contrast};
        color: ${(props) => props.theme.background};
    }

    &:focus {
        background: ${(props) => props.theme.primary};
        border-color: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.background};
    }
`;

export default StyledButton;
