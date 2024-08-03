import { Image } from "antd";
import { doc } from "../../assets";

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

  const dimension = fullView ? "100%" : 150;
  switch (ext) {
    case "jpg":
    case "jpeg":
    case "png":
      value = (
        <Image
          src={updatedFileUrl}
          className="img-cover"
          width={dimension}
          height={dimension}
          preview={false}
        />
      );
      break;
    case "pdf":
      value = (
        <iframe
          src={updatedFileUrl}
          className="img-cover tn-pdf-iframe"
          style={{ width: "100%", height: "100%" }}
          scrolling="no"
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
        />
      );
      break;
    default:
      break;
  }
  return value;
};

export default TNFilePreview;
