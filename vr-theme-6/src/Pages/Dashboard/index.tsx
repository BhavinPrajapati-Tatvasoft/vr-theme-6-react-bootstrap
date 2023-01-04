import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="main-content">
        <h3 className="page-title">Dashboard</h3>
      </div>
    </div>
  );
};
export default Dashboard;
