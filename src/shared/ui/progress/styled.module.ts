import styled from "styled-components";

export const ProgressWrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  gap: 20px;

  @media (min-width: 970px) {
    flex-direction: row;
    align-items: center;
  }

  .progress-wrapper {
    display: flex;
    width: 100%;
    height: 16px;
    background-color: #c0d6eb;
    border-radius: 8px;

    @media (min-width: 970px) {
      max-width: 460px;
    }
  }

  .progress {
    background-color: #00ca51;
    border-radius: 8px;
    transition: width var(--animation-duration);
  }

  .progress-description {
    margin: 0;
    font-size: 16px;
    line-height: 22px;
    flex-shrink: 0;
  }
`;
