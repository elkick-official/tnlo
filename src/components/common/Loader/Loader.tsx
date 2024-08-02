import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";

const Loader = () => {
  return (
    <div>
      <Spinner />
    </div>
  );
};

export const Spinner = () => <Spin indicator={<LoadingOutlined spin />} />;
export default Loader;
