import { lighten, transparentize } from "polished";

const primary = {
  blackRaisin: "hsl(0, 0%, 13%)",
  whiteSmoke: "hsl(0, 0%, 96%)",
  redVivid: "hsl(1, 81%, 49%);",
  blueMiddle: "hsl(181, 54%, 65%)"
};

const shades = {
  blueMiddle30: lighten(0.3, primary.blueMiddle),
  whiteSmokeTransparent80: transparentize(0.2, primary.whiteSmoke)
};

const theme = { primary, shades };

export default theme;
