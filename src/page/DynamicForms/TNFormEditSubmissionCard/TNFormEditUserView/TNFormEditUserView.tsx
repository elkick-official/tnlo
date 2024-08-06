import { useState } from "react";
import { TNButton, TNHeader, TNInput } from "../../../../components";
import { Col, Row } from "antd";

const TNFormEditUserView = () => {
    // input js start
   const [inputValue, setInputValue] = useState<string>("");

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setInputValue(e.target.value);
   };
   // input js end
     // button js start
     const handleButtonClick = () => {
        console.log("Button clicked");
    };
    // button js end
    return(
        <>
         <TNHeader children="Dynamic Forms"/>
         <section className="xx-space yy-space">
            <div className="w-full legency-data-tab-wrap bg-tnl-white mt-4 edit-submission-card">
                <div className="flex items-center flex-wrap gap-3 mb-4">
                    <h3 className="mb-0">Student Rally</h3>
                </div>
                <div className="flex items-center gap-3">
                    <h3 className="fw-500">Student rally in Thambaram</h3>
                    <div className="flex items-center gap-3 ml-auto">
                        <TNButton
                        id="close"
                        datatestid="close-testid"
                        type="button"
                        ILBtnClass=""
                        handleChange={handleButtonClick}
                        disabled={false}
                        >
                        
                            Submitted
                        </TNButton>
                    </div>
                </div>
            </div>
         </section>
         <section className="xx-space">
            <div className="legency-data-tab-wrap bg-tnl-white mt-0 flex items-center gap-4 px-5 py-8 df-Form-event-data-card">
                <h3 className="mb-0 fw fw-500 text-tnl-black transition-smooth">Submission by Natrajan R.</h3>
                <h5 className="ml-auto date-label-text fw fw-500 transition-smooth text-right mb-0 text-tnl-black"><b>Updated at :</b>&nbsp;Jul 20, 2024, 2:44:30 PM</h5>
            </div>
            <div className="legency-data-tab-wrap bg-tnl-white mt-4">
                <Row gutter={24}>
                    <Col xl={8} xxl={6}>
                        <TNInput
                        id="df-name"
                        datatestid="df-name-testid"
                        type="text"
                        name="dfLname"
                        // value={inputValue}
                        label="Name"
                        placeholder="Enter name"
                        ILInputLabelClass=""
                        handleChange={handleInputChange}
                        textAreaShow={false}
                        readOnly={false}
                        errorMsg="This is an error message"
                        requiredField={true}
                        />
                    </Col>
                    <Col xl={8} xxl={6}>
                        <TNInput
                        id="df-Phone-Number"
                        datatestid="df-Phone-Number-testid"
                        type="number"
                        name="dfPhoneNumber"
                        // value={inputValue}
                        label="Phone Number"
                        placeholder="Enter phone number"
                        ILInputLabelClass=""
                        handleChange={handleInputChange}
                        textAreaShow={false}
                        readOnly={false}
                        requiredField={true}
                        />
                    </Col>
                    <Col xl={8} xxl={6}>
                        <TNInput
                        id="df-EmailId"
                        datatestid="df-EmailId-testid"
                        type="email"
                        name="dfEmailId"
                        // value={inputValue}
                        label="Email Id"
                        placeholder="Enter email ID"
                        ILInputLabelClass=""
                        handleChange={handleInputChange}
                        textAreaShow={false}
                        readOnly={false}
                        />
                    </Col>
                    <Col xl={8} xxl={6}>
                        <TNInput
                        id="df-Location"
                        datatestid="df-Location-testid"
                        type="text"
                        name="dfLocation"
                        // value={inputValue}
                        label="Location"
                        placeholder="Enter location"
                        ILInputLabelClass=""
                        handleChange={handleInputChange}
                        textAreaShow={false}
                        readOnly={false}
                        />
                    </Col>
                    <Col xs={24}>
                        <TNInput
                        id="df-address"
                        datatestid="df-address-testid"
                        rows={6}
                        // value={inputValue}
                        placeholder="Enter address"
                        label="Address"
                        ILInputLabelClass=""
                        // handleChange={handleInputChange}
                        textAreaShow={true}
                        readOnly={false}
                        errorMsg="This is an error message" handleChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                            throw new Error("Function not implemented.");
                        } }                    />
                    </Col>
                </Row>
            </div>
         </section>
        </>
    )
}
export default TNFormEditUserView;