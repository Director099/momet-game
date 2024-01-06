import styled from "styled-components";

export const RulesChoiceLevelWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 520px;
  margin: 36px auto 40px;
  padding: 24px 32px 36px;
  background-color: #ffffff;
  box-shadow: 0 5px 20px rgba(140, 174, 200, 0.25);
  border-radius: 10px;
  box-sizing: border-box;

  .rules-fieldset-list {
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: left;
    font-size: 16px;
    margin-bottom: 20px;
  }

  .rules-fieldset {
    padding: 24px 0;
    border: none;

    &:not(:last-of-type) {
      padding-top: 0px;
      border-bottom: 1px solid #333;
    }
  }

  .rules-fieldset-select {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .rules-radio {
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
    border: 1px solid #eef5f9;
    background-image: none;
    cursor: pointer;
    font-family: inherit;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    background-color: #eef5f9;

    &:has(:checked) {
      background: #ffbf20;
    }

    input {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      border: 0;
      clip: rect(0 0 0 0);
    }
  }
`;
