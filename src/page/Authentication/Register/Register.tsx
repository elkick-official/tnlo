import { Col, Form, Row } from "antd";
import { TNButton, TNInput } from "../../../components";
import { logo } from "../../../const/imageData";
import { useForgotPasswordHook } from "../../../hooks";
import { useState } from "react";
import { TNInputOTP } from "../../../components/common/TNInputOTP/TNInputOTP";
import "./../Authentication.css";
const Register = () => {
  const { handleForgotPassword, onFinishFailed, loginNavigate } =
    useForgotPasswordHook();

  return (
    <>
      <div className="auth-section flex">
        <div className="auth-box-col w-100 auth-left-col px-2 px-sm-5 flex">
          <div className="auth-box-content py-6 text-center">
            <img src={logo} className="auth-logo" />
            <h2 className="big primary-title text-center white text-tnl-white pb-0">
              Tamil Nadu <br />
              Law and Order IMS
            </h2>
          </div>
          <span className="d-block py-2 auth-powered-label text-tnl-white h5 text-center flex items-center justify-center gap-4">
            Powered by{" "}
            <a
              target="_blank"
              href="https://tejis.ai/"
              className="py-1 fw-700 white text-tnl-white"
            >
              Tejis.ai
            </a>
          </span>
        </div>
        <div className="auth-box-col w-100 auth-right-col flex py-5 py-md-8">
          <div className="auth-form-box">
            <h1 className="big primary-title text-center">Register Account</h1>

            <Row gutter={24} className="">
              <Form
                name="registerAccount"
                layout="vertical"
                initialValues={{ remember: false }}
                // onFinish={handleForgotPassword}
                className="mt-8"
                // onFinishFailed={onFinishFailed}
                requiredMark={false}
                autoComplete="off"
              >
                <Col xs={24}>
                  <Form.Item
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your first name!",
                      },
                    ]}
                  >
                    <TNInput
                      id="firstName-input"
                      datatestid="df-firstName-testid"
                      type="text"
                      name="dffirstName"
                      label="First Name"
                      placeholder="Enter your first name"
                      ILInputLabelClass=""
                      textAreaShow={false}
                      readOnly={false}
                      errorMsg=""
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your last name!",
                      },
                    ]}
                  >
                    <TNInput
                      id="lastName-input"
                      datatestid="df-lastName-testid"
                      type="text"
                      name="dflastName"
                      label="Last Name"
                      placeholder="Enter your last name"
                      ILInputLabelClass=""
                      textAreaShow={false}
                      readOnly={false}
                      errorMsg=""
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name="userEmail"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email address!",
                      },
                    ]}
                  >
                    <TNInput
                      id="userEmail-input"
                      datatestid="df-userEmail-testid"
                      type="email"
                      name="dfuserEmail"
                      label="Emaill address"
                      placeholder="Enter your email address"
                      ILInputLabelClass=""
                      textAreaShow={false}
                      readOnly={false}
                      errorMsg=""
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name="mobileNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your mobile number!",
                      },
                    ]}
                  >
                    <TNInput
                      id="mobileNumber-input"
                      datatestid="df-mobileNumber-testid"
                      type="number"
                      name="dfmobileNumber"
                      label="Mobile number"
                      placeholder="Enter your mobile number"
                      ILInputLabelClass=""
                      textAreaShow={false}
                      readOnly={false}
                      errorMsg=""
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <TNInput
                      id="password-input"
                      datatestid="df-password-testid"
                      type="password"
                      name="dfpassword"
                      label="password"
                      placeholder="Enter your password"
                      ILInputLabelClass=""
                      textAreaShow={false}
                      readOnly={false}
                      errorMsg=""
                    />
                  </Form.Item>
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
                    Register
                  </TNButton>
                </Col>
              </Form>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
