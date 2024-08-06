import OTPInput from "react-otp-input";
import { Form } from "antd";
import { FC } from "react";
import "./TNInputOTP.css";

interface OTPProps {
  value: string;
  onChangeOTP: (otp: string) => void;
  numInputs: number;
}

export const TNInputOTP: FC<OTPProps> = ({ value, onChangeOTP, numInputs }) => {
  return (
    <Form.Item className="otp-input-wrap">
      <OTPInput
        value={value}
        onChange={onChangeOTP}
        numInputs={numInputs}
        renderSeparator={<span className="otp-separator"></span>}
        renderInput={(props) => <input {...props} />}
        shouldAutoFocus={true}
      />
    </Form.Item>
  );
};
