import { Col, Row } from "antd";
import { TNButton, TNFullPageCalendar, TNHeader, TNInput } from "../../components";
import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./CalendarForecast.css";
const CalendarForecast = () => {
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
 
  return <div>
       <TNHeader children="Calendar Forecast"/>
       <section className="xx-space yy-space">
          <div className="legency-data-digitization-head-wrap flex items-center">
                <div>
                    <TNInput
                    id="calendar-search"
                    datatestid="calendar-search-testid"
                    type="text"
                    name="calendarSearch"
                    value={inputValue}
                    label="Type something"
                    placeholder="Type something"
                    ILInputLabelClass="mb-0 data-repository-seacrhbar-input"
                    handleChange={handleInputChange}
                    textAreaShow={false}
                    readOnly={false}
                    searchBarControl
                    errorMsg="This is an error message"
                    />
                </div>
                <div className="ml-auto">
                  <TNButton
                    id="add-program"
                    datatestid="add-program-testid"
                    type="button"
                    ILBtnClass="additional-class ml-auto"
                    handleChange={handleButtonClick}
                    disabled={false}
                    >
                      
                        <PlusCircleOutlined className="w-auto width min-w-auto pa-0 me-2 height min-h-auto"/>
                        Add Program
                    </TNButton>
                </div>
            </div>
            <Row gutter={30}>
              <Col xs={6}>
                <div className="legency-data-tab-wrap bg-tnl-white mt-3">
                  <h3 className="pb-3 fw-500">Calander</h3>
                  <hr className="opacity-03"/>
                  <TNFullPageCalendar fullscreen={false}/>
                </div>
              </Col>
              <Col xs={18}>
                <div className="legency-data-tab-wrap bg-tnl-white mt-3">
                  <h3 className="pb-3 fw-500">Time Picker</h3>
                  <hr className="opacity-03"/>
                  <TNFullPageCalendar fullscreen={true}/>
                </div>
              </Col>
            </Row>
        </section>
  </div>
};

export default CalendarForecast;
