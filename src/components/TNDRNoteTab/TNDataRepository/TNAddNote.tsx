import { Button, Form, Spin } from "antd";
import { TNButton } from "../../common/TNButton/TNButton";
import { TNInput } from "../../common/TNInput/TNInput";
import TNTags from "../../common/TNTags/TNTags";
import RichTextEditorTwo from "../../RichText/RichTextEditorTwo";
import FolderSelectTree from "../../Tree/FolderSelectTree";

const TNAddNote = ({
  handleBack,
  handleRichTextHtml,
  handleChangeTags,
  handleSubmit,
  onChange,
  onLoadData,
  title = "",
  htmlContent = "",
  value = undefined,
  treeData = [],
  tags = [],
  isNoteSubmitting = false,
  notesForm,
  isEditMode,
}: any) => {
  return (
    <Form
      form={notesForm}
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={{
        title: "",
        value: value,
      }}
    >
      <div className="tn-content">
        <Form.Item>
          <Button className="mb-2" onClick={handleBack}>
            Back
          </Button>
        </Form.Item>

        <Form.Item
          name="title"
          rules={[{ required: true, message: "Please enter a title" }]}
        >
          <TNInput
            type="text"
            value={title}
            label=""
            placeholder="Title"
            textAreaShow={false}
            readOnly={false}
          />
        </Form.Item>

        <RichTextEditorTwo
          handleRichTextHtml={handleRichTextHtml}
          htmlContent={htmlContent}
        />

        <div className="tn-bottom-section">
          <Form.Item
            name="value"
            rules={[{ required: true, message: "Please select a folder" }]}
          >
            <FolderSelectTree
              isEditMode={isEditMode}
              value={value}
              onChange={onChange}
              treeData={treeData}
              onLoadData={onLoadData}
            />
          </Form.Item>

          <Form.Item>
            <TNTags handleChangeTags={handleChangeTags} tags={tags} />
          </Form.Item>
        </div>

        <div className="tn-submit-section">
          <Spin spinning={isNoteSubmitting}>
            <Form.Item>
              <TNButton
                id="add-new-note"
                datatestid="add-new-note-testid"
                type="submit"
                ILBtnClass="additional-class"
                disabled={isNoteSubmitting}
              >
                Submit
              </TNButton>
            </Form.Item>
          </Spin>
        </div>
      </div>
    </Form>
  );
};

export default TNAddNote;
