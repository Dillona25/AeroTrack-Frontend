import { useContext } from "react";
import { CurrentUserContext } from "../store/currentUserContext";

export const useCurrentUser = () => useContext(CurrentUserContext);
