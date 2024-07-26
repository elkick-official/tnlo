import clsx from "clsx";
import React from "react";
import { Icons } from "../../../const/icons";
import "./TNInput.css";

interface TNInputProps {
  id: string;
  datatestid?: string;
  type?: string;
  name?: string;
  value: string;
  label?: string;
  placeholder?: string;
  ILInputLabelClass?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prefix?: React.ReactNode;
  textAreaShow?: boolean;
  rows?: number;
  autoSize?: boolean;
  maxLength?: number;
  searchBarControl?: boolean;
  searchIconPositionLeft?: boolean;
  readOnly?: boolean;
  errorMsg?: string;
  [rest: string]: any;
}

export const TNInput: React.FC<TNInputProps> = ({
  id,
  datatestid,
  type = "text",
  name,
  value,
  label,
  placeholder,
  ILInputLabelClass,
  handleChange,
  prefix,
  textAreaShow,
  rows,
  autoSize,
  maxLength,
  searchBarControl,
  searchIconPositionLeft,
  readOnly,
  errorMsg,
  ...rest
}) => {
  return (
    <>
      {textAreaShow ? (
        <>
          <label
            className={clsx("ILInputLabel w-full", ILInputLabelClass)}
            htmlFor={id}
          >
            {label && (
              <span
                className={clsx(
                  "ILInputLabelText fw-500 text-tnl-white-edgar d-block",
                )}
              >
                {label}
              </span>
            )}
            <textarea
              id={id}
              data-testid={datatestid}
              rows={rows}
              value={value}
              placeholder={placeholder}
              maxLength={maxLength}
              className={clsx("ILTextInput form-control")}
            //   onChange={handleChange}
              // prefix={prefix}
            //   autoSize={autoSize ? 'true' : undefined}
              {...rest}
            />
          </label>
        </>
      ) : searchBarControl ? (
        <>
          <div
            className={clsx(
              "searchBarWrap relative w-full", ILInputLabelClass,
              {
                ["searchPositionStyle"]: searchIconPositionLeft,
              }
            )}
          >
            <input
              id={id}
              data-testid={datatestid}
              type={type}
              name={name}
              value={value}
              placeholder={placeholder}
              className={clsx("ILTextInput form-control")}
              onChange={handleChange}
              // prefix={prefix}
              {...rest}
            />
            <span
              className={clsx(
                "searchIcon lh-0 absolute cursor-pointer",
              )}
            >
              {Icons.search}
            </span>
          </div>
        </>
      ) : (
        <>
          <label
            className={clsx("ILInputLabel w-full", ILInputLabelClass)}
            htmlFor={id}
          >
            {label && (
              <span
                className={clsx(
                  "ILInputLabelText fw-500 text-tnl-white-edgar d-block",
                )}
              >
                {label}
              </span>
            )}
            <input
              id={id}
              data-testid={datatestid}
              type={type}
              name={name}
              value={value}
              placeholder={placeholder}
              className={"ILTextInput form-control"}
              onChange={handleChange}
              readOnly={readOnly}
              {...rest}
            />
            {errorMsg && (
              <span
                className={clsx(
                  "edInputErrorMsg d-block mt-1 error",
                )}
              >
                {errorMsg}
              </span>
            )}
          </label>
        </>
      )}
    </>
  );
};
