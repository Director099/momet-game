import styled from "styled-components";

export const RulesFormWrap = styled.form`
  width: 100%;
  max-width: 520px;
  margin: 36px auto 40px;
  padding: 24px 32px 36px;
  background-color: #ffffff;
  box-shadow: 0 5px 20px rgba(140, 174, 200, 0.25);
  border-radius: 10px;
  box-sizing: border-box;

  .rules-form-row {
    display: flex;
    gap: 10px;
    width: 100%;
  }

  input {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    padding: 10px 17px 9px;
    margin: 0;
    background-color: #fff;
    border: 1px solid #dfe2ed;
    border-radius: 5px;
    appearance: textfield;
  }

  button {
    display: inline-flex;
    justify-content: center;
    gap: 8px;
    vertical-align: middle;
    margin: 0;
    padding: 10px 17px 9px;
    white-space: nowrap;
    user-select: none;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    color: #333333;
    background-image: none;
    cursor: pointer;

    border-radius: 5px;
    border-color: transparent;
    background-color: #ffbf20;
  }
`;
