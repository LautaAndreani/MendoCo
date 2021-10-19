import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Rubik', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
body {
    background-color: #141C2C;
}
/* Scroll Bar */

::-webkit-scrollbar {
    width: 5px;
    background-color: #141C2C;
}

::-webkit-scrollbar-track {
    background:none;
}

::-webkit-scrollbar-thumb {
    background-color: gray;
    height: 10rem;
    border-radius: 10px;
}

`;

export default GlobalStyle;
