import {
  DeleteOutlined,
  EditOutlined,
  FolderOpenOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Image, MenuProps, Modal, Space } from "antd";
import { pdf } from "../../assets";
import TNFilePreview from "./TNFilePreview";
import { useState } from "react";

const TNFile = ({
  key,
  data,
  type,
  navigateToFolder,
  handlePreviewFile = () => {},
  handleDeleteFile,
}: any) => {
  const [isDeleteModal, setDeleteModal] = useState(false);

  const items: MenuProps["items"] = [
    {
      label: (
        <div
          className="flex gap-2"
          onClick={(e) => {
            e.stopPropagation();
            // handleDeleteFile(data?.id, type);
          }}
        >
          <EditOutlined />
          Rename
        </div>
      ),
      key: "0",
    },

    {
      label: (
        <div
          className="flex gap-2"
          onClick={(e) => {
            // e.stopPropagation();
            setDeleteModal(true);
          }}
        >
          <DeleteOutlined />
          Delete
        </div>
      ),
      key: "0",
    },
  ];

  const handleDynamicClick = () => {
    type == "folder"
      ? navigateToFolder(data?.id, data?.name)
      : handlePreviewFile(data?.preview, data?.name);
  };
  return (
    <>
      <div key={key} className="data-legency-files-view ">
        <div className="ldd-folder-n-file">
          {type == "file" && (
            <div
              className="ldd-folder-n-file-icon cursor-pointer"
              onClick={() => handleDynamicClick()}
            >
              <TNFilePreview fileUrl={data?.preview || ""} />
              {/* <Image src={pdf} width={130} height={130} /> */}
            </div>
          )}
          <div className="ldd-folder-n-file-name cursor-pointer">
            <div className="flex gap-4" onClick={() => handleDynamicClick()}>
              {type == "folder" && (
                <span>
                  {<FolderOpenOutlined style={{ fontSize: "16px" }} />}
                </span>
              )}
              <span className="tn-file-name">{data?.name || ""}</span>
            </div>
            <span>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <a
                  onClick={(e) => {
                    // e.stopPropagation();
                  }}
                >
                  <Space>
                    <MoreOutlined
                      className="cursor-pointer"
                      style={{ fontSize: "18px" }}
                    />
                  </Space>
                </a>
              </Dropdown>
            </span>
          </div>
        </div>
      </div>
      <Modal
        title=""
        centered
        open={isDeleteModal}
        onCancel={() => setDeleteModal(false)}
        width={500}
        footer={[
          <div className="flex items-center justify-center gap-5">
            <Button key="no" onClick={() => setDeleteModal(false)}>
              Cancel
            </Button>

            <Button
              key="yes"
              type="primary"
              onClick={() => {
                handleDeleteFile(data?.id, type);
                setDeleteModal(false);
              }}
            >
              Delete
            </Button>
          </div>,
        ]}
      >
        <div className="flex items-center justify-center gap-5 mt-5 w-100">
          <div
            style={{ fontSize: "20px", fontWeight: 700, textAlign: "center" }}
          >
            Are you sure you want to delete this folder/file? This action cannot
            be undone.
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TNFile;
