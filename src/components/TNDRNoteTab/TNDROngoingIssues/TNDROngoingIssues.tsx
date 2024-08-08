import useNotesMain from "../../../hooks/notes/useNotesMain";
import TNWriteNote from "../TNDataRepository/TNWriteNote";
import "./TNDROngoingIssues.css";

export const TNDROngoingIssues = () => {
  const noteType = "ongoing";
  const {
    handleAddNoteButton,
    isAddButton,
    handleRichTextHtml,
    handleSubmit,
    handleBack,
    handleChangeTitle,
    title,
    allNotes,
    htmlContent,
    handleChangeTags,
    tags,
    value,
    handleOnChange,
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
  } = useNotesMain(noteType);

  return (
    <TNWriteNote
      handleAddNoteButton={handleAddNoteButton}
      isAddButton={isAddButton}
      handleRichTextHtml={handleRichTextHtml}
      handleSubmit={handleSubmit}
      handleBack={handleBack}
      allNotes={allNotes}
      handleChangeTitle={handleChangeTitle}
      title={title}
      htmlContent={htmlContent}
      handleChangeTags={handleChangeTags}
      tags={tags}
      value={value}
      onChange={handleOnChange}
      treeData={treeData}
      onLoadData={onLoadData}
      isPreview={isPreview}
      goBackPreview={goBackPreview}
      handleSelectedPreview={handleSelectedPreview}
      selectedPreview={selectedPreview}
      handleDeleteFile={handleDeleteFile}
      isNoteSubmitting={isNoteSubmitting}
      isNotesLoading={isNotesLoading}
      handleChangeSearch={handleChangeSearch}
      searchVal={searchVal}
      noteType={noteType}
    />
  );
};
