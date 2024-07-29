import { lazy } from "react";

const LegacyDataDigitilization = lazy(() => import("./LegacyDataDigitilization/LegacyDataDigitilization"))
const TNEditSubmissionCard = lazy(() => import("./DynamicForms/TNEditSubmissionCard/TNEditSubmissionCard"))

export { LegacyDataDigitilization, TNEditSubmissionCard }