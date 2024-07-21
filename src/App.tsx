import { ConfigProvider } from "antd";
import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import { routeList, routeListProps } from "./routes";
import { configProvider, lightTheme } from "./utils";

const RemoteButton = React.lazy(() => import("remoteApp/Button"));

function App() {
  return (
    <>
      <RemoteButton />
      <Suspense fallback={<>Loading</>}>
        <ConfigProvider {...configProvider} theme={lightTheme}>
          <Router>
            <Routes>
              <Route path="/" element={<h1>Login</h1>} />
              <Route element={<Layout />}>
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
    </>
  );
}

export default App;
