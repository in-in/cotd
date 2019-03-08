import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import SourceSerifVariableRoman from "./fonts/SourceSerifVariable-Roman.ttf.woff2";
import SourceSansVariableRoman from "./fonts/SourceSansVariable-Roman.ttf.woff2";

const GlobalStyle = createGlobalStyle`
  ${normalize};

  @font-face {
    font-family: 'Source Serif Pro';
    font-variation-settings: "wght" 200 900;
    src: url(${SourceSerifVariableRoman}) format('woff2-variations')
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-variation-settings: "wght" 200 900;
    src: url(${SourceSansVariableRoman}) format('woff2-variations')
  }

  :root {
    --color_dark: #222;
    --color_accent: #e31b18;
    --bg_white: #f4f4f4;
    --bg_main: #76d4d6;
  }

  body {
    background-color: var(--bg_main);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
