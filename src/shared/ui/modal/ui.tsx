import {ReactNode} from "react";
import {ModalWrap} from "./styled.module";

export const Modal = ({children, status}: {children: ReactNode, status?: "game-over"}) =>
  <ModalWrap status={status}>
    <div className="modal-box">
      {children}
    </div>
  </ModalWrap>
