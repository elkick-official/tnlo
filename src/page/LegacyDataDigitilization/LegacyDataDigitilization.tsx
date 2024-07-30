import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import {
  TNButton,
  TNHeader,
  TNInput,
  TNLDTab,
  TNSelect,
} from "../../components";
import { legencyModifiedOptions, legencyTypeOptions } from "../../const/data";
import { useLegacyDataDigitilization } from "../../hooks";
import "./LegacyDataDigitilization.css";
import { INewFolderFieldType } from "../../types/legacyData.types";
import TNCreateFolderModal from "../../components/TNFolderFiles/TNCreateFolderModal";
import TNUploadFileModal from "../../components/TNFolderFiles/TNUploadFileModal";

const LegacyDataDigitilization = () => {
  const {
    createFolder,
    uploadFile,
    navigateToFolder,
    allFoldersNFiles,
    currentFolderId,
    breadcrumbs,
    currentFolders,
    currentFiles,

    handleCreateFolderCancel,
    isNewFolder,
    newFolderForm,
    inputRef,
    handleFinish,
    handleOpenNewFolder,
    isOpenUploadModal,
    handleUploadCOpen,
    handleUploadCancel,
    uploadForm,
  } = useLegacyDataDigitilization();

  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const [selectedValue, setSelectedValue] = useState<
    string | number | undefined
  >(undefined);

  const handleSelectChange = (value: string | number) => {
    setSelectedValue(value);
  };

  return (
    <>
      <div>
        <TNHeader children="Legacy Data Digitization" />
        <section className="xx-space yy-space">
          <div className="legency-data-digitization-head-wrap flex items-center">
            <div>
              <TNInput
                id="legency-search"
                datatestid="legency-search-testid"
                type="text"
                name="legencySearch"
                value={inputValue}
                label="Seacrh something"
                placeholder="Type something"
                ILInputLabelClass="mb-0 legency-data-seacrhbar-input"
                handleChange={handleInputChange}
                textAreaShow={false}
                readOnly={false}
                searchBarControl
                errorMsg="This is an error message"
              />
            </div>
            <div className="ml-auto flex items-center gap-6">
              <TNButton
                id="new-folder"
                datatestid="new-folder-testid"
                type="button"
                ILBtnClass="additional-class"
                handleChange={handleOpenNewFolder}
                disabled={false}
              >
                Create Folder
              </TNButton>
              <TNButton
                id="upload-folder"
                datatestid="upload-folder-testid"
                type="button"
                ILBtnClass="additional-class"
                handleChange={handleUploadCOpen}
                disabled={false}
              >
                Upload File
              </TNButton>
            </div>
          </div>
          <div className="legency-data-top-space legency-data-select-box flex items-center gap-6">
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
          <div className="legency-data-tab-wrap bg-tnl-white">
            <TNLDTab
              currentFolders={currentFolders}
              currentFiles={currentFiles}
              breadcrumbs={breadcrumbs}
              navigateToFolder={navigateToFolder}
            />
          </div>
        </section>
      </div>

      <TNCreateFolderModal
        isNewFolder={isNewFolder}
        handleCreateFolderCancel={handleCreateFolderCancel}
        newFolderForm={newFolderForm}
        handleFinish={handleFinish}
        inputRef={inputRef}
      />

      <TNUploadFileModal
        isOpenUploadModal={isOpenUploadModal}
        handleUploadCancel={handleUploadCancel}
        uploadForm={uploadForm}
      />
    </>
  );
};

export default LegacyDataDigitilization;
