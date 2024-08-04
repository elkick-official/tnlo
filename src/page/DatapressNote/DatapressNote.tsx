import { TNHeader, TNPressNoteData } from "../../components";
import "./DatapressNote.css";

const DatapressNote = () => {
  return <div>
      <TNHeader children="Press Note"/>
      <section className="xx-space yy-space">
      <div className="legency-data-tab-wrap bg-tnl-white mt-0">
          <TNPressNoteData/>
      </div>
      </section>
  </div>;
};

export default DatapressNote;
