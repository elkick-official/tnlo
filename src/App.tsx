import { ConfigProvider } from "antd";
import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routeList, routeListProps } from "./routes";
import { configProvider, lightTheme } from "./utils";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { TNFooter, TNHeader } from "./components";
import LayoutMain from "./layout/Layout";
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
                {/* <Route path="/" element={<h1>Login</h1>} /> */}
                <Route element={<LayoutMain />}>
                  {routeList.map((route: routeListProps) => (
                    <Route
                      key={route.id}
                      path={route.to}
                      element={route.element}
                    />
                  ))}
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
