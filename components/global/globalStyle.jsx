import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    z-index: auto;
  }
  body {
    margin: 0;
    min-height: 100%;
    min-width: 100%;
    
  }
`;

export default GlobalStyle;
