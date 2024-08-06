import React, { useState } from "react";
import { Button, Modal, Tabs } from "antd";
import { TabsProps } from "antd";
import {
  EditOutlined,
  HomeOutlined,
  LogoutOutlined,
  ProfileOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { TNEditProfileTabData } from "./TNEditProfileTabData";
import "./TNSettingsTabingForm.css";
import { Link, useNavigate } from "react-router-dom";
import useDetailStore from "../../store/useStore";
export const TNSettingsTabingForm = () => {
  const { clearUserDetails } = useDetailStore();

  const navigate = useNavigate();
  const onChange = (key: string) => {
    console.log(key);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
            <UserAddOutlined className="svg-icon-big-size" />
          </span>
          Create User
        </div>
      ),
      children: "Coming Soon",
    },
  ];

  const handleLogout = () => {
    localStorage.clear();
    clearUserDetails();
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
        onClick={showModal}
        className="flex items-center gap-4 setting-tab-logout-btn-wrap absolute cursor-pointer"
      >
        <span className="lh-0">
          <LogoutOutlined className="svg-icon-big-size" />
        </span>
        <span>Logout</span>
      </div>

      <Modal
        title=""
        centered
        open={isModalVisible}
        onOk={handleLogout}
        onCancel={handleCancel}
        footer={[
          <div className="flex items-center justify-center gap-5">
            <Button key="no" onClick={handleCancel}>
              No
            </Button>

            <Button key="yes" type="primary" onClick={handleLogout}>
              Yes
            </Button>
          </div>,
        ]}
      >
        <div className="flex items-center justify-center gap-5 mt-5">
          <h3>Are you sure you want to logout?</h3>
        </div>
      </Modal>
    </>
  );
};
