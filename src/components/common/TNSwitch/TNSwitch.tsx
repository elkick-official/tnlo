import { Switch } from "antd";
import  "./TNSwitch.css";
import { FC } from "react";
interface switchProps {
    label: string;
    handleChange: (checked: boolean) => void;
    checked?: boolean
}
export const TNSwitch:FC<switchProps> = ({
    label,
    handleChange,
    checked = false
}) => {
  
    return(
        <>
            <Switch defaultChecked onChange={handleChange} checked={checked}/>
            <label className="fw-600">{label}</label>
        </>
    )
}