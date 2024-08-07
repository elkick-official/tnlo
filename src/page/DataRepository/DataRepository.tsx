import { Breadcrumb } from "antd";
import { TNDRNoteTab, TNHeader } from "../../components";
import "./DataRepository.css";

const DataRepository = () => {
  return (
    <div>
      <TNHeader children="Data Repository / Notes" />
      <section className="xx-space yy-space">
        <div className="legency-data-tab-wrap bg-tnl-white mt-0">
          <TNDRNoteTab />
        </div>
      </section>
    </div>
  );
};

export default DataRepository;
