import {imageCollection} from "./mock";

export const getImages = (type: string) => {
  const imagePairs = imageCollection[type].map((item) => ({
    ...item, id: `${item.id}-1`
  }));
  const concatImage = [...imageCollection[type], ...imagePairs];
  const randomConcatImage = concatImage.sort(() => 0.5 - Math.random());

  return randomConcatImage
};
