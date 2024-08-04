import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doLogin, getUserById } from "../../api";
import useDetailStore from "../../store/useStore";
import { errorNotification, infoNotification } from "../../utils/notification.util";

type LoginHookReturnType = {
  handleLogin: (values: loginFormValues) => void;

  onFinishFailed: () => void;
  isLoginLoading: boolean
};
type loginFormValues = {
  username: string;
  password: string;
};
export const useLoginHook = (): LoginHookReturnType => {
  const navigate = useNavigate();
  const { userDetails, setUserDetails } = useDetailStore();
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const handleLogin = async (values: loginFormValues) => {
    setIsLoginLoading(true)
    try {
      const loginResponseData = await doLogin(values);
      if (loginResponseData?.jwtToken) {
        localStorage.setItem("_token", loginResponseData?.jwtToken);
        const userDetailsResponse = await getUserById(loginResponseData?.userId);
        setUserDetails(userDetailsResponse);
        navigate("/legacy-data-digitilization");
      } else {
        infoNotification("Email or Password is wrong.");
      }
      setIsLoginLoading(false)
    } catch (error) {
      errorNotification("Something went wrong, please try again.")
      setIsLoginLoading(false)
    }
  };

  useEffect(() => {
    console.log({ userDetails });
  }, [userDetails]);

  const onFinishFailed = () => { };

  return { handleLogin, onFinishFailed, isLoginLoading };
};
