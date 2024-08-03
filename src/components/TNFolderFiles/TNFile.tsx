import {
  DeleteOutlined,
  EditOutlined,
  FolderOpenOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Dropdown, Image, MenuProps, Space } from "antd";
import { pdf } from "../../assets";
import TNFilePreview from "./TNFilePreview";

const TNFile = ({
  key,
  data,
  type,
  navigateToFolder,
  handlePreviewFile = () => {},
  handleDeleteFile,
}: any) => {
  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex gap-2">
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
          onClick={() => handleDeleteFile(data?.id, type)}
        >
          <DeleteOutlined />
          Delete
        </div>
      ),
      key: "0",
    },
  ];

  return (
    <div
      key={key}
      className="data-legency-files-view cursor-pointer"
      onClick={() => {
        type == "folder"
          ? navigateToFolder(data?.id, data?.name)
          : handlePreviewFile(data?.preview);
      }}
    >
      <div className="ldd-folder-n-file">
        {type == "file" && (
          <div className="ldd-folder-n-file-icon">
            <TNFilePreview fileUrl={data?.preview || ""} />
            {/* <Image src={pdf} width={130} height={130} /> */}
          </div>
        )}
        <div className="ldd-folder-n-file-name">
          <div className="flex gap-4">
            {type == "folder" && (
              <span>{<FolderOpenOutlined style={{ fontSize: "16px" }} />}</span>
            )}
            <span className="tn-file-name">{data?.name || ""}</span>
          </div>
          <span>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
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
  );
};

export default TNFile;
