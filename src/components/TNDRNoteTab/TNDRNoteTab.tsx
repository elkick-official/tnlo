import { Tabs, TabsProps } from "antd";
import { TNPressNoteData } from "../TNPressNoteData/TNPressNoteData";
import { TNDRCourtDairy } from "./TNDRCourtDairy/TNDRCourtDairy";
import { TNDRNotes } from "./TNDRNotes/TNDRNotes";
import "./TNDRNoteTab.css";
import { TNDROngoingIssues } from "./TNDROngoingIssues/TNDROngoingIssues";
const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Notes",
    children: <TNDRNotes />,
  },
  {
    key: "2",
    label: "Ongoing Issues",
    children: <TNDROngoingIssues />,
  },
  {
    key: "3",
    label: "Court Dairy",
    children: <TNDRCourtDairy />,
  },
  {
    key: "4",
    label: "Press Notes / Articles / Others",
    children: <TNPressNoteData />,
  },
];

export const TNDRNoteTab = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};
