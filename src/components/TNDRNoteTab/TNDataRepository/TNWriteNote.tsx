import React, { useState } from "react";
import { TNDatePicker } from "../../common/TNDatePicker/TNDatePicker";
import { TNSelect } from "../../common/TNSelect/TNSelect";
import { TNInput } from "../../common/TNInput/TNInput";
import { PlusCircleOutlined } from "@ant-design/icons";
import { TNButton } from "../../common/TNButton/TNButton";
import { drNoteOptions, DRnotesData } from "../../../const/data";
import RichTextEditor from "../../RichText/RichTextEditor";
import { Button } from "antd";

const TNWriteNote = ({
  handleAddNoteButton,
  isAddButton,
  handleRichTextHtml,
  handleSubmit,
  handleBack,
}: any) => {
  const [selectedValue, setSelectedValue] = useState<
    string | number | undefined
  >(undefined);

  const handleSelectChange = (value: string | number) => {
    setSelectedValue(value);
  };

  return (
    <>
      {!isAddButton && (
        <div>
          <div className="flex w-100 gap-10">
            <div>
              <TNInput
                id="dr-note-search"
                datatestid="dr-note-search-testid"
                type="text"
                name="drNoteSearch"
                // value={inputValue}
                label="what are you looking for?"
                placeholder="what are you looking for?"
                ILInputLabelClass="mb-0 data-repository-seacrhbar-input"
                // handleChange={handleInputChange}
                textAreaShow={false}
                readOnly={false}
                searchBarControl
                errorMsg="This is an error message"
              />
            </div>

            <TNButton
              id="add-new-note"
              datatestid="add-new-note-testid"
              type="button"
              ILBtnClass="additional-class ml-auto"
              handleChange={handleAddNoteButton}
              disabled={false}
            >
              <PlusCircleOutlined className="w-auto width min-w-auto pa-0 me-2 height min-h-auto" />
              Add New Note
            </TNButton>
          </div>
          <div className="legency-data-digitization-head-wrap legency-data-digitization-head-tab-wrap flex items-end mt-3 gap-5 hidden">
            <div>
              <TNInput
                id="dr-note-search"
                datatestid="dr-note-search-testid"
                type="text"
                name="drNoteSearch"
                // value={inputValue}
                label="what are you looking for?"
                placeholder="what are you looking for?"
                ILInputLabelClass="mb-0 data-repository-seacrhbar-input"
                // handleChange={handleInputChange}
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
              <TNDatePicker label="Modified" options={[]} />
            </div>
          </div>
          <hr className="opacity-03 my-4" />
          <div className="mt-3">
            <h3 className="pb-3 fw-500">Notes</h3>
            <div className="notes-grid-wrap grid">
              {DRnotesData.map((DRnotesItem, DRnotesIndex) => {
                return (
                  <>
                    <div
                      className="notes-col w-full h-full transition-smooth"
                      key={DRnotesIndex}
                    >
                      <h3 className="mb-3">{DRnotesItem.title}</h3>
                      <p className="mb-3">{DRnotesItem.detail}</p>
                      <div className="flex items-center flex-wrap gap-3 mb-4">
                        <h5>{DRnotesItem.name}</h5>
                        <h5 className="ml-auto date-label-text">
                          {DRnotesItem.dateTime}
                        </h5>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="note-label flex items-center justify-center">
                          <span>{DRnotesItem.label}</span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {isAddButton && (
        <>
          <Button className="mb-2" onClick={handleBack}>
            Back
          </Button>
          <RichTextEditor
            handleRichTextHtml={handleRichTextHtml}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </>
  );
};

export default TNWriteNote;
