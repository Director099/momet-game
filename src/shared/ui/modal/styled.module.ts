import styled from "styled-components";

export const ModalWrap = styled.div<{status?: string}>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(140, 174, 200, 0.8);
  overflow-y: hidden;
  overscroll-behavior: contain;
  pointer-events: auto;

  /* visibility: hidden; */
  /* opacity: 0; */
  animation: fadeIn calc(var(--animation-duration) + 0.1s) calc(2 * var(--animation-duration)) both;

  .modal-box {
    position: relative;
    width: 320px;
    min-height: 285px;
    max-height: calc(100vh - 60px);
    padding: 72px 40px 36px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    box-sizing: border-box;
    text-align: center;
  }

  .modal-box::before {
    content: "";
    position: absolute;
    top: -75px;
    left: -30px;
    width: 376px;
    height: 130px;
    background-image: url("../img/ribbon-with-stars.svg");
    background-position: top center;
    background-repeat: no-repeat;

    ${props => props.status === 'game-over' && `
      background-image: url("../img/ribbon-with-filled.png");
      background-size: contain;
    `};
  }

  .modal-caption {
    margin: 0;
    margin-bottom: 12px;
    font-size: 24px;
    line-height: 32px;
  }

  .modal-description {
    margin: 0;
    margin-bottom: 32px;
    font-size: 16px;
    line-height: 22px;
  }

  .modal-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @keyframes fadeIn {
    from {
      /* visibility: hidden; */
      opacity: 0;
    }

    to {
      /* visibility: visible; */
      opacity: 1;
    }
  }
`;
