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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    color: var(--color_dark);
    background-image:
      repeating-linear-gradient(
        -45deg,
        var(--bg_white),
        var(--bg_white) 3em,
        var(--bg_main) 3em,
        var(--bg_main) 7em)
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
