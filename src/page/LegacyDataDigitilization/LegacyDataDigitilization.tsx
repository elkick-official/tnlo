import { Breadcrumb } from "antd";
import { Header } from "antd/es/layout/layout";
import { TNButton, TNHeader, TNInput, TNSelect, TNTab } from "../../components";
import "./LegacyDataDigitilization.css";
import { useState } from "react";
import { legencyModifiedOptions, legencyTypeOptions } from "../../const/data";

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
  // select option js start
  const [selectedValue, setSelectedValue] = useState<string | number | undefined>(undefined);

  const handleSelectChange = (value: string | number) => {
    setSelectedValue(value);
  };
  // select option js end
  return <div>
        <TNHeader children="Legacy Data Digitization"/>
        <section className="xx-space yy-space">
          <div className="legency-data-digitization-head-wrap flex items-center">
            <div>
              <TNInput
                id="legency-search"
                datatestid="legency-search-testid"
                type="text"
                name="legencySearch"
                value={inputValue}
                label="Seacrh something"
                placeholder="Type something"
                ILInputLabelClass="mb-0 legency-data-seacrhbar-input"
                handleChange={handleInputChange}
                textAreaShow={false}
                readOnly={false}
                searchBarControl
                errorMsg="This is an error message"
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
          <div className="legency-data-top-space legency-data-select-box flex items-center gap-6">
            <TNSelect
               label="Select an type"
               options={legencyTypeOptions}
               value={selectedValue}
               onChange={handleSelectChange}
               placeholder="Please select"
            />
            <TNSelect
               label="Select modified"
               options={legencyModifiedOptions}
               value={selectedValue}
               onChange={handleSelectChange}
               placeholder="Please select"
            />
          </div>
          <div className="legency-data-tab-wrap bg-tnl-white">
            <TNTab/>
          </div>
        </section>
  </div>
}

export default LegacyDataDigitilization;
