import React, { useState } from "react";
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
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
  // SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { logo } from "../../../const/imageData";
import { Icons } from "../../../const/icons";
import { Link } from "react-router-dom";
import "./TNSidebar.css";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem(
    <Link to="/">Dashboard</Link>,
    "1",
    // <AppstoreOutlined style={{ fontSize: "20px", color: "black" }} />
   <b className="text-tnl-rapunzel-silver">{Icons.dashboardIcon}</b>
  ),
  getItem(
    <Link to="/legacy-data-digitilization">Legacy Data Digitization</Link>,
    "2",
    // <DatabaseOutlined style={{ fontSize: "20px", color: "black" }} />
    <b className="text-tnl-rapunzel-silver">{Icons.dataIcon}</b>
  ),
  getItem(
    <Link to="/data-repository">Data Repository</Link>,
    "3",
    // <CodeSandboxOutlined style={{ fontSize: "20px", color: "black" }} />
    <b className="text-tnl-rapunzel-silver">{Icons.dataRepositoryIcon}</b>
  ),
  getItem(
    <Link to="/dynamic-forms">Dynamic Forms</Link>,
    "4",
    // <FormOutlined style={{ fontSize: "20px", color: "black" }} />
    <b className="text-tnl-rapunzel-silver">{Icons.dynamicFormsIcon}</b>
  ),
  getItem(
    <Link to="/calendar-forecast">Calendar Forecast</Link>,
    "5",
    // <CalendarOutlined style={{ fontSize: "20px", color: "black" }} />
    <b className="text-tnl-rapunzel-silver">{Icons.calendarIcon}</b>
  ),
  getItem(
    <Link to="/press-note">Press Note</Link>,
    "6",
    // <BookOutlined style={{ fontSize: "20px", color: "black" }} />
    <b className="text-tnl-rapunzel-silver">{Icons.pressNoteIcon}</b>
  ),
  getItem(
    <Link to="/settings">Settings</Link>,
    "7",
    // <SettingOutlined style={{ fontSize: "20px", color: "black" }} />
    <b className="text-tnl-rapunzel-silver">{Icons.settingIcon}</b>
  ),
];
export const TNSidebar = () => {
  const [collapsed, setCollapsed] = useState(true); // Collapsed by default

  return (
    <>
      <Sider
        //  breakpoint="xxl"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="custom-sidebar"
        width="265"
        collapsedWidth="0" // Optional: Fully hide sidebar on smaller screens
      >
        <div className="demo-logo-vertical">
          <img src={logo} alt="" className="logo" />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
    </>
  );
};
