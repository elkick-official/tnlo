import { useState } from "react";
import { TNInput } from "../../common/TNInput/TNInput"
import { TNButton } from "../../common/TNButton/TNButton";
import { Icons } from "../../../const/icons";
import { TNTable } from "../../common/TNTable/TNTable";
import { submitColumns, submitDataSource } from "../../../const/data";

export const TNSubmissionForm = () => {
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
            <div className="flex items-center gap-6 mt-4">
                <TNInput
                    id="dr-note-search"
                    datatestid="dr-note-search-testid"
                    type="text"
                    name="drNoteSearch"
                    // value={inputValue}
                    label="what are you looking for?"
                    placeholder="what are you looking for?"
                    ILInputLabelClass="mb-0 data-repository-seacrhbar-input"
                    handleChange={handleInputChange}
                    textAreaShow={false}
                    readOnly={false}
                    searchBarControl
                    errorMsg="This is an error message"
                />
                <div className="flex items-center gap-4">
                    <TNButton
                        id="create"
                        datatestid="create-testid"
                        type="button"
                        ILBtnClass="btn-transparent"
                        handleChange={handleButtonClick}
                        disabled={false}
                        >
                            <b className="lh-0 mr-3">{Icons.importIcon}</b>
                            Import
                    </TNButton>
                    <TNButton
                        id="close"
                        datatestid="close-testid"
                        type="button"
                        ILBtnClass="btn-transparent"
                        handleChange={handleButtonClick}
                        disabled={false}
                        >
                            <b className="lh-0 mr-3">{Icons.exportIcon}</b>
                            Export
                    </TNButton>
                </div>
            </div>
            <div className="mt-4">
                <TNTable dataSource={submitDataSource} columns={submitColumns}/>
            </div>
        </>
    )
}