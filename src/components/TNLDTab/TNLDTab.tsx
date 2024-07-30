import { Tabs, TabsProps } from "antd";
import { TNFolderFiles } from "../TNFolderFiles/TNFolderFiles";
import { IBreadCrumbs, IFolder } from "../../types/legacyData.types";
import "./TNLDTab.css";

interface Props {
  currentFolders: IFolder[];
  currentFiles: IFolder[];
  breadcrumbs: IBreadCrumbs[];
  navigateToFolder: (params: string, param2: string) => void;
}
export const TNLDTab = ({
  currentFolders,
  currentFiles,
  breadcrumbs,
  navigateToFolder,
}: Props) => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "View Grid",
      children: (
        <TNFolderFiles
          currentFolders={currentFolders}
          currentFiles={currentFiles}
          breadcrumbs={breadcrumbs}
          navigateToFolder={navigateToFolder}
        />
      ),
    },
    {
      key: "2",
      label: "View List",
      children: "Coming soon",
    },
  ];

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        className="tn-legacy-data-tabs"
      />
    </>
  );
};
