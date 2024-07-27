import { TNHeader } from "../../components";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <TNHeader children="Dashboard" />
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

export default Dashboard;
