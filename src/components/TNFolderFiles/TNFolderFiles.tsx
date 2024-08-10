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
import TNFileExplorerTable from "./TNFileExplorerTable";

interface Props {
  currentFolders: IFolder[];
  currentFiles: IFolder[];
  breadcrumbs: IBreadCrumbs[];
  navigateToFolder: (params: string, param2: string) => void;
  isFetchFiles: boolean;
  handleDeleteFile: (params: number, param2: string) => void;
  selectedType: string;
  handleTypeChange: (params: string) => void;
}

export const TNFolderFiles = ({
  currentFolders,
  currentFiles,
  navigateToFolder,
  breadcrumbs,
  isFetchFiles,
  handleDeleteFile,
  selectedType,
  handleTypeChange,
  currentFolderId,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState<
    string | number | undefined
  >(undefined);

  const files: any = [...currentFiles];
  const folders: any = [...currentFolders];
  const sortedFiles = files.sort(
    (a: any, b: any) => new Date(b.createdOn) - new Date(a.createdOn)
  );
  const sortedFolders = folders.sort(
    (a: any, b: any) => new Date(b.createdOn) - new Date(a.createdOn)
  );

  const [previewFileRequested, setPreviewFileRequested] = useState("");
  const [previewNameRequested, setPreviewFileNameRequested] = useState("");
  const [isViewGrid, setisViewGrid] = useState(true);
  const [isPreviewFileRequested, setIsPreviewFileRequested] = useState(false);

  const handlePreviewFile = (fileUrl: string, name: string) => {
    setIsPreviewFileRequested(true);
    setPreviewFileRequested(fileUrl);
    setPreviewFileNameRequested(name);
  };

  const handleClosePreviewModal = () => {
    setIsPreviewFileRequested(false);
    setPreviewFileRequested("");
    setPreviewFileNameRequested("");
  };

  const handleSelectChange = (value: string | number) => {
    setSelectedValue(value);
  };

  const handleGirdChange = (key: string) => {
    setisViewGrid(key == "1");
  };

  const handleDownloadFile = (fileUrl: string, filename: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="ldd-top-filters">
        <FoldersBreadcrumbs
          breadcrumbs={breadcrumbs}
          navigateToFolder={navigateToFolder}
        />
        <div>
          <Tabs
            defaultActiveKey="1"
            items={lddItems}
            onChange={handleGirdChange}
          />
        </div>
      </div>

      <div className="legency-data-top-space legency-data-select-box flex items-center gap-6 pt-0 pb-6">
        <TNSelect
          label=""
          options={legencyTypeOptions}
          value={selectedType}
          onChange={handleTypeChange}
          placeholder="Type"
          allowClear
        />
        {/* <TNSelect
          label=""
          options={legencyModifiedOptions}
          value={selectedValue}
          // onChange={handleModifiedChange}
          placeholder="Modified"
          allowClear
        /> */}
      </div>

      {isViewGrid ? (
        <>
          {!selectedType?.length && (
            <TNFolders
              currentFolders={sortedFolders}
              navigateToFolder={navigateToFolder}
              isFetchFiles={isFetchFiles}
              handleDeleteFile={handleDeleteFile}
            />
          )}
          {currentFolderId && (
            <TNFiles
              currentFiles={sortedFiles}
              handlePreviewFile={handlePreviewFile}
              isFetchFiles={isFetchFiles}
              handleDeleteFile={handleDeleteFile}
            />
          )}
        </>
      ) : (
        <TNFileExplorerTable
          currentFiles={sortedFiles}
          currentFolders={sortedFolders}
          handlePreviewFile={handlePreviewFile}
          isFetchFiles={isFetchFiles}
          navigateToFolder={navigateToFolder}
          currentFolderId={currentFolderId}
        />
      )}

      <Modal
        title={<div>{previewNameRequested}</div>}
        open={isPreviewFileRequested}
        onCancel={handleClosePreviewModal}
        footer={() => (
          <div
            className="flex justify-center w-full items-center"
            onClick={() =>
              handleDownloadFile(previewFileRequested, previewNameRequested)
            }
          >
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
