import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body[data-theme=light] {
        --type-serif: "Arima Madurai", cursive;
        --type-sansSerif: "Work Sans", sans-serif;
        --font-sizeReg: 24px;
        --font-sizeSm: 18px;
        --colors-primary: #ED217C;
        --colors-accent: #5FAD56;
        --colors-contrast: #428afd;
        --colors-background: #fff;
        --colors-text: #2D3047;
        --colors-border: #ccc;
        --width-maxWidth: 860px;
        --colors-white: #fff;
        --colors-black: #000;
        --colors-svgFill: #000;
    }

    body[data-theme=dark] {
        --type-serif: "Arima Madurai", cursive;
        --type-sansSerif: "Work Sans", sans-serif;
        --colors-primary: #85bedb;
        --colors-accent: #ED217C;
        --colors-contrast: #85CB33;
        --colors-background: #100B00;
        --colors-text: #fff;
        --colors-border: #ccc;
        --width-maxWidth: 860px;
        --colors-white: #fff;
        --colors-black: #000;
        --colors-svgFill: #fff;
    }

    :root {
        font-size: 24px;
        letter-spacing: -0.5px;
        word-spacing: -1.25px;
        line-height: 1.4;

        @media only (max-width: 640px) {
            font-size: 18px;
        }
    }

`;

export default GlobalStyles;
