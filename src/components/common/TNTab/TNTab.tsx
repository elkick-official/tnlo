import { Tabs, TabsProps } from "antd";
import styles from "./TNTab.css";
const onChange = (key: string) => {
    console.log(key);
  };
  
const items: TabsProps['items'] = [
{
    key: '1',
    label: 'List',
    children: 'Content of Tab Pane 1',
},
{
    key: '2',
    label: 'Grid',
    children: 'Content of Tab Pane 2',
},
];
export const TNTab = () => {
    return(
        <>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </>
    )
}