import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doLogin, getUserById } from "../../api";
import useDetailStore from "../../store/useStore";

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
    if (loginResponseData) {
      localStorage.setItem("_token", loginResponseData?.jwtToken);
      const userDetailsResponse = await getUserById(loginResponseData?.userId);
      setUserDetails(userDetailsResponse);
      navigate("/");
    } else {
      alert("Unauthorized.");
    }
  };

  useEffect(() => {
    console.log({ userDetails });
  }, [userDetails]);

  const onFinishFailed = () => { };

  return { handleLogin, onFinishFailed };
};
