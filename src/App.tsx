import { ConfigProvider } from "antd";
import "antd-css-utilities/utility.min.css";
import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
import AuthLayout from "./layout/AuthLayout";
import LayoutMain from "./layout/Layout";
import { ForgotPassword, Login, Register } from "./page";
import { routeList, routeListProps } from "./routes";
import LoginProtectedRoute from "./routes/LoginProtectedRoute";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { configProvider, lightTheme } from "./utils";
import FallBack404 from "./page/FallBack404";
function App() {
  return (
    <>
      {/* <TNHeader/> */}
      <ErrorBoundary>
        <Suspense fallback={<>Loading...</>}>
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
                <Route path="*" element={<FallBack404 />}></Route>
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
