import { Col, Form, Row } from "antd";
import { Link } from "react-router-dom";
import { TNButton, TNInput } from "../../../components";
import { logo } from "../../../const/imageData";
import { useForgotPasswordHook } from "../../../hooks";
import "./../Authentication.css";
const ForgotPassword = () => {
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
            <h1 className="big primary-title text-center">Forgot Password?</h1>
            <h6 className="title-label text-center mt-4">
              All good. Enter your account's registerd email address and we'll
              send you a code to reset your password.
            </h6>
            <Row gutter={24} className="">
              <Form
                name="forgotPassword"
                layout="vertical"
                initialValues={{ remember: false }}
                onFinish={handleForgotPassword}
                className="mt-8"
                onFinishFailed={onFinishFailed}
                requiredMark={false}
                autoComplete="off"
              >
                <Col xs={24}>
                  <Form.Item
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
                      label="Email"
                      placeholder="Enter your email"
                      ILInputLabelClass=""
                      textAreaShow={false}
                      readOnly={false}
                      errorMsg=""
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} className="mt-10 mb-3">
                  <Form.Item>
                    <TNButton
                      id="create"
                      datatestid="create-testid"
                      type="submit"
                      ILBtnClass="w-full btn-transparent"
                      disabled={false}
                      htmlType="submit"
                    >
                      Send Code
                    </TNButton>
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
                    Return Login
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
export default ForgotPassword;
