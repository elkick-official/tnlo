import { FolderOpenOutlined, MoreOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { pdf } from "../../assets";
import TNFilePreview from "./TNFilePreview";

const TNFile = ({
  key,
  data,
  type,
  navigateToFolder,
  handlePreviewFile = () => {},
}: any) => {
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
            <MoreOutlined style={{ fontSize: "18px" }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TNFile;
