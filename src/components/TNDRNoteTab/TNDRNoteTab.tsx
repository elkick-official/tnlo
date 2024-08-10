import { Tabs, TabsProps } from "antd";
import { TNDRNotes } from "./TNDRNotes/TNDRNotes";
import "./TNDRNoteTab.css";
const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Notes",
    children: <TNDRNotes noteType="Notes" />,
  },
  {
    key: "2",
    label: "Ongoing Issues",
    children: <TNDRNotes noteType="Ongoing Issue" />,
  },
  {
    key: "3",
    label: "Court Dairy",
    children: <TNDRNotes noteType="Court Dairy" />,
  },
  {
    key: "4",
    label: "Press Notes / Articles / Others",
    children: <TNDRNotes noteType="Press Notes / Articles / Others" />,
  },
];

export const TNDRNoteTab = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};
