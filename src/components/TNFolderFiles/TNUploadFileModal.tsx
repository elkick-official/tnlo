import { CloseOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Col, Form, Modal, Row, UploadProps } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { errorNotification } from "../../utils/notification.util";
import Loader from "../common/Loader/Loader";
import TNTags from "../common/TNTags/TNTags";

const TNUploadFileModal = ({
  isOpenUploadModal,
  handleUploadCancel,
  isFileUploading,
  fileList,
  handleUpload,
  handleFilelist,
  isFileUploding,
  currentFolderId,
  handleChangeTags,
}: any) => {
  const uploadProps: UploadProps = {
    name: "file",
    multiple: true,
    action: "",
    disabled: isFileUploading,
    fileList,
    accept: ".pdf, .jpeg, .jpg, .xlsx, .csv, .docx, .zip",
    beforeUpload(file) {
      const allowedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      const isValidType = allowedTypes.includes(file.type);

      if (!isValidType) {
        errorNotification("File type not supported");
      }
      return isValidType;
    },
    onChange(info) {
      handleFilelist(info.fileList);
    },
    onDrop() {
      handleFilelist([]);
    },
  };

  return (
    <div>
      <Modal
        title={<div>Upload a Document</div>}
        open={isOpenUploadModal}
        onCancel={handleUploadCancel}
        okText="Save"
        cancelText="Leave"
        footer={() => (
          <div className="flex justify-between w-full">
            <Button onClick={handleUploadCancel}>Cancel</Button>
            <Button
              type="primary"
              disabled={isFileUploding}
              onClick={() => handleUpload(fileList, currentFolderId)}
            >
              <div>Upload</div>
              {isFileUploding && (
                <div>
                  <Loader />
                </div>
              )}
            </Button>
          </div>
        )}
        closeIcon={<CloseOutlined />}
        width={800}
      >
        <div className="pt-4 border-t border-neutral-800">
          <Dragger {...uploadProps}>
            <div className="flex gap-5 flex-col">
              <p className="flex justify-center text-center mt-7">
                <UploadOutlined style={{ fontSize: "50PX" }} />
              </p>
              <p>Drag or Drop or Choose File to Upload</p>
              <p>DOCX, PDF, JPG, PNG formats up to 50 MB</p>
            </div>
            <Button className="mt-10">Browse</Button>
          </Dragger>

          <p>Document Details</p>
          <Form name="basic" layout="vertical">
            <Row className="mt-6">
              <Col span={24}>
                <Form.Item name="tags" label="Tags">
                  <TNTags handleChangeTags={handleChangeTags} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default TNUploadFileModal;
