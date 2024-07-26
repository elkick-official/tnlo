import React from "react";
import { noticeFile } from "../../const/imageData";
import { dataLegencyFolder } from "../../const/data";
import "./TNFolderFiles.css";

  export const TNFolderFiles = () => {
    return(
        <>
            <div className="mt-3">
                <h3 className="pb-3 fw-500">Folders</h3>
                <hr className="opacity-03"/>
                <div className="data-legency-folder-view grid mt-5">
                    {dataLegencyFolder.map((dlFolderItem, dlFolderIndex) => {
                        return(
                            <>
                                <div  className="data-legency-folder-box flex justify-end flex-col transition-smooth" key={dlFolderIndex}
                                >
                                    <h4 className="fw-500 h5">{dlFolderItem.name}</h4>
                                    <h6 className="fw-500 h6 mb-0">{dlFolderItem.files}</h6>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="mt-7">
                <h3 className="pb-3 fw-500">Files</h3>
                <hr className="opacity-03"/>
                <div className="data-legency-files-view grid mt-5">
                        <div className="data-legency-folder-box transition-smooth">
                            <h4 className="fw-500 h5 mb-3">File 001</h4>
                            <img src={noticeFile} alt="notice-pdf" className="img-fluid" />
                        </div>
                        <div className="data-legency-folder-box transition-smooth">
                            <h4 className="fw-500 h5 mb-3">File 002</h4>
                            <img src={noticeFile} alt="notice-pdf" className="img-fluid" />
                        </div>
                </div>
            </div>
        </>
    )
}