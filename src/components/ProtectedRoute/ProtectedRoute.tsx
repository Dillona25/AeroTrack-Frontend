import { ReactNode } from "react";
import { Route, Navigate } from "react-router-dom";

export const ProtectedRoute = (
  path: string,
  element: ReactNode,
  isLoggedIn?: boolean
) => {
  return isLoggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/" />
  );
};
