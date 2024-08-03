import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doLogin, getUserById } from "../../api";
import useDetailStore from "../../store/useStore";
import { infoNotification } from "../../utils/notification.util";

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
    console.log({ loginResponseData })
    if (loginResponseData?.jwtToken) {
      localStorage.setItem("_token", loginResponseData?.jwtToken);
      const userDetailsResponse = await getUserById(loginResponseData?.userId);
      setUserDetails(userDetailsResponse);
      navigate("/legacy-data-digitilization");
    } else {
      infoNotification("Unauthorized.");
    }
  };

  useEffect(() => {
    console.log({ userDetails });
  }, [userDetails]);

  const onFinishFailed = () => { };

  return { handleLogin, onFinishFailed };
};
