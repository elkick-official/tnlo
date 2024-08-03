import { useNavigate } from "react-router-dom";
import { doLogin, getUserById } from "../../api";
import useDetailStore from "../../store/useStore";
import { useEffect } from "react";

type LoginHookReturnType = {
  handleLogin: (values: loginFormValues) => void;

  onFinishFailed: () => void;
};
type loginFormValues = {
  username: string;
  password: string;
};
export const useLoginHook = (): LoginHookReturnType => {
  const navigate = useNavigate();
  const { userDetails, setUserDetails } = useDetailStore();
  const handleLogin = async (values: loginFormValues) => {
    const loginResponseData = await doLogin(values);
    localStorage.setItem("_token", loginResponseData?.data?.jwtToken);
    const userDetailsResponse = await getUserById(
      loginResponseData?.data?.userId
    );
    setUserDetails(userDetailsResponse?.data);
    navigate("/");
  };

  useEffect(() => {
    console.log({ userDetails });
  }, [userDetails]);
  const onFinishFailed = () => {};

  return { handleLogin, onFinishFailed };
};
