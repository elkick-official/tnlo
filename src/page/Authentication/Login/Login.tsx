import { Col, Form, Input, Row } from "antd";
import { TNButton, TNInput } from "../../../components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../Authentication.css";
const Login = () => {
  // input js start
  const [inputValue, setInputValue] = useState<string>("");

  const handleLogin = (values) => {
    console.log({ values });
  };

  const onFinishFailed = () => {};
  // input js end
  //  LoginNavigate
  const dashboardPage = useNavigate();
  const dashboardNavigate = () => {
    dashboardPage("/");
  };
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
            <h1 className="big primary-title text-center">Welcome Back!</h1>
            <h6 className="title-label text-center">
              Enter your email and password get started
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
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <TNInput
                      id="username-input"
                      datatestid="df-Label-testid"
                      type="email"
                      name="dfLabel"
                      // value={inputValue}
                      // label="Email"
                      placeholder="Enter your email"
                      ILInputLabelClass=""
                      // handleChange={handleInputChange}
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
                      // value={inputValue}
                      placeholder="Enter your password"
                      ILInputLabelClass=""
                      // handleChange={handleInputChange}
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
                    <TNButton
                      id="create"
                      datatestid="create-testid"
                      type="submit"
                      ILBtnClass="w-full"
                      //   handleChange={dashboardNavigate}
                      disabled={false}
                      htmlType="submit"
                    >
                      Sign In
                    </TNButton>
                  </Form.Item>
                </Col>
              </Form>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
