import { TNDynamicFormsTab, TNHeader } from "../../components";
import "./DynamicForms.css";

const DynamicForms = () => {
  return (
    <div>
      <TNHeader children="Dynamic Forms" />
      <section className="xx-space yy-space">
        <div className="legency-data-tab-wrap bg-tnl-white mt-0">
          <TNDynamicFormsTab />
        </div>
      </section>
    </div>
  );
};

export default DynamicForms;
