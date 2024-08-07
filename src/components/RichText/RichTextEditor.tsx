import { Button } from "antd";
import JoditEditor from "jodit-react";
import { useMemo, useRef, useState } from "react";
import { TNButton } from "../common/TNButton/TNButton";

const RichTextEditor = ({ handleRichTextHtml, handleSubmit }: any) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typing...",
      uploader: {
        insertImageAsBase64URI: true,
      },
    }),
    []
  );

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3rem",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "70%",
        }}
      >
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1}
          onBlur={(newContent) => setContent(newContent)}
          onChange={(newContent) => {
            handleRichTextHtml(newContent);
          }}
          style={{ height: "400px" }}
        />
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <TNButton
            id="add-new-note"
            datatestid="add-new-note-testid"
            type="button"
            ILBtnClass="additional-class ml-auto"
            handleChange={handleSubmit}
            disabled={false}
          >
            Submit
          </TNButton>
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;
