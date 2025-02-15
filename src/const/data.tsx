import { noticeFile } from "./imageData";

export const legencyTypeOptions = [
  { label: "Images", value: "png,jpg,jpeg" },
  { label: "PDFs", value: "pdf" },
  { label: "Documents", value: "doc" },
];

export const legencyModifiedOptions = [
  { label: "Today", value: "today" },
  { label: "Last 7 days", value: "7" },
  { label: "Last 30 days", value: "30" },
];
export const dataLegencyFolder = [
  {
    name: "Homicide",
    files: "25 files",
  },
  {
    name: "Assault",
    files: "16 files",
  },
  {
    name: "Theft and Robbery",
    files: "12 files",
  },
  {
    name: "Drug Offenses",
    files: "18 files",
  },
];
export const dataLegencyFile = [
  {
    name: "File 001",
    img: noticeFile,
  },
  {
    name: "File 002",
    img: noticeFile,
  },
];
export const drNoteOptions = [
  { label: "Status 1", value: "1" },
  { label: "Status 2", value: "2" },
  { label: "Status 3", value: "3" },
];
export const DRnotesData = [
  {
    title: "Death at T. Nagar",
    detail:
      "T nagar, July 15, 2024 - The bustling neighborhood of T nagar, known for its serene coastal charm and vibrant...",
    name: "by Natarajan",
    dateTime: "16 Mar 2023, 10:43 AM",
    label: "Death",
  },
  {
    title: "Death at T. Nagar",
    detail:
      "T nagar, July 15, 2024 - The bustling neighborhood of T nagar, known for its serene coastal charm and vibrant...",
    name: "by Natarajan",
    dateTime: "16 Mar 2023, 10:43 AM",
    label: "Homicide",
  },
  {
    title: "Death at T. Nagar",
    detail:
      "T nagar, July 15, 2024 - The bustling neighborhood of T nagar, known for its serene coastal charm and vibrant...",
    name: "by Natarajan",
    dateTime: "16 Mar 2023, 10:43 AM",
    label: "T. Nagar",
  },
];
export const DROngoingIssuesData = [
  {
    title: "Death at T. Nagar",
    detail:
      "T nagar, July 15, 2024 - The bustling neighborhood of T nagar, known for its serene coastal charm and vibrant...",
    name: "by Natarajan",
    dateTime: "16 Mar 2023, 10:43 AM",
    label: "Homicide",
  },
  {
    title: "Death at T. Nagar",
    detail:
      "T nagar, July 15, 2024 - The bustling neighborhood of T nagar, known for its serene coastal charm and vibrant...",
    name: "by Natarajan",
    dateTime: "16 Mar 2023, 10:43 AM",
    label: "Death",
  },
];
export const DfAdminData = [
  {
    title: "Political Rally",
    titleLabel: "Political rally in Thambaram ",
    dateTime: "Jul 20, 2024, 2:44:30 PM",
    show: "Published",
    number: "10",
    label: "Published",
  },
  {
    title: "Political Rally",
    titleLabel: "Political rally in Thambaram ",
    dateTime: "Jul 20, 2024, 2:44:30 PM",
    show: "Published",
    number: "10",
    label: "Published",
  },
];
export const submitDataSource = [
  {
    key: "1",
    name: "Natrajan R.",
    id: "1483256",
    sid: "SID45761",
    phoneNumber: "+91 25654 46216",
    email: "Natrajan@gmail.com",
    submittedOn: "19/07/2024",
  },
  {
    key: "2",
    name: "Natrajan R.",
    id: "1483256",
    sid: "SID45761",
    phoneNumber: "+91 25654 46216",
    email: "Natrajan@gmail.com",
    submittedOn: "19/07/2024",
  },
  {
    key: "3",
    name: "Natrajan R.",
    id: "1483256",
    sid: "SID45761",
    phoneNumber: "+91 25654 46216",
    email: "Natrajan@gmail.com",
    submittedOn: "19/07/2024",
  },
  {
    key: "4",
    name: "Natrajan R.",
    id: "1483256",
    sid: "SID45761",
    phoneNumber: "+91 25654 46216",
    email: "Natrajan@gmail.com",
    submittedOn: "19/07/2024",
  },
];
export const submitColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    // width: 100,
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    // width: 100,
  },
  {
    title: "SID",
    dataIndex: "sid",
    key: "sid",
    // width: 100,
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
    // width: 100,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    // width: 100,
  },
  {
    title: "Submitted On",
    dataIndex: "submittedOn",
    key: "submittedOn",
    // width: 100,
  },
];
export const dfAddSectionTypeOptions = [
  { label: "Text", value: "1" },
  { label: "Text area", value: "2" },
  { label: "Email", value: "3" },
  { label: "Phone", value: "4" },
];
export const DfFormEventData = [
  {
    name: "Natrajan R.",
    time: "Jul 20, 2024, 2:44:30 PM",
  },
  {
    name: "Natrajan R.",
    time: "Jul 20, 2024, 2:44:30 PM",
  },
  {
    name: "Natrajan R.",
    time: "Jul 20, 2024, 2:44:30 PM",
  },
  {
    name: "Natrajan R.",
    time: "Jul 20, 2024, 2:44:30 PM",
  },
];
export const calendarRepeatTypeOptions = [
  { label: "Do not repeat", value: "1" },
  { label: "Weekly", value: "2" },
  { label: "Monthly", value: "3" },
  { label: "Yearly", value: "4" },
];
export const calendarJurisdictionsTypeOptions = [
  { label: "Statewide", value: "1" },
  { label: "Districts", value: "2" },
  { label: "City", value: "3" },
  { label: "Multiple", value: "4" },
];
export const calendarProgramTypeOptions = [
  { label: "One", value: "1" },
  { label: "Two", value: "2" },
  { label: "Three", value: "3" },
  { label: "Four", value: "4" },
];

export const calendarZoneTypeOptions = [
  { label: "One", value: "1" },
  { label: "Two", value: "2" },
  { label: "Three", value: "3" },
  { label: "Four", value: "4" },
];
export const calendarDistrictTypeOptions = [
  { label: "One", value: "1" },
  { label: "Two", value: "2" },
  { label: "Three", value: "3" },
  { label: "Four", value: "4" },
];
export const calendarCityTypeOptions = [
  { label: "One", value: "1" },
  { label: "Two", value: "2" },
  { label: "Three", value: "3" },
  { label: "Four", value: "4" },
];
export const calendarStationTypeOptions = [
  { label: "One", value: "1" },
  { label: "Two", value: "2" },
  { label: "Three", value: "3" },
  { label: "Four", value: "4" },
];
export const calendarOrganizerTypeOptions = [
  { label: "One", value: "1" },
  { label: "Two", value: "2" },
  { label: "Three", value: "3" },
  { label: "Four", value: "4" },
];
export const calendarLearderTypeOptions = [
  { label: "One", value: "1" },
  { label: "Two", value: "2" },
  { label: "Three", value: "3" },
  { label: "Four", value: "4" },
];