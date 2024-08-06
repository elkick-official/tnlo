import { useNavigate } from "react-router-dom";

type ForgotPasswordHookReturnType = {
  handleForgotPassword: (values: unknown) => void;
  onFinishFailed: () => void;
  loginNavigate: () => void;
  otpNavigate: () => void;
};

export const useForgotPasswordHook = (): ForgotPasswordHookReturnType => {
  const navigate = useNavigate();

  const loginNavigate = () => {
    navigate("/login");
  };
  const otpNavigate = () => {
    navigate("/otp");
  };
  const handleForgotPassword = async (values: unknown) => { };
  const onFinishFailed = () => { };

  return { handleForgotPassword, onFinishFailed, loginNavigate, otpNavigate };
};
