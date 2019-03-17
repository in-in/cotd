import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import sourceSerifPro700 from "./fonts/source-serif-pro-v6-latin-700.woff2";
import sourceSansPro400 from "./fonts/source-sans-pro-v11-latin-regular.woff2";
import sourceSansPro700 from "./fonts/source-sans-pro-v11-latin-700.woff2";

const GlobalStyle = createGlobalStyle`
  ${normalize};

  @font-face {
    font-family: 'Source Serif Pro';
    font-style: normal;
    font-weight: 700;
    src: url(${sourceSerifPro700}) format('woff2')
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    src: url(${sourceSansPro400}) format('woff2')
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    src: url(${sourceSansPro700}) format('woff2')
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    color: ${props => props.theme.primary.blackRaisin};
    background-image:
      repeating-linear-gradient(
        -45deg,
        ${props => props.theme.primary.whiteSmoke},
        ${props => props.theme.primary.whiteSmoke} 3em,
        ${props => props.theme.primary.blueMiddle} 3em,
        ${props => props.theme.primary.blueMiddle} 7em)
  }

  h1,
  h2,
  h3,
  h4,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
