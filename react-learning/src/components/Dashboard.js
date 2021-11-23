import Timeline from "./Timeline";
import Dashboardteam from "./Dashboardteam";
import DashboardRecentPosts from "./DashboardRecentPosts";
import { Link } from "react-router-dom";
import Walkthrough from "./Walkthrough";

function Dashboard() {
  return (
    <div className="Dashboardcontent">
      <Timeline />
      <Dashboardteam />
      <DashboardRecentPosts />
      {/* <Walkthrough title="Dashboard" /> */}
    </div>
  );
}

export default Dashboard;
