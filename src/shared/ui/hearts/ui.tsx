import {HeartsWrap} from "./styled.module";
import {IconHart} from "../../assets/icons";

export const Hearts = ({count = 0, value = 0}) =>
  <HeartsWrap>
    {Array(count).fill(null).map((_, i) => (
      <IconHart colorActive={i < value ? false : true} key={count + count + i}/>
    ))}
  </HeartsWrap>
