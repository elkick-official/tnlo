import { RightOutlined } from "@ant-design/icons";
import { IBreadCrumbs } from "../../types/legacyData.types";

type Props = {
  navigateToFolder: (params: string, param2: string) => void;
  breadcrumbs: IBreadCrumbs[];
};

const FoldersBreadcrumbs = ({ breadcrumbs, navigateToFolder }: Props) => {
  return (
    <div className="flex gap-5 tn-file-breadcrumbs">
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.id} className="gap-5 flex-center pb-3">
          <h4
            className="fw-500 cursor-pointer"
            onClick={() => navigateToFolder(crumb?.id, crumb?.name)}
          >
            {crumb.name}
          </h4>
          <span>{index < breadcrumbs.length - 1 && <RightOutlined />}</span>
        </div>
      ))}
    </div>
  );
};

export default FoldersBreadcrumbs;
