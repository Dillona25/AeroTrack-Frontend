import { Route, Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isLoggedIn: boolean;
  component: React.ComponentType<any>;
  path: string;
  [key: string]: any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isLoggedIn,
  component: Component,
  ...props
}) => {
  return (
    <Route {...props}>
      {isLoggedIn ? <Component /> : <Navigate to="/" replace />}
    </Route>
  );
};

export default ProtectedRoute;
