import { Image } from "antd";
import { doc, image, pdf } from "../../assets";

const TNFilePreview = ({
  fileUrl,
  fullView,
}: {
  fileUrl: string;
  fullView: boolean;
}) => {
  let value = <></>;

  console.log({ fileUrl });
  const updatedFileUrl = import.meta.env.VITE_API_URL + fileUrl;
  const ext =
    fileUrl && fileUrl?.includes(".") ? fileUrl?.split(".")?.pop() : "docx";

  console.log({ ext });

  const dimension = fullView ? "100%" : 80;
  switch (ext) {
    case "jpg":
    case "jpeg":
    case "png":
      value = (
        <Image
          src={fullView ? updatedFileUrl : image}
          className="img-cover"
          width={dimension}
          height={dimension}
          preview={false}
          style={{
            objectFit: "contain",
            padding: fullView ? "1rem" : "",
          }}
        />
      );
      break;
    case "pdf":
      value = fullView ? (
        <iframe
          src={updatedFileUrl}
          className="img-cover aim-msg-pdf-iframe"
          style={{ width: "100%", height: "70vh" }}
        />
      ) : (
        <Image
          src={pdf}
          className="img-cover"
          width={dimension}
          height={dimension}
          preview={false}
        />
      );

      break;
    case "docx":
      value = (
        <Image
          src={doc}
          className="img-cover"
          width={dimension}
          height={dimension}
          preview={false}
          style={{
            objectFit: "contain",
          }}
        />
      );
      break;
    default:
      break;
  }
  return value;
};

export default TNFilePreview;
