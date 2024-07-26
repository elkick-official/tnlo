import React, { FC, MouseEventHandler, ReactNode } from 'react';
import { clsx } from 'clsx';
import './TNButton.css';

interface TNButtonProps {
  id?: string;
  datatestid?: string;
  type?: 'button' | 'submit' | 'reset';
  ILBtnClass?: string;
  handleChange?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  disabled?: boolean;
  [key: string]: any; // To allow any other props
}

export const TNButton: FC<TNButtonProps> = ({
  id,
  datatestid,
  type = 'button',
  ILBtnClass,
  handleChange,
  children,
  disabled = false,
  ...rest
}) => {
  return (
    <button
      id={id}
    //   datatestid={datatestid}
      type={type}
      disabled={disabled}
      className={clsx(
        ILBtnClass,
        'customButton btn3 hoverBorder h5 fw-600 text-tnl-white transition-smooth relative cursor-pointer'
      )}
      onClick={handleChange}
      {...rest}
    >
      <span className="flex items-center content-center">
        {children}
      </span>
    </button>
  );
};
