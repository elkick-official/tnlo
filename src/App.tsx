import { ConfigProvider } from "antd";
import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routeList, routeListProps } from "./routes";
import { configProvider, lightTheme } from "./utils";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { TNFooter, TNHeader } from "./components";
import LayoutMain from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { ForgotPassword, Login, Register } from "./page";
import LoginProtectedRoute from "./routes/LoginProtectedRoute";
import "antd-css-utilities/utility.min.css";
import "./App.css";
function App() {
  return (
    <>
      {/* <TNHeader/> */}
      <ErrorBoundary>
        <Suspense fallback={<>Loading</>}>
          <ConfigProvider {...configProvider} theme={lightTheme}>
            <Router>
              <Routes>
                <Route
                  element={
                    <ProtectedRoute isAuth={false}>
                      <LayoutMain />
                    </ProtectedRoute>
                  }
                >
                  {routeList.map((route: routeListProps) => (
                    <Route
                      key={route.id}
                      path={route.to}
                      element={route.element}
                    />
                  ))}
                </Route>
                <Route
                  path="/"
                  element={
                    <LoginProtectedRoute isAuth={false}>
                      <AuthLayout />
                    </LoginProtectedRoute>
                  }
                >
                  <Route path="/login" element={<Login />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/register" element={<Register />} />
                </Route>
              </Routes>
            </Router>
          </ConfigProvider>
        </Suspense>
      </ErrorBoundary>
      {/* <TNFooter/> */}
    </>
  );
}

export default App;
