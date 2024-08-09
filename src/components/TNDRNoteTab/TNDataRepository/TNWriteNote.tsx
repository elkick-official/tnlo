import {
  DeleteOutlined,
  MoreOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space, Spin, UploadProps } from "antd";
import parse from "html-react-parser";
import moment from "moment";
import { useState } from "react";
import { drNoteOptions } from "../../../const/data";
import Loader from "../../common/Loader/Loader";
import { TNButton } from "../../common/TNButton/TNButton";
import { TNDatePicker } from "../../common/TNDatePicker/TNDatePicker";
import { TNInput } from "../../common/TNInput/TNInput";
import { TNSelect } from "../../common/TNSelect/TNSelect";
import TNTags from "../../common/TNTags/TNTags";
import RichTextEditorTwo from "../../RichText/RichTextEditorTwo";
import FolderSelectTree from "../../Tree/FolderSelectTree";
import PreviewNote from "./PreviewNote";
import "./TNWriteNote.css";
import {
  getBtnNameByType,
  getTitleNameByType,
} from "../../../utils/service.util";

const TNWriteNote = ({
  handleAddNoteButton,
  isAddButton,
  handleRichTextHtml,
  handleSubmit,
  handleBack,
  allNotes,
  handleChangeTitle,
  title,
  htmlContent,
  handleChangeTags,
  tags,
  value,
  onChange,
  treeData,
  onLoadData,
  isPreview,
  goBackPreview,
  handleSelectedPreview,
  selectedPreview,
  handleDeleteFile,
  isNoteSubmitting,
  isNotesLoading,
  handleChangeSearch,
  searchVal,
  noteType,
}: any) => {
  const [currentId, setCurrentId] = useState();

  const items: MenuProps["items"] = [
    {
      label: (
        <div
          className="flex gap-2"
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteFile(currentId);
          }}
        >
          <DeleteOutlined />
          Delete
        </div>
      ),
      key: "0",
    },
  ];

  const [selectedValue, setSelectedValue] = useState<
    string | number | undefined
  >(undefined);

  const handleSelectChange = (value: string | number) => {
    setSelectedValue(value);
  };

  const props: UploadProps = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        // message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        // message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const notes = [...allNotes];
  const sortedNotes = notes.sort(
    (a: any, b: any) => new Date(b.createdOn) - new Date(a.createdOn)
  );

  return (
    <>
      {isPreview && (
        <PreviewNote
          selectedPreview={selectedPreview}
          goBackPreview={goBackPreview}
        />
      )}
      {!isAddButton && !isPreview && (
        <div>
          <div className="flex w-100 gap-10">
            <div>
              <TNInput
                id="dr-note-search"
                datatestid="dr-note-search-testid"
                type="text"
                name="drNoteSearch"
                value={searchVal}
                label="what are you looking for?"
                placeholder="Search"
                ILInputLabelClass="mb-0 data-repository-seacrhbar-input"
                handleChange={handleChangeSearch}
                textAreaShow={false}
                readOnly={false}
                searchBarControl
                errorMsg="This is an error message"
              />
            </div>

            <TNButton
              id="add-new-note"
              datatestid="add-new-note-testid"
              type="button"
              ILBtnClass="additional-class ml-auto"
              handleChange={handleAddNoteButton}
              disabled={false}
            >
              <PlusCircleOutlined className="w-auto width min-w-auto pa-0 me-2 height min-h-auto" />
              {getBtnNameByType(noteType)}
            </TNButton>
          </div>

          <div className="legency-data-digitization-head-wrap legency-data-digitization-head-tab-wrap flex items-end mt-3 gap-5 ">
            <div className="selectFodler-home">
              <div className="selectFodler-home-element">
                <FolderSelectTree
                  value={value}
                  onChange={onChange}
                  treeData={treeData}
                  onLoadData={onLoadData}
                />
              </div>
            </div>

            <div className="hidden">
              <div>
                <TNInput
                  id="dr-note-search"
                  datatestid="dr-note-search-testid"
                  type="text"
                  name="drNoteSearch"
                  // value={inputValue}
                  label="what are you looking for?"
                  placeholder="what are you looking for?"
                  ILInputLabelClass="mb-0 data-repository-seacrhbar-input"
                  // handleChange={handleInputChange}
                  textAreaShow={false}
                  readOnly={false}
                  searchBarControl
                  errorMsg="This is an error message"
                />
              </div>
              <div className="ml-auto flex gap-6">
                <TNSelect
                  label="Status"
                  options={drNoteOptions}
                  value={selectedValue}
                  onChange={handleSelectChange}
                  placeholder="Please select value"
                />
                <TNDatePicker label="Modified" options={[]} />
              </div>
            </div>
          </div>
          <hr className="opacity-03 my-4" />
          <div className="mt-3">
            <h3 className="pb-3 fw-500">{getTitleNameByType(noteType)}</h3>
            {!sortedNotes?.length ? (
              <div className="flex-center">No Items Available</div>
            ) : isNotesLoading ? (
              <div className="flex-center" style={{ width: "100%" }}>
                <Loader />
              </div>
            ) : null}

            <div className="notes-grid-wrap grid">
              <>
                {sortedNotes?.length && !isNotesLoading
                  ? sortedNotes?.map((data: any, index: number) => {
                      const title =
                        data?.title?.length > 40
                          ? data?.title?.substring(0, 40) + "..."
                          : data?.title;

                      const fileContent =
                        data?.fileContent?.length > 300
                          ? data?.fileContent?.substring(0, 140) + "..."
                          : data?.fileContent;

                      const tagData = data?.tagData?.length
                        ? data?.tagData?.split(",")
                        : [];

                      return (
                        <>
                          <div
                            className="notes-col w-full h-full transition-smooth cursor-pointer"
                            key={index}
                            onClick={() => handleSelectedPreview(data)}
                          >
                            <h3 className="mb-3">{title || ""}</h3>
                            <p className="mb-3 file-content-notes">
                              {fileContent ? parse(fileContent) : "N/A"}
                            </p>
                            <div className="flex items-center flex-wrap gap-3 mb-4">
                              <h5 className="ml-auto date-label-text">
                                {data?.createdOn
                                  ? moment(data?.createdOn).format(
                                      "MMM, DD, YYYY"
                                    )
                                  : null}
                              </h5>
                            </div>
                            <div className="tags-notes">
                              <div className="flex items-center gap-2 tags-notes-home">
                                {tagData?.map((data: any, index: any) => {
                                  if (index > 4) return null;
                                  return (
                                    <div className="note-label flex items-center justify-center">
                                      <span>{data}</span>
                                    </div>
                                  );
                                })}
                              </div>
                              <span>
                                <Dropdown menu={{ items }} trigger={["click"]}>
                                  <a
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      console.log(data);
                                      setCurrentId(data?.fileId);
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
                        </>
                      );
                    })
                  : null}
              </>
            </div>
          </div>
        </div>
      )}

      {isAddButton && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "70%",
            }}
          >
            <Button className="mb-2" onClick={handleBack}>
              Back
            </Button>

            <TNInput
              id="dr-note-search"
              datatestid="dr-note-search-testid"
              type="text"
              name="drNoteSearch"
              value={title}
              label=""
              placeholder="Title"
              ILInputLabelClass="mb-0 data-repository-seacrhbar-inpu mb-4 mt-4"
              handleChange={handleChangeTitle}
              textAreaShow={false}
              readOnly={false}
            />

            <RichTextEditorTwo
              handleRichTextHtml={handleRichTextHtml}
              htmlContent={htmlContent}
            />
            <div
              style={{
                marginTop: "3rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "3rem",
              }}
            >
              <div
                className="mb-4 mt-4"
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "300px",
                }}
              >
                <FolderSelectTree
                  value={value}
                  onChange={onChange}
                  treeData={treeData}
                  onLoadData={onLoadData}
                />
              </div>
              {/* 
              <div
                className="mb-4 mt-4"
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Attach Files</Button>
                </Upload>
              </div> */}

              <div
                className="mb-4 mt-4"
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <TNTags handleChangeTags={handleChangeTags} tags={tags} />
              </div>
            </div>

            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Spin spinning={isNoteSubmitting}>
                <TNButton
                  id="add-new-note"
                  datatestid="add-new-note-testid"
                  type="button"
                  ILBtnClass="additional-class"
                  handleChange={handleSubmit}
                  disabled={isNoteSubmitting}
                >
                  Submit
                </TNButton>
              </Spin>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TNWriteNote;
