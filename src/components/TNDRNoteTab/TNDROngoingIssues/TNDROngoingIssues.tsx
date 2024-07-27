import React, { useState } from "react";
import {drNoteOptions, DRnotesData, DROngoingIssuesData } from "../../../const/data";
import { TNInput } from "../../common/TNInput/TNInput";
import { TNButton } from "../../common/TNButton/TNButton";
import { PlusCircleOutlined } from "@ant-design/icons";
import { TNSelect } from "../../common/TNSelect/TNSelect";
import { TNDatePicker } from "../../common/TNDatePicker/TNDatePicker";
import "./TNDROngoingIssues.css";

  export const TNDROngoingIssues = () => {
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
           <div className="legency-data-digitization-head-wrap flex items-end mt-3">
                <div>
                    <TNInput
                    id="dr-note-search"
                    datatestid="dr-note-search-testid"
                    type="text"
                    name="drNoteSearch"
                    value={inputValue}
                    label="what are you looking for?"
                    placeholder="what are you looking for?"
                    ILInputLabelClass="mb-0 data-repository-seacrhbar-input"
                    handleChange={handleInputChange}
                    textAreaShow={false}
                    readOnly={false}
                    searchBarControl
                    errorMsg="This is an error message"
                    />
                </div>
                <div className="ml-auto flex gap-6">
                    <TNSelect
                        label="Status"
                        options={drNoteOptions}
                        value={selectedValue}
                        onChange={handleSelectChange}
                        placeholder="Please select value"
                    />
                   <TNDatePicker label="Modified" options={[]}/>
                </div>
            </div>
            <hr className="opacity-03 my-4"/>
            <div className="mt-3">
                <h3 className="pb-3 fw-500">Notes</h3>
                <div className="notes-grid-wrap grid">
                    {DROngoingIssuesData.map((DRnotesItem, DRnotesIndex) => {
                        return(
                            <>
                                <div className="notes-col w-full h-full transition-smooth" key={DRnotesIndex}>
                                    <h3 className="mb-3">{DRnotesItem.title}</h3>
                                    <p className="mb-3">{DRnotesItem.detail}</p>
                                    <div className="flex items-center flex-wrap gap-3 mb-4">
                                        <h5>{DRnotesItem.name}</h5>
                                        <h5 className="ml-auto date-label-text">{DRnotesItem.dateTime}</h5>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="note-label flex items-center justify-center"><span>{DRnotesItem.label}</span></div>
                                    </div>
                                </div>
                            </>
                        )
                    }) }
                </div>
            </div>
        </>
    )
}