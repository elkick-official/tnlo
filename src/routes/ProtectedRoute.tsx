import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  isAuth?: boolean;
  path?: string;
  role?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isAuth,
  path,
  role,
}) => {
  const token = localStorage.getItem("_token");
  const isAuthenticated = token !== null && token !== undefined;
  const isRole = isAuthenticated && isAuth ? true : false;

  // if (token && isAuth !== undefined && !isAuth) {
  //   return <Navigate to="/" replace={true} />;
  // } else if ((token && isAuth) || (isAuth !== undefined && !isAuth)) {
  return <>{children}</>;
  // } else if (isAuth === undefined) {
  //   return <>{children}</>;
  // } else {
  //   return <Navigate to="/login" replace={true} />;
  // }
};
