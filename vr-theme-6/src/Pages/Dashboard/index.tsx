import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="main-content">
          <h3 className="page-title">Dashboard</h3>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
