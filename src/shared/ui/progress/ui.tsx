import {FC} from "react";
import {IProgress} from "./types";
import {ProgressWrap} from "./styled.module";

export const Progress:FC<IProgress> = ({value, max}) =>
  <ProgressWrap>
    <div className="progress-wrapper">
      <div className="progress" style={{width: `${value / max * 100}%`}}></div>
    </div>
    <p className="progress-description">Открыто {value} / {max}</p>
  </ProgressWrap>
