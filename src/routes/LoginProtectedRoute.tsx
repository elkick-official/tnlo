import React from "react";
import { Navigate } from "react-router-dom";
import { isTokenExpired } from "../utils/AxiosApi/AxiosApiService";

interface ProtectedRouteProps {
  children: React.ReactNode;
  isAuth?: boolean;
  path?: string;
  role?: string;
}

const LoginProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isAuth,
  path,
  role,
}) => {
  const token = localStorage.getItem("_token");

  if (isTokenExpired(token)) {
    localStorage.removeItem("_token");
    return <>{children}</>;
  }

  return <Navigate to="/legacy-data-digitilization" replace={true} />;
};

export default LoginProtectedRoute;
