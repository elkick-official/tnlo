import { Col, Modal, Row } from "antd"
import "./TNEditSubmissionTab.css";
import { Icons } from "../../../const/icons";
import { useState } from "react";
import { TNInput } from "../../common/TNInput/TNInput";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { TNButton } from "../../common/TNButton/TNButton";
import { TNSelect } from "../../common/TNSelect/TNSelect";
import { dfAddSectionTypeOptions } from "../../../const/data";
import { TNSwitch } from "../../common/TNSwitch/TNSwitch";
export const TNEditForm = () => {
     // input js start
     const [inputValue, setInputValue] = useState<string>("");

     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         setInputValue(e.target.value);
     };
     // input js end
    // select option js start
            const [selectedValue, setSelectedValue] = useState<
            string | number | undefined
        >(undefined);

        const handleSelectChange = (value: string | number) => {
            setSelectedValue(value);
        };
    // select option js end
     // button js start
     const handleButtonClick = () => {
        console.log("Button clicked");
    };
    // button js end
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
    // swicth js start
    const [switchStates, setSwitchStates] = useState({
        published: false,
        unpublished: false
    });

    const handleSwitchChange = (key: 'published' | 'unpublished') => (checked: boolean) => {
        setSwitchStates(prevState => ({
            ...prevState,
            [key]: checked
        }));
    };
    // swicth js end
    return(
        <>
            <Row gutter={24}>
                <Col xs={6}>
                    <div className="legency-data-tab-wrap bg-tnl-white mt-0 box-shadow-default">
                        <h3 className="pb-3 fw-500">Sections</h3>
                        <hr className="opacity-03 mb-3"/>
                        <div className="edit-mode-name-number-wrap flex items-center gap-6">
                            <span className="lh-0">
                                {Icons.dragIcon}
                            </span>
                            <h4 className="mb-0 lh-0 fw-500 h5">Name</h4>
                        </div>
                        <div className="edit-mode-name-number-wrap flex items-center gap-6">
                            <span className="lh-0">
                                {Icons.dragIcon}
                            </span>
                            <h4 className="mb-0 lh-0 fw-500 h5">Phone Number</h4>
                        </div>
                    </div>
                </Col>
                <Col xs={18}>
                    <div className="legency-data-tab-wrap bg-tnl-white mt-0 box-shadow-default">
                        <TNInput
                        id="df-name"
                        datatestid="df-name-testid"
                        type="text"
                        name="dfName"
                        // value={inputValue}
                        label={
                            <>
                                Name
                                <span className="d-block">Providing your name will help in quick search of your submission</span>
                            </>
                        }
                        placeholder="Enter Name"
                        ILInputLabelClass=""
                        handleChange={handleInputChange}
                        textAreaShow={false}
                        readOnly={false}
                        deleteMsg={true}
                        errorMsg="This is an error message"
                        />
                        <TNInput
                        id="df-verified"
                        datatestid="df-verified-testid"
                        type="number"
                        name="dfVerified"
                        // value={inputValue}
                        label="Phone Number"
                        placeholder="Enter Phone Number"
                        ILInputLabelClass=""
                        handleChange={handleInputChange}
                        textAreaShow={false}
                        readOnly={false}
                        deleteMsg={true}
                        errorMsg="This is an error message"
                        />
                         <TNButton
                        id="close"
                        datatestid="close-testid"
                        type="button"
                        ILBtnClass=""
                        handleChange={showModal}
                        disabled={false}
                        >
                              <PlusCircleOutlined className="w-auto width min-w-auto pa-0 me-2 height min-h-auto"/>
                            Add Section
                        </TNButton>
                    </div>
                </Col>
            </Row>
            {/*  Add Section modal */}
            <Modal title="Add Section" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered width={1000} className="remove-footer-btn">
                <hr className="opacity-03 mb-4"/>
                <Row gutter={24}>
                    <Col xs={12}>
                        <TNInput
                        id="df-Label"
                        datatestid="df-Label-testid"
                        type="text"
                        name="dfLabel"
                        // value={inputValue}
                        label="Label"
                        placeholder="Label the section"
                        ILInputLabelClass=""
                        handleChange={handleInputChange}
                        textAreaShow={false}
                        readOnly={false}
                        errorMsg="This is an error message"
                        />
                    </Col>
                    <Col xs={12}>
                        <TNSelect
                            label="Status"
                            options={dfAddSectionTypeOptions}
                            value={selectedValue}
                            onChange={handleSelectChange}
                            placeholder="Please select value"
                        />
                    </Col>
                    <Col xs={24}>
                        <TNInput
                        id="df-add-section"
                        datatestid="df-add-section-testid"
                        rows={6}
                        // value={inputValue}
                        placeholder="Describe, what this section is for. "
                        label="Description (Optional)"
                        ILInputLabelClass=""
                        // handleChange={handleInputChange}
                        textAreaShow={true}
                        readOnly={false}
                        errorMsg="This is an error message" handleChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                            throw new Error("Function not implemented.");
                        } }                    />
                    </Col>
                    <Col xs={12}>
                        <TNInput
                        id="df-Hint"
                        datatestid="df-Hint-testid"
                        type="text"
                        name="dfHint"
                        // value={inputValue}
                        label="Hint"
                        placeholder="Enter Hint"
                        ILInputLabelClass=""
                        handleChange={handleInputChange}
                        textAreaShow={false}
                        readOnly={false}
                        />
                    </Col>
                    <Col xs={12}>
                        <TNInput
                        id="df-Placeholder"
                        datatestid="df-Placeholder-testid"
                        type="text"
                        name="dfPlaceholder"
                        // value={inputValue}
                        label="Placeholder"
                        placeholder="Enter Placeholder"
                        ILInputLabelClass=""
                        handleChange={handleInputChange}
                        textAreaShow={false}
                        readOnly={false}
                        />
                    </Col>
                    <Col xs={12}>
                        <TNInput
                        id="df-Pattern"
                        datatestid="df-Pattern-testid"
                        type="text"
                        name="dfPattern"
                        // value={inputValue}
                        label="Pattern"
                        placeholder="Enter Pattern"
                        ILInputLabelClass=""
                        handleChange={handleInputChange}
                        textAreaShow={false}
                        readOnly={false}
                        />
                    </Col>
                    <Col xs={6}>
                        <TNInput
                        id="df-MinCharacters"
                        datatestid="df-MinCharacters-testid"
                        type="number"
                        name="dfMinCharacters"
                        // value={inputValue}
                        label="Min Characters"
                        placeholder="Enter Min Characters"
                        ILInputLabelClass=""
                        handleChange={handleInputChange}
                        textAreaShow={false}
                        readOnly={false}
                        />
                    </Col>
                    <Col xs={6}>
                        <TNInput
                        id="df-MaxCharacters"
                        datatestid="df-MaxCharacters-testid"
                        type="number"
                        name="dfMaxCharacters"
                        // value={inputValue}
                        label="Max Characters"
                        placeholder="Enter Max Characters"
                        ILInputLabelClass=""
                        handleChange={handleInputChange}
                        textAreaShow={false}
                        readOnly={false}
                        />
                    </Col>
                    <Col xs={6} className="flex items-center gap-14">
                        <div className="">
                            <label className="ILInputLabelText fw-500 text-tnl-white-edgar d-block mb-2">Required</label>
                            <TNSwitch
                                label="Yes"
                                handleChange={handleSwitchChange('published')}
                                checked={switchStates.published}
                            />
                        </div>
                        <div className="">
                            <label className="ILInputLabelText fw-500 text-tnl-white-edgar d-block mb-2">Disabled</label>
                            <TNSwitch
                                label="No"
                                handleChange={handleSwitchChange('unpublished')}
                                checked={switchStates.unpublished}
                            />
                        </div>
                    </Col>
                </Row>
                   
                <hr className="opacity-03 mt-4"/>
                <div className="flex items-center justify-end pt-4 gap-6">
                    <TNButton
                    id="create"
                    datatestid="create-testid"
                    type="button"
                    ILBtnClass=""
                    handleChange={handleCancel}
                    disabled={false}
                    >
                        Add
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