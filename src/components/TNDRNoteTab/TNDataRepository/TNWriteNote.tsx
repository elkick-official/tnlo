import { DeleteOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { useState } from "react";
import { drNoteOptions } from "../../../const/data";
import PreviewNote from "./PreviewNote";
import TNAddNote from "./TNAddNote";
import TNShowAllNotes from "./TNShowAllNotes";
import "./TNWriteNote.css";
import { useShowNotes } from "../../../hooks/notes/useShowNotes";

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
  notesForm,
}: any) => {
  const { currentId, setCurrentId, sortedNotes } = useShowNotes(allNotes);

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

  return (
    <>
      {isPreview && (
        <PreviewNote
          selectedPreview={selectedPreview}
          goBackPreview={goBackPreview}
        />
      )}

      {!isAddButton && !isPreview && (
        <TNShowAllNotes
          searchVal={searchVal}
          handleChangeSearch={handleChangeSearch}
          handleAddNoteButton={handleAddNoteButton}
          noteType={noteType}
          value={value}
          onChange={onChange}
          treeData={treeData}
          onLoadData={onLoadData}
          drNoteOptions={drNoteOptions}
          selectedValue={value}
          handleSelectChange={onChange}
          sortedNotes={sortedNotes}
          isNotesLoading={isNotesLoading}
          handleSelectedPreview={handleSelectedPreview}
          setCurrentId={setCurrentId}
          items={items}
        />
      )}

      {isAddButton && (
        <TNAddNote
          handleBack={handleBack}
          title={title}
          handleChangeTitle={handleChangeTitle}
          handleRichTextHtml={handleRichTextHtml}
          htmlContent={htmlContent}
          value={value}
          onChange={onChange}
          treeData={treeData}
          onLoadData={onLoadData}
          handleChangeTags={handleChangeTags}
          tags={tags}
          handleSubmit={handleSubmit}
          isNoteSubmitting={isNoteSubmitting}
          notesForm={notesForm}
        />
      )}
    </>
  );
};

export default TNWriteNote;
