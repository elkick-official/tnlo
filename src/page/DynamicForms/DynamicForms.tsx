
import { useState } from "react";
import { TNDFCreateNewFormModal, TNDynamicFormsTab, TNHeader, TNInput } from "../../components";
import "./DynamicForms.css";

const DynamicForms = () => {
   // input js start
   const [inputValue, setInputValue] = useState<string>("");

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setInputValue(e.target.value);
   };
   // input js end
  return <div>
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
      <div className="legency-data-tab-wrap bg-tnl-white mt-4">
          <TNDynamicFormsTab/>
      </div>
      </section>
  </div>;
};

export default DynamicForms;
