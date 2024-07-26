
import React from "react";
import { Select } from "antd";
import "./TNSelect.css";

interface CustomSelectProps  {
  label?: string;
  options: { label: string; value: string | number }[];
}

export const TNSelect: React.FC<CustomSelectProps> = ({
  label,
  options,
  ...rest
}) => {
  return (
    <div className="custom-select-container">
      {label && <label className="ILInputLabelText fw-500 text-tnl-white-edgar d-block">{label}</label>}
      <Select {...rest} className="ILTextInput">
        {options.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};
