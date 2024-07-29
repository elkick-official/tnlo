import { Tabs, TabsProps } from "antd";
import { TNFolderFiles } from "../TNFolderFiles/TNFolderFiles";
import { TNDFForm } from "./TNDFForm/TNDFForm";
import { TNDFAdmin } from "./TNDFAdmin/TNDFAdmin";
import "./TNDynamicFormsTab.css";
const onChange = (key: string) => {
    console.log(key);
  };
  
const items: TabsProps['items'] = [
{
    key: '1',
    label: 'Admin',
    children: <TNDFAdmin/>,
},
{
    key: '2',
    label: 'Forms',
    children: <TNDFForm/>,
},
];
export const TNDynamicFormsTab = () => {
    return(
        <>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </>
    )
}