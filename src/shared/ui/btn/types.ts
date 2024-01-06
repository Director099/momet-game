import {ReactNode} from "react";

export interface IBtn {
  primary?: "warning" | "disabled",
  children?: ReactNode,
  className?: string,
  to?: string,
  onBtnClick?: () => void
}
