import styled from "styled-components";

export const ResultsWrap = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;

  h2 {
    margin: 0;
    margin-bottom: 12px;
    font-weight: 900;
    font-size: 40px;
    line-height: 56px;
  }

  p {
    margin: 0;
    margin-bottom: 24px;
  }

  tr:last-child {
    padding-bottom: 10px;
  }

  .result-btn {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .result-table-overflow {
    overflow: auto;
  }

  .result-table {
    width: 100%;
    max-width: 520px;
    margin: 36px auto 32px;
    font-size: 16px;
    line-height: 22px;
    background-color: #ffffff;
    box-shadow: 0 5px 20px rgba(140, 174, 200, 0.25);
    border-radius: 10px;
    border-collapse: collapse;
  }

  .result-table-row {
    display: grid;
    grid-template-columns: 120px 260px 140px;
    align-items: center;
  }

  .result-table-row th {
    padding: 18px 32px 8px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #8caec8;
    text-align: left;
  }

  .result-table-row td {
    padding: 8px 32px;
    text-align: left;
  }

  .result-table-row.active {
    font-weight: 900;
    color: #ffffff;
    background-color: #00ca51;
  }

  .button {
    width: 160px;
  }
`;
