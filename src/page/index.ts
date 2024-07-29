import { lazy } from "react";

const LegacyDataDigitilization = lazy(() => import("./LegacyDataDigitilization/LegacyDataDigitilization"))
const TNAdminEditSubmissionCard = lazy(() => import("./DynamicForms/TNAdminEditSubmissionCard/TNAdminEditSubmissionCard"))
const TNFormEditSubmissionCard = lazy(() => import("./DynamicForms/TNFormEditSubmissionCard/TNFormEditSubmissionCard"))

export { LegacyDataDigitilization, TNAdminEditSubmissionCard, TNFormEditSubmissionCard }