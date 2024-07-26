import { Header } from "antd/es/layout/layout";
import { FC, MouseEventHandler, ReactNode } from "react";
import { Icons } from "../../../const/icons";
import "./TNHeader.css";
interface TNButtonProps {
  children?: ReactNode;
}
export const TNHeader: FC<TNButtonProps> = ({ children, ...rest }) => {
  return (
    <>
      <Header
        className="flex bg-tnl-white xx-space sticky top-0 z-999"
        {...rest}
      >
        <h3>{children}</h3>
        <div className="ml-auto">
          <div className="flex items-center gap-4">
            <span className="lh-0">{Icons.userProfileIcon}</span>
            <h4 className="mb-0 fw-500">Natarajan</h4>
          </div>
        </div>
      </Header>
    </>
  );
};
