import React, { useState } from "react";
import { noticeFile } from "../../const/imageData";
import {
  dataLegencyFile,
  dataLegencyFolder,
  legencyModifiedOptions,
  legencyTypeOptions,
} from "../../const/data";
import "./TNFolderFiles.css";
import { IBreadCrumbs, IFolder } from "../../types/legacyData.types";
import FoldersBreadcrumbs from "./FoldersBreadcrumbs";
import { FolderOpenOutlined, MoreOutlined } from "@ant-design/icons";
import { pdf } from "../../assets";
import { Image, Tabs } from "antd";
import { TNSelect } from "../common/TNSelect/TNSelect";
import { lddItems } from "../../constOptions/Ldd.options";

interface Props {
  currentFolders: IFolder[];
  currentFiles: IFolder[];
  breadcrumbs: IBreadCrumbs[];
  navigateToFolder: (params: string, param2: string) => void;
}

export const TNFolderFiles = ({
  currentFolders,
  currentFiles,
  navigateToFolder,
  breadcrumbs,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState<
    string | number | undefined
  >(undefined);

  const handleSelectChange = (value: string | number) => {
    setSelectedValue(value);
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <>
      <div className="ldd-top-filters">
        <FoldersBreadcrumbs
          breadcrumbs={breadcrumbs}
          navigateToFolder={navigateToFolder}
        />
        <div>
          <Tabs defaultActiveKey="1" items={lddItems} onChange={onChange} />
        </div>
      </div>

      <div className="legency-data-top-space legency-data-select-box flex items-center gap-6 pt-0 pb-6">
        <TNSelect
          label="Type"
          options={legencyTypeOptions}
          value={selectedValue}
          onChange={handleSelectChange}
          placeholder="Please select"
        />
        <TNSelect
          label="Modified"
          options={legencyModifiedOptions}
          value={selectedValue}
          onChange={handleSelectChange}
          placeholder="Please select"
        />
      </div>
      <div className="mt-3">
        <h4 className="fw-500">Folders</h4>
        <div className="data-legency-folder-view grid mt-5">
          {currentFolders.map((dlFolderItem, dlFolderIndex) => {
            return (
              <>
                <div
                  className="ldd-folder-n-file cursor-pointer"
                  onClick={() =>
                    navigateToFolder(dlFolderItem?.id, dlFolderItem?.name)
                  }
                >
                  <div className="ldd-folder-n-file-name">
                    <div className="flex gap-4">
                      <span>
                        {<FolderOpenOutlined style={{ fontSize: "16px" }} />}
                      </span>
                      <span>{dlFolderItem?.name || ""}</span>
                    </div>
                    <span>
                      {" "}
                      <MoreOutlined style={{ fontSize: "18px" }} />
                    </span>
                  </div>
                </div>
                {/* <div
                  className="data-legency-folder-box-new flex justify-end flex-col transition-smooth"
                  key={dlFolderIndex}
                  onClick={() =>
                    navigateToFolder(dlFolderItem?.id, dlFolderItem?.name)
                  }
                >
                  <h4 className="fw-500 h5">{dlFolderItem?.name}</h4>
                </div> */}
              </>
            );
          })}
        </div>
      </div>
      <div className="mt-7">
        <h4 className="fw-500">Files</h4>
        {/* <hr className="opacity-03" /> */}
        <div className="data-legency-files-view grid mt-5">
          {currentFiles.map((dlFileItem, dlFileIndex) => {
            return (
              <>
                <div className="ldd-folder-n-file">
                  <div className="ldd-folder-n-file-icon">
                    <Image src={pdf} width={130} height={130} />
                  </div>
                  <div className="ldd-folder-n-file-name">
                    <div className="flex gap-4">
                      <span>Name</span>
                    </div>
                    <span>
                      {" "}
                      <MoreOutlined style={{ fontSize: "18px" }} />
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
