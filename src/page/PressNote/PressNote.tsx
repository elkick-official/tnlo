import { TNHeader } from "../../components";
import "./PressNote.css";

const PressNote = ({ isSet }: any) => {
  return (
    <div>
      <TNHeader children={isSet ? "Settings" : "Press Note"} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        Coming Soon
      </div>
    </div>
  );
};

export default PressNote;
