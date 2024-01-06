import {FC} from "react";
import {RulesFormWrap} from "./styled.module";

interface IRulesForm {
  handleSubmit: (e: any) => void,
  setFirstName: (e: string) => void
}

export const RulesForm:FC<IRulesForm> = ({handleSubmit, setFirstName}) =>
  <RulesFormWrap onSubmit={handleSubmit}>
    <h3>Представьтесь пожалуйста</h3>
    <div className="rules-form-row">
      <input
        type="text"
        required
        onChange={e => setFirstName(e.target.value)}
      />
      <button>Отправить</button>
    </div>
  </RulesFormWrap>
