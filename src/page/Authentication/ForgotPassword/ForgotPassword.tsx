import { Col, Form, Row } from "antd";
import { TNButton, TNInput } from "../../../components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../Authentication.css"
const ForgotPassword = () => {
     // input js start
     const [inputValue, setInputValue] = useState<string>("");

     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         setInputValue(e.target.value);
     };
     // input js end
    //  LoginNavigate
    const loginPage = useNavigate();
    const loginNavigate = () => {
        loginPage("/login")
    }
    return(
        <>
            <div className="auth-section flex">
                <div className="auth-left-col">
                    <div className="auth-box-content">
                        {/* <h1 className="big primary-title text-center">Welcome Back!</h1> */}
                    </div>
                </div>
                <div className="auth-right-col flex">
                    <div className="auth-form-box">
                        <h1 className="big primary-title text-center">Forgot Password?</h1>
                        <h6 className="title-label text-center">All good. Enter your account's registerd email address and we'll send you a code to reset your password.</h6>
                        <Row gutter={24} className="">
                            <Form>
                                <Col xs={24}>
                                    <TNInput
                                    id="df-Label"
                                    datatestid="df-Label-testid"
                                    type="email"
                                    name="dfLabel"
                                    // value={inputValue}
                                    label="Email"
                                    placeholder="Enter your email address"
                                    ILInputLabelClass=""
                                    handleChange={handleInputChange}
                                    textAreaShow={false}
                                    readOnly={false}
                                    // errorMsg="Please input your user name!"
                                    />
                                </Col>
                                <Col xs={24} className="mt-10 mb-3">
                                    <TNButton
                                    id="create"
                                    datatestid="create-testid"
                                    type="button"
                                    ILBtnClass="w-full btn-transparent"
                                    handleChange={() => {return false}}
                                    disabled={false}
                                    >
                                        Send Code
                                    </TNButton>
                                </Col>
                                <Col xs={24}>
                                    <TNButton
                                    id="create"
                                    datatestid="create-testid"
                                    type="button"
                                    ILBtnClass="w-full"
                                    handleChange={loginNavigate}
                                    disabled={false}
                                    >
                                        Return Login
                                    </TNButton>
                                </Col>
                            </Form>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ForgotPassword;