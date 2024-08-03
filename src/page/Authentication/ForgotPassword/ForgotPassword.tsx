import { Col, Form, Row } from "antd";
import { TNButton, TNInput } from "../../../components";
import "./../Authentication.css";
import { useForgotPasswordHook } from "../../../hooks";
const ForgotPassword = () => {
  const { handleForgotPassword, onFinishFailed, loginNavigate } =
    useForgotPasswordHook();

  return (
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
            <h6 className="title-label text-center">
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
                        message: "Please input your username!",
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
