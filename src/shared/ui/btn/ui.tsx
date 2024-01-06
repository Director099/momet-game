import {FC} from "react";
import {IBtn} from "./types";
import {BtnWrap} from "./styled.module";

export const Btn: FC<IBtn> = ({children, primary, className, to = "", onBtnClick}) =>
  <BtnWrap to={to} primary={primary} className={className} onClick={onBtnClick}>
    {children}
  </BtnWrap>
