import { createGlobalStyle } from "styled-components";
import Theme from '../../public/theme'
const color = "rgb(21, 32, 43)";
const secondColor = "#24292e";

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    z-index: auto;
  }
  body {
    background-color:${Theme.backgroundColor} !important;
    margin: 0;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
