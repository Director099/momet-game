import styled from "styled-components";

export const RulesPanelWrap = styled.section`
  width: 100%;
  max-width: 520px;
  margin: 36px auto 40px;
  padding: 24px 32px 36px;
  background-color: #ffffff;
  box-shadow: 0 5px 20px rgba(140, 174, 200, 0.25);
  border-radius: 10px;
  box-sizing: border-box;

  .rules-list {
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 22px;
    list-style: none;
    text-align: left;
  }

  .rules-list li {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .rules-list li:not(:last-child) {
    margin-bottom: 20px;
  }

  .rules-list svg {
    flex-shrink: 0;
  }
`;
