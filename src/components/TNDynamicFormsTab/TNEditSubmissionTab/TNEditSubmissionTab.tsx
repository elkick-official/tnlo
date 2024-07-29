import { Tabs, TabsProps } from "antd";

import "./TNEditSubmissionTab.css";
import { TNEditForm } from "./TNEditForm";
import { TNSubmissionForm } from "./TNSubmissionForm";
const onChange = (key: string) => {
    console.log(key);
  };
  
const items: TabsProps['items'] = [
{
    key: '1',
    label: 'Edit From',
    children: <TNEditForm/>,
},
{
    key: '2',
    label: 'Form Submissions',
    children: <TNSubmissionForm/>,
},
];
export const TNEditSubmissionTab = () => {
    return(
        <>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </>
    )
}