import {useState} from "react";
import {GameWrap} from "./styled.module";
import {Links, SettingGame, UserInfo, GameDifficulty} from "shared/lib/constants";
import {getKeyStorage, setKeyStorage, useGame, getImages, useTimerCounting} from "shared/lib/utils";
import {Btn, Hearts, Modal, Progress} from "shared/ui";
import {GridCard} from "widgets";

export const Game = () => {
  const timer = [GameDifficulty.Middle, GameDifficulty.Hard].some((e: string) => e === getKeyStorage(UserInfo.Difficulty));
  const life = GameDifficulty.Hard === getKeyStorage(UserInfo.Difficulty);
  const complication = [timer, life].some((e: boolean) => e);
  const getTypeGame = getKeyStorage(UserInfo.TypeGame) ?? "";
  const [images] = useState(getImages(getTypeGame));

  const {
    finishedItems,
    stepsCount,
    checkItems,
    isWin
  } = useGame(images);

  const hasTimer = isWin || !timer;

  const {
    timeFilled,
    minutes,
    seconds
  } = useTimerCounting(SettingGame.CounterTime, hasTimer);

  const errorsCount = life ? stepsCount - finishedItems.length / 2 : 0;
  const lifeEnd = SettingGame.LivesCount - errorsCount;
  const showModalFilled = [timeFilled, !lifeEnd].some((e: boolean) => e)

  isWin && setKeyStorage(UserInfo.StepsCount, String(stepsCount));

  return (
    <GameWrap>
      {complication &&
        <div className="complication">
          {timer && <div className="timer">До конца игры: {minutes}:{seconds}</div>}
          {life && <Hearts count={SettingGame.LivesCount} value={errorsCount}/> }
        </div>
      }
      <div className="game-row">
        <Progress value={finishedItems.length / 2} max={images.length / 2} />
        <div className="steps">Шаг {stepsCount}</div>
      </div>
      <GridCard
        images={images}
        finishedItems={finishedItems}
        checkItems={checkItems}
        cardTheme={getTypeGame}
      />
      {showModalFilled &&
        <Modal status="game-over">
          <h3 className="modal-caption">Ты проиграл!</h3>
          <p className="modal-description">Не отчаивайся <br/> попробуй еще раз</p>
          <div className="modal-buttons">
            <Btn primary="warning" className="button" to={Links.Main}>Вернуться на главную</Btn>
            <Btn primary="warning" className="button" to={Links.Game} onBtnClick={() => window.location.reload()}>Начать заново</Btn>
          </div>
        </Modal>
      }
      {isWin &&
        <Modal>
          <h3 className="modal-caption">Победа!</h3>
          <p className="modal-description">Теперь давайте узнаем результаты этой партии</p>
          <div className="modal-buttons">
            <Btn primary="warning" className="button" to={Links.Results}>Показать результаты</Btn>
          </div>
        </Modal>
      }
    </GameWrap>
  )
}
