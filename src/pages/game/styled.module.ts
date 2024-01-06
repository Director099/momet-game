import styled from "styled-components";

export const GameWrap = styled.section`
  padding-top: 40px;
  margin-bottom: 155px;

  .game-row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 40px 20px;
    margin-bottom: 40px;

    @media (min-width: 970px) {
      align-items: center;
    }
  }

  .steps {
    justify-self: end;
    padding: 8px 20px;
    font-weight: 900;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
    background-color: #00ca51;
    border-radius: 22px;
  }

  .complication {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  .timer {
    font-weight: 900;
  }
`;
