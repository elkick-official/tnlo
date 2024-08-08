import { Button } from "antd";
import parse from "html-react-parser";
const PreviewNote = ({ selectedPreview, goBackPreview }: any) => {
  const tagData = selectedPreview?.tagData
    ? selectedPreview?.tagData?.split(",")
    : [];
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: "auto",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "auto",
        }}
        className="file-content-notes"
      >
        <Button onClick={goBackPreview} style={{ marginTop: "1rem" }}>
          Go Back
        </Button>
        <div className="preview-content-title">{selectedPreview?.title}</div>

        <div className="preview-content ">
          {selectedPreview?.fileContent
            ? parse(selectedPreview?.fileContent)
            : ""}
        </div>

        <div className="notes-col-preview flex">
          {tagData?.map((data: any, index: any) => {
            if (index > 4) return null;
            return (
              <div className="items-center justify-center note-tag">
                <span>{data}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PreviewNote;
