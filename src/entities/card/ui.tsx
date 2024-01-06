import {FC} from "react";
import {ICard} from "./types";
import {CardWrap} from "./styled.module";

export const Card:FC<ICard> = ({id, url, isVisible, isFinished, onCardClick}) => {
  const className = `${
    isVisible ? 'card-show' : ''
  } ${
    isFinished ? 'card-finished' : ''
  }`;

  return (
    <CardWrap onClick={() => onCardClick(id)} className={`card ${className ?? ""}`}>
      <img
        width="204" height="144"
        src={url}
        alt="Карточка"
      />
    </CardWrap>
  );
}

