import { CloseOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";

const TNCreateFolderModal = ({
  isNewFolder,
  handleCreateFolderCancel,
  newFolderForm,
  handleFinish,
  inputRef,
}: any) => {
  return (
    <Modal
      title={<div>New Folder</div>}
      centered
      width={400}
      open={isNewFolder}
      onCancel={handleCreateFolderCancel}
      okText="Save"
      cancelText="Leave"
      closeIcon={
        <>
          <CloseOutlined />
        </>
      }
      footer={false}
    >
      <Form
        form={newFolderForm}
        name="forgotPass"
        layout="vertical"
        initialValues={{
          folderName: "New Folder",
        }}
        className="mt-8"
        requiredMark={false}
        autoComplete="off"
        onFinish={handleFinish}
      >
        <Form.Item
          label=""
          name="folderName"
          rules={[{ required: true, message: "Folder name is required." }]}
        >
          <Input
            type="text"
            ref={inputRef}
            placeholder="Enter your email"
            size="large"
          />
        </Form.Item>

        <div className="flex justify-between w-full">
          <Button onClick={handleCreateFolderCancel}>Cancel</Button>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default TNCreateFolderModal;
