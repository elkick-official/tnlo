import { Col, Form, Row, Spin } from "antd";
import { TNButton, TNInput } from "../../../components";
import { Link } from "react-router-dom";
import { useLoginHook } from "../../../hooks";
import { logo } from "../../../const/imageData";
import Loader from "../../../components/common/Loader/Loader";
import { useState } from "react";
import { TNInputOTP } from "../../../components/common/TNInputOTP/TNInputOTP";
import "./../Authentication.css";
const Login = () => {
  // input js start
  const { handleLogin, onFinishFailed, isLoginLoading } = useLoginHook();
  // react OTP start
  const [otp, setOtp] = useState("");

  const handleChangeOTP = (otp: string) => {
      setOtp(otp);
  };
  // react OTP end
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
          {/* // Login start */}
          <div className="auth-form-box hidden">
            <h1 className="big primary-title text-center">Welcome Back!</h1>
            <h6 className="title-label text-center mt-3">
              Enter your email and password to get started
            </h6>
            <Row gutter={24} className="">
              <Form
                name="login"
                layout="vertical"
                initialValues={{ remember: false }}
                onFinish={handleLogin}
                className="mt-8"
                onFinishFailed={onFinishFailed}
                requiredMark={false}
                autoComplete="off"
              >
                <Col xs={24}>
                  <Form.Item
                    label="Email"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <TNInput
                      id="username-input"
                      datatestid="df-Label-testid"
                      type="email"
                      name="dfLabel"
                      placeholder="Enter your email"
                      ILInputLabelClass=""
                      textAreaShow={false}
                      readOnly={false}
                      errorMsg=""
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <TNInput
                      id="username-input"
                      datatestid="df-Label-testid"
                      type="password"
                      name="dfLabel"
                      placeholder="Enter your password"
                      ILInputLabelClass=""
                      textAreaShow={false}
                      readOnly={false}
                      errorMsg=""
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} className="text-right mb-5">
                  <span>
                    Forgot password?{" "}
                    <Link to="/forgot-password">Change now</Link>
                  </span>
                </Col>
                <Col xs={24}>
                  <Form.Item>
                    <Spin spinning={isLoginLoading}>
                      <TNButton
                        id="create"
                        datatestid="create-testid"
                        type="submit"
                        ILBtnClass="w-full"
                        disabled={isLoginLoading}
                        htmlType="submit"
                      >
                        Sign In
                      </TNButton>
                    </Spin>
                  </Form.Item>
                </Col>
                <Col xs={24} className="text-center mt-4">
                  <span>
                    Register your&nbsp;
                    <Link to="/register">Account?</Link>
                  </span>
                </Col>
              </Form>
            </Row>
          </div>
          {/* // Login end */}
          {/* // react OTP start */}
          <div className="auth-form-box">
            <h1 className="big primary-title text-center">Verify OTP</h1>
            <h6 className="title-label text-center mt-3">
              Enter your OTP to get started
            </h6>
            <Row gutter={24} className="">
              <Form
                name="forgotPassword"
                layout="vertical"
                initialValues={{ remember: false }}
                // onFinish={handleForgotPassword}
                className="mt-8"
                onFinishFailed={onFinishFailed}
                requiredMark={false}
                autoComplete="off"
              >
                <Col xs={24}>
                  <TNInputOTP value={otp} onChangeOTP={handleChangeOTP} numInputs={4} />
                </Col>
                <Col xs={24}>
                  <TNButton
                    id="create"
                    datatestid="create-testid"
                    type="button"
                    ILBtnClass="w-full"
                    handleChange={() => {return false;}}
                    disabled={false}
                  >
                    Verify OTP
                  </TNButton>
                </Col>
                <Col xs={24} className="text-center mt-4">
                  <span>
                    Didn't Receive OTP?&nbsp;
                    <Link to="/login">Resend</Link>
                  </span>
                </Col>
              </Form>
            </Row>
          </div>
          {/* // react OTP end */}
        </div>
      </div>
    </>
  );
};
export default Login;
