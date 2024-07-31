import { lazy } from "react";

const LegacyDataDigitilization = lazy(() => import("./LegacyDataDigitilization/LegacyDataDigitilization"))
const TNAdminEditSubmissionCard = lazy(() => import("./DynamicForms/TNAdminEditSubmissionCard/TNAdminEditSubmissionCard"))
const TNFormEditSubmissionCard = lazy(() => import("./DynamicForms/TNFormEditSubmissionCard/TNFormEditSubmissionCard"))
const TNFormEditUserView = lazy(() => import("./DynamicForms/TNFormEditSubmissionCard/TNFormEditUserView/TNFormEditUserView"))

export { LegacyDataDigitilization, TNAdminEditSubmissionCard, TNFormEditSubmissionCard, TNFormEditUserView }