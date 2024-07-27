import React, { useState } from "react";
import {drNoteOptions } from "../../../const/data";
import { TNInput } from "../../common/TNInput/TNInput";
import { TNButton } from "../../common/TNButton/TNButton";
import { PlusCircleOutlined } from "@ant-design/icons";
import { TNSelect } from "../../common/TNSelect/TNSelect";
import "./TNDRNotes.css";
import { TNDatePicker } from "../../common/TNDatePicker/TNDatePicker";

  export const TNDRNotes = () => {
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
    // select option js start
    const [selectedValue, setSelectedValue] = useState<
        string | number | undefined
    >(undefined);

    const handleSelectChange = (value: string | number) => {
        setSelectedValue(value);
    };
    // select option js end
    return(
        <>
            <div className="flex w-100">
                <TNButton
                id="add-new-note"
                datatestid="add-new-note-testid"
                type="button"
                ILBtnClass="additional-class ml-auto"
                handleChange={handleButtonClick}
                disabled={false}
                >
                   
                    <PlusCircleOutlined className="w-auto width min-w-auto pa-0 me-2 height min-h-auto"/>
                Add New Note
                </TNButton>
            </div>
           <div className="legency-data-digitization-head-wrap flex items-center mt-3">
                <div>
                    <TNInput
                    id="dr-note-search"
                    datatestid="dr-note-search-testid"
                    type="text"
                    name="drNoteSearch"
                    value={inputValue}
                    label="what are you looking for?"
                    placeholder="what are you looking for?"
                    ILInputLabelClass="mb-0 legency-data-seacrhbar-input"
                    handleChange={handleInputChange}
                    textAreaShow={false}
                    readOnly={false}
                    searchBarControl
                    errorMsg="This is an error message"
                    />
                </div>
                <div className="ml-auto flex items-center gap-6">
                    <TNSelect
                        label="Status"
                        options={drNoteOptions}
                        value={selectedValue}
                        onChange={handleSelectChange}
                        placeholder="Please select value"
                    />
                   <TNDatePicker label="Status" options={[]}/>
                </div>
            </div>
        </>
    )
}