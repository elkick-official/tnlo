import React, { FC, useState } from 'react';
import { Upload, Image } from 'antd';
import type { UploadFile, UploadProps } from 'antd';
import "./TNUpload.css";

interface UploadDocProps {
  fileList: UploadFile[];
  handlePreview: (file: UploadFile) => void;
  handleChange: UploadProps['onChange'];
  uploadButton: React.ReactNode;
}

export const TNUpload: FC<UploadDocProps> = ({
  fileList,
  handlePreview,
  handleChange,
  uploadButton,
}) => {
  return (
    <>
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
    </>
  );
};
