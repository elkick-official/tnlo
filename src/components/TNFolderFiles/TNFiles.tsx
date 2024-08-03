import Loader from "../common/Loader/Loader";
import TNFile from "./TNFile";

const TNFiles = ({ currentFiles, handlePreviewFile, isFetchFiles }: any) => {
  return (
    <div className="mt-7">
      <h4 className="fw-500">Files</h4>

      {isFetchFiles ? (
        <div className="px-4 py-4 flex items-center justify-center">
          <Loader />
        </div>
      ) : !currentFiles?.length ? (
        <div className="px-4 py-4 flex items-center justify-center">
          <span>No Files Available</span>
        </div>
      ) : (
        <div className="data-legency-folder-view grid mt-5">
          {currentFiles.map((data: any, index: any) => {
            console.log({ data });
            return (
              <>
                <TNFile
                  key={index}
                  type={"file"}
                  data={{
                    name: data?.fileName || "",
                    id: data?.fileId || "",
                    preview: data?.sysFileName || "",
                  }}
                  navigateToFolder={() => {}}
                  handlePreviewFile={handlePreviewFile}
                />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TNFiles;
