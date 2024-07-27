import { LegacyDataDigitilization } from "../page";
import CalendarForecast from "../page/CalendarForecast/CalendarForecast";
import Dashboard from "../page/Dashboard/Dashboard";
import DataRepository from "../page/DataRepository/DataRepository";
import DynamicForms from "../page/DynamicForms/DynamicForms";
import PressNote from "../page/PressNote/PressNote";

export interface routeListProps {
  id: string | number;
  to: string;
  element: React.ReactElement;
}

export const routeList: routeListProps[] = [
  {
    id: "ROUTE-1",
    to: "/",
    element: <Dashboard />,
  },
  {
    id: "ROUTE-2",
    to: "/legacy-data-digitilization",
    element: <LegacyDataDigitilization />,
  },
  {
    id: "ROUTE-3",
    to: "/data-repository",
    element: <DataRepository />,
  },
  {
    id: "ROUTE-4",
    to: "/dynamic-forms",
    element: <DynamicForms />,
  },
  {
    id: "ROUTE-5",
    to: "/calendar-forecast",
    element: <CalendarForecast />,
  },
  {
    id: "ROUTE-6",
    to: "/press-note",
    element: <PressNote />,
  },
  {
    id: "ROUTE-7",
    to: "/settings",
    element: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        Coming Soon
      </div>
    ),
  },
];
