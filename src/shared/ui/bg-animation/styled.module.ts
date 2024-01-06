import styled from "styled-components";

export const BgAnimationWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  svg {
    width: 100%;
    height: 100%;
  }

  #home {
    clip-path: url(#cache);
  }

  #red {
    fill: none;
    opacity: 0.15;
    stroke: #CE1B5F;
    stroke-width: 12;
    stroke-miterlimit:10;
    animation: show 4s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  #blue {
    fill: none;
    opacity: 0.15;
    stroke: #06A1C4;
    stroke-width: 12;
    stroke-miterlimit:10;
    animation: show 4s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  #light-blue {
    fill: none;
    opacity: 0.15;
    stroke: #06A1C4;
    stroke-width: 6;
    stroke-miterlimit:10;
    stroke-dasharray: 200;
    stroke-dashoffset: 800;
    animation: draw 4s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes show {
    0% {
      opacity: 0.15;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.15;
    }
  }
`;
