import JoditEditor from "jodit-react";
import { useMemo, useRef, useState } from "react";

const RichTextJoditEditor = ({ handleRichTextHtml, htmlContent }: any) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
      uploader: {
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
      },
    }),
    []
  );

  const handleChange = (value: any) => {
    setContent(value);
  };

  return (
    <JoditEditor
      ref={editor}
      value={htmlContent}
      config={config}
      onBlur={handleRichTextHtml}
      onChange={handleRichTextHtml}
    />
  );
};

export default RichTextJoditEditor;
