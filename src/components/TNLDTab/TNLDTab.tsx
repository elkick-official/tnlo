import { Tabs, TabsProps } from "antd";
import { TNFolderFiles } from "../TNFolderFiles/TNFolderFiles";
import "./TNLDTab.css";
const onChange = (key: string) => {
    console.log(key);
  };
  
const items: TabsProps['items'] = [
{
    key: '1',
    label: 'List',
    children: <TNFolderFiles/>,
},
{
    key: '2',
    label: 'Grid',
    children: 'Coming soon',
},
];
export const TNLDTab = () => {
    return(
        <>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </>
    )
}