import {FC} from "react";
import {ResultsWrap} from "./styled.module";
import {IResults} from "./types";
import {Links, UserInfo} from "shared/lib/constants";
import {getDeclension, getKeyStorage} from "shared/lib/utils";
import {Btn} from "shared/ui";

const btnNavs = [
  {
    label: 'На главную',
    link: Links.Main
  },
  {
    label: 'Начать заново',
    link: Links.Game
  },
]

export const Results: FC<IResults> = ({stepsCount, results}) => {
  const wordsDeclensionStep = getDeclension(stepsCount, ['шаг', 'шага', 'шагов']);
  const sortedResults = [...results, {name: String(getKeyStorage(UserInfo.Name)), stepsCount, current: true}]
    .sort((a, b) => a.stepsCount - b.stepsCount);

  return (
    <ResultsWrap>
      <h2>Лучшие результаты:</h2>
      <p>Вы завершили игру за <b>{wordsDeclensionStep}</b>, так держать!</p>

      <div className="result-table-overflow">
        <table className="result-table">
          <thead>
            <tr className="result-table-row">
              <th>Место</th>
              <th>Имя</th>
              <th>Шаги</th>
            </tr>
          </thead>
          <tbody>
            {sortedResults.map(({name, stepsCount, current}, i) => (
              <tr key={name + stepsCount} className={`result-table-row ${current && "active"}`}>
                <td>{i + 1}</td>
                <td>{name}</td>
                <td>{stepsCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Хотите попробовать ещё раз?</p>
      <div className="result-btn">
        {btnNavs.map(({label, link}) =>
          <Btn key={label + link} primary="warning" className="button" to={link}>{label}</Btn>
        )}
      </div>
    </ResultsWrap>
  );
}
