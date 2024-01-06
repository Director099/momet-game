import {createContext} from "react";

interface IUserContext {
  auth: boolean,
  setAuth: (param: boolean) => void
}

export const UserContext = createContext<IUserContext>({
  auth: false,
  setAuth: () => false
});
