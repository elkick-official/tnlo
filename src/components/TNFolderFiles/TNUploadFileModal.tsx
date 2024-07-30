import { CloseOutlined, DownOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Form,
  message,
  Modal,
  Row,
  Select,
  UploadProps,
} from "antd";
import Dragger from "antd/es/upload/Dragger";

const TNUploadFileModal = ({
  isOpenUploadModal,
  handleUploadCancel,
  uploadForm,
}: any) => {
  const uploadProps: UploadProps = {
    name: "file",
    multiple: true,
    action: "",
    onChange(info: any) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  const handleUploadDocDetails = () => {};

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
            <Button type="primary">Save Document</Button>
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
              <p>DOCX, XLSX, PPTX, PDF and JPG formats up to 50 MB</p>
            </div>
            <Button className="mt-10">Browse</Button>
          </Dragger>

          <p>Document Details</p>
          <Form
            name="basic"
            form={uploadForm}
            onFinish={handleUploadDocDetails}
            onValuesChange={(value) => {
              console.log(value);
            }}
            layout="vertical"
          >
            <Row className="mt-6">
              <Col span={24}>
                <Form.Item name="tags" label="Tags">
                  <Select
                    size="large"
                    variant="filled"
                    placeholder="Add Tags"
                    suffixIcon={<DownOutlined />}
                  />
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
