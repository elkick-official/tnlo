import React, { useState } from 'react';
import {
    AppstoreOutlined,
    BookOutlined,
    CalendarOutlined,
    CodeSandboxOutlined,
    DashboardOutlined,
    DatabaseOutlined,
    DesktopOutlined,
    FileOutlined,
    FormOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { logo } from "../../../const/imageData";
import "./TNSidebar.css";
import { Icons } from '../../../const/icons';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
  }
  const items: MenuItem[] = [
    getItem(<Link to="/">Dashboard</Link>, '1', <AppstoreOutlined style={{ fontSize: '24px', color: '#4863E1' }}/>),
    getItem(<Link to="/legacy-data-digitilization">Legacy Data Digitization</Link>, '2', <DatabaseOutlined style={{ fontSize: '24px', color: '#4863E1' }}/>),
    getItem(<Link to="/data-repository">Data Repository</Link>, '3', <CodeSandboxOutlined style={{ fontSize: '24px', color: '#4863E1' }}/>),
    getItem(<Link to="/dynamic-forms">Dynamic Forms</Link>, '4', <FormOutlined style={{ fontSize: '24px', color: '#4863E1' }}/>),
    getItem(<Link to="/calendar-forecast">Calendar Forecast</Link>, '5', <CalendarOutlined style={{ fontSize: '24px', color: '#4863E1' }}/>),
    getItem(<Link to="/press-note">Press Note</Link>, '6', <BookOutlined style={{ fontSize: '24px', color: '#4863E1' }}/>),
  ];
export const TNSidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    return(
        <>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className="custom-sidebar" width="265">
            <div className="demo-logo-vertical">
                <img src={logo} alt="" className='logo'/>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        </>
    )
}