import {useState} from "react";

interface IImages {
  id: string,
  url: string,
}

export const useGame = (images: IImages[]) => {
  const [finishedItems, setFinishedItems] = useState<string[]>([]);
  const [stepsCount, setStepsCount] = useState(0);

  const checkItems = (firstItem: string, secondItem: string) => {
    const firstImage = images.find(({id}) => id === firstItem);
    const secondImage = images.find(({id}) => id === secondItem);

    if (firstImage?.url === secondImage?.url) {
      setFinishedItems((items) => [...items, firstItem, secondItem]);
    }

    setStepsCount((i) => i + 1);
  };

  const isWin = finishedItems.length > 0 && finishedItems.length === images.length;

  return {
    finishedItems,
    stepsCount,
    checkItems,
    isWin
  };
};
