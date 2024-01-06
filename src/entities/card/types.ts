export interface ICard {
  url: string,
  id: string,
  isVisible: string[] | boolean,
  isFinished: string[] | boolean,
  onCardClick: (id: string) => void
}
