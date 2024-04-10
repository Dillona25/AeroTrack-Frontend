import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children?: ReactNode;
  isLoggedIn?: boolean;
};

export const ProtectedRoute = ({ children, isLoggedIn }: Props) => {
  return isLoggedIn ? children : <Navigate to="/" />;
};
