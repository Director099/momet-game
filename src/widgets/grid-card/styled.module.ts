import styled from "styled-components";

export const GridCardWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;

  perspective: 1000px; /* Для анимации */

  --theme-back: url("../img/back-cats.svg");

  @media (min-width: 970px) {
    grid-template-columns: repeat(4, 1fr);
  }

  /* класс для смены рубашки карточек, добавляется списку .cards */

  &.cards-theme-flowers {
    --theme-back: url("../img/back-flowers.svg");
  }

  &.cards-theme-cars {
    --theme-back: url("../img/back-cars.svg");
  }
`;
