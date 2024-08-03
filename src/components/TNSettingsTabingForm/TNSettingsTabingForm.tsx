import React from 'react';
import { Tabs } from 'antd';
import { TabsProps } from "antd";
import { EditOutlined, HomeOutlined, ProfileOutlined } from '@ant-design/icons';
import "./TNSettingsTabingForm.css";
import { TNEditProfileTabData } from './TNEditProfileTabData';
export const TNSettingsTabingForm = () => {
    const onChange = (key: string) => {
        console.log(key);
      };
      
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: <div className='flex items-center gap-4'>
                <span className='lh-0 svg-icon-edit-profile'>
                    <ProfileOutlined className='svg-icon-big-size'/>
                </span>
                Edit Profile
            </div>,
            children: <TNEditProfileTabData/>,
        },
        {
            key: '2',
            label: <div className='flex items-center gap-4'>
                <span className='lh-0 svg-icon-home'>
                    <HomeOutlined className='svg-icon-big-size'/>
                </span>
                Default Landing Page
            </div>,
            children: 'Content of Tab Pane 2',
        },
    ];
    return(
        <>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} tabPosition="left" className="setting-table-wrap"/>
        </>
    )
}