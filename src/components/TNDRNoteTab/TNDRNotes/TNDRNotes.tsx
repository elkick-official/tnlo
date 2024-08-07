import useNotesMain from "../../../hooks/notes/useNotesMain";
import TNWriteNote from "../TNDataRepository/TNWriteNote";
import "./TNDRNotes.css";

export const TNDRNotes = () => {
  const {
    handleAddNoteButton,
    isAddButton,
    handleRichTextHtml,
    handleSubmit,
    handleBack,
  } = useNotesMain("notes");
  return (
    <TNWriteNote
      handleAddNoteButton={handleAddNoteButton}
      isAddButton={isAddButton}
      handleRichTextHtml={handleRichTextHtml}
      handleSubmit={handleSubmit}
      handleBack={handleBack}
    />
  );
};
