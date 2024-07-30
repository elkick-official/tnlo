import React from "react";
import { noticeFile } from "../../const/imageData";
import { dataLegencyFile, dataLegencyFolder } from "../../const/data";
import "./TNFolderFiles.css";
import { IBreadCrumbs, IFolder } from "../../types/legacyData.types";
import FoldersBreadcrumbs from "./FoldersBreadcrumbs";

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
  return (
    <>
      <div className="mt-3">
        <FoldersBreadcrumbs
          breadcrumbs={breadcrumbs}
          navigateToFolder={navigateToFolder}
        />
        <hr className="opacity-03" />
        <div className="data-legency-folder-view grid mt-5">
          {currentFolders.map((dlFolderItem, dlFolderIndex) => {
            return (
              <>
                <div
                  className="data-legency-folder-box data-legency-folder-box-new flex justify-end flex-col transition-smooth"
                  key={dlFolderIndex}
                  onClick={() =>
                    navigateToFolder(dlFolderItem?.id, dlFolderItem?.name)
                  }
                >
                  <h4 className="fw-500 h5">{dlFolderItem?.name}</h4>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="mt-7">
        <h4 className="pb-3 fw-500">Files</h4>
        <hr className="opacity-03" />
        <div className="data-legency-files-view grid mt-5">
          {currentFiles.map((dlFileItem, dlFileIndex) => {
            return (
              <>
                <div
                  className="data-legency-folder-box transition-smooth"
                  key={dlFileIndex}
                >
                  <h4 className="fw-500 h5 mb-3">{dlFileItem?.name}</h4>
                  {/* <img
                    src={dlFileItem?.img || ""}
                    alt="notice-pdf"
                    className="img-fluid"
                  /> */}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
