import { Col, Form, Row } from "antd";
import { TNButton, TNInput } from "../../../components";
import { Link } from "react-router-dom";
import { useLoginHook } from "../../../hooks";
import "./../Authentication.css";
import { logo } from "../../../const/imageData";
const Login = () => {
  // input js start
  const { handleLogin, onFinishFailed } = useLoginHook();
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
            <Link
              to="https://tejis.ai/"
              className="py-1 fw-700 white text-tnl-white"
            >
              Tejis.ai
            </Link>
          </span>
        </div>
        <div className="auth-box-col w-100 auth-right-col flex py-5 py-md-8">
          <div className="auth-form-box">
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
                        message: "Please input your username!",
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
                    <TNButton
                      id="create"
                      datatestid="create-testid"
                      type="submit"
                      ILBtnClass="w-full"
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
