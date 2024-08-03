import React from "react";
import { Tabs } from "antd";
import { TabsProps } from "antd";
import {
  EditOutlined,
  HomeOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { TNEditProfileTabData } from "./TNEditProfileTabData";
import "./TNSettingsTabingForm.css";
import { Link, useNavigate } from "react-router-dom";
export const TNSettingsTabingForm = () => {
  const navigate = useNavigate();
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex items-center gap-4">
          <span className="lh-0 svg-icon-edit-profile">
            <ProfileOutlined className="svg-icon-big-size" />
          </span>
          Edit Profile
        </div>
      ),
      children: <TNEditProfileTabData />,
    },
    {
      key: "2",
      label: (
        <div className="flex items-center gap-4">
          <span className="lh-0 svg-icon-home">
            <HomeOutlined className="svg-icon-big-size" />
          </span>
          Notification
        </div>
      ),
      children: "Coming Soon",
    },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        tabPosition="left"
        className="setting-table-wrap"
      />
      <div
        onClick={handleLogout}
        className="flex items-center gap-4 setting-tab-logout-btn-wrap absolute cursor-pointer"
      >
        <span className="lh-0">
          <LogoutOutlined className="svg-icon-big-size" />
        </span>
        <h4>Logout</h4>
      </div>
    </>
  );
};
