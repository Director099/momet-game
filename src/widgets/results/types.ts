export interface IResults {
  stepsCount: number,
  results: {
    name: string,
    stepsCount: number,
    current?: boolean
  }[],
}
