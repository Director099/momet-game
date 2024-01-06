import {UserInfo} from "shared/lib/constants";
import {getKeyStorage} from "shared/lib/utils";
import {Results} from "widgets/results";

const results = [
  {name: 'Аня', stepsCount: 16},
  {name: 'Вася', stepsCount: 12},
  {name: 'Петя', stepsCount: 19}
];

export const PageResult = () =>
  <Results
    results={results}
    stepsCount={Number(getKeyStorage(UserInfo.StepsCount))}
  />
