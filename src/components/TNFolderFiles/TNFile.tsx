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
    // {
    //   label: (
    //     <div
    //       className="flex gap-2"
    //       onClick={(e) => {
    //         e.stopPropagation();
    //         // handleDeleteFile(data?.id, type);
    //       }}
    //     >
    //       <EditOutlined />
    //       Rename
    //     </div>
    //   ),
    //   key: "0",
    // },

    {
      label: (
        <div
          className="flex gap-2"
          onClick={(e) => {
            // e.stopPropagation();
            handleDeleteFile(data?.id, type);
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
              <span>{<FolderOpenOutlined style={{ fontSize: "16px" }} />}</span>
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
  );
};

export default TNFile;
