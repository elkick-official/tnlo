import { Modal } from "antd";
import { TNInput } from "../../common/TNInput/TNInput";
import { TNButton } from "../../common/TNButton/TNButton";
import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";

export const TNDFCreateNewFormModal = () => {
    // button js start
       const handleButtonClick = () => {
        console.log("Button clicked");
    };
    // button js end
    // input js start
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    // input js end
    // modal js start
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    // modal js end
    return(
        <>
            <TNButton
                id="add-new-note"
                datatestid="add-new-note-testid"
                type="button"
                ILBtnClass="additional-class ml-auto"
                handleChange={showModal}
                disabled={false}
                >
                   
                    <PlusCircleOutlined className="w-auto width min-w-auto pa-0 me-2 height min-h-auto"/>
                    Create New Form
            </TNButton>
              {/* Create New Form modal */}
              <Modal title="Create New Form" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered width={700} className="remove-footer-btn">
                <hr className="opacity-03 mb-4"/>
                <div>
                    <TNInput
                    id="df-title"
                    datatestid="df-title-testid"
                    type="text"
                    name="dfTitle"
                    value={inputValue}
                    label="Title"
                    placeholder="Enter title"
                    ILInputLabelClass=""
                    handleChange={handleInputChange}
                    textAreaShow={false}
                    readOnly={false}
                    errorMsg="This is an error message"
                    />
                     <TNInput
                        id="df-textarea"
                        datatestid="df-textarea-testid"
                        rows={6}
                        value={inputValue}
                        placeholder="Enter Description (Optional)"
                        label="Description (Optional)"
                        ILInputLabelClass=""
                        // handleChange={handleInputChange}
                        textAreaShow={true}
                        readOnly={false}
                        errorMsg="This is an error message" handleChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                            throw new Error("Function not implemented.");
                        } }                    />
                </div>
                <hr className="opacity-03 mt-4"/>
                <div className="flex items-center justify-end pt-4 ">
                    <TNButton
                    id="create"
                    datatestid="create-testid"
                    type="button"
                    ILBtnClass=""
                    handleChange={handleCancel}
                    disabled={false}
                    >
                        Create
                    </TNButton>
                    <TNButton
                    id="close"
                    datatestid="close-testid"
                    type="button"
                    ILBtnClass="btn-transparent"
                    handleChange={handleCancel}
                    disabled={false}
                    >
                        Cancel
                    </TNButton>
                </div>
            </Modal>
        </>
    )
}