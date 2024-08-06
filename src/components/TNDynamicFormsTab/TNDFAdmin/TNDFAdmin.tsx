import React, { useState } from "react";
import {DfAdminData, drNoteOptions } from "../../../const/data";
import { TNSelect } from "../../common/TNSelect/TNSelect";
import { TNDatePicker } from "../../common/TNDatePicker/TNDatePicker";
import { TNSwitch } from "../../common/TNSwitch/TNSwitch";
import { Link } from "react-router-dom";
import "./TNDFAdmin.css";

  export const TNDFAdmin = () => {
    // select option js start
    const [selectedValue, setSelectedValue] = useState<
        string | number | undefined
    >(undefined);

    const handleSelectChange = (value: string | number) => {
        setSelectedValue(value);
    };
    // select option js end
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
           <div className="legency-data-digitization-head-wrap flex items-end mt-3 gap-5 legency-data-digitization-head-tab-wrap">
                <div className="flex item-center gap-6">
                    <TNSelect
                        label="Status"
                        options={drNoteOptions}
                        value={selectedValue}
                        onChange={handleSelectChange}
                        placeholder="Please select value"
                    />
                   <TNDatePicker label="Modified" options={[]}/>
                </div>
                <div className="flex self-center gap-6 ml-auto mt-4">
                <TNSwitch
                        label="Published"
                        handleChange={handleSwitchChange('published')}
                        checked={switchStates.published}
                    />
                    <TNSwitch
                        label="Un Published"
                        handleChange={handleSwitchChange('unpublished')}
                        checked={switchStates.unpublished}
                    />
                </div>
            </div>
            <hr className="opacity-03 my-4"/>
            <div className="mt-3">
                <h3 className="pb-3 fw-500">Admin</h3>
                <div className="notes-grid-wrap grid">
                    {DfAdminData.map((DFItem, DFIndex) => {
                        return(
                            <>
                                <Link className="notes-col w-full h-full transition-smooth dynamic-form-admin-card" key={DFIndex} to={"/admin-edit-submission-card"}>
                                    <div className="flex items-center flex-wrap gap-3 mb-4">
                                        <h3 className="mb-0">{DFItem.title}</h3>
                                        <h5 className="ml-auto date-label-text fw fw-500 transition-smooth text-right"><b>Updated at :</b>&nbsp;{DFItem.dateTime}</h5>
                                    </div>
                                    <h3 className="mb-3 text-tnl-canadian-pine fw-500">{DFItem.titleLabel}</h3>
                                   
                                    <div className="flex items-center gap-2">
                                        <div className="note-label bg bg-tnl-retro-lime flex items-center justify-center text-tnl-night-night"><span>{DFItem.label}</span></div>
                                        <h5 className="ml-auto fw fw-600"><b>Submission :</b>&nbsp;{DFItem.number}</h5>
                                    </div>
                                </Link>
                            </>
                        )
                    }) }
                </div>
            </div>
        </>
    )
}