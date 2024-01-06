import {NotFoundWrap} from "./styled.module";
import {Links} from "shared/lib/constants";
import {Btn} from "shared/ui";

export const NotFound = () => {
  return (
    <NotFoundWrap>
      <h1 className="not-fund-title">К сожалению, страница не найдена</h1>
      <Btn primary="warning" to={Links.Main} >Перейти на главную</Btn>
    </NotFoundWrap>
  )
}
