import styled from "styled-components";

const StyledButton = styled.button`
    font-size: 0.85rem;
    border: 0;
    padding: 0.5em;
    border-radius: 50%;
    transform-origin: center;
    background: transparent;

    .svg-fill {
        fill: var(--colors-svgFill);
    }

    &:hover,
    &:active {
        svg {
            animation: spin 1.5s ease-in 0s infinite;
        }
    }

    &:focus {
        transform: rotate(15deg);
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default StyledButton;
