import styled from "styled-components";
import { between } from "polished";
import { breakpoints, mq } from "../helpers";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  font-size: ${between(
    "16px",
    "20px",
    `${breakpoints.xs}px`,
    `${breakpoints.xl}px`
  )};

  ${mq.l`
    flex-direction: row;
    flex-wrap: wrap;
  `}

  ${mq.xxl`
    font-size: 1em;
  `}
`;

const StyledInput = styled.input`
  padding: 0.5em;
  box-sizing: border-box;
  background-color: ${props => props.theme.primary.whiteSmoke};
  border-top: 1px solid;
  border-right: 1px solid;
  border-left: 1px solid;
  border-bottom: 0;
  color: ${props => props.theme.primary.blackRaisin};
  font-size: inherit;

  :focus {
    background-color: ${props => props.theme.shades.blueMiddle30};
  }

  ${mq.l`
    width: 25%;

    &:nth-child(-n+3) {
      border-right: 0;
    }
  `}
`;

export const Input = styled(StyledInput).attrs(({ placeholder }) => ({
  type: "text",
  placeholder,
  name: placeholder.toLowerCase()
}))``;

export const Select = styled(StyledInput).attrs({
  as: "select"
})`
  appearance: none;
`;

export const Textarea = styled(StyledInput).attrs({
  as: "textarea",
  rows: "4"
})`
  resize: none;

  ${mq.l`
    width: 100%;
  `}
`;
