import { CloseOutlined } from "@ant-design/icons";
import { Button, Modal, Tabs } from "antd";
import { useState } from "react";
import { legencyModifiedOptions, legencyTypeOptions } from "../../const/data";
import { lddItems } from "../../constOptions/Ldd.options";
import { IBreadCrumbs, IFolder } from "../../types/legacyData.types";
import { TNSelect } from "../common/TNSelect/TNSelect";
import FoldersBreadcrumbs from "./FoldersBreadcrumbs";
import TNFilePreview from "./TNFilePreview";
import TNFiles from "./TNFiles";
import "./TNFolderFiles.css";
import TNFolders from "./TNFolders";

interface Props {
  currentFolders: IFolder[];
  currentFiles: IFolder[];
  breadcrumbs: IBreadCrumbs[];
  navigateToFolder: (params: string, param2: string) => void;
  isFetchFiles: boolean;
  handleDeleteFile: (params: number, param2: string) => void;
}

export const TNFolderFiles = ({
  currentFolders,
  currentFiles,
  navigateToFolder,
  breadcrumbs,
  isFetchFiles,
  handleDeleteFile,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState<
    string | number | undefined
  >(undefined);
  const [previewFileRequested, setPreviewFileRequested] = useState("");
  const [isPreviewFileRequested, setIsPreviewFileRequested] = useState(false);

  const handlePreviewFile = (fileUrl: string) => {
    setIsPreviewFileRequested(true);
    setPreviewFileRequested(fileUrl);
  };

  const handleClosePreviewModal = () => {
    setIsPreviewFileRequested(false);
  };

  const handleSelectChange = (value: string | number) => {
    setSelectedValue(value);
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <>
      <div className="ldd-top-filters">
        <FoldersBreadcrumbs
          breadcrumbs={breadcrumbs}
          navigateToFolder={navigateToFolder}
        />
        <div>
          <Tabs defaultActiveKey="1" items={lddItems} onChange={onChange} />
        </div>
      </div>

      <div className="legency-data-top-space legency-data-select-box flex items-center gap-6 pt-0 pb-6">
        <TNSelect
          label="Type"
          options={legencyTypeOptions}
          value={selectedValue}
          onChange={handleSelectChange}
          placeholder="Please select"
        />
        <TNSelect
          label="Modified"
          options={legencyModifiedOptions}
          value={selectedValue}
          onChange={handleSelectChange}
          placeholder="Please select"
        />
      </div>
      <TNFolders
        currentFolders={currentFolders}
        navigateToFolder={navigateToFolder}
        isFetchFiles={isFetchFiles}
        handleDeleteFile={handleDeleteFile}
      />
      <TNFiles
        currentFiles={currentFiles}
        handlePreviewFile={handlePreviewFile}
        isFetchFiles={isFetchFiles}
        handleDeleteFile={handleDeleteFile}
      />

      <Modal
        title={<div>Upload a Document</div>}
        open={isPreviewFileRequested}
        onCancel={handleClosePreviewModal}
        footer={() => (
          <div className="flex justify-center w-full items-center">
            <Button type="primary">Download</Button>
          </div>
        )}
        closeIcon={<CloseOutlined />}
        width={800}
        centered
      >
        <div style={{ width: "100%", height: "70vh" }}>
          <TNFilePreview fileUrl={previewFileRequested} fullView={true} />
        </div>
      </Modal>
    </>
  );
};
