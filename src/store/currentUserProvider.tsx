import { ReactNode, useState } from "react";
import { CurrentUserContext } from "./currentUserContext";

type Props = {
  children: ReactNode;
};

export const CurrentUserContextProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
