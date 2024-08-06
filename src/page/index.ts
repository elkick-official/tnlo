import { lazy } from "react";

const LegacyDataDigitilization = lazy(() => import("./LegacyDataDigitilization/LegacyDataDigitilization"))
const TNAdminEditSubmissionCard = lazy(() => import("./DynamicForms/TNAdminEditSubmissionCard/TNAdminEditSubmissionCard"))
const TNFormEditSubmissionCard = lazy(() => import("./DynamicForms/TNFormEditSubmissionCard/TNFormEditSubmissionCard"))
const TNFormEditUserView = lazy(() => import("./DynamicForms/TNFormEditSubmissionCard/TNFormEditUserView/TNFormEditUserView"))
const Login = lazy(() => import("./Authentication/Login/Login"))
const ForgotPassword = lazy(() => import("./Authentication/ForgotPassword/ForgotPassword"))
const Settings = lazy(() => import("./Settings/Settings"))
const DatapressNote = lazy(() => import("./DatapressNote/DatapressNote"))
const Register = lazy(() => import("./Authentication/Register/Register"))

export { LegacyDataDigitilization, TNAdminEditSubmissionCard, TNFormEditSubmissionCard, TNFormEditUserView, Login,ForgotPassword, Settings, DatapressNote, Register }