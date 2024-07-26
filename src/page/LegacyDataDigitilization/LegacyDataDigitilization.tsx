import { Breadcrumb } from "antd";
import { Header } from "antd/es/layout/layout";
import { TNButton, TNHeader, TNInput } from "../../components";
import "./LegacyDataDigitilization.css";
import { useState } from "react";

const LegacyDataDigitilization = () => {
  // button js start
  const handleButtonClick = () => {
    console.log('Button clicked');
  };
  // button js end
  // input js start
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  // input js end
  return <div>
     {/* <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Legacy Data Digitization</Breadcrumb.Item>
    </Breadcrumb> */}
        {/* <Header className="d-flex bg-tnl-white" >
            <h3>Legacy Data Digitization</h3>
        </Header> */}
        <TNHeader children="Legacy Data Digitization"/>
        <section className="xy-space">
          <div className="legency-data-digitization-head-wrap flex items-center">
            <div>
              <TNInput
                id="example-input"
                datatestid="example-input-testid"
                type="text"
                name="exampleName"
                value={inputValue}
                label="Example Label"
                placeholder="Enter some text"
                ILInputLabelClass="custom-class"
                handleChange={handleInputChange}
                textAreaShow={false}
                readOnly={false}
                errorMsg="This is an error message"
                searchBarControl
              />

            </div>
            <div className="ml-auto flex items-center gap-6">
                <TNButton
                id="new-folder"
                datatestid="new-folder-testid"
                type="button"
                ILBtnClass="additional-class"
                handleChange={handleButtonClick}
                disabled={false}
              >
                New Folder
              </TNButton>
              <TNButton
                id="upload-folder"
                datatestid="upload-folder-testid"
                type="button"
                ILBtnClass="additional-class"
                handleChange={handleButtonClick}
                disabled={false}
              >
                Upload Folder
              </TNButton>
            </div>
          </div>
        </section>
  </div>;
};

export default LegacyDataDigitilization;
