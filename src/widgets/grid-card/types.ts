export interface IGridCard {
  images: any[],
  finishedItems: string[],
  checkItems: (a:string, b:string) => void,
  cardTheme?: string
}
