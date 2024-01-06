import {FC} from "react";
import {setKeyStorage} from "shared/lib/utils";

interface IHandleChange {
  key: string,
  value: string,
  setCheck: (value: boolean) => void,
}

export const handleStorageChange:FC<IHandleChange> = ({key, value, setCheck}) => {
  setKeyStorage(key, value);
  setCheck(true);
  return null
}
