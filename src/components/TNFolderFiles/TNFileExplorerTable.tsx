import { FolderOpenOutlined } from "@ant-design/icons";
import { Spin, Table, TableColumnsType } from "antd";
import React, { useEffect, useState } from "react";
import TNFilePreview from "./TNFilePreview";
import moment from "moment";

const TNFileExplorerTable = ({
  currentFiles,
  currentFolders,
  handlePreviewFile,
  navigateToFolder,
  isFetchFiles,
  currentFolderId,
}: any) => {
  const mergedFiles = [];

  const [allFilesNFolders, setAllFilesNFolders] = useState([]);

  const columns: TableColumnsType = [
    {
      title: "File Name",
      dataIndex: "fileName",
    },
    {
      title: "File Type",
      dataIndex: "fileType",
    },
    {
      title: "Created On",
      dataIndex: "createdOn",
    },
    // {
    //   title: "Last Opened",
    //   dataIndex: "lastOpened",
    // },
    // {
    //   title: "File Size",
    //   dataIndex: "fileSize",
    // },
  ];

  useEffect(() => {
    if (mergedFiles?.length) {
      const updatedList = mergedFiles?.map((data: any) => {
        const ext = data?.sysFileName
          ? data?.sysFileName?.split(".")?.pop()
          : "Folder";

        return {
          fileName: (
            <div className="flex gap-2 items-center">
              <span>
                {data?.folderId ? (
                  <div className="ml-2">
                    <FolderOpenOutlined />
                  </div>
                ) : (
                  <TNFilePreview
                    fileUrl={data?.sysFileName}
                    isListView={true}
                  />
                )}
              </span>
              <span>{data?.folderName || data?.fileName || ""}</span>
            </div>
          ),
          fileType: ext,
          createdOn: moment(data?.createdAt).format("DD MMM YYYY"),
          lastOpened: "",
          fileSize: ``,
          ...data,
        };
      });
      setAllFilesNFolders(updatedList);
    }
  }, [mergedFiles]);

  return (
    <div className="mt-8">
      <Spin spinning={isFetchFiles} tip="Loading...">
        <Table
          columns={columns}
          dataSource={allFilesNFolders || []}
          className="ant-table-custom cursor-pointer-table"
          onRow={(record) => ({
            onClick: () => {
              console.log({ record });
              if (record?.folderId) {
                navigateToFolder(record?.folderId, record?.folderName);
              } else {
                handlePreviewFile(record?.fileId, record?.fileName);
              }
            },
          })}
        />
      </Spin>
    </div>
  );
};

export default TNFileExplorerTable;
