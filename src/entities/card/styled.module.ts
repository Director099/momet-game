import styled from "styled-components";

export const CardWrap = styled.li`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 160px;
  background-color: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid #bad6eb;
  cursor: pointer;

  transition: transform var(--animation-duration);
  transform-style: preserve-3d;

  img {
    grid-area: 1 / 1 / 2 / 2;
    border-radius: 5px;
    transform: rotateY(180deg);
    backface-visibility: hidden;

    width: 100%;
    object-fit: contain;
  }

  /* Рубашка */

  &::after {
    grid-area: 1 / 1 / 2 / 2;
    content: "";
    width: 100%;
    height: 158px;
    background-image: var(--theme-back);
    background-repeat: no-repeat;
    background-position: center;
    backface-visibility: hidden;
    background-size: contain;
  }

  /* Финальная отметка */

  &::before {
    content: "";
    grid-area: 1 / 1 / 2 / 2;
    width: 100%;

    height: 144px;
    border-radius: 5px;
    background-color: rgba(140, 174, 200, 0.6);
    background-image: url("../img/check.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    opacity: 0;
    transition-property: opacity;
    z-index: 1;
  }

  &:not(.card-show):not(.card-finished):hover {
    box-shadow: 0 6px 16px rgba(140, 174, 200, 0.6);
  }

  &.card-show {
    transform: rotateY(180deg);
    cursor: default;
  }

  &.card-finished {
    transform: rotateY(180deg);
    cursor: default;
  }

  &.card-finished::before {
    opacity: 1;
    transition-delay: var(--animation-duration);
    transition-duration: var(--animation-duration);
    transition-timing-function: ease-in-out;
  }
`;
