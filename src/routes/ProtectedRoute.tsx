import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

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
  const isAuthenticated =
    token?.length && token !== null && token !== undefined;
  const isRole = isAuthenticated && isAuth ? true : false;

  // if (token && isAuth !== undefined && !isAuth) {
  //   return <Navigate to="/" replace={true} />;
  // } else if ((token && isAuth) || (isAuth !== undefined && !isAuth)) {
  // return <>{children}</>;
  // } else if (isAuth === undefined) {
  //   return <>{children}</>;
  // } else {
  //   return <Navigate to="/login" replace={true} />;
  // }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return <Navigate to="/login" replace={true} />;
};
