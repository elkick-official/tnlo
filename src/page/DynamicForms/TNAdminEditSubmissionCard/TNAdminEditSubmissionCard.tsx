import { useState } from "react";
import { TNButton, TNEditSubmissionTab, TNHeader, TNSwitch } from "../../../components";
import "./TNAdminEditSubmissionCard.css";
 const TNAdminEditSubmissionCard = () => {
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
            <div className="w-full legency-data-tab-wrap bg-tnl-white mt-0 edit-submission-card">
                <div className="flex items-center flex-wrap gap-3 mb-4">
                    <h3 className="mb-0">Political Rally</h3>
                    <h5 className="ml-auto date-label-text fw fw-500 transition-smooth text-right"><b>Updated at :</b>&nbsp;Jul 20, 2024, 2:44:30 PM</h5>
                </div>
                <h3 className="mb-12 fw-500">Political rally in Thambaram</h3>
                <div className="flex items-center gap-3">
                    <TNSwitch
                        label="Publish"
                        handleChange={handleSwitchChange('Publish')}
                        checked={switchStates.Publish}
                    />
                    <div className="flex items-center gap-3 ml-auto">
                        <TNButton
                        id="create"
                        datatestid="create-testid"
                        type="button"
                        ILBtnClass=""
                        handleChange={handleButtonClick}
                        disabled={false}
                        >
                            Save Changes
                        </TNButton>
                        <TNButton
                        id="close"
                        datatestid="close-testid"
                        type="button"
                        ILBtnClass="btn-transparent"
                        handleChange={handleButtonClick}
                        disabled={false}
                        >
                            Delete
                        </TNButton>
                    </div>
                </div>
            </div>
         </section>
         <section className="xx-space">
            <div className="legency-data-tab-wrap bg-tnl-white mt-0">
                <TNEditSubmissionTab/>
            </div>
        </section>
        </>
    )
}
export default TNAdminEditSubmissionCard;