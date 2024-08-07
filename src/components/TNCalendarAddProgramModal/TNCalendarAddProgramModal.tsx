import { Col, Modal, Row } from "antd";

import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { TNButton } from "../common/TNButton/TNButton";
import { TNInput } from "../common/TNInput/TNInput";
import { TNDatePicker } from "../common/TNDatePicker/TNDatePicker";
import { TNSwitch } from "../common/TNSwitch/TNSwitch";
import { TNSelect } from "../common/TNSelect/TNSelect";
import { calendarCityTypeOptions, calendarDistrictTypeOptions, calendarJurisdictionsTypeOptions, calendarLearderTypeOptions, calendarOrganizerTypeOptions, calendarProgramTypeOptions, calendarRepeatTypeOptions, calendarStationTypeOptions, calendarZoneTypeOptions } from "../../const/data";

export const TNCalendarAddProgramModal = () => {
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
    // modal js start
    const [isAddProgramModalOpen, setIsAddProgramModalOpen] = useState(false);

    const showAddProgramModal = () => {
      setIsAddProgramModalOpen(true);
    };
  
    const handleAddProgramOk = () => {
      setIsAddProgramModalOpen(false);
    };
  
    const handleAddProgramCancel = () => {
      setIsAddProgramModalOpen(false);
    };
    // modal js end
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
    // select option js start 
        // Repeat
        const [selectedRepeatValue, setSelectedRepeatValue] = useState<
        string | number | undefined
        >(undefined);

        const handleSelectRepeatChange = (value: string | number) => {
            setSelectedRepeatValue(value);
        };
        // Jurisdictions
        const [selectedJurisdictionsValue, setSelectedJurisdictionsValue] = useState<
        string | number | undefined
        >(undefined);

        const handleSelectJurisdictionsChange = (value: string | number) => {
            setSelectedJurisdictionsValue(value);
        };
        // Program Type
        const [selectedProgramTypeValue, setSelectedProgramTypeValue] = useState<
        string | number | undefined
        >(undefined);

        const handleSelectProgramTypeChange = (value: string | number) => {
            setSelectedProgramTypeValue(value);
        };
        // Zone Type
        const [selectedZoneTypeValue, setSelectedZoneTypeValue] = useState<
        string | number | undefined
        >(undefined);

        const handleSelectZoneTypeChange = (value: string | number) => {
            setSelectedZoneTypeValue(value);
        };
        // District Type
         const [selectedDistrictTypeValue, setSelectedDistrictTypeValue] = useState<
         string | number | undefined
         >(undefined);
 
         const handleSelectDistrictTypeChange = (value: string | number) => {
             setSelectedDistrictTypeValue(value);
        };
        // City Type
        const [selectedCityTypeValue, setSelectedCityTypeValue] = useState<
        string | number | undefined
        >(undefined);

        const handleSelectCityTypeChange = (value: string | number) => {
            setSelectedCityTypeValue(value);
       };
       // Station Type
       const [selectedStationTypeValue, setSelectedStationTypeValue] = useState<
       string | number | undefined
       >(undefined);

       const handleSelectStationTypeChange = (value: string | number) => {
           setSelectedStationTypeValue(value);
      };
      // Organizer Type
      const [selectedOrganizerTypeValue, setSelectedOrganizerTypeValue] = useState<
      string | number | undefined
      >(undefined);

      const handleSelectOrganizerTypeChange = (value: string | number) => {
          setSelectedOrganizerTypeValue(value);
     };
     // Learder Type
     const [selectedLearderTypeValue, setSelectedLearderTypeValue] = useState<
     string | number | undefined
     >(undefined);

     const handleSelectLearderTypeChange = (value: string | number) => {
         setSelectedLearderTypeValue(value);
    };
    // select option js end
    return(
        <>
            <TNButton
                id="add-program-calendar"
                datatestid="add-program-calendar-testid"
                type="button"
                ILBtnClass="additional-class ml-auto"
                handleChange={showAddProgramModal}
                disabled={false}
                >
                   
                    <PlusCircleOutlined className="w-auto width min-w-auto pa-0 me-2 height min-h-auto"/>
                    Add Program
            </TNButton>
              {/* Create New Form modal */}
            <Modal title="Create New Program" open={isAddProgramModalOpen} onOk={handleAddProgramOk} onCancel={handleAddProgramCancel} centered width={845} className="remove-footer-btn">
                <hr className="opacity-03 mb-4"/>
                <div>
                    <TNInput
                    id="df-title"
                    datatestid="df-title-testid"
                    type="text"
                    name="dfTitle"
                    // value={inputValue}
                    label="Add Title"
                    placeholder="Add Title"
                    ILInputLabelClass=""
                    handleChange={handleInputChange}
                    textAreaShow={false}
                    readOnly={false}
                    errorMsg="This is an error message"
                    />
                </div>
                <div className="flex items-center justify-space-between gap-5 flex-wrap">
                    <TNDatePicker label="Program State date and End Date" showTimeOption={true} options={[]} />
                    <div className="ms-auto flex items-center">
                        <TNButton
                            id=""
                            datatestid="-testid"
                            type="button"
                            ILBtnClass="mr-5 btn-transparent"
                            spanBtnClass="width min-w-auto"
                            handleChange={() => {return false}}
                            disabled={false}
                            >
                                30m
                        </TNButton>
                        <TNSwitch
                            label="All Day"
                            handleChange={handleSwitchChange('Publish')}
                            checked={switchStates.Publish}
                        />
                    </div>
                </div>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={8}>
                        <TNSelect
                            label="Repeat"
                            options={calendarRepeatTypeOptions}
                            value={selectedRepeatValue}
                            onChange={handleSelectRepeatChange}
                            placeholder="Please select value"
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <TNSelect
                            label="Jurisdictions"
                            options={calendarJurisdictionsTypeOptions}
                            value={selectedJurisdictionsValue}
                            onChange={handleSelectJurisdictionsChange}
                            placeholder="Please select value"
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <TNSelect
                            label="Program Type"
                            options={calendarProgramTypeOptions}
                            value={selectedProgramTypeValue}
                            onChange={handleSelectProgramTypeChange}
                            placeholder="Please select value"
                        />
                    </Col>

                    <Col xs={24} md={8}>
                        <TNSelect
                            label="Zone"
                            options={calendarZoneTypeOptions}
                            value={selectedZoneTypeValue}
                            onChange={handleSelectZoneTypeChange}
                            placeholder="Please select value"
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <TNSelect
                            label="District"
                            options={calendarDistrictTypeOptions}
                            value={selectedDistrictTypeValue}
                            onChange={handleSelectDistrictTypeChange}
                            placeholder="Please select value"
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <TNSelect
                            label="City"
                            options={calendarCityTypeOptions}
                            value={selectedCityTypeValue}
                            onChange={handleSelectCityTypeChange}
                            placeholder="Please select value"
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <TNSelect
                            label="Station"
                            options={calendarStationTypeOptions}
                            value={selectedStationTypeValue}
                            onChange={handleSelectStationTypeChange}
                            placeholder="Please select value"
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <TNSelect
                            label="Organizer"
                            options={calendarOrganizerTypeOptions}
                            value={selectedOrganizerTypeValue}
                            onChange={handleSelectOrganizerTypeChange}
                            placeholder="Please select value"
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <TNSelect
                            label="Learder"
                            options={calendarLearderTypeOptions}
                            value={selectedLearderTypeValue}
                            onChange={handleSelectLearderTypeChange}
                            placeholder="Please select value"
                        />
                    </Col>
                </Row>
                <hr className="opacity-03 mt-4"/>
                <div className="flex items-center justify-end pt-4 gap-6">
                    <TNButton
                    id="create"
                    datatestid="create-testid"
                    type="button"
                    ILBtnClass=""
                    handleChange={handleAddProgramCancel}
                    disabled={false}
                    >
                        Create
                    </TNButton>
                    <TNButton
                    id="close"
                    datatestid="close-testid"
                    type="button"
                    ILBtnClass="btn-transparent"
                    handleChange={handleAddProgramCancel}
                    disabled={false}
                    >
                        Cancel
                    </TNButton>
                </div>
            </Modal>
            {/* view modal */}
            {/* <Modal title="" open={isAddProgramModalOpen} onOk={handleAddProgramOk} onCancel={handleAddProgramCancel} centered width={845} className="remove-footer-btn hidden">
                <Row gutter={[16, 16]}>
                    <Col xs={24}>
                        <h4 className="mb-1 fw-600">Title</h4>
                        <h5 className="fw-400 h5">Rally Discussion in Mylapore</h5>
                    </Col>
                    <Col xs={24}>
                       <p className="paragraph-sm-text">Agenda is to come up with a strategy to manage the rally, as there are high profile individuals involved.</p>
                    </Col>
                    <Col xs={24}>
                        <h4 className="mb-1 fw-600">Program State date and End Date</h4>
                        <h5 className="fw-400 h5">Fri 5, Jul 2024 | 10:30 am - 11:00 am</h5>
                    </Col>
                    <Col xs={24} md={8}>
                        <h4 className="mb-1 fw-600">Repeat</h4>
                        <h5 className="fw-400 h5">Do not repeat</h5>
                    </Col>
                    <Col xs={24} md={8}>
                        <h4 className="mb-1 fw-600">Jurisdictions</h4>
                        <h5 className="fw-400 h5">Statewide</h5>
                    </Col>
                    <Col xs={24} md={8}>
                        <h4 className="mb-1 fw-600">Program Type</h4>
                        <h5 className="fw-400 h5">One</h5>
                    </Col>
                    <Col xs={24} md={8}>
                        <h4 className="mb-1 fw-600">Zone</h4>
                        <h5 className="fw-400 h5">Surat</h5>
                    </Col>

                    <Col xs={24} md={8}>
                        <h4 className="mb-1 fw-600">District</h4>
                        <h5 className="fw-400 h5">Surat</h5>
                    </Col>
                    <Col xs={24} md={8}>
                        <h4 className="mb-1 fw-600">City</h4>
                        <h5 className="fw-400 h5">Surat</h5>
                    </Col>
                    <Col xs={24} md={8}>
                        <h4 className="mb-1 fw-600">Station</h4>
                        <h5 className="fw-400 h5">Surat</h5>
                    </Col>
                    <Col xs={24} md={8}>
                        <h4 className="mb-1 fw-600">Organizer</h4>
                        <h5 className="fw-400 h5">BJP</h5>
                    </Col>
                    <Col xs={24} md={8}>
                        <h4 className="mb-1 fw-600">Learder</h4>
                        <h5 className="fw-400 h5">Guruji</h5>
                    </Col>
                </Row>
            </Modal> */}
        </>
    )
}