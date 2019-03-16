import styled from "styled-components";

const ButtonDefault = styled.button.attrs({
  type: "button"
})`
  position: ${props => (props.disabled ? "absolute" : "relative")};
  ${props => (props.disabled ? "top: 50%" : "")};
  ${props => (props.disabled ? "left: 50%" : "")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em 0.6em;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  font-weight: 700;
  text-transform: uppercase;
  appearance: none;
  color: ${props =>
    props.disabled ? "var(--color_accent)" : "var(--color_dark)"};
  background-color: var(--bg_white);
  border: 1px solid;
  border-color: ${props =>
    props.disabled ? "var(--color_accent)" : "var(--color_dark)"};
  transform: ${props =>
    props.disabled
      ? "translate(-50%, -50%) scale(1.5) rotate(-15deg)"
      : "perspective(1px) translateZ(0)"};
  overflow: hidden;
  line-height: 1.3;

  ::before {
    ${props => (props.disabled ? "" : "content: ''")};
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--bg_main);
    transform: scaleX(0) skewX(-45deg);
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  :focus::before,
  :hover::before {
    transform: scaleX(1.5) skewX(-45deg);
  }
`;

export default ButtonDefault;
