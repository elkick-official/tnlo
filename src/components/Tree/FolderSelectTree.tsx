import type { GetProp, TreeSelectProps } from "antd";
import { TreeSelect } from "antd";
import React from "react";

const FolderSelectTree: React.FC = ({
  value,
  onChange,
  treeData,
  onLoadData,
}: any) => {
  return (
    <TreeSelect
      className="w-full"
      treeDataSimpleMode
      style={{ width: "100%" }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
      placeholder="Select Folder"
      onChange={onChange}
      loadData={onLoadData}
      treeData={treeData}
    />
  );
};

export default FolderSelectTree;
