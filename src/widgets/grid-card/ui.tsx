import {FC, useState} from "react";
import {GridCardWrap} from "./styled.module";
import {IGridCard} from "./types";
import {searchElement} from "shared/lib/utils";
import {Card} from "../../entities";

export const GridCard:FC<IGridCard> = ({images = [], finishedItems, checkItems, cardTheme}) => {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const isVisible = (id: string) => searchElement(visibleItems, id);
  const isFinished = (id: string) => searchElement(finishedItems, id);
  const TIMEOUT = 900;

  const handleCardClick = (id: string) => {
    if (isFinished(id) || isVisible(id)) return;

    switch (visibleItems.length) {
      case 0:
        setVisibleItems([id]);
        break;
      case 1:
        setVisibleItems((items) => [...items, id]);
        checkItems(visibleItems[0], id);
        setTimeout(() => {
          setVisibleItems([]);
        }, TIMEOUT);
        break;
      default:
        setVisibleItems([]);
    }
  };

  return (
    <GridCardWrap className={`cards-theme-${cardTheme}`}>
      {images.map(({id, url}) =>
        <Card
          key={id}
          id={id}
          url={url}
          isVisible={isVisible(id)}
          isFinished={isFinished(id)}
          onCardClick={handleCardClick}
        />
      )}
    </GridCardWrap>
  )
}
