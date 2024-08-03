import { FolderOpenOutlined, MoreOutlined } from "@ant-design/icons";
import TNFile from "./TNFile";
import Loader from "../common/Loader/Loader";

interface TNFoldersProps {
  //   currentFolders :
  //   navigateToFolder
}

const TNFolders = ({ currentFolders, navigateToFolder, isFetchFiles }: any) => {
  return (
    <div className="mt-3">
      <h4 className="fw-500">Folders</h4>

      {isFetchFiles ? (
        <div className="px-4 py-4 flex items-center justify-center">
          <Loader />
        </div>
      ) : !currentFolders?.length ? (
        <div className="px-4 py-4 flex items-center justify-center">
          <span>No Folders Available</span>
        </div>
      ) : (
        <div className="data-legency-folder-view grid mt-5">
          {currentFolders.map((data: any, index: number) => {
            return (
              <>
                <TNFile
                  key={index}
                  type={"folder"}
                  data={{
                    name: data?.folderName || "",
                    id: data?.folderId || "",
                  }}
                  navigateToFolder={navigateToFolder}
                />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TNFolders;
