import styled from "styled-components";
import { between } from "polished";
import { breakpoints, mq } from "../helpers";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  border: 1px solid;
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
  background-color: var(--bg_white);
  border: 1px solid;
  color: var(--color_dark);
  font-size: inherit;

  :focus {
    background-color: #d8f3f3;
  }

  ${mq.l`
    width: 25%;
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
