import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function RichTextEditorTwo({ handleRichTextHtml, htmlContent }: any) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
      ["table"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "table",
  ];

  return (
    <ReactQuill
      theme="snow"
      value={htmlContent}
      onChange={handleRichTextHtml}
      modules={modules}
      formats={formats}
      style={{ height: "190px" }}
    />
  );
}

export default RichTextEditorTwo;
