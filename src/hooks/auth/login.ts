import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doLogin, getJwtToken, getUserById } from "../../api";
import useDetailStore from "../../store/useStore";
import { errorNotification, infoNotification } from "../../utils/notification.util";



type loginFormValues = {
  username: string;
  password: string;
};
export const useLoginHook = () => {
  const [isUserExist, setIsUserExist] = useState(false)
  const navigate = useNavigate();
  const { userDetails, setUserDetails } = useDetailStore();
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [userTryingLoginDetails, setUserTryinLoginDetails] = useState({})
  const [otp, setOtp] = useState("");

  console.log({ otp: otp?.length })
  const handleChangeOTP = (otp: string) => {
    setOtp(otp);
  };

  const handleBack = () => {
    setIsUserExist(false)
  }

  const handleSubmitOtp = async () => {
    if (otp?.length == 4) {
      setIsLoginLoading(true)
      const paylaod = {
        userId: userTryingLoginDetails?.id,
        otp: otp
      }

      try {
        const loginResponseData = await getJwtToken(paylaod);
        console.log({ loginResponseData })
        if (loginResponseData?.jwtToken) {
          localStorage.setItem("_token", loginResponseData?.jwtToken);
          const userDetailsResponse = await getUserById(loginResponseData?.userId, loginResponseData?.jwtToken);
          setUserDetails(userDetailsResponse);
          setIsLoginLoading(false)
          navigate("/legacy-data-digitilization");
        } else {
          infoNotification("Incorrect code. Please try again.");
        }
        setIsLoginLoading(false)
      } catch (error) {
        console.log(error)
        errorNotification("Something went wrong, please try again.")
        setIsLoginLoading(false)
      }
    } else {
      infoNotification("Incomplete Code, Enter all 4 digits.")
      setIsLoginLoading(false)
    }
  }

  const handleLogin = async (values: loginFormValues) => {
    setIsLoginLoading(true)
    try {
      const loginResponseData = await doLogin(values);

      if (loginResponseData?.isExists) {
        setUserTryinLoginDetails(loginResponseData)
        setIsUserExist(true)
      } else {
        infoNotification("Email/Phone or Password is wrong.");
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

  return {
    handleLogin, onFinishFailed, isLoginLoading, isUserExist, handleBack, handleChangeOTP,
    otp,
    handleSubmitOtp
  };
};
