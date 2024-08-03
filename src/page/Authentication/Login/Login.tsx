import { Col, Form, Row } from "antd";
import { TNButton, TNInput } from "../../../components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../Authentication.css";
const Login = () => {
     // input js start
     const [inputValue, setInputValue] = useState<string>("");

     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         setInputValue(e.target.value);
     };
     // input js end
     //  LoginNavigate
    const dashboardPage = useNavigate();
    const dashboardNavigate = () => {
        dashboardPage("/")
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
                        <h1 className="big primary-title text-center">Welcome Back!</h1>
                        <h6 className="title-label text-center">Enter your email and password get started</h6>
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
                                    errorMsg="Please input your user name!"
                                    />
                                </Col>
                                <Col xs={24}>
                                    <TNInput
                                    id="df-Label"
                                    datatestid="df-Label-testid"
                                    type="password"
                                    name="dfLabel"
                                    // value={inputValue}
                                    label="Password"
                                    placeholder="Enter your password"
                                    ILInputLabelClass=""
                                    handleChange={handleInputChange}
                                    textAreaShow={false}
                                    readOnly={false}
                                    errorMsg="Please input your user password!"
                                    />
                                </Col>
                                <Col xs={24} className="text-right mb-5">
                                    <span>Forgot password? <Link to="/forgot-password">Change now</Link></span>
                                </Col>
                                <Col xs={24}>
                                    <TNButton
                                    id="create"
                                    datatestid="create-testid"
                                    type="button"
                                    ILBtnClass="w-full"
                                    handleChange={dashboardNavigate}
                                    disabled={false}
                                    >
                                        Sign In
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
export default Login;