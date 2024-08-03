import { useState } from "react";
import {
  TNButton,
  TNFolderFiles,
  TNHeader,
  TNInput,
  TNLDTab,
} from "../../components";
import TNCreateFolderModal from "../../components/TNFolderFiles/TNCreateFolderModal";
import TNUploadFileModal from "../../components/TNFolderFiles/TNUploadFileModal";
import { useLegacyDataDigitilization } from "../../hooks";
import "./LegacyDataDigitilization.css";

const LegacyDataDigitilization = () => {
  const {
    createFolder,
    uploadFile,
    allFoldersNFiles,
    navigateToFolder,
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
    handleChangeTags,
    fileList,
    handleUpload,
    handleFilelist,
    isFileUploding,
    isFetchFiles,
    handleDeleteFile,
  } = useLegacyDataDigitilization();

  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
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
          <div className="legency-data-top-space legency-data-select-box flex items-center gap-6"></div>
          <div className="legency-data-tab-wrap mt-0 bg-tnl-white">
            <TNFolderFiles
              currentFolders={currentFolders}
              currentFiles={currentFiles}
              breadcrumbs={breadcrumbs}
              navigateToFolder={navigateToFolder}
              isFetchFiles={isFetchFiles}
              handleDeleteFile={handleDeleteFile}
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
        handleChangeTags={handleChangeTags}
        fileList={fileList}
        handleUpload={handleUpload}
        handleFilelist={handleFilelist}
        isFileUploding={isFileUploding}
        currentFolderId={currentFolderId}
      />
    </>
  );
};

export default LegacyDataDigitilization;
