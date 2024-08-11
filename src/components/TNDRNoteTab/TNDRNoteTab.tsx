import { Tabs, TabsProps } from "antd";
import { TNDRNotes } from "./TNDRNotes/TNDRNotes";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./TNDRNoteTab.css";

export const TNDRNoteTab = () => {
  const [serachParams, setSearhParams] = useSearchParams();

  const [activeTab, setActiveTab] = useState("notes");

  const onChange = (key: string) => {
    setActiveTab(key);
    serachParams.set("selected-tab", key);
    setSearhParams(serachParams);
  };

  const items: TabsProps["items"] = [
    {
      key: "notes",
      label: "Notes",
      children: <TNDRNotes noteType="Notes" />,
    },
    {
      key: "on-going-issue",
      label: "Ongoing Issues",
      children: <TNDRNotes noteType="Ongoing Issue" />,
    },
    {
      key: "3",
      label: "court-dairy",
      children: <TNDRNotes noteType="Court Dairy" />,
    },
    {
      key: "press-notes",
      label: "Press Notes / Articles / Others",
      children: <TNDRNotes noteType="Press Notes / Articles / Others" />,
    },
  ];

  useEffect(() => {
    const myTabs = ["notes", "on-going-issue", "court-dairy", "press-notes"];
    const tab = serachParams.get("selected-tab");

    if (myTabs?.includes(tab)) {
      setActiveTab(tab);
    } else {
      serachParams.set("selected-tab", "notes");
      setSearhParams(serachParams);
      setActiveTab("notes");
    }
  }, []);

  return (
    <>
      <Tabs
        defaultActiveKey="notes"
        items={items}
        onChange={onChange}
        activeKey={activeTab}
      />
    </>
  );
};
