import AuthLayout from "../layout/AuthLayout";
import { DatapressNote, LegacyDataDigitilization, Login, TNFormEditUserView } from "../page";
import CalendarForecast from "../page/CalendarForecast/CalendarForecast";
import Dashboard from "../page/Dashboard/Dashboard";
import DataRepository from "../page/DataRepository/DataRepository";
import DynamicForms from "../page/DynamicForms/DynamicForms";
import TNAdminEditSubmissionCard from "../page/DynamicForms/TNAdminEditSubmissionCard/TNAdminEditSubmissionCard";
import TNFormEditSubmissionCard from "../page/DynamicForms/TNFormEditSubmissionCard/TNFormEditSubmissionCard";
import Settings from "../page/Settings/Settings";

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
    element: <DatapressNote />,
  },
  {
    id: "ROUTE-7",
    to: "/settings",
    element: (
      <Settings/>
    ),
  },
  {
    id: "ROUTE-8",
    to: "/admin-edit-submission-card",
    element: <TNAdminEditSubmissionCard />,
  },
  {
    id: "ROUTE-9",
    to: "/form-edit-submission-card",
    element: <TNFormEditSubmissionCard />,
  },
  {
    id: "ROUTE-9",
    to: "/form-edit-user-view",
    element: <TNFormEditUserView />,
  },
];
