import { useState } from "react";
import { TNButton, TNDFCreateNewFormModal, TNDynamicFormsTab, TNEditSubmissionTab, TNHeader, TNInput, TNSwitch } from "../../../components";
import "./TNFormEditSubmissionCard.css";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { DfFormEventData } from "../../../const/data";
 const TNFormEditSubmissionCard = () => {
    // input js start
   const [inputValue, setInputValue] = useState<string>("");

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setInputValue(e.target.value);
   };
   // input js end
    // swicth js start
     const [switchStates, setSwitchStates] = useState({
        Publish: false,
        unpublished: false
    });

    const handleSwitchChange = (key: 'Publish' | 'unpublished') => (checked: boolean) => {
        setSwitchStates(prevState => ({
            ...prevState,
            [key]: checked
        }));
    };
    // swicth js end
    // button js start
      const handleButtonClick = () => {
        console.log("Button clicked");
    };
    // button js end
    return(
        <>
         <TNHeader children="Dynamic Forms"/>
         <section className="xx-space yy-space">
                <div className="flex items-center">
                    <TNInput
                        id="dr-note-search"
                        datatestid="dr-note-search-testid"
                        type="text"
                        name="drNoteSearch"
                        value={inputValue}
                        label="what are you looking for?"
                        placeholder="what are you looking for?"
                        ILInputLabelClass="mb-0 data-repository-seacrhbar-input width w-auto"
                        handleChange={handleInputChange}
                        textAreaShow={false}
                        readOnly={false}
                        searchBarControl
                        errorMsg="This is an error message"
                    />
                    <div className="flex w-100 flex-0-auto ml-auto">
                        <TNDFCreateNewFormModal/>
                    </div>
                </div>
            <div className="w-full legency-data-tab-wrap bg-tnl-white mt-4 edit-submission-card">
                <div className="flex items-center flex-wrap gap-3 mb-4">
                    <h3 className="mb-0">Student Rally</h3>
                    <h5 className="ml-auto date-label-text fw fw-500 transition-smooth"><b>Updated at :</b>&nbsp;Jul 20, 2024, 2:44:30 PM</h5>
                </div>
                <h3 className="mb-12 fw-500">Student rally in Thambaram</h3>
                <div className="flex items-center gap-3">
                    <h5 className="date-label-text fw fw-500 transition-smooth"><b>Submissions :</b>&nbsp;10</h5>
                    <div className="flex items-center gap-3 ml-auto">
                        <TNButton
                        id="close"
                        datatestid="close-testid"
                        type="button"
                        ILBtnClass=""
                        handleChange={handleButtonClick}
                        disabled={false}
                        >
                            <PlusCircleOutlined className="w-auto width min-w-auto pa-0 me-2 height min-h-auto"/>
                            Add
                        </TNButton>
                    </div>
                </div>
            </div>
         </section>
         <section className="xx-space">
            <Row gutter={[24 , 24]}>
                {DfFormEventData.map((eventItem, eventIndex) => {
                    return(
                    <Col xs={12}>
                        <Link to={"/form-edit-user-view"} className="legency-data-tab-wrap bg-tnl-white mt-0 flex items-center gap-4 px-5 py-8 df-Form-event-data-card" key={eventIndex}>
                            <h3 className="mb-0 fw fw-500 text-tnl-black transition-smooth">{eventItem.name}</h3>
                            <h5 className="ml-auto date-label-text fw fw-500 transition-smooth mb-0 text-tnl-black"><b>Updated at :</b>&nbsp;{eventItem.time}</h5>
                        </Link>
                    </Col>
                    )
                })}
            </Row>
        </section>
        </>
    )
}
export default TNFormEditSubmissionCard;