import { createContext, Dispatch, SetStateAction } from "react";

interface CurrentUserContextType {
  currentUser: null | any;
  setCurrentUser: Dispatch<SetStateAction<null | any>>;
}

export const CurrentUserContext = createContext<CurrentUserContextType>({
  currentUser: null,
  setCurrentUser: () => {},
});
