import { Tabs, TabsProps } from "antd";
import { TNFolderFiles } from "../TNFolderFiles/TNFolderFiles";
import { TNDRNotes } from "./TNDRNotes/TNDRNotes";
import "./TNDRNoteTab.css";
const onChange = (key: string) => {
    console.log(key);
  };
  
const items: TabsProps['items'] = [
{
    key: '1',
    label: 'Notes',
    children: <TNDRNotes/>,
},
{
    key: '2',
    label: 'Ongoing Issues',
    children: 'Coming soon',
},
{
    key: '3',
    label: 'Court Dairy',
    children: 'Coming soon',
},
];
export const TNDRNoteTab = () => {
    return(
        <>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </>
    )
}