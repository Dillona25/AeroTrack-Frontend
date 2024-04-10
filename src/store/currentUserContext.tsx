import React, { createContext, useState, useContext, ReactNode } from "react";

interface User {
  name: string;
  avatar: string;
  password: string;
  email: string;
}

interface CurrentUserContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

type ProviderProps = {
  children: ReactNode;
};

const CurrentUserContext = createContext<CurrentUserContextType | undefined>(
  undefined
);

export const useCurrentUser = () => {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error("useCurrentUser must be used within a CurrentUserProvider");
  }
  return context;
};

export const CurrentUserProvider: React.FC<ProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
