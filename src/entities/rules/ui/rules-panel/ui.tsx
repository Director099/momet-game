import {RulesPanelWrap} from "./styled.module";
import {IconRules1, IconRules2, IconRules3} from "shared/assets/icons";

const rulesList = [
  {
    icon: <IconRules1/>,
    text: 'В наборе есть множество карточек – по две штуки с одним и тем же рисунком.'
  },
  {
    icon: <IconRules2/>,
    text: 'Нужно разложить карточки «рубашкой» вверх на столе, а затем переворачивать по две.'
  },
  {
    icon: <IconRules3/>,
    text: 'Если они совпадают – игрок забирает их и получает ещё один ход.'
  }
]

export const RulesPanel = () =>
  <RulesPanelWrap>
    <div className="rules-panel">
      <h3>Правила игры</h3>
      <ul className="rules-list">
        {rulesList.map(({text, icon}, i) =>
          <li key={text + i}>
            {icon}
            {text}
          </li>
        )}
      </ul>
    </div>
  </RulesPanelWrap>
