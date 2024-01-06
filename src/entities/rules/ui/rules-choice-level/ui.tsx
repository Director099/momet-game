import {useState} from "react";
import {RulesChoiceLevelWrap} from "./styled.module";
import {IconCars, IconCats, IconFlowers} from "shared/assets/icons";
import {GameDifficulty, Links, UserInfo} from "shared/lib/constants";
import {getKeyStorage, handleStorageChange} from "shared/lib/utils";
import {Btn} from "shared/ui";

const gameTypes = [
  { icon: <IconCats/>, label: 'Котики', type: 'cats' },
  { icon: <IconFlowers/>, label: 'Цветочки', type: 'flowers' },
  { icon: <IconCars/>, label: 'Машины', type: 'cars' },
];

const gameDifficulty = [
  {label: "Простой", difficulty: GameDifficulty.Easy },
  {label: "Средний", difficulty: GameDifficulty.Middle },
  {label: "Тяжелый", difficulty: GameDifficulty.Hard },
]

export const RulesChoiceLevel = () => {
  const [checkTypeGame, setCheckTypeGame] = useState(!!getKeyStorage(UserInfo.TypeGame));
  const [checkDifficulty, setCheckDifficulty] = useState(!!getKeyStorage(UserInfo.Difficulty));
  const showBtnPlayGame = checkDifficulty && checkTypeGame;

  return (
    <RulesChoiceLevelWrap>
      <fieldset className="rules-fieldset">
        <h3>Выбирите уровень сложности</h3>
        <ul className="rules-fieldset-list">
          <li><b>Простой</b> - спокойно играйте не торопясь </li>
          <li><b>Средний</b> - Попробуй пройти игру за 1минуту!</li>
          <li><b>Тяжелый</b> - Это испытание, теперь против тебя не только время но и ограниченное здоровье!</li>
        </ul>
        <div className="rules-fieldset-select">
          {gameDifficulty.map(({label, difficulty}) =>
            <label className="rules-radio" key={label}>
              <input
                type="radio"
                name="difficulty"
                value={difficulty}
                onChange={() => handleStorageChange({
                  key: UserInfo.Difficulty,
                  value: difficulty,
                  setCheck: () => setCheckDifficulty(true)
                })}
                defaultChecked={difficulty === getKeyStorage(UserInfo.Difficulty)}
              />
              {label}
            </label>
          )}
        </div>
      </fieldset>
      <fieldset className="rules-fieldset">
        <h3>Выбирите картинки</h3>
        <div className="rules-fieldset-select">
          {gameTypes.map(({icon, label, type}) =>
            <label className="rules-radio" key={label}>
              <input
                type="radio"
                name="type"
                value={type}
                onChange={() => handleStorageChange({
                  key: UserInfo.TypeGame,
                  value: type,
                  setCheck: () => setCheckTypeGame(true)
                })}
                defaultChecked={type === getKeyStorage(UserInfo.TypeGame)}
              />
              {icon}
              {label}
            </label>
          )}
        </div>
      </fieldset>
      {showBtnPlayGame && <Btn primary="warning" to={Links.Game}>Начать Игру</Btn>}
    </RulesChoiceLevelWrap>
  )
}
