import styled from "styled-components";
import {Link} from "react-router-dom";

export const BtnWrap = styled(Link)<{primary?: string, href?: string}>`
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  gap: 8px;
  vertical-align: middle;
  margin: 0;
  padding: 14px 16px;
  white-space: nowrap;
  user-select: none;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  color: #333333;
  border-radius: 10px;
  border: 1px solid #5C5C5C;
  background-image: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  ${props => props.primary === 'disabled' && `
    opacity: 0.3;
    cursor: not-allowed;
    color: #000;
    background-color: gray;
    border-color: gray;
  `};

  ${props => props.primary === 'warning' && `
    border-color: transparent;
    background-color: #ffbf20;
  `};
`;

